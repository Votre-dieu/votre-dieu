## 引入

```js
import { vdInput } from 'votre-dieu'
Vue.use(vdInput)
```

## 简单使用
<br/>

::: demo 
```html
<template>
     <vd-input vModel="test" />
</template>
```
:::

## 双向绑定
<br/>

::: demo 
```html
<template>
    <div>
        <vd-input width="200px" :vModel.sync="value" />
        <p>您输入了：{{ value }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 'vdInput',
        }
    }
}
</script>
``` 
:::

:::warning 注意
因为本组件采用的是 `render` 函数的形式，里面暂不提供 `v-model` 的写法，不过可以使用 `.aync` 的修饰符来进行双向绑定
[渲染函数中没有与 v-model](https://cn.vuejs.org/v2/guide/render-function.html#v-model)
:::


## maxlength
<br />
<!-- <vd-input vModel="test" maxlength="10" /> -->

:::demo
```html
<template>
    <vd-input vModel="test" maxlength="10" />
</template>
```
:::

:::tip 说明
`maxlength` 用于限制输入框的输入内容长度,如果你想要提示用户输入限制可以使用 `after` 属性，传递 `length` 作为属性值
:::

:::demo
```html
<template>
    <vd-input vModel="test" after="length" maxlength="10" />
</template>
```
:::

## type
<br/>


:::demo
```html
<template>
    <vd-input type="text" vModel="" placeholder="用户名" />
    <vd-input type="password" vModel="" placeholder="密码"  />
</template>
```
:::

## event demo
<br />

:::tip
我们提供了大量的事件供你选择 `change`、`input`、`enter`、`focus`、`blur`, 即使我们不使用`:vModel.sync`传递也可以直接获取到input最新的value，并且进行返回
:::

:::demo
```html
<template>
    <vd-input type="text" @change="changeInput" />
    {{value}}
</template>
<script>
    export default {
        data() {
            return {
                value: '',
            }
        },
        methods: {
            changeInput(val){
                this.value = val
            }
        }
    }
</script>
```
:::


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
