+++
title = 'dingo-api-返回-response--array()--setStatusCode()'
date = 2022-04-16T11:29:14+08:00
tags = []
draft = false
+++

phpstorm 对 `$this->response->item(***)->setStatusCode(***)` 中的 item() 和 setStatusCode() 都有提示,  

找了下 Dingo\Api\Routing\Helpers trait类 中的 \_\_call() 方法
```
    public function __call($method, $parameters)
    {
        if (method_exists($this->response(), $method) || $method == 'array') {
            return call_user_func_array([$this->response(), $method], $parameters);
        }

        throw new ErrorException('Undefined method '.get_class($this).'::'.$method);
    }
```

意为调用 $this->response() 类( Factory类)的 $method (也就是 array() 方法),   并将 $parameters 作为参数
也就是 Factory 类的 array() 方法, 没想到 在 Factory 类中, array() 方法也是通过 \_\_call() 魔术方法调用的...


另: call_user_func_array() 方法: 调用回调函数，并把一个数组参数作为回调函数的参数  
如果调用的方法是一个类方法, 那么用 数组将 类名和方法名 组合起来 [$this->response(), $method] 表示回调方法
