+++
title = 'git-删除版本库中的文件夹'
date = 2019-03-09T12:00:16+08:00
tags = []
draft = false
+++

##### 起因: 
-  使用 phpstorm 新建一个文件时, 创建了一个空的本地 git 版本库 ( `git init` ), 并执行了全部提交( `git add -A; git commit`);
- 对项目进行开发后, 要进行第一次提交, `git status` 发现 phpstorm 的相关文件 `.idea` 也发生了变化 `modified`, 然而这是不应该提交到版本库的, 所以要将其放到 `.gitignore` 中
- 此时, `git status` 依然会出现 `.idea` 发生了改变, 但未添加到暂存区, changes not staged for commit
- 所以不仅当前工作区中要修改 `.gitignore` 文件, 版本库中的已经提交过的版本中也要删除这个文件夹, 使用
`git rm -r folder_path --cached` 命令即可

##### 解决办法:
1. `.gitignore` 文件中添加要忽略的文件
2.  执行 `git rm -r folder_path --cached` 删除版本库中对应的文件夹


##### 说明:
`git rm -r folder_path --cached`  中
-  `rm` 为 `remove` -- 删除,
-  `-r ` 为 `recursion` -- 递归(删除文件夹里面的全部子文件和子文件夹, 类似于 `linux` 操作中 `chmod -R 777 folder_path` 中的 `-R`)
-  `folder_path` 为指定的要删除的文件夹路径
- `--cached` 指的是删除版本库而保留本地的文件(夹), 如果不加上 `--cached`, 那么本地的文件也会删除

> 如果需要删除暂存区的文件, 同时工作区也不需要这个文件了, 可以使用 `git rm -r folder_path`
> 如果需要删除暂存区的文件, 但工作区保留这个文件, 先把路径添加到 `.gitignore` 中, 然后 `git rm -r folder_path --cached`

-----------------------------------------------------------------------------------------
参考自: 
https://blog.csdn.net/qq_37174526/article/details/86770976;
https://www.cnblogs.com/toward-the-sun/p/6599656.html

