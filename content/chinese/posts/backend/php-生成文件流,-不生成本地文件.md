+++
title = 'php-生成文件流,-不生成本地文件'
date = 2021-02-09T09:36:18+08:00
tags = ['php']
draft = false
+++

```
$string = "I tried, honestly! 中文";

$stream = fopen('data://text/plain,' . $string,'r');

//file_put_contents('./a.txt', $stream);
//echo stream_get_contents($stream);
echo $stream;
```


```
$string = 'Some bad-ass string';

$stream = fopen('php://memory','r+');
fwrite($stream, $string);
rewind($stream);

echo stream_get_contents($stream);
```



[参考自: Creating streams from strings in PHP](https://evertpot.com/222/)
