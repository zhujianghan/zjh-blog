+++
title = 'phpstorm-正则表达式进行查找替换'
date = 2018-07-01T15:11:12+08:00
tags = []
draft = false
+++

想在phpstorm中 全部清除 <script> </script> 之间的内容(保留script标签),
  **查找的正则表达式** 为  (<script>)([\s\S]*)(</script>),  其中的 [\s\S] 表示 包括换行符在内的任何字符, 也可用 [\d\D] 或[\w\W] 代替,  这样默认为贪婪模式, 会匹配第一个 <script>和最后一个</script> 之间的内容

如果有多个 script 标签, 那么正则表达式为   (<script>)((?!</script>)[\s\S])*(</script>), 其中 (?!</script>) 表示 非 </script> 这个字符串

**替换的正则表达式** 为 \$1\n\n\$3
