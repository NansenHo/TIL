# 基本的な GitLab CI/CD 設定を紹介します！

## `.gitlab-ci.yml`

```yaml
stages:
  - test
  - build

default:
  image: node:lts
  cache:
    key:
      files:
        - package.json
    paths:
      - node_modules/
      - package-lock.json

before_script:
  - npm ci

unit_test_job:
  stage: test
  variables:
    TZ: "Asia/Tokyo"
  script:
    - npm run test-ut
  tags:
    - dragonfly
    - frontend

component_test_job:
  image: mcr.microsoft.com/playwright:v1.43.0-jammy
  stage: test
  variables:
    TZ: "Asia/Tokyo"
  before_script:
    - apt-get update && apt-get install -y python3 python3-pip
    - npm ci
  script:
    - npm run test-ct
  tags:
    - dragonfly
    - frontend

build_job:
  stage: build
  script:
    - npm run build
  tags:
    - dragonfly
    - frontend
```

この `.gitlab-ci.yml` のコードは、GitLab CI/CD のパイプラインを設定しています。

まず、2 つのステージ、`test` と `build` を定義しています。

デフォルト設定では、`node:lts` イメージを使用し、`package.json` と `node_modules/`、`package-lock.json` をキャッシュしています。

`before_script` では、`node_modules` ディレクトリが存在しない場合に `npm ci` を実行します。

`unit_test_job` では、`test` ステージで `npm run test-ut` を実行します。
`component_test_job` では、`test` ステージで `npm run test-ct` を実行します。
`build_job` では `build` ステージで `npm run build` を実行します。

> `component_test_job` では、playwright が提供してくれる `mcr.microsoft.com/playwright:v1.43.0-jammy` image を使っています。
>
> GitLab Runner にも `apt-get update && apt-get install -y python3 python3-pip` で　 Python をインストールしています。

各ジョブには `dragonfly` と `frontend` のタグが付いています。

これにより、コードの更新があるたびに自動的にテストとビルドが行われます。

## CI/CD Runner

プロジェクト専用の GitLab CI/CD Runner は以下のように設定されています。

```toml
# 同時に実行できるジョブの数を 1 に設定しています。
concurrent = 1
# Runner がジョブをチェックする間隔は特に設定されていません。
check_interval = 0
# Runner のシャットダウンタイムアウトは設定されていません。
shutdown_timeout = 0

[session_server]
  session_timeout = 1800 # セッションサーバーのタイムアウト時間を 1800 秒（30分）に設定しています。

[[runners]]
  name = "DragonFly-FE" # Runner の名前を「DragonFly-FE」に設定されています。
  url = "https://gitlab.firstloop-tech.com" # GitLab の URLが指定されています。
  # すべての CI/CD タスク（ビルドやテストなど）はこの GitLab インスタンスがあるサーバー環境で実行されます。
  id = 12 # Runner の ID が指定されています。
  token = "glrt-mk-3FfFyysbC7Pz3TUJs" # Runner の Token が指定されています。
  token_obtained_at = 2024-01-18T07:12:02Z
  token_expires_at = 0001-01-01T00:00:00Z
  executor = "docker" # Docker を実行環境として使用します。
  [runners.cache]
    MaxUploadedArchiveSize = 0 # キャッシュされたアーカイブの最大アップロードサイズに制限は設けられていません。
  [runners.docker]
    tls_verify = false # TLSの検証を行わない設定です。
    image = "node:lts" # 使用するDockerイメージとして「node:lts」が指定されています。
    pull_policy = ["if-not-present", "always"] # イメージのプルポリシーとして「存在しない場合と常にプルする」が設定されています。
    privileged = false # 特権モードは使用しない設定です。
    disable_entrypoint_overwrite = false # エントリポイントの上書きを禁止していません。
    oom_kill_disable = false # OutOfMemory Killerの無効化は行っていません。
    disable_cache = false # キャッシュの無効化は行っていません。
    volumes = ["/cache"] # キャッシュ用のボリュームとして「/cache」が設定されています。
    shm_size = 0 # 共有メモリサイズMTUの設定は特に行っていません。
    network_mtu = 0 # 共有ネットワークMTUの設定は特に行っていません。
```
