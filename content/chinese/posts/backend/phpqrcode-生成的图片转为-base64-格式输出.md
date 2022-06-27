+++
title = 'phpqrcode-生成的图片转为-base64-格式输出'
date = 2019-01-10T22:20:42+08:00
tags = ['php']
draft = false
+++

原文见: https://www.pusonglin.cn/work/1619.html


项目中需要用到phpqrcode生成二维码，但是通过QRcode::png()生成的是显示输出当前的照片流，这样就不适用于列表显示多个二维码的需求了。网上也有相关的一些解决方案:通过把照片流缓存，然后进行base64编码。

找到生成图片用到了QRimage类的png方法，去除里面的：Header(“Content-type: image/png”);即可。

```php
class QRimage {
    
        //----------------------------------------------------------------------
        public static function png($frame, $filename = false, $pixelPerPoint = 4, $outerFrame = 4,$saveandprint=FALSE) 
        {
            $image = self::image($frame, $pixelPerPoint, $outerFrame);
            
            if ($filename === false) {
                // Header("Content-type: image/png");
                ImagePng($image);
            } else {
                if($saveandprint===TRUE){
                    ImagePng($image, $filename);
                    header("Content-type: image/png");
                    ImagePng($image);
                }else{
                    ImagePng($image, $filename);
                }
            }
            
            ImageDestroy($image);
        }

```

如此，不再让输出端整个页面变为图片类型，解决方案并不完美，但是能达到我的目的即可。 附调用端代码：


```
<?php
global $_W,$_GPC;
function getqrcode($url){
    require_once MODULE_ROOT.'/lib/phpqrcode_web.php';
    $value = $url;         //二维码内容
    $errorCorrectionLevel = 'L';  //容错级别
    $matrixPointSize = 5;      //生成图片大小
    //生成二维码图片
    ob_start();
    QRcode::png($value,false,$errorCorrectionLevel, $matrixPointSize, 2);
    $imgstr = base64_encode(ob_get_contents());
    ob_end_clean();
    return $imgstr;
  }
 
  //调用查看结果
  include $this->template('web/test');
?>
```
