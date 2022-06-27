+++
title = 'PHP封装一个自己的my_parse_ini_file()'
date = 2018-01-30T22:30:33+08:00
tags = ['php']
draft = false
+++

```
PHP文件提取练习[parse_ini_file() ] ：
编写一个自己的 my_parse_ini_file() ，完成对 .ini 文件的读取
提示: explode 分割字符串 / fgets 读取一行数据
```

```
<?php
function my_parse_ini_file($dir)
{
    if (!file_exists($dir)) {
        echo '文件不存在, 无法访问';
        return FALSE;
    } else {
        $fsize = filesize($dir);
        $fp = fopen($dir, 'r');
        $con_str = fread($fp, $fsize);
        // 把字符串中的空白字符' '替换为'', 也就是删除空白字符

        $con_str = str_replace(' ', '', $con_str);
        // 按回车换行给字符串分割成数组
        $arr_temp1 = explode("\r\n", $con_str);
        $arr_res = array();
        foreach ($arr_temp1 as $value) {
            $arr_temp2 = explode('=', $value);
            $arr_res[$arr_temp2[0]] = $arr_temp2[1];
        }
        return $arr_res;
    }
}

$file_full_path = 'e:/config.ini';
$arr_ini = my_parse_ini_file($file_full_path);
var_dump($arr_ini);
    }
}

$file_full_path = 'e:/config.ini';
$arr_ini = my_parse_ini_file($file_full_path);
var_dump($arr_ini);
