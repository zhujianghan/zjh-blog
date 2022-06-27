+++
title = 'php-双引号调用函数'
date = 2017-09-03T10:46:25+08:00
tags = []
draft = false
+++

<?php
function funk}{
    echo 'hello,world!';
}
$name = 'funk';
$name2 = 'funk2';
echo "funk()"; // funk()
echo "$name()"; // hello,world!
echo "$name2()"; // 因为找不到该函数,就会报错
