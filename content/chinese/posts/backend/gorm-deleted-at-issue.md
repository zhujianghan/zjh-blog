+++
title = 'Gorm deleted at 与 unique 索引问题'
date = 2025-11-07T11:43:00+08:00
tags = ['databse']
draft = false
+++

## 背景
gorm 中提到建立联合唯一索引时, 不使用 gorm.DelatedAt 类型, 而是要使用 soft_delete.DeletedAt 类型, 这是因为 gorm.DelatedAt 类型默认为 null, 那么联合 unique 时, 如 unique(email, deleted_at), 当 deleted_at 同时为 null, email 也相同时不会报错, 允许入库

所以 deleted_at 要变更类型, 如 数值类型的时间戳, 默认为0 而不是 null
