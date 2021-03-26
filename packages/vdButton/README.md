## vd-button

### 引入

```js
import { vdButton } from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'
Vue.use(vdButton)
```

### 简单使用
```html
<vd-button> default </vd-button>
```

### 参数

| 参数     | 必填 | 可选                                        | 类型    | 默认    | 说明     |
| -------- | ---- | ------------------------------------------- | ------- | ------- | -------- |
| type     | 否   | primary/success/info/warning/danger/default | String  | default | 背景主题 |
| disabled | 否   | true/false                                  | Boolean |         | 是否禁用 |
| size     | 否   | large/medium/mini                           | String  | medium  | 按钮大小 |

