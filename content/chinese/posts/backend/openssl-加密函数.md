+++
title = 'openssl-加密函数'
date = 2019-01-17T13:29:20+08:00
tags = ['php']
draft = false
+++

后台使用密码保存时, 使用 md5, 不可解密;

如今想给一个登录 token 加密, 原始做法是用 md5+一定数量的字符串,  并且在缓存(或数据库)中保存这个键值对;

如果不想在后台保存 token 信息, 可以把 token信息(包括过期时间,用户账号等) 使用 open_ssl 加密, 然后要在后台要验证的时候, 再解密出来

例如 
```php
<?php
$key = 'key123456789';//加密字符串的密码, 类似于md5加盐
$method = 'AES-128-CBC';// 加密方法
$arr = ['user_id'=>1, 'expire_time'=>60*60]; // 用户id为1, 有效期为1h
$str = json_encode($arr);

$secret_str = openssl_encrypt($str,$method,$key);// 加密字符串
$secret_str = urlencode($secret_str);// 加密字符串
var_dump($secret_str);// jRX%2BtqOyhHVOzHX7cFI0usMUs7qKH4uEaOqKkdBQ2A08C1FmRRGXWFBfCleJPu3i

$origin_str = urldecode($secret_str);
$origin_str = openssl_decrypt($origin_str,$method,$key);// 解密字符串
var_dump($origin_str);// {"user_id":1,"expire_time":3600}
var_dump(json_decode($origin_str));// ["user_id"=>1,"expire_time"=>3600]
```

```
// 加密
openssl_encrypt ( string $data , string $method , string $key [, int $options = 0 [, string $iv = "" [, string &$tag = NULL [, string $aad = "" [, int $tag_length = 16 ]]]]] ) : string

// 解密
openssl_decrypt ( string $data , string $method , string $key [, int $options = 0 [, string $iv = "" [, string $tag = "" [, string $aad = "" ]]]] ) : string


// data
// The encrypted message to be decrypted.

// method
// The cipher method. For a list of available cipher methods, use openssl_get_cipher_methods().

// key
// The key.

// options
// options can be one of OPENSSL_RAW_DATA, OPENSSL_ZERO_PADDING.

// iv
// A non-NULL Initialization Vector.

// tag
// The authentication tag in AEAD cipher mode. If it is incorrect, the authentication fails and the function returns FALSE.

// aad
// Additional authentication data.


```
