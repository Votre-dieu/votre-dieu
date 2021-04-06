## 定制主题

:::tip 提示
`votre-dieu` 暂时只提供了一种定制主题的方式
:::

1. 克隆一份 `votre-dieu` 的源码
2. 在根目录中 common 的文件夹中找到 `const.scss` 的文件
3. 可以按照自己的业务，进行主题色的修改
4. 下载 votre-dieu 所需的依赖
5. 执行 `yarn build` 来进行打包
6. 提交到公司的私有库或者 npm 

## 默认主题色

```scss
// 背景色
$vd-default: #ffffff;
$vd-success: #9ede73;
$vd-warning: #e48900;
$vd-danger: #be0000;
$vd-info: #536162;
$vd-primary: #214252;
// 字体色
$vd-font: #606266;
$vd-light: #c0c4cc;
// 边框色
$vd-border: #dcdfe6;
$vd-card-border: #ebeef5
```