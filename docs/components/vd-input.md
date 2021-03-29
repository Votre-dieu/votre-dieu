## 引入

```js
import { vdInput } from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'
Vue.use(vdInput)
```

## 简单使用
<br/>
<vd-input vModel="test"/>

```html
<vd-input vModel="test" />
```

## 双向绑定
<br/>
<vd-input />

```jsx {1}
<vd-input :vModel.sync="value" />

export default {
    data() {
        return {
            value: '',
        }
    }
}
```

:::warning 注意
因为本组件采用的是 `render` 函数的形式，里面暂不提供 `v-model` 的写法，不过可以使用 `.aync` 的修饰符来进行双向绑定
[渲染函数中没有与 v-model](https://cn.vuejs.org/v2/guide/render-function.html#v-model)
:::


## maxlength
<br />
<vd-input vModel="test" maxlength="10" />

```html
<vd-input vModel="test" maxlength="10" />
```

:::tip 说明
`maxlength` 用于限制输入框的输入内容长度,如果你想要提示用户输入限制可以使用 `after` 属性，传递 `length` 作为属性值
:::

<vd-input vModel="test" after="length" maxlength="10" />

```html
<vd-input vModel="test" maxlength="10" after="length" />
```

## type
<br/>
<vd-input type="text" vModel="" placeholder="用户名" />
<br />
<br />
<vd-input type="password" vModel="" placeholder="密码"  />

```html
<vd-input type="text" vModel="" placeholder="用户名" />
<br />
<vd-input type="password" vModel="" placeholder="密码"  />
```

## event
<br />
<vd-input type="text" vModel="" />

```jsx
<vd-input type="text" :vModel="value" @change="changeInput" />

export default {
    data() {
        return {
            value: '',
        }
    },
    methods: {
        changeInput(){
            ...
        }
    }
}
```
## 参数

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

## 事件

| 事件   | 回调          | 说明       |
| ------ | ------------- | ---------- |
| change | value、 event | change事件 |
| input  | value、event  | input事件  |
| enter  | value、event  | 回车事件   |
| focus  | value、event  | 获取焦点   |
| blur   | value、event  | 失去焦点   |