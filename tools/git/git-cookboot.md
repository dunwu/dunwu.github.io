# Git Cook Book

## 目录

<!-- TOC depthFrom:2 depthTo:3 -->

- [目录](#目录)
- [提交](#提交)
    - [查看最近一次提交](#查看最近一次提交)
    - [修改提交信息](#修改提交信息)
    - [修改提交信息中的用户名和邮箱](#修改提交信息中的用户名和邮箱)
    - [从提交中移除一个文件](#从提交中移除一个文件)
    - [删除最后一次提交](#删除最后一次提交)
    - [删除任意提交](#删除任意提交)
    - [我尝试推一个修正后的提交(amended commit)到远程，但是报错](#我尝试推一个修正后的提交amended-commit到远程但是报错)
    - [我意外的做了一次硬重置(hard reset)，我想找回我的内容](#我意外的做了一次硬重置hard-reset我想找回我的内容)
- [暂存](#暂存)
    - [我需要把暂存的内容添加到上一次的提交(commit)](#我需要把暂存的内容添加到上一次的提交commit)
    - [我想要暂存一个新文件的一部分，而不是这个文件的全部](#我想要暂存一个新文件的一部分而不是这个文件的全部)
    - [我想把在一个文件里的变化(changes)加到两个提交(commit)里](#我想把在一个文件里的变化changes加到两个提交commit里)
    - [我想把暂存的内容变成未暂存，把未暂存的内容暂存起来](#我想把暂存的内容变成未暂存把未暂存的内容暂存起来)
- [未暂存](#未暂存)
    - [我想把未暂存的内容移动到一个新分支](#我想把未暂存的内容移动到一个新分支)
    - [我想把未暂存的内容移动到另一个已存在的分支](#我想把未暂存的内容移动到另一个已存在的分支)
    - [我想丢弃本地未提交的变化(uncommitted changes)](#我想丢弃本地未提交的变化uncommitted-changes)
    - [我想丢弃某些未暂存的内容](#我想丢弃某些未暂存的内容)
- [分支](#分支)
    - [我从错误的分支拉取了内容，或把内容拉取到了错误的分支](#我从错误的分支拉取了内容或把内容拉取到了错误的分支)
    - [我想扔掉本地的提交(commit)，以便我的分支与远程的保持一致](#我想扔掉本地的提交commit以便我的分支与远程的保持一致)
    - [我需要提交到一个新分支，但错误的提交到了 master](#我需要提交到一个新分支但错误的提交到了-master)
    - [我想保留来自另外一个 ref-ish 的整个文件](#我想保留来自另外一个-ref-ish-的整个文件)
    - [我把几个提交(commit)提交到了同一个分支，而这些提交应该分布在不同的分支里](#我把几个提交commit提交到了同一个分支而这些提交应该分布在不同的分支里)
    - [我想删除上游(upstream)分支被删除了的本地分支](#我想删除上游upstream分支被删除了的本地分支)
    - [我不小心删除了我的分支](#我不小心删除了我的分支)
    - [我想删除一个分支](#我想删除一个分支)
    - [我想从别人正在工作的远程分支签出(checkout)一个分支](#我想从别人正在工作的远程分支签出checkout一个分支)
- [Rebase 和 Merge](#rebase-和-merge)
    - [我想撤销 rebase/merge](#我想撤销-rebasemerge)
    - [我已经 rebase 过, 但是我不想强推(force push)](#我已经-rebase-过-但是我不想强推force-push)
    - [我需要组合(combine)几个提交(commit)](#我需要组合combine几个提交commit)
    - [检查是否分支上的所有提交(commit)都合并(merge)过了](#检查是否分支上的所有提交commit都合并merge过了)
    - [交互式 rebase(interactive rebase)可能出现的问题](#交互式-rebaseinteractive-rebase可能出现的问题)
- [其他](#其他)
    - [克隆所有子模块](#克隆所有子模块)
    - [删除标签(tag)](#删除标签tag)
    - [恢复已删除标签(tag)](#恢复已删除标签tag)
    - [已删除补丁(patch)](#已删除补丁patch)
- [跟踪文件(Tracking Files)](#跟踪文件tracking-files)
    - [我只想改变一个文件名字的大小写，而不修改内容](#我只想改变一个文件名字的大小写而不修改内容)
    - [我想从 Git 删除一个文件，但保留该文件](#我想从-git-删除一个文件但保留该文件)
- [配置](#配置)
    - [给 Git 命令添加别名](#给-git-命令添加别名)
    - [缓存一个仓库的用户名和密码](#缓存一个仓库的用户名和密码)
- [Fork 项目](#fork-项目)
- [我不知道我做错了些什么](#我不知道我做错了些什么)
- [参考资料](#参考资料)

<!-- /TOC -->

## 暂存

`git add` 命令用于将修改添加到暂存区。

### 暂存指定文件

```shell
git add xxx
```

### 暂存当前目录下所有修改

```shell
git add .
```

### 暂存所有修改

```
git add -A
```

### 暂存文件部分内容

暂存文件部分内容

```shell
git add --patch filename.x
```

`-p` 简写。这会打开交互模式， 你将能够用 `s` 选项来分隔提交(commit)；

 然而, 如果这个文件是新的, 会没有这个选择， 添加一个新文件时，这样做:

```shell
git add -N filename.x
```

然后, 你需要用 `e` 选项来手动选择需要添加的行，执行 `git diff --cached` 将会显示哪些行暂存了哪些行只是保存在本地了。

### 把暂存的内容变成未暂存，把未暂存的内容暂存起来

这个有点困难， 我能想到的最好的方法是先 stash 未暂存的内容， 然后重置(reset)，再 pop 第一步 stashed 的内容, 最后再 add 它们。

```shell
git stash -k
git reset --hard
git stash pop
git add -A
```

## 提交

`git commit` 命令用于将修改保存到到本地仓库。

### 查看最近一次提交

```shell
git show
```

或者

```shell
git log -n1 -p
```

### 提交本地的所有修改

```shell
git commit -a
```

### 提交暂存的修改

```shell
git commit
```

### 把暂存的内容添加到上一次的提交

```shell
git commit --amend
```

### 附加消息提交

```shell
git commit -m 'commit message'
```

### 修改提交信息

如果你的提交信息写错了且这次提交（commit）还没有推送（push），可以使用以下命令修改：

```shell
git commit --amend
```

或者

```shell
git commit --amend -m 'xxxxxxx'
```

### 修改提交信息中的用户名和邮箱

```shell
git commit --amend --author "New Authorname <authoremail@mydomain.com>"
```

### 从提交中移除一个文件

```shell
git checkout HEAD^ myfile
git add -A
git commit --amend
```

### 删除最后一次提交

如果你需要删除推了的提交(pushed commits)，你可以使用下面的方法。可是，这会不可逆的改变你的历史，也会搞乱那些已经从该仓库拉取(pulled)了的人的历史。简而言之，如果你不是很确定，千万不要这么做。

```shell
git reset HEAD^ --hard
git push -f [remote] [branch]
```

如果你还没有推到远程, 把 Git 重置(reset)到你最后一次提交前的状态就可以了(同时保存暂存的变化):

```shell
(my-branch*)$ git reset --soft HEAD@{1}

```

这只能在没有推送之前有用. 如果你已经推了, 唯一安全能做的是 `git revert SHAofBadCommit`， 那会创建一个新的提交(commit)用于撤消前一个提交的所有变化(changes)； 或者, 如果你推的这个分支是 rebase-safe 的 (例如： 其它开发者不会从这个分支拉), 只需要使用 `git push -f`； 更多, 请参考 [the above section](#deleteremove-last-pushed-commit)。

### 删除任意提交

同样的警告：不到万不得已的时候不要这么做.

```shell
git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
git push -f [remote] [branch]
```

或者做一个 [交互式 rebase](#interactive-rebase) 删除那些你想要删除的提交(commit)里所对应的行。

### 我尝试推一个修正后的提交(amended commit)到远程，但是报错

```shell
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

注意, rebasing(见下面)和修正(amending)会用一个**新的提交(commit)代替旧的**, 所以如果之前你已经往远程仓库上推过一次修正前的提交(commit)，那你现在就必须强推(force push) (`-f`)。 注意 &ndash; _总是_ 确保你指明一个分支!

```shell
(my-branch)$ git push origin mybranch -f
```

一般来说, **要避免强推**. 最好是创建和推(push)一个新的提交(commit)，而不是强推一个修正后的提交。后者会使那些与该分支或该分支的子分支工作的开发者，在源历史中产生冲突。

### 不小心强制重置，想找回内容

如果你意外的做了 `git reset --hard`, 你通常能找回你的提交(commit), 因为 Git 对每件事都会有日志，且都会保存几天。

```shell
(master)$ git reflog
```

你将会看到一个你过去提交(commit)的列表, 和一个重置的提交。 选择你想要回到的提交(commit)的 SHA，再重置一次:

```shell
(master)$ git reset --hard SHA1234
```

这样就完成了。

## 未暂存

> 未暂存(Unstaged)的内容

### 把未暂存的内容移动到一个新分支

- `git checkout -b my-branch`

### 我想把未暂存的内容移动到另一个已存在的分支

```shell
git stash
git checkout my-branch
git stash pop
```

### 丢弃本地未提交的变化

如果你只是想重置源(origin)和你本地(local)之间的一些提交(commit)，你可以：

```shell
## one commit
$ git reset --hard HEAD^
## two commits
$ git reset --hard HEAD^^
## four commits
$ git reset --hard HEAD~4
## or
$ git checkout -f
```

重置某个特殊的文件, 你可以用文件名做为参数:

```shell
git reset filename
```

### 我想丢弃某些未暂存的内容

如果你想丢弃工作拷贝中的一部分内容，而不是全部。

签出(checkout)不需要的内容，保留需要的。

```shell
$ git checkout -p
## Answer y to all of the snippets you want to drop
```

另外一个方法是使用 `stash`， Stash 所有要保留下的内容, 重置工作拷贝, 重新应用保留的部分。

```shell
$ git stash -p
## Select all of the snippets you want to save
$ git reset --hard
$ git stash pop
```

或者, stash 你不需要的部分, 然后 stash drop。

```shell
$ git stash -p
## Select all of the snippets you don't want to save
$ git stash drop
```

## 分支

> 分支(Branches)

### 我从错误的分支拉取了内容，或把内容拉取到了错误的分支

这是另外一种使用 `git reflog` 情况，找到在这次错误拉(pull) 之前 HEAD 的指向。

```shell
(master)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

重置分支到你所需的提交(desired commit):

```shell
git reset --hard c5bc55a
```

完成。

### 我想扔掉本地的提交(commit)，以便我的分支与远程的保持一致

先确认你没有推(push)你的内容到远程。

`git status` 会显示你领先(ahead)源(origin)多少个提交:

```shell
(my-branch)$ git status
## On branch my-branch
## Your branch is ahead of 'origin/my-branch' by 2 commits.
##   (use "git push" to publish your local commits)
#
```

一种方法是:

```shell
(master)$ git reset --hard origin/my-branch
```

### 我需要提交到一个新分支，但错误的提交到了 master

在 master 下创建一个新分支，不切换到新分支,仍在 master 下:

```shell
(master)$ git branch my-branch
```

把 master 分支重置到前一个提交:

```shell
(master)$ git reset --hard HEAD^
```

`HEAD^` 是 `HEAD^1` 的简写，你可以通过指定要设置的`HEAD`来进一步重置。

或者, 如果你不想使用 `HEAD^`, 找到你想重置到的提交(commit)的 hash(`git log` 能够完成)， 然后重置到这个 hash。 使用`git push` 同步内容到远程。

例如, master 分支想重置到的提交的 hash 为`a13b85e`:

```shell
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

签出(checkout)刚才新建的分支继续工作:

```shell
(master)$ git checkout my-branch
```

### 我想保留来自另外一个 ref-ish 的整个文件

假设你正在做一个原型方案(原文为 working spike (see note)), 有成百的内容，每个都工作得很好。现在, 你提交到了一个分支，保存工作内容:

```shell
(solution)$ git add -A && git commit -m "Adding all changes from this spike into one big commit."
```

当你想要把它放到一个分支里 (可能是`feature`, 或者 `develop`), 你关心是保持整个文件的完整，你想要一个大的提交分隔成比较小。

假设你有:

- 分支 `solution`, 拥有原型方案， 领先 `develop` 分支。
- 分支 `develop`, 在这里你应用原型方案的一些内容。

我去可以通过把内容拿到你的分支里，来解决这个问题:

```shell
(develop)$ git checkout solution -- file1.txt
```

这会把这个文件内容从分支 `solution` 拿到分支 `develop` 里来:

```shell
## On branch develop
## Your branch is up-to-date with 'origin/develop'.
## Changes to be committed:
##  (use "git reset HEAD <file>..." to unstage)
#
##        modified:   file1.txt
```

然后, 正常提交。

Note: Spike solutions are made to analyze or solve the problem. These solutions are used for estimation and discarded once everyone gets clear visualization of the problem. \~ [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices).

### 我把几个提交(commit)提交到了同一个分支，而这些提交应该分布在不同的分支里

假设你有一个`master`分支， 执行`git log`, 你看到你做过两次提交:

```shell
(master)$ git log

commit e3851e817c451cc36f2e6f3049db528415e3c114
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:27 2014 -0400

    Bug #21 - Added CSRF protection

commit 5ea51731d150f7ddc4a365437931cd8be3bf3131
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:12 2014 -0400

    Bug #14 - Fixed spacing on title

commit a13b85e984171c6e2a1729bb061994525f626d14
Author: Aki Rose <akirose@example.com>
Date:   Tue Jul 21 01:12:48 2014 -0400

    First commit
```

让我们用提交 hash(commit hash)标记 bug (`e3851e8` for #21, `5ea5173` for #14).

首先, 我们把`master`分支重置到正确的提交(`a13b85e`):

```shell
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

现在, 我们对 bug #21 创建一个新的分支:

```shell
(master)$ git checkout -b 21
(21)$
```

接着, 我们用 _cherry-pick_ 把对 bug #21 的提交放入当前分支。 这意味着我们将应用(apply)这个提交(commit)，仅仅这一个提交(commit)，直接在 HEAD 上面。

```shell
(21)$ git cherry-pick e3851e8
```

这时候, 这里可能会产生冲突， 参见[交互式 rebasing 章](#interactive-rebase) [**冲突节**](#merge-conflict) 解决冲突.

再者， 我们为 bug #14 创建一个新的分支, 也基于`master`分支

```shell
(21)$ git checkout master
(master)$ git checkout -b 14
(14)$
```

最后, 为 bug #14 执行 `cherry-pick`:

```shell
(14)$ git cherry-pick 5ea5173
```

### 我想删除上游(upstream)分支被删除了的本地分支

一旦你在 github 上面合并(merge)了一个 pull request, 你就可以删除你 fork 里被合并的分支。 如果你不准备继续在这个分支里工作, 删除这个分支的本地拷贝会更干净，使你不会陷入工作分支和一堆陈旧分支的混乱之中。

```shell
git fetch -p
```

### 我不小心删除了我的分支

如果你定期推送到远程, 多数情况下应该是安全的，但有些时候还是可能删除了还没有推到远程的分支。 让我们先创建一个分支和一个新的文件:

```shell
(master)$ git checkout -b my-branch
(my-branch)$ git branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

添加文件并做一次提交

```shell
(my-branch)$ git add .
(my-branch)$ git commit -m 'foo.txt added'
(my-branch)$ foo.txt added
 1 files changed, 1 insertions(+)
 create mode 100644 foo.txt
(my-branch)$ git log

commit 4e3cd85a670ced7cc17a2b5d8d3d809ac88d5012
Author: siemiatj <siemiatj@example.com>
Date:   Wed Jul 30 00:34:10 2014 +0200

    foo.txt added

commit 69204cdf0acbab201619d95ad8295928e7f411d5
Author: Kate Hudson <katehudson@example.com>
Date:   Tue Jul 29 13:14:46 2014 -0400

    Fixes #6: Force pushing after amending commits
```

现在我们切回到主(master)分支，‘不小心的’删除`my-branch`分支

```shell
(my-branch)$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
(master)$ git branch -D my-branch
Deleted branch my-branch (was 4e3cd85).
(master)$ echo oh noes, deleted my branch!
oh noes, deleted my branch!
```

在这时候你应该想起了`reflog`, 一个升级版的日志，它存储了仓库(repo)里面所有动作的历史。

```shell
(master)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to master
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from master to my-branch
```

正如你所见，我们有一个来自删除分支的提交 hash(commit hash)，接下来看看是否能恢复删除了的分支。

```shell
(master)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

看! 我们把删除的文件找回来了。 Git 的 `reflog` 在 rebasing 出错的时候也是同样有用的。

### 我想删除一个分支

删除一个远程分支:

```shell
(master)$ git push origin --delete my-branch
```

你也可以:

```shell
(master)$ git push origin :my-branch
```

删除一个本地分支:

```shell
(master)$ git branch -D my-branch
```

### 我想从别人正在工作的远程分支签出(checkout)一个分支

首先, 从远程拉取(fetch) 所有分支:

```shell
(master)$ git fetch --all
```

假设你想要从远程的`daves`分支签出到本地的`daves`

```shell
(master)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

(`--track` 是 `git checkout -b [branch] [remotename]/[branch]` 的简写)

这样就得到了一个`daves`分支的本地拷贝, 任何推过(pushed)的更新，远程都能看到.

## Rebase 和 Merge

> Rebase 和 Merge

### 我想撤销 rebase/merge

你可以合并(merge)或 rebase 了一个错误的分支, 或者完成不了一个进行中的 rebase/merge。 Git 在进行危险操作的时候会把原始的 HEAD 保存在一个叫 ORIG_HEAD 的变量里, 所以要把分支恢复到 rebase/merge 前的状态是很容易的。

```shell
(my-branch)$ git reset --hard ORIG_HEAD
```

### 我已经 rebase 过, 但是我不想强推(force push)

不幸的是，如果你想把这些变化(changes)反应到远程分支上，你就必须得强推(force push)。 是因你快进(Fast forward)了提交，改变了 Git 历史, 远程分支不会接受变化(changes)，除非强推(force push)。这就是许多人使用 merge 工作流, 而不是 rebasing 工作流的主要原因之一， 开发者的强推(force push)会使大的团队陷入麻烦。使用时需要注意，一种安全使用 rebase 的方法是，不要把你的变化(changes)反映到远程分支上, 而是按下面的做:

```shell
(master)$ git checkout my-branch
(my-branch)$ git rebase -i master
(my-branch)$ git checkout master
(master)$ git merge --ff-only my-branch
```

更多, 参见 [this SO thread](http://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push).

### 我需要组合(combine)几个提交(commit)

假设你的工作分支将会做对于 `master` 的 pull-request。 一般情况下你不关心提交(commit)的时间戳，只想组合 _所有_ 提交(commit) 到一个单独的里面, 然后重置(reset)重提交(recommit)。 确保主(master)分支是最新的和你的变化都已经提交了, 然后:

```shell
(my-branch)$ git reset --soft master
(my-branch)$ git commit -am "New awesome feature"
```

如果你想要更多的控制, 想要保留时间戳, 你需要做交互式 rebase (interactive rebase):

```shell
(my-branch)$ git rebase -i master
```

如果没有相对的其它分支， 你将不得不相对自己的`HEAD` 进行 rebase。 例如：你想组合最近的两次提交(commit), 你将相对于`HEAD\~2` 进行 rebase， 组合最近 3 次提交(commit), 相对于`HEAD\~3`, 等等。

```shell
(master)$ git rebase -i HEAD~2
```

在你执行了交互式 rebase 的命令(interactive rebase command)后, 你将在你的编辑器里看到类似下面的内容:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
pick b729ad5 fixup
pick e3851e8 another fix

## Rebase 8074d12..b729ad5 onto 8074d12
#
## Commands:
##  p, pick = use commit
##  r, reword = use commit, but edit the commit message
##  e, edit = use commit, but stop for amending
##  s, squash = use commit, but meld into previous commit
##  f, fixup = like "squash", but discard this commit's log message
##  x, exec = run command (the rest of the line) using shell
#
## These lines can be re-ordered; they are executed from top to bottom.
#
## If you remove a line here THAT COMMIT WILL BE LOST.
#
## However, if you remove everything, the rebase will be aborted.
#
## Note that empty commits are commented out
```

所有以 `#` 开头的行都是注释, 不会影响 rebase.

然后，你可以用任何上面命令列表的命令替换 `pick`, 你也可以通过删除对应的行来删除一个提交(commit)。

例如, 如果你想 **单独保留最旧(first)的提交(commit),组合所有剩下的到第二个里面**, 你就应该编辑第二个提交(commit)后面的每个提交(commit) 前的单词为 `f`:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

如果你想组合这些提交(commit) **并重命名这个提交(commit)**, 你应该在第二个提交(commit)旁边添加一个`r`，或者更简单的用`s` 替代 `f`:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

你可以在接下来弹出的文本提示框里重命名提交(commit)。

```vim
Newer, awesomer features

## Please enter the commit message for your changes. Lines starting
## with '#' will be ignored, and an empty message aborts the commit.
## rebase in progress; onto 8074d12
## You are currently editing a commit while rebasing branch 'master' on '8074d12'.
#
## Changes to be committed:
# modified:   README.md
#

```

如果成功了, 你应该看到类似下面的内容:

```shell
(master)$ Successfully rebased and updated refs/heads/master.
```

#### 安全合并(merging)策略

`--no-commit` 执行合并(merge)但不自动提交, 给用户在做提交前检查和修改的机会。 `no-ff` 会为特性分支(feature branch)的存在过留下证据, 保持项目历史一致。

```shell
(master)$ git merge --no-ff --no-commit my-branch
```

#### 我需要将一个分支合并成一个提交(commit)

```shell
(master)$ git merge --squash my-branch
```

#### 我只想组合(combine)未推的提交(unpushed commit)

有时候，在将数据推向上游之前，你有几个正在进行的工作提交(commit)。这时候不希望把已经推(push)过的组合进来，因为其他人可能已经有提交(commit)引用它们了。

```shell
(master)$ git rebase -i @{u}
```

这会产生一次交互式的 rebase(interactive rebase), 只会列出没有推(push)的提交(commit)， 在这个列表时进行 reorder/fix/squash 都是安全的。

### 检查是否分支上的所有提交(commit)都合并(merge)过了

检查一个分支上的所有提交(commit)是否都已经合并(merge)到了其它分支, 你应该在这些分支的 head(或任何 commits)之间做一次 diff:

```shell
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

这会告诉你在一个分支里有而另一个分支没有的所有提交(commit), 和分支之间不共享的提交(commit)的列表。 另一个做法可以是:

```shell
(master)$ git log master ^feature/120-on-scroll --no-merges
```

### 交互式 rebase(interactive rebase)可能出现的问题

#### 这个 rebase 编辑屏幕出现'noop'

如果你看到的是这样:

```shell
noop
```

这意味着你 rebase 的分支和当前分支在同一个提交(commit)上, 或者 _领先(ahead)_ 当前分支。 你可以尝试:

- 检查确保主(master)分支没有问题
- rebase `HEAD\~2` 或者更早

#### 有冲突的情况

如果你不能成功的完成 rebase, 你可能必须要解决冲突。

首先执行 `git status` 找出哪些文件有冲突:

```shell
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   README.md
```

在这个例子里面, `README.md` 有冲突。 打开这个文件找到类似下面的内容:

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

你需要解决新提交的代码(示例里, 从中间`==`线到`new-commit`的地方)与`HEAD` 之间不一样的地方.

有时候这些合并非常复杂，你应该使用可视化的差异编辑器(visual diff editor):

```shell
(master*)$ git mergetool -t opendiff
```

在你解决完所有冲突和测试过后, `git add` 变化了的(changed)文件, 然后用`git rebase --continue` 继续 rebase。

```shell
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

如果在解决完所有的冲突过后，得到了与提交前一样的结果, 可以执行`git rebase --skip`。

任何时候你想结束整个 rebase 过程，回来 rebase 前的分支状态, 你可以做:

```shell
(my-branch)$ git rebase --abort
```

## 其他

### 克隆所有子模块

```shell
git clone --recursive git://github.com/foo/bar.git
```

如果已经克隆了:

```shell
git submodule update --init --recursive
```

### 删除标签(tag)

```shell
git tag -d <tag_name>
git push <remote> :refs/tags/<tag_name>
```

### 恢复已删除标签(tag)

如果你想恢复一个已删除标签(tag), 可以按照下面的步骤: 首先, 需要找到无法访问的标签(unreachable tag):

```shell
git fsck --unreachable | grep tag
```

记下这个标签(tag)的 hash，然后用 Git 的 [update-ref](http://git-scm.com/docs/git-update-ref):

```shell
git update-ref refs/tags/<tag_name> <hash>
```

这时你的标签(tag)应该已经恢复了。

### 已删除补丁(patch)

如果某人在 GitHub 上给你发了一个 pull request, 但是然后他删除了他自己的原始 fork, 你将没法克隆他们的提交(commit)或使用 `git am`。在这种情况下, 最好手动的查看他们的提交(commit)，并把它们拷贝到一个本地新分支，然后做提交。

做完提交后, 再修改作者，参见[变更作者](#commit-wrong-author)。 然后, 应用变化, 再发起一个新的 pull request。

## 跟踪文件(Tracking Files)

### 我只想改变一个文件名字的大小写，而不修改内容

```shell
(master)$ git mv --force myfile MyFile
```

### 我想从 Git 删除一个文件，但保留该文件

```shell
(master)$ git rm --cached log.txt
```

## 配置

> 配置(Configuration)

### 给 Git 命令添加别名

在 OS X 和 Linux 下, 你的 Git 的配置文件储存在 `~/.gitconfig`。我在`[alias]` 部分添加了一些快捷别名(和一些我容易拼写错误的)，如下:

```vim
[alias]
    a = add
    amend = commit --amend
    c = commit
    ca = commit --amend
    ci = commit -a
    co = checkout
    d = diff
    dc = diff --changed
    ds = diff --staged
    f = fetch
    loll = log --graph --decorate --pretty=oneline --abbrev-commit
    m = merge
    one = log --pretty=oneline
    outstanding = rebase -i @{u}
    s = status
    unpushed = log @{u}
    wc = whatchanged
    wip = rebase -i @{u}
    zap = fetch -p
```

### 缓存一个仓库的用户名和密码

你可能有一个仓库需要授权，这时你可以缓存用户名和密码，而不用每次推/拉(push/pull)的时候都输入，Credential helper 能帮你。

```shell
git config --global credential.helper cache
## Set git to use the credential memory cache
```

```shell
git config --global credential.helper 'cache --timeout=3600'
## Set the cache to timeout after 1 hour (setting is in seconds)
```

## Fork 项目

GitHub 中 Fork 是 服务端的代码仓库克隆（即 新克隆出来的代码仓库在远程服务端），包含了原来的仓库（即 upstream repository，上游仓库）所有内容，如分支、Tag、提交。代码托管服务（如 Github、BitBucket）提供了方便的完成 Fork 操作的功能（在仓库页面点一下 Fork 按钮）。这样有了一个你自己的可以自由提交的远程仓库，然后可以通过的 Pull Request 把你的提交贡献回 原仓库。而对于原仓库 Owner 来说，鼓励别人 Fork 自己的仓库，通过 Pull Request 给自己的仓库做贡献，也能提高了自己仓库的知名度。

> 参考：[Fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)

（1）执行 `git remote -v`，您将看到当前为 fork 配置的远程存储库。

（2）添加上游项目的仓库地址

```shell
git remote add upstream <github仓库地址>
```

（3）确认是否添加成功，再次键入 `git remote -v`。

（4）获取上游项目更新，可以执行 `git fetch upstream`

（5）同步上游项目的代码到新仓库

```shell
# merge
git merge upstream/master
# rebase
git rebase upstream/master origin/master
```

## 我不知道我做错了些什么

你把事情搞砸了：你 `重置(reset)` 了一些东西, 或者你合并了错误的分支, 亦或你强推了后找不到你自己的提交(commit)了。有些时候, 你一直都做得很好, 但你想回到以前的某个状态。

这就是 `git reflog` 的目的， `reflog` 记录对分支顶端(the tip of a branch)的任何改变, 即使那个顶端没有被任何分支或标签引用。基本上, 每次 HEAD 的改变, 一条新的记录就会增加到`reflog`。遗憾的是，这只对本地分支起作用，且它只跟踪动作 (例如，不会跟踪一个没有被记录的文件的任何改变)。

```shell
(master)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD\~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to master
c10f740 HEAD@{2}: checkout: moving from master to 2.2
```

上面的 reflog 展示了从 master 分支签出(checkout)到 2.2 分支，然后再签回。 那里，还有一个硬重置(hard reset)到一个较旧的提交。最新的动作出现在最上面以 `HEAD@{0}`标识.

如果事实证明你不小心回移(move back)了提交(commit), reflog 会包含你不小心回移前 master 上指向的提交(0254ea7)。

```shell
git reset --hard 0254ea7
```

然后使用 git reset 就可以把 master 改回到之前的 commit，这提供了一个在历史被意外更改情况下的安全网。

## 参考资料

- **官方资源**
  - [Git 官网](https://git-scm.com/)
  - [Git Github](https://github.com/git/git)
- **模板**
  - [gitignore 模板](https://github.com/github/gitignore) - .gitignore 文件模板
  - [gitattributes 模板](https://github.com/alexkaratarakis/gitattributes) - .gitattributes 文件模板
  - [github-cheat-sheet](https://github.com/tiimgreen/github-cheat-sheet) - git 命令简略图表
- **Git 教程**
  - [Learn Git branching](https://learngitbranching.js.org/) - 交互式教程
  - [Git 官方推荐教程](https://git-scm.com/book/zh/v2) - Scott Chacon 的 Git 书。
  - [Git 中文教程](https://github.com/geeeeeeeeek/git-recipes)
  - [廖雪峰的 Git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
  - [有关 git 的学习资源](https://github.com/xirong/my-git)
- **文章**
  - [Git Cookbook](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md)
  - [Git 奇技淫巧](https://github.com/521xueweihan/git-tips)
  - [Git 风格指南](https://github.com/aseaday/git-style-guide)
  - [Git 在团队中的最佳实践--如何正确使用 Git Flow](http://www.cnblogs.com/cnblogsfans/p/5075073.html)
- **Git 工具**
  - [guis](https://git-scm.com/downloads/guis) - Git 官网展示的客户端工具列表。
  - [gogs](https://github.com/gogits/gogs) - 极易搭建的自助 Git 服务。
  - [gitflow](https://github.com/nvie/gitflow) - 应用 [fit-flow](http://nvie.com/posts/a-successful-git-branching-model/) 模型的工具。
  - [firstaidgit.io](http://firstaidgit.io/) 一个可搜索的最常被问到的 Git 的问题
  - [git-extra-commands](https://github.com/unixorn/git-extra-commands) - 一堆有用的额外的 Git 脚本
  - [git-extras](https://github.com/tj/git-extras) - GIT 工具集 -- repo summary, repl, changelog population, author commit percentages and more
  - [git-fire](https://github.com/qw3rtman/git-fire) - git-fire 是一个 Git 插件，用于帮助在紧急情况下添加所有当前文件, 做提交(committing), 和推(push)到一个新分支(阻止合并冲突)。
  - [git-tips](https://github.com/git-tips/tips) - Git 小提示
  - [git-town](https://github.com/Originate/git-town) - 通用，高级 Git 工作流支持！
- **GUI 客户端**
  - [GitKraken](https://www.gitkraken.com/) - 豪华的 Git 客户端 Windows, Mac & Linux
  - [git-cola](https://git-cola.github.io/) - 另外一个 Git 客户端 Windows & OS X
  - [GitUp](https://github.com/git-up/GitUp) - 一个新的 Git 客户端，在处理 Git 的复杂性上有自己的特点
  - [gitx-dev](https://rowanj.github.io/gitx/) - 图形化的 Git 客户端 OS X
  - [Source Tree](https://www.sourcetreeapp.com/) - 免费的图形化 Git 客户端 Windows & OS X
  - [Tower](http://www.git-tower.com/) - 图形化 Git 客户端 OS X(付费)
- **git cheat sheet**
  - [github-git-cheat-sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
