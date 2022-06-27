+++
title = 'jQuery-AJAX-提交表单信息时,提交按钮不能为-submit'
date = 2018-04-24T19:17:50+08:00
tags = ['php']
draft = false
+++

ajax代码:
```
<script>
    jQuery("#btn").click(function () {
        jQuery.ajax({
            type: 'POST',
            url: "<{:url('admin/admin/update')}>",
            data: jQuery("form").serialize(),
            dataType: 'json',
            success: function (data) {
                if (data.status == 1) {
                    alert(data.message);
                    // window.location.href = "<{:url('admin/index')}>";
                } else {
                    alert(data.message);
                    // window.location.href = "<{:url('admin/edit')}>";
                }
            }
        })
    });
</script>
```
<br>

html文件可以是:
```
<input type="button" id="btn0" value="保存">
<button type="button" id="btn1">保存</button>
<a>保存</a>
```
<br>
html文件不能是:
```
<input type="submit" id="btn2" value="保存">
<button type="submit" id="btn3">保存</button>
<button id="btn4">保存</button>
<!--button 的默认type为submit -->
