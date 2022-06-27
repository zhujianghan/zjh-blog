+++
title = 'thinkphp5-模板渲染-在控制器中不能-少了return'
date = 2018-04-26T18:00:40+08:00
tags = ['php']
draft = false
+++

```
namespace module\controller;
use think\Controller;
class index extends Controller
{
        public function index{
                return this->view->fetch('index');
        }
}
