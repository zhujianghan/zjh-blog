+++
title = 'simditor-的使用'
date = 2018-12-22T14:12:44+08:00
tags = []
draft = false
+++


```
<textarea id="editor">{$introduction}</textarea>
            <script>
                var editor = new Simditor({
                    textarea: $('#editor'),
                    toolbarHidden: true
                });
            </script>
```

如果一个页面使用多个 simditor 编辑器, 那么每个编辑器的 id 要设置为不同
```
<volist name="industries" id="vo">
                <if condition="$i eq 2">
                    <div class="zi">
                        <div class="fs14 f-c9c">
                            <textarea id="editor{$i}">{$vo.content}</textarea>
                            <script>
                                var editor{$i} = new Simditor({
                                    textarea: $('#editor{$i}'),
                                    toolbarHidden: true
                                });
                            </script>
                        </div>
                    </div>
                <else/>
                    <div class="zi f-dn">
                        <div class="fs14 f-c9c">
                            <textarea id="editor{$i}">{$vo.content}</textarea>
                            <script>
                                var editor{$i} = new Simditor({
                                    textarea: $('#editor{$i}'),
                                    toolbarHidden: true
                                });
                            </script>
                        </div>
                    </div>
                </if>

            </volist>
```
