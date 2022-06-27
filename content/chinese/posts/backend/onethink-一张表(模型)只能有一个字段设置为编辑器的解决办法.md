+++
title = 'onethink-一张表(模型)只能有一个字段设置为编辑器的解决办法'
date = 2018-12-05T15:03:11+08:00
tags = []
draft = false
+++

原文见:http://www.topthink.com/topic/8867.html




在后台建立两个编辑器字段,发现提交表单时,两个字段的值不能进行更新,原因是在生成代码时,编辑器的对象名相同导致的,在这里可以通过修改
Addons\EditorForAdmin\\content.html 文件来实现多个编辑器字段值的更新

<script type="text/javascript">
var editor_{$addons_data.name};
KindEditor.ready(function(K) {
editor_{$addons_data.name} = K.create('textarea[name="{$addons_data.name}"]', {
allowFileManager : false,
themesPath: K.basePath,
width: '100%',
height: '{$addons_config.editor_height}',
resizeType: <eq name="addons_config.editor_resize_type" value="1">1<else />0</eq>,
pasteType : 2,
urlType : 'absolute',
fileManagerJson : '{:U('fileManagerJson')}',
//uploadJson : '{:U('uploadJson')}' }
uploadJson : '{:addons_url("EditorForAdmin://Upload/ke_upimg")}'
});
});

$(function(){
//传统表单提交同步
$('textarea[name="{$addons_data.name}"]').closest('form').submit(function(){
editor_{$addons_data.name}.sync();
});
//ajax提交之前同步
$('button[type="submit"],#submit,.ajax-post').click(function(){
editor_{$addons_data.name}.sync();
});

})
</script>
