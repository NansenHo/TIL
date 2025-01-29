# `git rebase` 和 `git merge` 的使用方法和使用场景

## `git merge` 介绍

merge 操作会将两个或多个分支的开发历史合并在一起，并保留所有分支的提交记录，同时还会增加一个合并提交（merge commit）来表示合并操作的完成。

`merge` 的基本语法是：`git merge <branch>`

假设有如下的 `fix` 和 `master` 分支，以及 commit 历史：

```
        A --- B --- C  fix
       /
D --- E --- F --- G  master
```

此时，你希望将 `fix` 分支最新的代码合并到 `master` 分支。

你可以在 `master` 分支上运行 `git merge fix` 命令。

这将会把 `fix` 分支的提交内容（自从它与当前分支分离以来的所有提交）合并到 `master` 分支。

这之后 commit 历史会变成：

```
        A --- B --- C  fix
       /              \
D --- E --- F --- G --- H  master
```

`master` 分支的 commit 历史会增加一个新的合并提交记录 H。

H 提交记录里会包含所有 `fix` 分支中的 A, B 和 C 提交记录。

### 不适合使用 `git merge` 的场景

在使用 `git merge` 时，合并操作会保留分支的所有提交记录，并增加一个合并提交，**这在公共分支是很好的合并策略**。

但是如果**用在私人分支或未共享的分支就很容易出现问题**。

假设有如下的 `feature` 和 `master` 分支，以及 commit 历史：

```
D --- E --- F --- G  master
        \
    	  A --- B  feature
```

在你开发 `feature` 分支的时候，`master` 分支被更新了两次。

在将 `feature` 分支的代码提交到 `develop` 分支并提交测试之前，为了保持代码一致性，你需要先将 `master` 分支最新的代码合并到 `feature` 分支。

此时如果你继续使用 `git merge` 来处理，commit 历史会变成：

```
D --- E --- F --- G  master
        \           \
    	  A --- B --- H  feature
```

即 `feature` 分支上的提交记录会变成：

```
A --- B --- H（包含了 F 和 G）  feature
```

H 提交记录中包含了 `master` 分支最新的提交内容，即 F 和 G。

代码合并成功后，我们再将 `feature` 分支的代码用 `git merge` 合并到公共分支 `develop`。

提交记录会变成：

```
D --- E --- F --- G  master
        \           \
    	  A --- B --- H  feature
                        \
X --- Y --- Z ----------- M  develop
```

`develop` 分支增加了一个 M 提交记录，且 M 提交记录里会包含 `feature` 分支的所有提交记录（A、B 和 H），而 H 提交记录里又包含了 `master` 分支的 F 和 G 提交记录。

在该例子的 commit 数量只有两三次的情况下，仅仅两步 merge 之后，各个分支的 Git 提交记录就变得如此复杂。

如果 commit 增多，merge 的次数增多，这会给我们审查代码，以及之后调试和回溯代码造成很大的困难。

我曾遇到过，commit 数量超过 200 个的 MR，而这就是其 merge 了主分支的最新代码导致的。

所以去掉多余的提交记录，让提交历史保持干净非常重要。

不仅让我们审查代码时能更轻松，也能在之后调试和回溯代码时能更容易理解代码的演变过程。

## `git rebase` 介绍

而想要去掉多余的提交记录，让提交历史保持简洁和线性就需要使用 `git rebase` 了。

与 `git merge` 不同，`git rebase` 不会创建合并提交，而是将当前分支的提交重新应用到基准分支的最新提交上，从而使得当前分支的提交历史看起来像是从基准分支的最新提交上直接发展而来的，这样就保持提交历史的线性和简洁。

rebase 最基础的语法： `git rebase <branch>`。

### 解决上面 `git merge` 不适合的场景下的问题

我们仍然假设有如下的 `feature` 和 `master` 分支，以及 commit 历史：

```
D --- E --- F --- G  master
        \
    	  A --- B  feature
```

在你开发 `feature` 分支的时候，`master` 分支被更新了两次。

在将 `feature` 分支的代码提交到 `develop` 分支并提交测试之前，为了保持代码一致性，你需要先将 `master` 分支最新的代码合并到 `feature` 分支。

此时如果你使用 `git rebase` 来处理，而不是 `git merge`，commit 历史会变成：

```
D --- E --- F --- G  master
                    \
     	             A --- B  feature
```

即 `feature` 分支上的提交记录仍然是：

```
A --- B  feature
```

没有不必要的 H 以及 F 和 G 提交记录。

代码合并成功后，我们再将 `feature` 分支的代码用 `git merge` 合并到公共分支 `develop`。

提交记录会变成：

```
D --- E --- F --- G  master
                   \
    	            A --- B  feature
                            \
X --- Y --- Z --------------- M  develop
```

`develop` 分支增加了一个 M 提交记录，M 提交记录会包含 `feature` 分支的所有提交记录（A 和 B）。

相比之前只使用 `git merge`，`develop` 分支增加的 M 提交记录里，包含了包含 `feature` 分支的所有提交记录（A、B 和 H），而 H 中又包含了 `master` 分支的 F 和 G 提交记录。

现在 M 提交记录里只包含 `feature` 分支下的提交记录（A 和 B）。

从上面的例子可以看出，在私人分支或未共享的分支上使用 `git rebase` 来合并基准分支上的最新代码，让我们获得了以下好处：

1. 保持线性和清晰的历史记录

   这使得项目的提交历史更容易阅读和理解，有助于代码审查。

   在之后调试和回溯代码时，也让代码的演变过程更容易理解。

2. 避免不必要的合并提交

3. 提前解决冲突并提高协作效率

   通过 `git rebase` 提前解决冲突，可以减少最终合并时的复杂性。

   此外，定期将基准分支的最新变更应用到私人分支，确保你的工作始终基于最新的代码基础，减少与团队其他成员的代码冲突。

### 没有冲突的情况

我们在运行 `git rebase <branch>` 之后，如果代码没有冲突的话，就已经合并成功了。

之后只需要通过 `git push -f` 将代码推送到远程分支即可。

> 为什么要使用 `git push -f`？
>
> 当你运行 `git rebase` 时，Git 会为每个提交创建一个新的提交对象，这些新的提交对象与原来的提交不同（即使它们的内容相同）。
>
> 这就导致本地分支的提交历史与远程分支的提交历史不一致。
>
> 当你尝试将这些重写的提交推送到远程仓库时，Git 会认为你的本地提交历史与远程提交历史冲突，因为它们有不同的提交哈希值。
>
> 为了强制推送这些更改，你需要使用 `git push -f`，它会覆盖远程分支上的提交历史，使其与本地分支保持一致。

由于需要使用 `git push -f`，所以务必在**私人分支**或**未共享的分支**上进行 rebase 操作。

### 如何处理代码冲突

我们在运行 `git rebase <branch>` 之后，如果代码有冲突的话，Git 会给我们下面的提示：

```bash
(base) nansenho@mb-nansyou-01 dragonfly_frontend % git rebase develop
Auto-merging tests/e2e/specs/error/404.spec.ts
CONFLICT (add/add): Merge conflict in tests/e2e/specs/error/404.spec.ts
error: could not apply 03652542... fix:404エラーページのe2eテスト
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 03652542... fix:404エラーページのe2eテスト
```

该提示告诉我们有三种处理处理冲突的方式：

- `git rebase --continue`

  当你在 `git rebase` 过程中遇到冲突，并手动解决所有冲突后，你需要使用 `git add <file>` 将解决的文件标记为已解决。

  然后运行 `git rebase --continue` 来继续 rebase 操作。

  rebase 操作完成后，使用 `git push -f` 将本地代码推送到远程分支即可。

- `git rebase --abort`

  如果在 rebase 过程中遇到问题，决定不再继续当前的 rebase 操作，可以使用 `git rebase --abort`。

  此命令会取消当前的 rebase 操作，并将分支恢复到 rebase 开始之前的状态。

- `git rebase --skip`

  当你决定忽略当前的代码冲突，可以使用 `git rebase --skip`。

  此命令会跳过当前导致冲突的提交。

在实践中如果遇到冲突，**最推荐的做法**是手动解决冲突后，使用 `git rebase --continue` 继续 rebase。

如果遇到无法解决的冲突，或者发现当前的 rebase 操作不可行，**推荐使用** `git rebase --abort` 取消 rebase 操作，恢复到原来的状态，再想其他解决方案。

`git rebase --skip` 则**不推荐使用**。

## `git rebase` 和 `git merge` 的使用场景

总的来说，如果你想保留所有分支的完整提交历史，就使用 merge；如果你想使提交历史记录保持简洁和线性，就使用 rebase。

具体来说，有下面两种被广泛认可的使用场景：

- 在私人分支或未共享的分支（例如 `feature-xxx`、`fix-xxx`、`refactor-xxx` 等）上进行开发时，如果希望合并其他分支上的最新代码，应该使用 `git rebase` 来保持线性且简洁的提交历史。

- 当希望将私人分支或未共享的分支（例如 `feature-xxx`、`fix-xxx`、`refactor-xxx` 等）合并到共享的分支（例如 `master`、`develop`、`main` 等）时，应该使用 `git merge` 来记录所有的提交历史，以便于代码变更的追溯。

## 参考

- [Git - git-rebase Documentation](https://git-scm.com/docs/git-rebase/en)
- [Git - git-merge Documentation](https://git-scm.com/docs/git-merge/en)
