+++
title = 'supervisor-unix----tmp-supervisor-sock-no-such-file'
date = 2022-04-16T11:29:14+08:00
tags = ['go']
draft = false
+++

```
[root@iZm5e09hymnzdmgx3964zgZ etc]# cat -n supervisord.conf | grep /tmp
--
    22	[unix_http_server]
    23	;file=/tmp/supervisor.sock   ; the path to the socket file
    24	file=/var/run/supervisor.sock   ; the path to the socket file
--
    45	[supervisord]
    46	;logfile=/tmp/supervisord.log ; main log file; default $CWD/supervisord.log
    47	logfile=/var/log/supervisord.log ; main log file; default $CWD/supervisord.log
--
    50	loglevel=info                ; log level; default info; others: debug,warn,trace
    51	;pidfile=/tmp/supervisord.pid ; supervisord pidfile; default supervisord.pid
    52	pidfile=/var/run/supervisord.pid ; supervisord pidfile; default supervisord.pid

--
    77	[supervisorctl]
    78	;serverurl=unix:///tmp/supervisor.sock ; use a unix:// URL  for a unix socket
    79	serverurl=unix:///var/run/supervisor.sock ; use a unix:// URL  for a unix socket

```

修改如上 23, 51, 78 行的 /tmp 为 /var/run 或 /var/log

csdn: https://blog.csdn.net/qq_28885149/article/details/79364685
知乎: https://zhuanlan.zhihu.com/p/344224720
https://superuser.com/questions/1069276/unix-var-run-supervisor-sock-no-such-file
