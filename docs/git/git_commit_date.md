# Git Commit Date

## Author Date & Committer Date

- Author Date: 最原始修改的时间（不可修改）
- Committer Date: 最新的修改的时间（会被 rebase / amend 修改）

`git log` 命令返回的 commit 信息默认使用 Author Date。

在 GitHub 上，

- 贡献小绿点是按 Author Date 来进行 commit 的统计；
- 分支的提交记录里的 commit 信息显示 Committer Date；

> 如果在 GitHub 上发起了 PR 的话，贡献小绿点要 PR 被 Merge 之后才会被统计。
