# Gitlab CI/CD

```yaml
.install_dependencies: &install_dependencies
  before_script:
    - apt-get update && apt-get install -y python3 python3-pip
    - npm ci

.default_tags: &default_tags
  tags:
    - dragonfly
    - frontend

variables:
  SERVER_URL: http://localhost:3000
  PLAYWRIGHT_DOCKER_IMAGE: mcr.microsoft.com/playwright:v1.45.0-jammy
  TZ: Asia/Tokyo

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

unit_test_job:
  stage: test
  script:
    - npm ci
    - npm run test-ut
  <<: *default_tags

component_test_job:
  image: $PLAYWRIGHT_DOCKER_IMAGE
  stage: test
  <<: [*install_dependencies, *default_tags]
  script:
    - npm run test-ct

e2e_test_job:
  image: $PLAYWRIGHT_DOCKER_IMAGE
  stage: test
  only:
    - develop@flt/dragonfly_frontend
    - master@flt/dragonfly_frontend
  variables:
    TZ: $TZ
    NEXT_PUBLIC_API_URL: https://dragonfly-dev.firstloop-tech.com/api
    NEXT_PUBLIC_COGNITO_REGION: ap-northeast-1
    NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID: ap-northeast-1:f4118e98-0674-4c08-b60b-26d7a690fe5d
    NEXT_PUBLIC_COGNITO_USER_POOL_ID: ap-northeast-1_tE9AMqqF9
    NEXT_PUBLIC_COGNITO_CLIENT_ID: 3ro9fts6olg1nc4v05nn8o9h5j
    NEXT_PUBLIC_MAP_TILE_URL: https://dragonfly-dev.firstloop-tech.com/tiles/{z}/{x}/{y}.png
    NEXT_PUBLIC_MAP_ERROR_TILE_URL: https://dragonfly-dev.firstloop-tech.com/tiles/errorTile.png
    NEXT_PUBLIC_FLT_GROUP: flt
    NEXT_PUBLIC_ADMIN_GROUP: admin
    AUTH_FILE: playwright/.auth/user.json
    EMAIL: nansyou.ka@firstloop-tech.com
    PASSWORD: Test1111
  <<: [*install_dependencies, *default_tags]
  script:
    - npm run dev &
    - npx wait-on $SERVER_URL --timeout 30000
    - npm run e2e-test
  timeout: 30m

build_dev_job:
  stage: build
  script:
    - npm ci
    - npm run build:dev
  <<: *default_tags
```
