+++
title = 'laravel-路由参数与控制器进行隐性绑定'
date = 2019-04-29T14:53:29+08:00
tags = []
draft = false
+++

```
// 路由文件
Route('topics/{topic}', 'TopicsController@show');

// 控制器
public function show(Topics $topic) {
    // todo
}
```

其中路由中的 {topic} 是与 控制器中的 $topic 进行绑定的, 如果前面写成 id, 后面则用 $id, 也能正确进行模型绑定

```
// 路由文件
Route('topics/{id}', 'TopicsController@show');

// 控制器
public function show(Topics $id) {
    // todo
}
```

[参考自 learnku](https://learnku.com/laravel/t/14846/is-the-query-condition-the-default-primary-key) 
