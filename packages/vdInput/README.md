## vd-input

### 引入

```js
import { vdInput } from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'
Vue.use(vdInput)
```

### 简单使用
```html
<vd-input :vModel.sync="value" />
```

### 说明

因为本组件采用的是 `render` 函数的形式，里面暂不提供 `v-model` 的写法，不过可以使用 `.aync` 的修饰符来进行双向绑定

### 参数

|    参数     | 必填 |     可选      |     类型      | 默认              |     说明      |
| :---------: | :--: | :-----------: | :-----------: | ----------------- | :-----------: |
|   vModel    |  否  |               | String/Number |                   | 绑定的value值 |
|    type     |  否  | text/password |    String     | text              |  输入框属性   |
|    name     |  否  |               |    String     |                   |   原生属性    |
|     alt     |  否  |               |    String     |                   |   原生属性    |
|  maxlength  |  否  |               | String/Number |                   | 限制输入长度  |
| placeholder |  否  |               |    String     |                   |   提示内容    |
|    width    |  否  |               |    String     | 300px             |  输入框长度   |
|    after    |  否  |    length     |    length     | 配合maxlength使用 | 提示文本长度  |

### 事件

| 事件   | 回调          | 说明       |
| ------ | ------------- | ---------- |
| change | value、 event | change事件 |
| input  | value、event  | input事件  |
| enter  | value、event  | 回车事件   |
| focus  | value、event  | 获取焦点   |
| blur   | value、event  | 失去焦点   |