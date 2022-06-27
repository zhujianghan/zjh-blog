+++
title = 'js-确认-a-标签是否跳转'
date = 2018-10-20T19:10:40+08:00
tags = []
draft = false
+++

```
<!-- 默认使用 jquery -->
    <a href="http://www.hao123.com">a标签</a>

    <script>
        $(function(){
            $('a').click(function(){
                alert('ok');
                var $res = confirm('真的要跳转吗?');
                if(!$res){
                    // $(this).href(''); 这种会导致 href 变为空, 下次再要点击时,不能跳转
                    return false;// 这样可以成功达到确认的目的,且不影响下次点击
                }
            });
        });
    </script>
```

