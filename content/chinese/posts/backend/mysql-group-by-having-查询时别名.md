+++
title = 'mysql-group-by-having-查询时别名'
date = 2018-01-05T15:03:14+08:00
tags = ['mysql']
draft = false
+++

select deptname,count(*) as '专业个数' from class group by deptname having 专业个数>1;

having后面的别名不能用引号
