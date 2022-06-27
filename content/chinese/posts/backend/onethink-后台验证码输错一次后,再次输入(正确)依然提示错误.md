+++
title = 'onethink-后台验证码输错一次后,再次输入(正确)依然提示错误'
date = 2018-10-31T13:58:03+08:00
tags = []
draft = false
+++

```
 if(!check_verify($verify)){
//                 $this->error('验证码输入错误！');
//                 $this->error('验证码输入错误！',U('/Admin/Public/login'),2);// 自己改
                 $this->error('验证码输入错误！','Admin/Public/login',2);
            }

```
> success方法的默认跳转地址是 $_SERVER["HTTP_REFERER"] ，
error方法的默认跳转地址是 javascript:history.back(-1); 。

原因:
因为默认的 $this->error , 是通过  javascript:history.back(-1) 跳转的, 这样就依然显示之前生成的验证码, 而后台已经生成新的验证码, 所以会出现报错;

解决办法:
把 error 方法的路径填写, 那么会相当于重新打开登陆页面, 也就可以正常登陆
