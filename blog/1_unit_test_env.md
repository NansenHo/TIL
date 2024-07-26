# 単体テストマニュアル 1 - プロジェクトにテスト環境を構築する

## インストール Vitest

以下のコマンドで、Vitest をインストールします。

```bash
pnpm i vitest -D
# あるいは
yarn add vitest -D
# あるいは
npm i vitest -D
```

> Vitest が Develop 環境に使われるので、`-D` を必ずつけてインストールしてください。

> `pnpm` でインストールするのがおすすめです。

## `vitest.config.ts` 設定

もしプロジェクト内に `vitest.config.ts` と `vite.config.ts` が共存する場合、`vitest.config.ts` の設定が `vite.config.ts` の設定よりも優先され、上書きされます。

以下の `vitest.config.ts` ファイルを行ごとにコメントで解説します。

```ts
// `vitest/config` の `defineConfig` を使用します。
import { defineConfig } from "vitest/config";
import path from "path";

// glob パターンを利用して、テスト不要のファイルを定義します。
const defaultExclude: string[] = [
  // node_modules に含まれる .ts と .js 拡張子のファイル
  "node_modules/**/*.{ts,js}",
  // パッケージング後の成果物に含まれる .ts と .js 拡張子のファイル
  "out/**/*.{ts,js}",
  // E2Eテストとコンポーネントテストのディレクトリに含まれる .ts と .js 拡張子のファイル
  "tests/**/*.{ts,js}",
  // 設定ファイル
  "**/*.config.{ts,js}",
  // story に関するファイル
  "**/*.stories.{ts,js}",
  ".storybook/*.{ts,js}",
  // .next に含まれる .ts と .js 拡張子の
  ".next/**/*.{ts,js}",
  // 型定義ファイル
  "**/types/*.{ts,js}",
  "**/type/*.{ts,js}",
  "**/*.d.ts",
  // ダミーデータを定義しているファイル
  "**/*dummy*.{ts,js}",
  "**/*sample*.{ts,js}",
  // スタイルファイル
  "**/*Style*.{ts,js}",
];
// glob パターンマッチングでカバーされていない、テスト不要のファイルは指定されたパスで除外します。
const specificFilesExclude: string[] = [
  // 特定のファイルのパス
  "auth/aw-exports.ts",
  "components/input/IconInputValidation.ts",
  // ...
];
// テスト不要の全てのファイルを定義します。
const excludedFiles = [...defaultExclude, ...specificFilesExclude];

export default defineConfig({
  // `vitest` を設定するには、設定ファイルに `test` 属性を追加する必要があります。
  test: {
    // Vitest のデフォルトのテスト環境は Node.js 環境です。
    // Webアプリケーションを構築している場合は、Node.js を jsdom や happy-dom などのブラウザライクな環境に置き換えることができます。
    environment: "happy-dom",
    // テストファイルを含む glob パターンを定義します。
    include: ["**/*.spec.{js,ts}"],
    // テストファイルを除外する glob パターンを定義します。
    // tests フォルダには E2E テストとコンポーネントテストが含まれているため、除外されます。
    exclude: excludedFiles,
    // テストカバレッジデータを収集するには、coverage 属性を追加する必要があります。
    coverage: {
      // provider でテストカバレッジデータを収集するツールを選択します。
      provider: "v8",
      // テストカバレッジデータの収集を有効にします。
      enabled: true,
      // テストが失敗しても、カバレッジレポートは生成されます。
      reportOnFailure: true,
      // テストカバレッジレポーターの形式を設定します。
      reporter: ["text", "json", "html"],
      // テストカバレッジに含まれるテスト対象の glob パターンを定義します。
      include: ["**/*.{ts,js}"],
      // テストカバレッジから除外されるテスト対象の glob パターンを定義します。
      exclude: excludedFiles,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
```

## ディレクトリ構造

テストファイルはテスト対象モジュールと並列に `__tests__` ディレクトリに配置します。

```bash
store
  ├── __tests__
  │       ├── utils
  │       │     └── index.spec.ts
  │       └── count.spec.ts
  ├── count.ts
  └── utils
        └── index.ts
```

`store` ディレクトリにさらに深いディレクトリ構造が存在する場合は、`__tests__` ディレクトリも同じ構造を維持するべきです。

## テストファイルの命名

各テストファイルは一つのモジュールまたはコンポーネントのみをテストします。

テストファイルの命名は `*.spec.ts` をします。

例えば、`component.js` のテストファイルは `component.spec.js` とします。
