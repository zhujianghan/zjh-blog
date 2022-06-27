+++
title = '使用-echo-写入文件'
date = 2021-04-22T09:30:04+08:00
tags = ['linux']
draft = false
+++

`docker` 容器内很可能没有 `vi` 等编辑工具, 可使用 echo 或 cat 进行写入
```
# 覆盖写入, 文件不存在则新建后写入
echo "abc" > file.txt

# 尾行追加写入, 文件不存在则新建后写入
echo "def" >> file.txt
echo $(date) >> file.txt
```

```
# 覆盖写入
cat << EOF > m.txt  
> d
> e
> f
> EOF

# 追加写入
cat <<EOF >> m.txt  
> d
> e
> f
> EOF

```
