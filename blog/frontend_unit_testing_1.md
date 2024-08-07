# フロントエンド単体テスト勉強会 - 第一回

> この文章が役に立つと思われる方は、ぜひ [Github リポジトリ](https://github.com/NansenHo/TIL)に ⭐ をつけてください！
>
> また、この文章は私の[ブログ](https://til-nansenho.netlify.app/blog/frontend_unit_testing_1)にも掲載されています。

![frontend-test.001.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3515257/6fb3b9fd-40d1-772d-dfad-37d423661d5d.jpeg)

## テストファイル命名規則

テストファイルの命名は通常

1. `*.spec.ts`（おすすめ）
2. `*.unit.ts`
3. `*.test.ts`

とされています。

> `*.test.ts` は比較的古い命名方法です。

> 最もよく使われるのは `*.spec.ts` で、おすすめです。

命名規則に従うことが重要です。

なぜなら、多くのライブラリやツールは `**/*.spec.ts` のパターンでテストファイルを識別するためです。

## テストを書くメリット

1. コードのリファクタリング

   コードは家のようなもので、定期的にメンテナンスしないとすぐに老朽化（ろうきゅうか）します。

   プロジェクトにおいて、常にコードをリファクタリングすることは非常に重要です。

   しかし、リファクタリングは新しいバグを生み出すリスクがあり、多くの人がそれをためらいます。

   テストがあれば、リファクタリングを安心して行うことができます。

   古い機能に新しいバグが導入された場合、すぐに知ることができます。

2. 単体テストはプログラム設計を逆向きに改善します

   プログラム設計が悪い場合、単体テストも書きにくくなります。

   単体テストを書くためには、プログラム設計も良好である必要があります。

   プログラム設計には以下のような要素が必要です：

   1. 単一責任原則
   2. 高い凝集性（ぎょうしゅうせい）
   3. 低い結合度

   これらが欠けていると、単体テストを書くことは難しくなります。

3. 単体テストは「生きたドキュメント」

   単体テストは、**実行可能なドキュメント**です。

   新しいメンバーを迎え入れる際に、単体テストがあれば、彼らに一から教える必要はありません。

4. 他人のコードのチェック

   同僚が新機能を追加するかバグを修正するブランチを提出した場合、そのコードが既存の機能に影響を与えていないかどうかをどのように確認しますか？

   以前のすべての機能を一つ一つ確認することは不可能です。

   なので、以前のすべての機能に対してテストを実行する必要があります。

5. 長期的に見ると開発時間の節約につながります

   終わりのない重複する手動テストを自動化します。

6. バグの早期発見

7. ... ...

## 単位レベルの機能テスト

単体テストは**単位レベルの機能テスト**です。

### 伝統的な単体テストの問題点

伝統的な単体テストでは、関数を単位としてテストします。

1. 私的なメソッドとエクスポートされていない関数

   エクスポートされていない場合、テストが困難になります。

   エクスポートすると、モジュールのカプセル化に影響します。

   結果として、これらの私的なメソッドはテストされなくなることが多いです。

2. 関数ごとにテストを行う場合、後にロジックの構造を調整する必要が生じた場合、テストの構造も変更する必要があります。

   これにより、機能のメンテナンスに加えて、テストのメンテナンスも必要になります。

### 機能を単位として

![frontend-test.012.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3515257/beb4fc64-c889-4231-bba7-826d815a73bc.jpeg)

> **単位レベルの機能テスト** は [Test Driven Development: By Example](https://www.oreilly.com/library/view/test-driven-development/0321146530/) に由来します。

正しいアプローチは、機能を単位として単体テストを行うことです。

各関数に対して単体テストを書くのではなく、**一つの機能を単位として**テストを書きます。

システムは様々な機能で構成されており、機能を単位としてテストすることで、具体的な機能実装のロジック構造を調整しても、テストを変更する必要がなくなります。

これにより、私的なメソッドに対するテストも不要になります。

機能を単位とした単体テストはより堅牢（けんろう）です。

> 一つの機能は複数の関数で構成されることも、一つの関数で構成されることもあります。

## 単体テストの書き方

### 単体テストの書き方には 3 つのアプローチがあります

1. `機能を書く` ==> `手動で確認/デバッグ` ==> `テストを書き、自動化で確認/デバッグ`
2. `機能を書く` ==> `テストを書き、自動化で確認/デバッグ` :star:
3. `テストを書き、自動化で確認/デバッグ` ==> `機能を書く` :star::star::star:

最初の方法は最も苦痛（くつう）であり、テストに対する嫌悪感（けんおかん）を引き起こす可能性があります。

2 番目の方法では、手動での確認/デバッグを自動化された確認/デバッグで置き換えます。

**3 番目の方法は TDD であり、最も推奨される方法です。**

### TDD の 3 ステップ

![frontend-test.013.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3515257/6ed679f2-5da5-584f-77ef-6e12101c3b23.jpeg)

1. **テストを書く（まだ通過できない）**

   これにより、要件を明確に理解することができます。

   テストを書くことで、プログラムの外部インターフェースを設計していることにもなります。

2. **テストを通過させるためのビジネスコードを書く**

   テストのエラーに基づいて、一歩ずつコードを書きます。

3. **リファクタリング**

> Bug を修正する時にも、必ずその Bug を再現できるテスト、または Demo を作成した次第、修正してきましょう。

## 単体テストの作成流れ

![frontend-test.019.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3515257/4be10d7c-1a8e-05cc-29c4-ef55720d6b66.jpeg)

| Steps                                  |       |                 |
| -------------------------------------- | ----- | --------------- |
| 1. **テスト用データを準備**            | given | Arrange（準備） |
| 2. **テスト対象の機能/関数を呼び出す** | when  | Act（実行）     |
| 3. **機能の出力を検証**                | then  | Assert（検証）  |
| 4. **ティアダウン**                    |       |                 |

> Arrange-Act-Assert (AAA) パターンに従う：準備（Arrange）、実行（Act）、アサート（Assert）。

第一歩と第四歩は必ずしも必要ではありませんが、第二歩と第三歩は必要です。

例えば、`getName()` をテストする時に、データの準備は必要ありません。

また、グローバルなデータに関わらない場合は、ティアダウンの必要がありません。

テスト中に、グローバルなデータやキャッシュを扱うことがあり、これらは元に戻す必要があります。これはティアダウンの役割です。

## Vitest は何

![frontend-test.020.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3515257/92d5586e-a38a-acf2-6cef-2cf01e6678ee.jpeg)

Vitest は、特にパフォーマンスの最適化や最新の JavaScript 機能への対応において、Jest に比べて、より現代的なテストフレームワークです。

### なぜ Vitest を選択

1. 高速な実行

   Vite の高速なホットリロード技術を利用し、テストの起動と実行が非常に速いです。

2. Vite ベースの設計

   Vite 上に構築されており、Vite の強力なビルドと最適化機能を活用しています。

   > この二つの特徴により、特に大規模なプロジェクトにおいて、テストの実行速度が大幅に向上します。
   >
   > 開発者にとって使いやすく、効率的なテスト体験を提供することで、プロジェクトの品質向上に貢献しています。

3. 現代的な JavaScript エコシステムとの互換性

   ES モジュールのサポートなど、最新の JavaScript 機能と完全に互換性があります。

4. 設定不要のゼロコンフィグレーション

   ほぼ追加設定なしで、使用できます。

   特に、Vitest は Vite の設定を共有できます。

   Jest は設定やサードパーティのライブラリ（`@types/jest`, `ts-jest` など）のインストールが必要です。

5. Jest からの移行容易（ようい）性

   Jest の API 名と比較して、グローバル API や `vi` の API レベル以外に大きな変更がないため、Vitest への移行は容易です。

6. コミュニティの活動度

   技術選定の際には、コミュニティの活動度も重要な指標です。

   [Vitest - Github](https://github.com/vitest-dev/vitest)

   [Jest - Github](https://github.com/jestjs/jest)

   コミットの密度（① みつど）を見ることで、コミュニティの活動度を判断できます。

## Vitest のコア API

Vitest の API は Jest や MochaJS に似ています。

### `test` と `it`

`test` のタイプ: `(name: string, fn: TestFunction, timeout?: number | TestOptions) => void`

> 必要に応じて、タイムアウト（ミリ秒単位）を指定して、終了までの待機時間を設定できます。
>
> デフォルトは 5 秒で、[testTimeout](https://vitest.dev/config/#testtimeout) で全体的に設定可能です。

`test` は `it` のエイリアスです。

```js
import { test, it } from "vitest";

test("should do something", () => {});

it("should do something", () => {});
```

> ソフトウェアエンジニアリングでは、**BDD（行動駆動開発）** は、開発者、品質保証専門家、およびソフトウェアプロジェクトの顧客代表間のコラボレーションを奨励するアジャイルなソフトウェア開発プロセスです。
>
> これは TDD から派生しました。

プロジェクトで `test` か `it` を自由に使うことができますが、両方を同時に使用しないでください。

### `describe` テストスイート

`describe` を使用すると、現在のコンテキストで新しいスイートを定義できます。

これは関連するテストやベンチマーク、その他のネストされたスイートのセットです。

スイートを使用すると、テストやベンチマークを整理して、レポートをより明確にすることができます。

```js
import { describe, expect, it } from "vitest";

describe("remove", () => {
  const user = {
    name: "nansen",
  };

  it("should remove an item", () => {
    expect(user.name).toBe("nansen");
  });

  it("should remove two items", () => {
    expect(user.name).toBe("nansen");
  });
});
```

テストやベンチマークに階層（かいそう）がある場合、`describe` ブロックをネストすることもできます。

```js
import { describe, test, it } from "vitest";

describe("", () => {
  describe("", () => {
    it("", () => {});
    it("", () => {});
  });

  describe("", () => {
    it("", () => {});
    it("", () => {});
  });
});
```

### `expect`

`expect` はアサーションを作成するために使用されます。

#### `toBe` と `toEqual`

`toBe` は **プリミティブが等しい** か、または **オブジェクトが同じ参照を共有している** ことをアサートするために使用できます。

> JavaScript では、プリミティブ（原始値、原始データ型）はオブジェクトではなく、メソッドやプロパティを持たないデータです。
>
> 7 つのプリミティブデータ型があります：`null`、`undefined`、`boolean`、`number`、`string`、`symbol`、`BigInt`。

> オブジェクト **が同じでない場合** でも、**構造が同一であるかどうか** を確認したい場合は `toEqual` を使用できます。

`toEqual` は **実際の値が受け取った値と等しい** か、または **オブジェクトであれば同じ構造を持つ（再帰的に比較する）** ことをアサートします。

> `Error` オブジェクトに対しては深い等価性は行われません。
>
> 何かがスローされたかどうかをテストするには、`toThrowError` アサーションを使用してください。

- `toBe` はプリミティブや同じ参照を共有するオブジェクトに使用されます。
- `toEqual` は同じ参照を共有しない値/オブジェクト（`Error` オブジェクトを除く）に使用されます。

```js
import { it, expect } from "vitest";

it("toBe", () => {
  // `toBe` は === と同じです
  expect(1).toBe(1);
});
```

```js
import { it, expect } from "vitest";

const user = {
  name: "nansen",
};

it("toEqual", () => {
  expect(user).toEqual({
    name: "nansen",
  });
});
```

#### `toBeTruthy` と `toBeFalsy`

`toBeTruthy` は値が `Boolean` に変換されたときに真であることをアサートします。

`toBeFalsy` は値が `Boolean` に変換されたときに偽であることをアサートします。

> JavaScript では、`truthy` 値は `Boolean` コンテキストで遭遇したときに `true` とみなされる値です。
>
> すべての値は `truthy` であり、`false`、`0`、`-0`、`0n`、`""`、`null`、`undefined`、`NaN` を除きます。

```js
import { expect, test } from "vitest";

test("toBeTruthy", () => {
  expect(1).toBeTruthy();
});
```

#### `toContain`

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

#### `toThrow` および `toThrowError`

タイプ：`(received: any) => Awaitable<void>`

`toThrowError` は `toThrow` のエイリアスです。

`toThrowError` は、関数が呼び出された際にエラーを投げるかどうかをアサートします。

特定のエラーが投げられるかをテストするために、オプショナルな引数を提供することができます：

正規表現：エラーメッセージがパターンに一致する。
文字列：エラーメッセージにその部分文字列が含まれている。

```js
import { expect, it } from "vitest";

it("toThrow", () => {
  function sayHi(name) {
    if (typeof name !== "string") {
      throw new Error("wrong name");
    }
    return `Hi, ${name}!`;
  }

  expect(() => sayHi(111)).toThrow("wrong");
});
```

### テストのセットアップと終了の API

#### `beforeEach` と `beforeAll`

タイプ: `beforeEach/beforeAll(fn: () => Awaitable<void>, timeout?: number)`

`beforeEach` は、現在のコンテキストで実行される各テストの前に一度呼び出されるコールバックを登録します。

`test()` が呼び出される回数と同じ回数、`beforeEach()` が呼び出されます。

`beforeAll` は、現在のコンテキストでのすべてのテストの実行を開始する前に一度呼び出されるコールバックを登録します。

関数がプロミスを返す場合、Vitest はテストを実行する前にプロミスが解決するまで待ちます。

オプションで、終了するまでの待ち時間を定義するタイムアウト（ミリ秒単位）を渡すことができます。

デフォルトは 5 秒です。

```js
import { beforeEach } from "vitest";

beforeEach(async () => {
  // モックのクリア
  await stopMocking();
  // 各テスト実行前にいくつかのテストデータを追加
  await addUser({ name: "John" });
});
```

`beforeEach` は、各テストごとにユーザーが追加されることを保証します。

```js
import { beforeAll } from "vitest";

beforeAll(async () => {
  // すべてのテストが実行される前に一度呼び出されます。
  await startMocking();
});
```

> `beforeEach` と `beforeAll` はオプションのクリーンアップ関数（`afterEach` / `afterAll` に相当）を受け入れます。

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

#### `afterEach` と `afterAll`

タイプ: `afterEach/afterAll(fn: () => Awaitable<void>, timeout?: number)`

`afterEach` は、現在のコンテキストのテストのうちの 1 つが完了した後に呼び出されるコールバックを登録します。

`afterAll` は、現在のコンテキストのすべてのテストが実行された後に一度呼び出されるコールバックを登録します。

関数がプロミスを返す場合、Vitest はプロミスが解決するまで続行する前に待ちます。

オプションで、終了するまでの待ち時間を定義するタイムアウト（ミリ秒単位）を渡すことができます。

デフォルトは 5 秒です。

```js
import { afterEach } from "vitest";

afterEach(async () => {
  // 各テストが完了した後にテストデータをクリアします。
  await clearTestingData();
});
```

```js
import { afterAll } from "vitest";

afterAll(async () => {
  // このメソッドはすべてのテストが実行された後に呼び出されます。
  await clearTestingData();
});
```

関数がプロミスを返す場合、Vitest はプロミスが解決するまで続行する前に待ちます。

#### セットアップとティアダウン API の呼び出し順序

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

#### それぞれを使用するタイミング

- `beforeAll`（一度だけ呼び出される）

  1. データベースに接続する場合。
  2. 一時ファイルを作成する場合。

- `afterAll`（一度だけ呼び出される）

  1. データベースから切断する場合。
  2. 一時ファイルを削除する場合。

- `beforeEach`（`test()` が呼び出される回数、その回数だけ `beforeEach` が呼び出される）

  1. ストアに新しいデータを作成する場合。
  2. ストアの状態を設定する場合。

- `afterEach`（`test()` が呼び出される回数、その回数だけ `afterEach` が呼び出される）

  1. ストア内の一時的なデータを削除する場合。
  2. ストアの状態をリセットする場合。

### フィルター

#### `only`

1. `test.only()`
2. `bench.only()`
3. `describe.only()`

#### `skip`

1. `test.skip()`
2. `bench.skip()`
3. `describe.skip()`

#### `todo`

1. `test.todo()`
2. `bench.todo()`
3. `describe.todo()`

#### Vitest CLI

実行するテストファイルのフィルターとして追加の引数を渡すことができます。例えば

```bash
# api.spec.ts のみをテストする場合

vitest api
```

`vitest watch/dev` はすべてのテストスイートを実行しますが、変更があった場合に監視して変更があった際に再実行します。

`vitest run` は、監視モードなしで一度だけ実行します。

### ソースコードで Vitest の API をより深く理解

一般的な API をより深く理解するために、自分でテストフレームワークを実装します。

実装したリポジトリ：[mini-test-runner](https://github.com/NansenHo/mini-test-runner)。
