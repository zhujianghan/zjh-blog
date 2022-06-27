+++
title = '双引号和单引号----由sql语句中的字符串变量而来'
date = 2018-01-12T13:43:35+08:00
tags = ['php']
draft = false
+++

在用php操作mysql 表的时候,遇到一个问题
表结构:
CREATE TABLE `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `content` text,
  `add_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

写了条sql语句
<?php
$sql1 = "SELECT * FROM `news` WHERE id=$id";
$sql2 = "SELECT * FROM `news` WHERE title=$title";

$id=1;
$title ='北京';

mysqli->query($sql1);
mysqli->query($sql2);
?>

结果第一条可以正确显示,第二条却出错

原因在于title字段类型是字符串,所以其中的变量要用引号引起来
也就是 $sql2 = "SELECT * FROM `news` WHERE title='$title'";


由此举例php中单双引号的使用情况如下:
<?php 

$title = '北京';
echo '$title'; // $title

$sql = "title='$title'";
echo $sql; // title='北京'  【不是 title='$title'】

$sql2 = 'title=$title';
echo $sql2; //  title=$title

$sql3 = 'title="$title"';
echo $sql3; //  title="$title"

$sql4 = "title='" . '$title' . "'";
echo $sql4; //  title='$title'
?>
