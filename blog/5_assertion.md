# 検証

## パラメータ化検証

パラメータ化検証とは、複数のテストケースで同じテストロジックを再利用する方法を指します。

### パラメータ化検証が解決する問題

たとえば、以下の `emailValidator` 関数をテストする場合：

```ts
export function emailValidator(email: string): boolean {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
```

このようなテストコードを書くことが考えられます：

```ts
describe("emailValidator", () => {
  it("should return true for a valid email", () => {
    const email = "valid-email@example.com";
    expect(emailValidator(email)).toBe(true);
  });

  it("should return false for a invalid email without domain extension", () => {
    const email = "valid-email@example";
    expect(emailValidator(email)).toBe(false);
  });

  it("should return false for a invalid email with extra dot at the end", () => {
    const email = "valid-email@example.";
    expect(emailValidator(email)).toBe(false);
  });

  it("should return false for a invalid email with missing '@'", () => {
    const email = "valid-email.example.com";
    expect(emailValidator(email)).toBe(false);
  });

  // ... ...
});
```

上記のすべてのテストケースは同じロジックを使用しており、入力と出力だけが異なります。

### パラメータ化検証 (Object) を使う

Vitest が提供する `it.each` API を使用して処理することができます。

これにより、複数の入力値と出力値に対して同じテストロジックを繰り返し実行することが容易になります。

テストケースの失敗を迅速に特定するためには、説明情報にプレースホルダーを使用することが重要です。

これにより、どのテストケースが失敗したかを容易に識別できます。

```ts
describe("emailValidator", () => {
  it.each([
    { email: "valid-email@example.com", expected: true },
    { email: "valid-email@example", expected: false },
    { email: "valid-email@example.", expected: false },
    { email: "valid-email.example.com", expected: false },
  ])(
    "should return $email when validating $expected",
    ({ email, excepted }) => {
      expect(emailValidator(email).toBe(excepted));
    }
  );
});
```

オブジェクトを使用して入力と出力を構築する場合、プレースホルダーとして `$parameterName` の形式を使用することができます。

> オブジェクトを使用する方法は可読性が高くなります。

## 重重複する検証をカプセル化する

重複する検証文をなるべく関数にカプセル化して、理解しやすい名前をその関数に付けることが望ましいです。

コード例：

```ts
function assertCognito(
  cognito: CognitoIdentityProvider,
  isListUsersCalled = true
) {
  const callArgs = {
    UserPoolId,
  };

  if (isListUsersCalled) {
    expect(cognito.listUsers).toHaveBeenCalledWith(callArgs);
  } else {
    expect(cognito.listUsers).not.toHaveBeenCalledWith(callArgs);
  }

  expect(cognito.listUsersInGroup).not.toHaveBeenCalledWith({
    UserPoolId,
    GroupName: "admin",
  });
  expect(cognito.listUsersInGroup).not.toHaveBeenCalledWith({
    UserPoolId,
    GroupName: "flt",
  });
}
```
