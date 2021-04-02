## 引入

```js
import { vdLink } from 'votre-dieu'
Vue.use(vdLink)
```

## 简单使用

<br />

:::demo
```html
<vd-link href="https://baidu.com">链接 </vd-link>
```
:::

## underline
<br />

`underline` 传入 `Boolean` 值，来判断是否开启鼠标移入下划线

:::demo
```html
<vd-link :underline="false" > 关闭 </vd-link>
<vd-link :underline="true" > 开启 </vd-link>
```
:::


## type
<br />

:::demo
```html
    <vd-link type="default" > default </vd-link>
    <vd-link type="success" > success </vd-link>
    <vd-link type="warning" > warning </vd-link>
    <vd-link type="danger" > danger </vd-link>
    <vd-link type="info" > info </vd-link>
    <vd-link type="primary" > primary </vd-link>
```
:::


## 参数

| 参数      | 必填 | 可选                                   | 类型    | 默认    | 说明           |
| --------- | ---- | -------------------------------------- | ------- | ------- | -------------- |
| type      | 否   | primary/success/warning/danger/default | String  | default | 字体颜色       |
| href      | 否   |                                        | String  |         | 跳转地址       |
| target    | 否   |                                        | String  |         | 跳转方式       |
| underline | 否   | true/false                             | Boolean | true    | 是否开启下划线 |

