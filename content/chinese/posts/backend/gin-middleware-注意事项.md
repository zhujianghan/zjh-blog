+++
title = 'gin-middleware-注意事项'
date = 2022-06-07T14:49:09+08:00
tags = ['go','gin']
draft = false
+++

## 1. gin middleware 如果要中止后面中间件及所有程序的执行, 需要使用 c.Abort() + return

    其中 Abort 会中止其后的中间件及页面处理程序, 而不会中止当前中间件函数内的余下程序, 
    使用 return 来中止当前中间件内后部的程序

```
func RejectMethodsExceptGet() gin.HandlerFunc {
	rejectMethods := map[string]struct{}{
		"POST":   {},
		"DELETE": {},
		"PUT":    {},
		"PATCH":  {},
	}
	return func(c *gin.Context) {
		if _, exist := rejectMethods[c.Request.Method]; exist {
			c.AbortWithStatusJSON(403, gin.H{
				"err_msg": "invalid method",
			})
			return
		}

		c.Next()
	}
}

```

## 2. 中间件 Use 需要写在路由注册之前, 否则将不对之前注册的路由起作用

```
	r := gin.New()
	r.Use(RejectMethodsExceptGet())

	r.GET("/test", func(c *gin.Context) {
		example := c.MustGet("example").(string)

		// it would print: "12345"
		log.Println(example)
	})

```
