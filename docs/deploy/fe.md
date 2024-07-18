# デプロイの手順書

### デプロイ日の前に

- レビュー会の日程を確認し、関係者を google calendar に招待する
- 今回の更新項目の MR をマージする
- develop ブランチで、単体・E2E テストを実行して、問題ないか確認する
- develop ブランチで、ローカル環境を立ち上げて更新項目と全体的に問題ないか確認する
- 問題なかったら、`package.json` のバージョン（マイルストンのバージョン）を更新する
- バージョンを更新したら、`package-lock.json` ファイルと `node_modules` フォルダーを削除し、`npm i` を実行し、新しい `package-lock.json` を作成する
- バージョン更新の issue を切って、ブランチを切って、もう一人の担当者に MR を出す
- マージされたら、`develop` ブランチで `npm run build` を実行してビルドし、ビルドした成果物（out ディレクトリ）を `zip -r out.zip ./out` コマンドで zip にして、BE のデプロイ作業者(田淵さん or 福田さん)に dev 環境へのデプロイを依頼する
- [dev 環境](https://dragonfly-dev.firstloop-tech.com/)で、更新項目と全体的に問題ないか確認する
- レビュー会に参加する
- 作業計画書を作成（[作業計画書のフォルダ](https://drive.google.com/drive/u/0/folders/15ko40uH0o9bdIbq8Wnz0YdMaxWnvBWcx))
- パスの追加・削除・変更があるかを各 FE メンバーに確認し、ある場合は BE と連携する
- GitLab Wiki でパッチノート（patchnote）を作成する
- パッチノートの作成について、以前のパッチノートを参考して、「お客さん向け」と「社内向け」との二つの部分を分けて更新した項目を説明します

### デプロイ日

- 最新 `develop` を `master` ブランチにマージし、完成していない機能をコメントアウトして(ユーザーグループで制御したほうがいいかも?)、push する
- テストを実行して、問題がないかを確認する（テスト未実装の機能は目視でチェック）
- `.env.local` の環境変数を以下の本番環境用のに切り替える
- `master` ブランチで `npm run build` を実行して、ビルドした成果物（`out` ディレクトリー）を `zip -r out.zip ./out` コマンドで zip にして、その zip ファイルを BE の作業者(福田さん)に渡して、本番環境へのデプロイを依頼する
- 本番環境に問題ないか確認して、`master` ブランチで以下のコマンドで `tag` を切る

  ```bash
  # tag を切る
  git tag -a <version> -m "<comment>" # 例えば、git tag -a v1.0.7 -m "create v1.0.7 tag"
  git push origin <version> # 例えば、git push origin v1.0.7
  ```
