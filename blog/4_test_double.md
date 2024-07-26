# 単体テストマニュアル 4 - テストダブル

外部サービスや状態などに依存する場合は、実際の実装にテストダブル代わってを使用してからテストを行う必要があります。

単体テストは、**外部環境の影響を受けずに**繰り返し実行可能であることを確保する必要があります。

## テストダブルのタイプ

テストダブルには以下の 5 種類があります：

- **ダミーオブジェクト (Dummy Object)**

  ダミーオブジェクトは、実際にはプレースホルダーです。

  コード例：

  ```ts
  // sendEmail.ts
  function sendEmail(message: Message, recipient: Recipient) {
    console.log(message.subject);
    console.log(message.body);
  }
  ```

  ```ts
  // sendEmail.spec.ts
  test("dummy", () => {
    const message: Message = {
      subject: "heihei",
      body: "hahaha",
    };
    const dummyRecipient = {} as Recipient;

    sendEmail(message, dummyRecipient);
  });
  ```

  > 注意
  >
  > ダミーオブジェクトの命名は、可能な限り「dummy」で始まるようにすることで、コードの可読性が向上します。

- **スタブ (Stub)**

  Stub は主に間接的な入力時に使用され、外部依存関係を代替し、テスト環境を制御し、テスト対象を管理します。

  このテスト対象のうち、私たちが関心を持っているのはその一部分だけであり、オブジェクト全体をテストする必要はありません。

- **スパイ (Spy)**

  Spy は主に特定のオブジェクトへの呼び出しを監視および記録するために使用されます。

  これはそのオブジェクトの振る舞いに影響を与えません。

  Vitest で提供されている Spy の実装 API は `vi.spyOn(object, method, accessType)` です。

- **モック (Mock)**

  モックはスタブとスパイの組み合わせです。

  > Mock と Stub の違い
  >
  > 単体テストにおいて
  >
  > 1. スタブは間接的な入力を制御する方法であり、間接的な入力の実際の実装を置き換えます。スタブは値を返すだけでよいです。
  >
  > ```ts
  > // スタブ
  > vi.mock("packageName", () => {
  >   return {
  >     functionName: () => 2,
  >   };
  > });
  > ```
  >
  > 2. モックはスタブに比べて、交流情報の記録と検証の機能が追加されています。
  >
  > ```ts
  > // モック
  > vi.mock("packageName", () => {
  >   return {
  >     functionName: vi.fn(() => 2),
  >   };
  > });
  > ```

  > テストフレームワークの API では、実際にモック、スタブ、スパイの境界は非常に曖昧です。
  >
  > しかし、使用する際には、どのテストダブルタイプを使っているかを明確に理解しておく必要があります。

- **フェイク (Fake)**

  Fake は複雑な実際のオブジェクトの振る舞いを模倣するために使用され、テスト対象の簡略化された完全な実装です。

  > Stub & Mock と Fake の違い：
  >
  > - Stub と Mock は通常、完全な実装を提供することなく、テスト中の特定の状態や行動の検証に使用されます。
  > - Fake は実際に機能する簡略化された実装を提供しますが、特定のインタラクションの詳細には焦点を当てません。

## Vitest において、プログラムの間接入力を処理する

### 直接入力と間接入力との違い

- 直接にパラメータを通じてデータを受け取り、計算を行う方法を直接入力と言います。

- 間接入力とは、他のモジュール、関数、グローバルオブジェクトなど**引数以外の方法**でデータが入力されることを指します。

  これにより、プログラムの動作が外部の状態に依存し、その部分の**予測不可能性が高まる**ため、特にテストの際にはこれらの影響を管理する必要があります。

> 「可预测」とは、特定の内容を入力したときに、毎回予測可能な特定の出力が得られることを指します。
>
> もしテスト対象システム (SUT) 自体が安定しておらず、予測不可能な場合、例えばバックエンド API、第三者サービス、データベースなどがそうである場合、それらを予測可能なものにするためにテストダブルを使用する必要があります。

### 他のモジュールとライブラリーがエクスポートした関数を処理する

`vi.mocked` で処理する場合のコード例：

```ts
import { userAge } from "./user";

// vi.mock() にモジュールのパスを入れる
vi.mock("./user");

describe("", () => {
  it("* 2", () => {
    // vi.mocked() にモックしたい関数を入れる
    vi.mocked(userAge).mockReturnValue(2);

    const result = doubleUserAge();
    expect(result).toBe(4);
  });
});
```

```ts
import { useAuthStore } from "@/store/auth-state";

// vi.mock() にモジュールのパスを入れる
vi.mock("@/store/auth-state");

test("", () => {
  mockSession();
  // ...
});

function mockSession(success = true) {
  const returnValue = success
    ? {
        credentials: {
          accessKeyId: "......",
          secretAccessKey: "......",
          sessionToken: "......",
          expiration: new Date(),
        },
      }
    : null;

  // vi.mocked() にモックしたい関数を入れる
  vi.mocked(useAuthStore).mockImplementation(() => returnValue);
}
```

```ts
// vi.mock() にライブラリー名を入れる
vi.mock("axios");

test("第三方库/模块: Axios", async () => {
  // vi.mocked() にモックしたい関数を入れる
  vi.mocked(axios).mockResolveValue({ name: "userName", age: 2 });

  const result = await doubleUserAge();
  expect(result).toBe(4);
});
```

```ts
import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";

// vi.mock() にライブラリー名を入れる
vi.mock("@aws-sdk/client-cognito-identity-provider");

test("", () => {
  mockCognitoIdentityProvider();
});

function mockCognitoIdentityProvider(success = true) {
  let mockAdminSetUserPassword;
  let mockAdminRemoveUserFromGroup;
  let mockAdminAddUserFromGroup;
  if (success) {
    mockAdminSetUserPassword = vi.fn().mockResolvedValue({});
    mockAdminRemoveUserFromGroup = vi.fn().mockResolvedValue({});
    mockAdminAddUserFromGroup = vi.fn().mockResolvedValue({});
  } else {
    mockAdminSetUserPassword = vi.fn().mockRejectedValue(new Error());
    mockAdminRemoveUserFromGroup = vi.fn().mockRejectedValue(new Error());
    mockAdminAddUserFromGroup = vi.fn().mockRejectedValue(new Error());
  }

  const mockReturn = {
    adminSetUserPassword: mockAdminSetUserPassword,
    adminAddUserToGroup: mockAdminRemoveUserFromGroup,
    adminRemoveUserFromGroup: mockAdminRemoveUserFromGroup,
  } as Partial<CognitoIdentityProvider>;

  // vi.mocked() にモックしたい関数を入れる
  // デフォルトでは、これは TypeScript に対して最初のレベルの値のみがモックされていると認識させます。
  // でも、{ deep: true } を TypeScript に第二引数として渡すことができ、それによってオブジェクト全体がモックである（実際にそうである場合）と伝えることができます。
  vi.mocked(CognitoIdentityProvider, true).mockImplementation(
    () => mockReturn as CognitoIdentityProvider
  );
}
```

`vi.mock()` で処理する場合のコード例：

`vi.mock()` を直接使用すると、モックはグローバルに有効になり、自動的に最上部に昇格します。

```ts
import { vi, it, expect } from vitest

// 自動的に最上部に昇格します。
console.log(userAge()) // 2

vi.mock('./user', () => {
  return {
    userAge: () => 2, // 実際の userAge 関数の実装を userAge: () => 2 で置き換えました。
  }
})

it('* 2', () => {
  const result = doubleUserAge()
  expect(result).toBe(4)
})

it('other', () => {
  // グローバルに有効になります。
  console.log(userAge()); // 2
})
```

### 環境変数を処理する

`vi.stubEnv(env, val)` を使用して環境変数を変更し、その後 `vi.unstubAllEnvs()` を使用して環境変数を元に戻します。

```ts
it("vi.stubEnv", () => {
  vi.stubEnv("USER_AGE", 2);

  const result = doubleUserAge();

  expect(result).toBe(4);
});

afterEach(() => {
  vi.unstubAllEnvs();
});
```

### グローバル変数を処理する

`vi.stubGlobal(name, val)` を使用してそのグローバル変数をモックすることができます。

たとえば、現在第三者のライブラリがグローバルに `someone` オブジェクトをマウントしており、そのオブジェクトには `age` 属性があります。

この場合、`vi.stubGlobal(name, val)` を使用してそのグローバル変数をモックすることができます。

```ts
it("double user age", () => {
  vi.stubGlobal("someone", {
    age: 2,
  });

  const result = doubleUserAge();

  expect(result).toBe(4);
});
```

`window.innerHeight` のようなグローバル変数のモックも同様です。

```ts
it("double innerHeight", () => {
  vi.stubGlobal("innerHeight", 100);

  const result = doubleInnerHeight();

  expect(result).toBe(200);
});
```

## 直接入力以外のモックすべきもの

### `alert` と `console` を処理する

```ts
beforeAll(() => {
  global.alert = vi.fn();
});

test("", () => {
  // ...
  expect(alert).toHaveBeenCalledWith("message");
});
```

```ts
const mockConsoleError = vi
  .spyOn(console, "error")
  .mockImplementation(() => undefined);

test("", () => {
  // ...
  expect(mockConsoleError).toHaveBeenCalled();
});
```

### `Math.random()` を処理する

```ts
vi.spyOn(Math, "random").mockImplementation(() => 0.2);
```

### 日付を処理する

日付は予測不可能です。

テスト対象システム (SUT) に含まれる日付を安定かつ予測可能にするために、

この時、`vi.setSystemTime(date)` API を使用して日付をスタブすることができます。

コード例：

```ts
// テスト対象システム (SUT)
export function checkSunday(): string {
  const today = new Date();

  if (today.getDay() === 0) {
    return "happy";
  } else {
    return "sad";
  }
}
```

```ts
// テストコード
beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

test("should be happy when it's Sunday", () => {
  vi.setSystemTime(new Date(2024, 1, 14));

  const result = checkSunday();

  expect(result).toBe("happy");
});
```
