# 通过 `class` 间接输入

比如现在我们有以下代码：

```ts
// doubleUserAge.ts

export function doubleUserAge(): number {
  const user = new User();

  return user.age * 2;
}
```

```ts
// User.ts

export class User {
  age: number = 18;
  name: string = "nansen";

  getAge() {
    return this.age;
  }
}
```

## mock class 中的属性

如果需要测试 `doubleUserAge` 功能，由于 `doubleUserAge` 里只用到了 `user.age` 属性，所以我们可以直接 mock 一个 class `User`，给定一个 `age`。

```ts
// doubleUserAge.spec.ts

vi.mock("./User", () => {
  return {
    User: class User {
      age: number = 2;
    },
  };
});

describe("通过 class 间接输入", () => {
  it("属性", () => {
    const r = doubleUserAge();
    expect(r).toBe(4);
  });
});
```

## mock class 中的方法

如果现在 `doubleUserAge` 不再使用 `user.age` 属性，而是使用 `user.getAge` 方法来实现。

```ts
// doubleUserAge.ts

export function doubleUserAge(): number {
  const user = new User();

  return user.getAge() * 2;
}
```

那我们有两种处理方式来 mock `getAge` 方法。

### 方式一

```ts
// doubleUserAge.spec.ts

vi.mock("./User", () => {
  return {
    User: class User {
      getAge() {
        return 2;
      }
    },
  };
});

describe("通过 class 间接输入", () => {
  it("方法", () => {
    const r = doubleUserAge();
    expect(r).toBe(4);
  });
});
```

### 方式二

```ts
// doubleUserAge.spec.ts

// highlight-next-line
import { User } from "./User";

describe("通过 class 间接输入", () => {
  it("方法", () => {
    // highlight-next-line
    User.prototype.getAge = () => 2;

    const r = doubleUserAge();
    expect(r).toBe(4);
  });
});
```
