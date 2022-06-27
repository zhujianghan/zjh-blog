+++
title = '在弹窗通过layer插件打开的情况下，采用jQuery-Ajax提交表单后，弹窗无法关闭'
date = 2018-04-24T20:08:57+08:00
tags = ['php']
draft = false
+++

原文地址:https://blog.csdn.net/cc_niu/article/details/77949829


自己代码:
```
<script>
    jQuery("#updatebtn").click(function () {
        jQuery.ajax({
            type: 'POST',
            url: "<{:url('admin/admin/update')}>",
            data: jQuery(".layui-form").serialize(),
            dataType: 'json',
            success: function (data) {
                if (data.status == 1) {
                    // 成功返回
                    alert(data.message);
                    // 刷新父级窗口,即可关闭当前窗口
                    window.parent.location.reload();
                } else {
                    // 失败返回
                    alert(data.message);
                    window.location.href = "<{:url('admin/edit')}>";
                }
            }
        })
    });
</script>
