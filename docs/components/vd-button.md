## 引入

```js
import { vdButton } from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'
Vue.use(vdButton)
```

## 简单使用

<br />

:::demo
```html
<vd-button> default </vd-button>
```
:::
## disabled
<br />
<vd-button :disabled="true"> disabled </vd-button>

```html
<vd-button :disabled="true"> disabled </vd-button>
```


## type
<br />
<vd-button type="primary"> primary </vd-button>
<vd-button type="success"> success </vd-button>
<vd-button type="info"> info </vd-button>
<vd-button type="danger"> danger </vd-button>

```html
<vd-button type="primary"> primary </vd-button>
<vd-button type="success"> success </vd-button>
<vd-button type="info"> info </vd-button>
<vd-button type="danger"> danger </vd-button>
```

## size
<br />
<vd-button size="mini"> mini </vd-button>
<vd-button size="medium"> medium </vd-button>
<vd-button size="large"> large </vd-button>

```html
<vd-button size="mini"> mini </vd-button>
<vd-button size="medium"> medium </vd-button>
<vd-button size="large"> large </vd-button>
```

## 参数

| 参数     | 必填 | 可选                                        | 类型    | 默认    | 说明     |
| -------- | ---- | ------------------------------------------- | ------- | ------- | -------- |
| type     | 否   | primary/success/warning/danger/default | String  | default | 背景主题 |
| disabled | 否   | true/false                                  | Boolean |         | 是否禁用 |
| size     | 否   | large/medium/mini                           | String  | medium  | 按钮大小 |
