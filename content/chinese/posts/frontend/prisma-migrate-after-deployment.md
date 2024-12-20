+++
title="Prisma Migrate after Deployment"
date=2024-12-20T10:35:00+08:00
tags=["js","prisma"]
draft=false
+++

## Prisma Migrate after Deployment
> 背景: 线上环境部署后，数据库表结构有变更，但未同步到线上数据库中，导致线上环境也需要更新 数据库 & prismaClient。

### 操作步骤
1. **开发环境** 修改 scheme.prisma, 如给 user 添加 `age` 字段
2. **开发环境** 执行 `npx prisma migrate dev --name add-age-to-user`, 这里要 --name 指定生成的迁移文件(夹)名称, 这里也会同时生成新的 /nodemodules/.prisma/client/* 文件, 不需要再次 npx prisma generate 更新 prismaClient
3. **开发环境** 执行 `npx prisma migrate deploy` 变更数据库表结构
4. **生产环境** pull 到最新的 scheme.prisma 及 migration 文件
5. **生产环境** 执行 `npx prisma generate` 生成新的 /nodemodules/.prisma/client/* 文件
6. **生产环境** 执行 `npx prisma migrate deploy` 同步最新的数据库表结构 (不改变原有数据)
