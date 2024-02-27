# IAM 策略

在组添加 IAM 策略，组内所有用户都会继承此策略。

通过内联策略（Inline Policies），也可以创建仅附加到用户。该用户不从属于群组。

每个内联策略都直接附加到一个 IAM 实体（用户、角色、组）上，形成一对一的关系，不可以复用。

## IAM 权限 JSON 配置文档

```json
{
  "Version": "2012-10-17",
  "Id": "S3-Account-Permission",
  "Statement": [
    {
      "Sid": "1",
      "Effect": "Allow",
      "Principal": {
        "AWS": ["arn:aws:iam::123456789012:root"]
      },
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": ["arn:aws:s3:::mybucket/*"]
    }
  ]
}
```

- Version: 版本号。通常是 `2012-10-17`，这是策略语言版本
- Id: 权限标识 id（可选）
- Statement: 语句
  - Sid: 语句的 id，语句的标识符（可选）
  - Effect: 是否允许访问特定 API
  - Principal: 包括将应用该权限设置的用户/角色，本例子中是根用户
  - Action: 允许/拒绝访问的特定 API 列表
  - Resource: 将应用到的资源列表
  - Condition: 设置应用 Effect 效果的时机（可选）

## 创建 IAM 策略

> ARN 表示 Amazon 资源名称（Amazon Resource Name）
