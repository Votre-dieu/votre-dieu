## 引入

```js
import { vdIcon } from 'votre-dieu'
Vue.use(vdIcon)
```

## 简单使用
:::demo
```html
<vd-icon size="2em" icon="vd-icon-close" />
<vd-icon size="2em" icon="vd-icon-bluetoothoff" />
```
:::

## 参数

| 参数      | 必填 | 可选            | 类型   | 默认    | 说明           |
| --------- | ---- | --------------- | ------ | ------- | -------------- |
| size      | 否   |  | String | default | 字体图标大小     |
| color | 否   |                 | String |    #606266     | 字体图标颜色 |
| icon | 是   |                 | String |         | 字体图标标识 |
