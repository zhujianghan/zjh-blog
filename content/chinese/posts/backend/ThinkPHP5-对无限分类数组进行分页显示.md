+++
title = 'ThinkPHP5-对无限分类数组进行分页显示'
date = 2018-04-26T11:16:20+08:00
tags = ['php']
draft = false
+++

```
use think\Controller;
use think\paginator\driver\Bootstrap;
class Category extends Controller
{
public function index2()
    {
        // 1.获取要分页的数组
        $cate = CategoryModel::getCate();// 无限分类后的数组
        $data = $cate;
        
        // 1.1 设置当前分页(从url get方式获取), 每页显示记录行数
        $curPage = input('page') ? input('page') : 1;
        $listRow = 3;
        
        // 1.2 得到当前分页所要显示的数组(array_chunk 或 array_slice 函数)
        $showData = array_chunk($data, $listRow, true);
        $showData = $showData[$curPage - 1];
        // $showData = array_slice($data, ($curPage - 1) * $listRow, $listRow, true);

        // 1.3 调用Bootstrap类方法生成分页对象
        $p = Bootstrap::make($showData, $listRow, $curPage, count($data), false, [
            'var_page' => 'page',
            'path'     => url('category/index2'), // 这里根据需要修改url
            'query'    => [],
            'fragment' => '',
        ]);

        $p->appends($_GET); // 添加URL参数

        // 2. 模板赋值
        $this->assign('cate', $cate);
        $this->assign('plist', $p);
        $this->assign('plistpage', $p->render());

        // 3. 模板赋值
        return $this->view->fetch('category2');
    }
}
