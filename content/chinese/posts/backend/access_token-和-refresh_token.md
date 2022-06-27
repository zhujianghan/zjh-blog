+++
title = 'access_token-和-refresh_token'
date = 2019-04-04T11:37:44+08:00
tags = []
draft = false
+++

* 设置 `access_token` 为 `1` 天有效期, `refresh_token` 为 `7` 天有效期,   
* 如果 `access_token` 未过期, 则直接通过登录判断 (不更新 `access_token` 或 `refresh_token` )
* 当 `access_token` 过期, 则检测 `refresh_token` , `refresh_token` 未过期时,  更新并返回 `access_token` 和 `refresh_token` 
* 当 `access_token` 过期, `refresh_token` 也过期, 则返回未登录

> ps: 由于 `refresh_token` 的有效期大于 `access_token` 的有效期 (而二者是同时更新的), 所以不存在 `access_token` 未过期, 而 `refresh_token` 过期的情况
