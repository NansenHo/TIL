# 単体テストマニュアル 3 - Vitest 紹介

## Vitest とは

Vitest は、特にパフォーマンスの最適化や最新の JavaScript 機能への対応において、Jest に比べて、よりモダンなテストフレームワークです。

### なぜ Vitest を選択

1. Vite ベースの設計

   Vite 上に構築されており、Vite の強力なビルドと最適化機能を活用しています。

   Vite の高速なホットリロード技術を利用し、テストの起動と実行が非常に速いです。

   この特徴により、特に大規模なプロジェクトにおいて、テストの実行速度が大幅に向上します。

   開発者にとって使いやすく、効率的なテスト体験を提供することで、プロジェクトの品質向上に貢献しています。

2. ES6 との互換性

   ES モジュールを含む、最新の JavaScript 機能を完全にサポートしています。

3. 設定不要のゼロコンフィグレーション

   Vitest は追加設定なしで、そのまま使用できます。

   Jest は設定やサードパーティのライブラリ（@types/jest, ts-jest など）の追加が必要です。

   また、Vitest は Vite の設定を利用できるので、Vite を使ったプロジェクトにはとても便利です。

4. Jest から Vitest への移行の容易性

   Jest の API 名と比較して、グローバル API や `vi` の API レベル以外に、大きな変更がないため、Vitest への移行は容易です。

5. コミュニティの活動度

   [Vitest](https://github.com/vitest-dev/vitest) のコミュニティ活動は [Jest](https://github.com/jestjs/jest) に比べて活発です。

## Vitest コマンド

現在のディレクトリで `vitest` コマンドを起動します。

開発環境では自動的にウォッチ（`watch`）モードに入り、CI 環境では自動的に実行（`run`）モードになります。

`vitest` を実行する際に、パラメーターを追加することでテストファイルのフィルタリングができます。

```bash
# api.spec.ts のみをテストします
vitest api
```

## Vitest の基本的な API の紹介

### [`test` と `it`](https://vitest.dev/api/#test)

`test` は `it` のエイリアスです。

```js
import { test, it } from "vitest";

describe("", () => {
  it("should do something", () => {});
  it("should do something", () => {});
});

test("should do something", () => {});
```

各テストケースでは一つの概念のみをテストして、なるべく assertion の数を少なくするようにしてください。

単体テストの安定性と保守性を確保するために、テストケース間では相互に呼び出しを行うべきではなく、実行の順序に依存してもいけません。

悪い例：`testCase2` が `testCase1` の実行結果に依存し、その結果を `testCase2` の入力として使用する場合。

テストの構造を整理し、より読みやすくするために、

- `describe` を使用してテストをグループ化する場合は `it` でテストケースを記述し、
- `describe` を使用しない場合は `test` を用いてテストケースを作成します。

### [`describe`](https://vitest.dev/api/#describe) テストスイート

`describe` を使用すると、現在のコンテキストで新しいスイートを定義できます。

これは関連するテストやベンチマーク、その他のネストされたスイートのセットです。

`describe` スイートをよく使用して、テストやベンチマークを整理して、レポートをより明確にすることがとても大事です。

`describe` ブロックをネストすることもできます。

```js
describe("useUsers", () => {
  beforeEach(() => {
    console.log("beforeEach");
  });

  describe("successful cases", () => {
    beforeEach(() => {
      console.log("beforeEach");
    });

    it("handles successful use user when the users have email", async () => {});

    it("handles successful use user when the users haven't email", async () => {});
  });

  describe("failed cases", () => {
    beforeEach(() => {
      console.log("beforeEach");
    });

    it("handles use user failures", async () => {});

    it("handles use user failures where the listUsersInGroup function returns without a Users attribute.", async () => {});

    it("handles use user failures when the allGroups is [] and the fltGroup is ''", async () => {});
  });
});
```

### [`expect`](https://vitest.dev/api/expect.html#expect)

`expect` はアサーションを作成するために使用されます。

### [`toBe`](https://vitest.dev/api/expect.html#tobe) と [`toEqual`](https://vitest.dev/api/expect.html#toequal)

- `toBe` はプリミティブや同じ参照を共有するオブジェクトに使用されます。

  `toBe` は**プリミティブが等しい**か、または **オブジェクトが同じ参照を共有している** ことをアサートするために使用できます。

  > JavaScript では、プリミティブ（原始値、原始データ型）はオブジェクトではなく、メソッドやプロパティを持たないデータです。
  >
  > 7 つのプリミティブデータ型があります：`null`、`undefined`、`boolean`、`number`、`string`、`symbol`、`BigInt`。

  `toBe` は `===` と同じです。

- `toEqual` は同じ参照を共有しない値/オブジェクト（`Error` オブジェクトを除く）に使用されます。

  オブジェクトが同じではなくても、**構造が同一であるかどうか**を確認したい場合は `toEqual` を使用できます。

  `toEqual` は **実際の値が受け取った値と等しい**か、または**オブジェクトであれば同じ構造を持つ（再帰的に比較する）**ことをアサートします。

  > `Error` オブジェクトに対しては深い等価性は行われません。
  >
  > 何かがスローされたかどうかをテストするには、[`toThrowError`](https://vitest.dev/api/expect.html#tothrowerror) アサーションを使用してください。

```js
import { test, expect } from "vitest";

test("toBe", () => {
  expect(1).toBe(1);
});

test("toEqual", () => {
  const user = {
    name: "nansen",
  };
  expect(user).toEqual({
    name: "nansen",
  });
});
```

### [`toBeTruthy`](https://vitest.dev/api/expect.html#tobetruthy) と [`toBeFalsy`](https://vitest.dev/api/expect.html#tobefalsy)

`toBeTruthy` は値が `Boolean` に変換されたときに真であることをアサートします。

`toBeFalsy` は値が `Boolean` に変換されたときに偽であることをアサートします。

> JavaScript では、`false`、`0`、`-0`、`0n`、`""`（空文字列）、`null`、`undefined`、`NaN` を除くすべての値が `truthy` と評価されます。

```js
import { expect, test } from "vitest";

test("toBeTruthy", () => {
  expect(1).toBeTruthy();
});
```

### [`toContain`](https://vitest.dev/api/expect.html#tocontain)

`toContain` は、実際の値が配列内にあるかどうかをアサートします。

また、ある文字列が別の文字列の一部文字列であるかどうかもチェックできます。

```js
import { expect, it } from "vitest";

const item1 = { name: "nansen" };
const item2 = { name: "erica" };
const list = [item1, item2];

it("toContain", () => {
  expect(list).toContain(item1);
});
```

### [`toThrowError` と `toThrow`](https://vitest.dev/api/expect.html#tothrowerror)

`toThrow` は `toThrowError` のエイリアスです。

`toThrowError` は、関数が呼び出された際にエラーを投げるかどうかをアサートします。

特定のエラーが投げられるかをテストするために、オプショナルな引数を提供することができます：

- 正規表現：エラーメッセージがパターンに一致する。
- 文字列：エラーメッセージにその部分文字列が含まれている。

```js
import { expect, test } from "vitest";

function sayHi(name) {
  if (typeof name !== "string") {
    throw new Error("wrong name");
  }
  return `Hi, ${name}!`;
}

test("toThrow", () => {
  expect(() => sayHi(111)).toThrow("wrong");
});
```

### [`beforeEach`](https://vitest.dev/api/#beforeeach) と [`beforeAll`](https://vitest.dev/api/#beforeall) と [`afterEach`](https://vitest.dev/api/#aftereach) と [`afterAll`](https://vitest.dev/api/#afterall)

- `beforeEach` は、現在のコンテキストで実行される各テストの前に一度呼び出されるコールバックを登録します。

  `test()` が呼び出される回数と同じ回数、`beforeEach()` が呼び出されます。

- `beforeAll` は、現在のテストスイートのすべてのテストケースが実行される前に一度だけ呼び出されるコールバック関数を設定するためのものです。

  関数がプロミスを返す場合、Vitest はそのプロミスが解決されるまで、テストの実行を待機します。

- `afterEach` は、各テストが完了した後に実行されるコールバックを登録します。

- `afterAll` は、現在のコンテキストでのすべてのテストが完了した後に一度だけ呼び出されるコールバックを登録します。

  関数がプロミスを返す場合、Vitest はプロミスが解決するまで待ちます。

```js
import {
  describe,
  it,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
} from "vitest";

describe("", () => {
  beforeEach(async () => {
    // 各テスト実行前にいくつかのテストデータを追加
    await addUser({ name: "John" });
  });

  afterEach(async () => {
    // 各テストが完了した後にテストデータをクリアします。
    await clearTestingData();
  });

  beforeAll(async () => {
    // すべてのテストが実行される前に一度呼び出されます。
    await mockSomething();
  });

  afterAll(() => {
    // このメソッドはすべてのテストが実行された後に呼び出されます。
    resetGlobalData();
  });

  it("", () => {});
  it("", () => {});
  it("", () => {});
});
```

以下のように、`beforeEach` と `beforeAll` は**クリーンアップ関数**をオプションとして受け入れることができます。これは `afterEach` や `afterAll` と同じです。

```js
import { beforeEach, beforeAll } from "vitest";

beforeEach(async () => {
  // 各テストが実行される前に一度呼び出されます。
  await prepareSomething();

  // クリーンアップ関数、
  // 各テスト実行後に一度呼び出されます。
  return async () => {
    await resetSomething();
  };
});

beforeAll(async () => {
  // すべてのテストが実行される前に一度呼び出されます。
  await startMocking();

  // クリーンアップ関数、
  // すべてのテスト実行後に一度呼び出されます。
  return async () => {
    await stopMocking();
  };
});
```

以下のコードでは、各部分の実行順序を考えてください。解答は記事の最後にあります。

```ts
import {
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
  it,
} from "vitest";

beforeAll(() => {
  console.log("beforeAll");
});

beforeEach(() => {
  console.log("beforeEach");
});

it("", () => {
  console.log("it");
});

describe("nested", () => {
  beforeEach(() => {
    console.log("nested beforeEach");
  });
  it("nested it", () => {
    console.log("nested it");
  });
  afterEach(() => {
    console.log("nested afterEach");
  });
});

afterEach(() => {
  console.log("afterEach");
});

afterAll(() => {
  console.log("afterAll");
});
```

### `only`、`skip`、`todo` フィルター

`only`、`skip`、`todo` を使用して、実行するテストファイルをフィルタリングできます。

- `only` は指定された部分のコードのみを実行するように設定します。

  ```ts
  test.only("", () => {});
  bench.only("", () => {});
  describe.only("", () => {});
  ```

- `skip` は指定された部分のコードを実行しないように設定します。

  ```ts
  test.skip("", () => {});
  bench.skip("", () => {});
  describe.skip("", () => {});
  ```

- `todo` は指定された部分のコードを後で実装するように保留します。

  テストレポートにはエントリが表示され、実行する必要があるテストの数を知ることができます。

  ```ts
  test.todo("", () => {});
  bench.todo("", () => {});
  describe.todo("", () => {});
  ```

## 解答

```js
import {
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
  it,
} from "vitest";

// 1
beforeAll(() => {
  console.log("beforeAll");
});

// 2 5
beforeEach(() => {
  console.log("beforeEach");
});

// 3
it("", () => {
  console.log("it");
});

describe("nested", () => {
  // 6
  beforeEach(() => {
    console.log("nested beforeEach");
  });
  // 7
  it("nested it", () => {
    console.log("nested it");
  });
  // 8
  afterEach(() => {
    console.log("nested afterEach");
  });
});

// 4 9
afterEach(() => {
  console.log("afterEach");
});

// 10
afterAll(() => {
  console.log("afterAll");
});
```
