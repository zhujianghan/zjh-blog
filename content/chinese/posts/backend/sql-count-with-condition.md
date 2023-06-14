+++
title = "Sql Count With Condition"
date = 2023-06-14T14:03:32+08:00
tags = ['mysql']
draft = false
+++

> 多表 left join 后, 使用 count 查询需要使用 distinct,
> 如果 count 里需要再次添加条件, 使用 distinct if(...)

```sql
# 不做聚合查询
select company.id     as company_id,
       company.name   as company_name,

       vacancy.id     as vacancy_id,
       vacancy.name   as vacancy_name,

       shop.id        as shop_id,
       shop.shop_name as shop_name,

       course.id      as course_id,
       course.title   as course_name

from tb_company company
         left join tb_position vacancy on vacancy.company_id = company.id
         left join tb_shop shop on shop.company_id = company.id
         left join tb_shop_curriculum course on course.shop_id = shop.id
where (vacancy.status = 0 or vacancy.status is null)
  and (course.is_deleted != 1 or course.is_deleted is null)
  and (course.status = 0 or course.status is null)
order by company.id desc;


# 聚合查询
select company.id     as company_id,
       company.name   as company_name,

       shop.id        as shop_id,
       shop.shop_name as shop_name,

       count(distinct vacancy.id)                         as vacancy_count,
       count(distinct if(course.`data_type` = 1, course.id, null)) as course_count,
       count(distinct if(course.`data_type` = 2, course.id, null)) as resource_count

from tb_company company
    left join tb_position vacancy on vacancy.company_id = company.id
    left join tb_shop shop on shop.company_id = company.id
    left join tb_shop_curriculum course on course.shop_id = shop.id
where (vacancy.status = 0 or vacancy.status is null)
  and (course.is_deleted != 1 or course.is_deleted is null)
  and (course.status = 0 or course.status is null)
  and company.id = 1;
```
