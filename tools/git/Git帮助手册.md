# Git 帮助手册

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. 仓库](#1-仓库)
  - [1.1. 初始化仓库](#11-初始化仓库)
  - [1.2. 克隆仓库](#12-克隆仓库)
- [2. 储藏](#2-储藏)
- [3. 暂存](#3-暂存)
  - [3.1. 暂存指定文件](#31-暂存指定文件)
  - [3.2. 暂存当前目录下所有修改](#32-暂存当前目录下所有修改)
  - [3.3. 暂存所有修改](#33-暂存所有修改)
  - [3.4. 暂存文件部分内容](#34-暂存文件部分内容)
  - [3.5. 把暂存的内容变成未暂存，把未暂存的内容暂存起来](#35-把暂存的内容变成未暂存把未暂存的内容暂存起来)
- [4. 提交](#4-提交)
  - [4.1. 查看最近一次提交](#41-查看最近一次提交)
  - [4.2. 提交本地的所有修改](#42-提交本地的所有修改)
  - [4.3. 提交暂存的修改](#43-提交暂存的修改)
  - [4.4. 把暂存的内容添加到上一次的提交](#44-把暂存的内容添加到上一次的提交)
  - [4.5. 附加消息提交](#45-附加消息提交)
  - [4.6. 修改提交信息](#46-修改提交信息)
  - [4.7. 修改提交信息中的用户名和邮箱](#47-修改提交信息中的用户名和邮箱)
  - [4.8. 从提交中移除一个文件](#48-从提交中移除一个文件)
  - [4.9. 删除最后一次提交](#49-删除最后一次提交)
  - [4.10. 删除任意提交](#410-删除任意提交)
  - [4.11. 我尝试推一个修正后的提交(amended commit)到远程，但是报错](#411-我尝试推一个修正后的提交amended-commit到远程但是报错)
  - [4.12. 不小心强制重置，想找回内容](#412-不小心强制重置想找回内容)
- [5. 重置](#5-重置)
- [6. 更新](#6-更新)
- [7. 推送](#7-推送)
  - [7.1. 推送提交到远程仓库](#71-推送提交到远程仓库)
  - [7.2. 发布标签](#72-发布标签)
- [8. 未暂存](#8-未暂存)
  - [8.1. 把未暂存的内容移动到一个新分支](#81-把未暂存的内容移动到一个新分支)
  - [8.2. 我想把未暂存的内容移动到另一个已存在的分支](#82-我想把未暂存的内容移动到另一个已存在的分支)
  - [8.3. 丢弃本地未提交的变化](#83-丢弃本地未提交的变化)
  - [8.4. 我想丢弃某些未暂存的内容](#84-我想丢弃某些未暂存的内容)
- [9. 分支](#9-分支)
  - [9.1. 列出所有的分支](#91-列出所有的分支)
  - [9.2. 列出所有的远端分支](#92-列出所有的远端分支)
  - [9.3. 基于当前分支创建新分支](#93-基于当前分支创建新分支)
  - [9.4. 基于远程分支创建新分支](#94-基于远程分支创建新分支)
  - [9.5. 删除本地分支](#95-删除本地分支)
  - [9.6. 强制删除本地分支](#96-强制删除本地分支)
  - [9.7. 删除远程分支](#97-删除远程分支)
  - [9.8. 切换分支](#98-切换分支)
  - [9.9. 创建并切换到新分支](#99-创建并切换到新分支)
  - [9.10. 我从错误的分支拉取了内容，或把内容拉取到了错误的分支](#910-我从错误的分支拉取了内容或把内容拉取到了错误的分支)
  - [9.11. 我想扔掉本地的提交(commit)，以便我的分支与远程的保持一致](#911-我想扔掉本地的提交commit以便我的分支与远程的保持一致)
  - [9.12. 我需要提交到一个新分支，但错误的提交到了 master](#912-我需要提交到一个新分支但错误的提交到了-master)
  - [9.13. 我想保留来自另外一个 ref-ish 的整个文件](#913-我想保留来自另外一个-ref-ish-的整个文件)
  - [9.14. 我把几个提交(commit)提交到了同一个分支，而这些提交应该分布在不同的分支里](#914-我把几个提交commit提交到了同一个分支而这些提交应该分布在不同的分支里)
  - [9.15. 我想删除上游(upstream)分支被删除了的本地分支](#915-我想删除上游upstream分支被删除了的本地分支)
  - [9.16. 我不小心删除了我的分支](#916-我不小心删除了我的分支)
  - [9.17. 我想删除一个分支](#917-我想删除一个分支)
  - [9.18. 我想从别人正在工作的远程分支签出(checkout)一个分支](#918-我想从别人正在工作的远程分支签出checkout一个分支)
- [10. 标签](#10-标签)
  - [10.1. 给当前版本打标签](#101-给当前版本打标签)
  - [10.2. 给当前版本打标签并附加消息](#102-给当前版本打标签并附加消息)
- [11. Rebase 和 Merge](#11-rebase-和-merge)
  - [11.1. 将分支合并到当前 HEAD 中](#111-将分支合并到当前head中)
  - [11.2. 将当前 HEAD 版本重置到分支中](#112-将当前head版本重置到分支中)
  - [11.3. 撤销 rebase/merge](#113-撤销-rebasemerge)
  - [11.4. 我已经 rebase 过, 但是我不想强推(force push)](#114-我已经-rebase-过-但是我不想强推force-push)
  - [11.5. 我需要组合(combine)几个提交(commit)](#115-我需要组合combine几个提交commit)
  - [11.6. 检查是否分支上的所有提交(commit)都合并(merge)过了](#116-检查是否分支上的所有提交commit都合并merge过了)
  - [11.7. 交互式 rebase(interactive rebase)可能出现的问题](#117-交互式-rebaseinteractive-rebase可能出现的问题)
- [12. 查看信息](#12-查看信息)
- [13. 其他](#13-其他)
  - [13.1. 克隆所有子模块](#131-克隆所有子模块)
  - [13.2. 删除标签(tag)](#132-删除标签tag)
  - [13.3. 恢复已删除标签(tag)](#133-恢复已删除标签tag)
  - [13.4. 已删除补丁(patch)](#134-已删除补丁patch)
- [14. 跟踪文件(Tracking Files)](#14-跟踪文件tracking-files)
  - [14.1. 我只想改变一个文件名字的大小写，而不修改内容](#141-我只想改变一个文件名字的大小写而不修改内容)
  - [14.2. 我想从 Git 删除一个文件，但保留该文件](#142-我想从-git-删除一个文件但保留该文件)
- [15. 配置](#15-配置)
  - [15.1. 给 Git 命令添加别名](#151-给-git-命令添加别名)
  - [15.2. 缓存一个仓库的用户名和密码](#152-缓存一个仓库的用户名和密码)
- [16. Fork 项目](#16-fork-项目)
- [17. 我不知道我做错了些什么](#17-我不知道我做错了些什么)
- [18. 参考资料](#18-参考资料)

<!-- /TOC -->

国外网友制作了一张 Git Cheat Sheet，总结很精炼，各位不妨收藏一下。

本节选择性介绍 git 中比较常用的命令行场景。

![img](http://dunwu.test.upcdn.net/cs/web/git/git-cheat-sheet.png)

## 安装

**（1）Debian/Ubuntu 环境安装**

如果你使用的系统是 Debian/Ubuntu ， 安装命令为：

```shell
$ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
> libz-dev libssl-dev
$ apt-get install git-core
$ git --version
git version 1.8.1.2
```

**（2）Centos/RedHat 环境安装**

如果你使用的系统是 Centos/RedHat ，安装命令为：

```shell
$ yum install curl-devel expat-devel gettext-devel \
> openssl-devel zlib-devel
$ yum -y install git-core
$ git --version
git version 1.7.1
```

**（3）Windows 环境安装**

在[Git 官方下载地址](https://git-scm.com/downloads)下载 exe 安装包。按照安装向导安装即可。

建议安装 Git Bash 这个 git 的命令行工具。

**（4）Mac 环境安装**

在[Git 官方下载地址](https://git-scm.com/downloads)下载 mac 安装包。按照安装向导安装即可。

## 配置

Git 自带一个 `git config` 的工具来帮助设置控制 Git 外观和行为的配置变量。 这些变量存储在三个不同的位置：

- `/etc/gitconfig` 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果使用带有 `--system` 选项的 `git config` 时，它会从此文件读写配置变量。
- `~/.gitconfig` 或 `~/.config/git/config` 文件：只针对当前用户。 可以传递 `--global` 选项让 Git 读写此文件。
- 当前使用仓库的 Git 目录中的 `config` 文件（就是 `.git/config`）：针对该仓库。

每一个级别覆盖上一级别的配置，所以 `.git/config` 的配置变量会覆盖 `/etc/gitconfig` 中的配置变量。

在 Windows 系统中，Git 会查找 `$HOME` 目录下（一般情况下是 `C:\Users\$USER`）的 `.gitconfig` 文件。 Git 同样也会寻找 `/etc/gitconfig` 文件，但只限于 MSys 的根目录下，即安装 Git 时所选的目标位置。

### 配置用户信息

当安装完 Git 应该做的第一件事就是设置你的用户名称与邮件地址。 这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改：

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

再次强调，如果使用了 `--global` 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 `--global` 选项的命令来配置。

很多 GUI 工具都会在第一次运行时帮助你配置这些信息。

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

## 1. 仓库

### 1.1. 初始化仓库

```shell
$ git init
```

### 1.2. 克隆仓库

```bash
# 通过 SSH
$ git clone ssh://user@domain.com/repo.git
# 通过 HTTP
$ git clone http://domain.com/user/repo.git
```

## 2. 储藏

有时，我们需要在同一个项目的不同分支上工作。当需要切换分支时，偏偏本地的工作还没有完成，此时，提交修改显得不严谨，但是不提交代码又无法切换分支。这时，你可以使用 `git stash` 将本地的修改内容作为草稿储藏起来。

官方称之为储藏，但我个人更喜欢称之为存草稿。

```shell
# 1. 将修改作为当前分支的草稿保存
$ git stash

# 2. 查看草稿列表
$ git stash list
stash@{0}: WIP on master: 6fae349 :memo: Writing docs.

# 3.1 删除草稿
$ git stash drop stash@{0}

# 3.2 读取草稿
$ git stash apply stash@{0}
```

## 3. 暂存

`git add` 命令用于将修改添加到暂存区。

### 3.1. 暂存指定文件

```shell
git add xxx
```

### 3.2. 暂存当前目录下所有修改

```shell
git add .
```

### 3.3. 暂存所有修改

```
git add -A
```

### 3.4. 暂存文件部分内容

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

### 3.5. 把暂存的内容变成未暂存，把未暂存的内容暂存起来

这个有点困难， 我能想到的最好的方法是先 stash 未暂存的内容， 然后重置(reset)，再 pop 第一步 stashed 的内容, 最后再 add 它们。

```shell
git stash -k
git reset --hard
git stash pop
git add -A
```

## 4. 提交

`git commit` 命令用于将修改保存到到本地仓库。

### 4.1. 查看最近一次提交

```shell
git show
```

或者

```shell
git log -n1 -p
```

### 4.2. 提交本地的所有修改

```shell
git commit -a
```

### 4.3. 提交暂存的修改

```shell
git commit
```

### 4.4. 把暂存的内容添加到上一次的提交

```shell
git commit --amend
```

### 4.5. 附加消息提交

```shell
git commit -m 'commit message'
```

### 4.6. 修改提交信息

如果你的提交信息写错了且这次提交（commit）还没有推送（push），可以使用以下命令修改：

```shell
git commit --amend
```

或者

```shell
git commit --amend -m 'xxxxxxx'
```

### 4.7. 修改提交信息中的用户名和邮箱

```shell
git commit --amend --author "New Authorname <authoremail@mydomain.com>"
```

### 4.8. 从提交中移除一个文件

```shell
git checkout HEAD^ myfile
git add -A
git commit --amend
```

### 4.9. 删除最后一次提交

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

### 4.10. 删除任意提交

同样的警告：不到万不得已的时候不要这么做.

```shell
git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
git push -f [remote] [branch]
```

或者做一个 [交互式 rebase](#interactive-rebase) 删除那些你想要删除的提交(commit)里所对应的行。

### 4.11. 我尝试推一个修正后的提交(amended commit)到远程，但是报错

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

### 4.12. 不小心强制重置，想找回内容

如果你意外的做了 `git reset --hard`, 你通常能找回你的提交(commit), 因为 Git 对每件事都会有日志，且都会保存几天。

```shell
(master)$ git reflog
```

你将会看到一个你过去提交(commit)的列表, 和一个重置的提交。 选择你想要回到的提交(commit)的 SHA，再重置一次:

```shell
(master)$ git reset --hard SHA1234
```

这样就完成了。

## 5. 重置

撤销本地修改：

```shell
# 移除缓存区的所有文件（i.e. 撤销上次git add）
$ git reset HEAD

# 将HEAD重置到上一次提交的版本，并将之后的修改标记为未添加到缓存区的修改
$ git reset <commit>

# 将HEAD重置到上一次提交的版本，并保留未提交的本地修改
$ git reset --keep <commit>

# 放弃工作目录下的所有修改
$ git reset --hard HEAD

# 将HEAD重置到指定的版本，并抛弃该版本之后的所有修改
$ git reset --hard <commit-hash>

# 用远端分支强制覆盖本地分支
$ git reset --hard <remote/branch> e.g., upstream/master, origin/my-feature

# 放弃某个文件的所有本地修改
$ git checkout HEAD <file>
```

删除添加`.gitignore`文件前错误提交的文件：

```shell
# 提交一条 git 记录，提交信息为 remove xyz file
$ git rm -r --cached .
$ git add .
$ git commit -m "remove xyz file"
```

撤销远程修改（创建一个新的提交，并回滚到指定版本）：

```shell
# revert 哈希号为 commit-hash 的记录
$ git revert <commit-hash>
```

彻底删除指定版本：

```shell
# 执行下面命令后，commit-hash 提交后的记录都会被彻底删除，使用需谨慎
$ git reset --hard <commit-hash>
$ git push -f
```

## 6. 更新

```shell
# 下载远程端版本，但不合并到HEAD中
$ git fetch <remote>

# 将远程端版本合并到本地版本中
$ git pull origin master

# 以rebase方式将远端分支与本地合并
$ git pull --rebase <remote> <branch>
```

## 7. 推送

### 7.1. 推送提交到远程仓库

```shell
git push remote <remote> <branch>
```

### 7.2. 发布标签

```shell
git push --tags
```

## 8. 未暂存

> 未暂存(Unstaged)的内容

### 8.1. 把未暂存的内容移动到一个新分支

- `git checkout -b my-branch`

### 8.2. 我想把未暂存的内容移动到另一个已存在的分支

```shell
git stash
git checkout my-branch
git stash pop
```

### 8.3. 丢弃本地未提交的变化

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

### 8.4. 我想丢弃某些未暂存的内容

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

## 9. 分支

> 分支(Branches)

### 9.1. 列出所有的分支

```bash
git branch
```

### 9.2. 列出所有的远端分支

```bash
git branch -r
```

### 9.3. 基于当前分支创建新分支

```bash
git branch <new-branch>
```

### 9.4. 基于远程分支创建新分支

```bash
git branch --track <new-branch> <remote-branch>
```

### 9.5. 删除本地分支

```bash
git branch -d <branch>
```

### 9.6. 强制删除本地分支

> 注意：强制删除本地分支，将会丢失未合并的修改

```bash
git branch -D <branch>
```

### 9.7. 删除远程分支

```bash
git push <remote> :<branch> (since Git v1.5.0)
git push <remote> --delete <branch> (since Git v1.7.0)
```

### 9.8. 切换分支

```bash
git checkout <branch>
```

### 9.9. 创建并切换到新分支

```bash
git checkout -b <branch>
```

### 9.10. 我从错误的分支拉取了内容，或把内容拉取到了错误的分支

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

### 9.11. 我想扔掉本地的提交(commit)，以便我的分支与远程的保持一致

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

### 9.12. 我需要提交到一个新分支，但错误的提交到了 master

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

### 9.13. 我想保留来自另外一个 ref-ish 的整个文件

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

### 9.14. 我把几个提交(commit)提交到了同一个分支，而这些提交应该分布在不同的分支里

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

### 9.15. 我想删除上游(upstream)分支被删除了的本地分支

一旦你在 github 上面合并(merge)了一个 pull request, 你就可以删除你 fork 里被合并的分支。 如果你不准备继续在这个分支里工作, 删除这个分支的本地拷贝会更干净，使你不会陷入工作分支和一堆陈旧分支的混乱之中。

```shell
git fetch -p
```

### 9.16. 我不小心删除了我的分支

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

### 9.17. 我想删除一个分支

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

### 9.18. 我想从别人正在工作的远程分支签出(checkout)一个分支

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

## 10. 标签

### 10.1. 添加标签

```shell
$ git tag <tag-name>
```

### 10.2. 添加标签并附加消息

```shell
$ git tag -a <tag-name>
```

### 13.2. 删除标签

```shell
git tag -d <tag_name>
git push <remote> :refs/tags/<tag_name>
```

### 13.3. 恢复已删除标签

如果你想恢复一个已删除标签(tag), 可以按照下面的步骤: 首先, 需要找到无法访问的标签(unreachable tag):

```shell
git fsck --unreachable | grep tag
```

记下这个标签(tag)的 hash，然后用 Git 的 [update-ref](http://git-scm.com/docs/git-update-ref):

```shell
git update-ref refs/tags/<tag_name> <hash>
```

这时你的标签(tag)应该已经恢复了。

## 11. Rebase 和 Merge

> merge 与 rebase 虽然是 git 常用功能，但是强烈建议不要使用 git 命令来完成这项工作。
>
> 因为如果出现代码冲突，在没有代码比对工具的情况下，实在太艰难了。
>
> 你可以考虑使用各种 Git GUI 工具。

### 11.1. 将分支合并到当前 HEAD 中

```bash
git merge <branch>
```

### 11.2. 将当前 HEAD 版本重置到分支中

```bash
git rebase <branch>
```

### 11.3. 撤销 rebase/merge

你可以合并(merge)或 rebase 了一个错误的分支, 或者完成不了一个进行中的 rebase/merge。 Git 在进行危险操作的时候会把原始的 HEAD 保存在一个叫 ORIG_HEAD 的变量里, 所以要把分支恢复到 rebase/merge 前的状态是很容易的。

```shell
(my-branch)$ git reset --hard ORIG_HEAD
```

### 11.4. 我已经 rebase 过, 但是我不想强推(force push)

不幸的是，如果你想把这些变化(changes)反应到远程分支上，你就必须得强推(force push)。 是因你快进(Fast forward)了提交，改变了 Git 历史, 远程分支不会接受变化(changes)，除非强推(force push)。这就是许多人使用 merge 工作流, 而不是 rebasing 工作流的主要原因之一， 开发者的强推(force push)会使大的团队陷入麻烦。使用时需要注意，一种安全使用 rebase 的方法是，不要把你的变化(changes)反映到远程分支上, 而是按下面的做:

```shell
(master)$ git checkout my-branch
(my-branch)$ git rebase -i master
(my-branch)$ git checkout master
(master)$ git merge --ff-only my-branch
```

更多, 参见 [this SO thread](http://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push).

### 11.5. 我需要组合(combine)几个提交(commit)

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

### 11.6. 检查是否分支上的所有提交(commit)都合并(merge)过了

检查一个分支上的所有提交(commit)是否都已经合并(merge)到了其它分支, 你应该在这些分支的 head(或任何 commits)之间做一次 diff:

```shell
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

这会告诉你在一个分支里有而另一个分支没有的所有提交(commit), 和分支之间不共享的提交(commit)的列表。 另一个做法可以是:

```shell
(master)$ git log master ^feature/120-on-scroll --no-merges
```

### 11.7. 交互式 rebase(interactive rebase)可能出现的问题

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

## 12. 查看信息

显示工作路径下已修改的文件：`git status`

显示与上次提交版本文件的不同：`git diff`

显示提交历史：

```shell
# 从最新提交开始，显示所有的提交记录（显示hash， 作者信息，提交的标题和时间）
$ git log

# 显示某个用户的所有提交
$ git log --author="username"

# 显示某个文件的所有修改
$ git log -p <file>
```

显示搜索内容：

```shell
# 从当前目录的所有文件中查找文本内容
$ git grep "Hello"

# 在某一版本中搜索文本
$ git grep "Hello" v2.5
```

## 13. 其他

### 13.1. 克隆所有子模块

```shell
git clone --recursive git://github.com/foo/bar.git
```

如果已经克隆了:

```shell
git submodule update --init --recursive
```

### 13.4. 已删除补丁(patch)

如果某人在 GitHub 上给你发了一个 pull request, 但是然后他删除了他自己的原始 fork, 你将没法克隆他们的提交(commit)或使用 `git am`。在这种情况下, 最好手动的查看他们的提交(commit)，并把它们拷贝到一个本地新分支，然后做提交。

做完提交后, 再修改作者，参见[变更作者](#commit-wrong-author)。 然后, 应用变化, 再发起一个新的 pull request。

## 14. 跟踪文件(Tracking Files)

### 14.1. 我只想改变一个文件名字的大小写，而不修改内容

```shell
(master)$ git mv --force myfile MyFile
```

### 14.2. 我想从 Git 删除一个文件，但保留该文件

```shell
(master)$ git rm --cached log.txt
```

## 16. Fork 项目

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

## 17. 我不知道我做错了些什么

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

## 18. 参考资料

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
