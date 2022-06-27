+++
title = 'element-ui-一系列-then,-catch-事件转成-async-await'
date = 2019-11-25T10:36:39+08:00
tags = ['vue']
draft = false
+++

```
// message box
async open() {
        const res = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示').catch(_ => {
          console.log('已取消, 结束')
        })
        
        if (res !== 'confirm') {
          return
        }
        
        console.log(res, "已确认, 可以next")
}
```


[原文参见 csdn](https://blog.csdn.net/ji519974770/article/details/80713729)
