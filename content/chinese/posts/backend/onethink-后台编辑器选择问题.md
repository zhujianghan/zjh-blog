+++
title = 'onethink-后台编辑器选择问题'
date = 2019-01-11T14:04:25+08:00
tags = []
draft = false
+++

![image.png](https://upload-images.jianshu.io/upload_images/4073481-5d17281d1f07bb1e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```php
		public function adminArticleEdit($data){
		    $res= $this->getConfig();
//		    var_dump($res);
            $res['editor_type']=2;
			$this->assign('addons_data', $data);
//			$this->assign('addons_config', $this->getConfig());
			$this->assign('addons_config', $res);
			$this->display('content');
		}
	}
```
