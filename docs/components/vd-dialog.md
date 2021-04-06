## 引入

```js
import { vdDialog } from 'votre-dieu'
Vue.use(vdDialog)
```

## 简单使用
:::demo
```html
<div>
  	<vd-button @click="visiable = true"> 点击弹出 </vd-button>
</div>
<vd-dialog :visiable.sync="visiable"> 
  	<p>提示内容</p>
</vd-dialog>

<script>
    export default {
        data() {
            return {
                visiable: false
            }
        }
    }
</script>
```
:::

## 插入底部内容

::: tip 

通过 `footer` 具名 slot 来控制底部的按钮或者其他操作

:::

:::demo
```html
<div>
  	<vd-button @click="visiable = true"> 点击弹出 </vd-button>
</div>
<vd-dialog :visiable.sync="visiable"> 
  	<p>提示内容</p>
  	<div slot="footer">
      	<vd-button type="primary" @click="visiable = false"> 确认 </vd-button>
      	<vd-button @click="visiable = false"> 关闭 </vd-button>
  	</div>
</vd-dialog>

<script>
    export default {
        data() {
            return {
                visiable: false
            }
        }
    }
</script>
```
:::

## title

::: tip 

通过 `title` 具名 slot 来标题内容，或采用 `props` 传入标题

:::

:::demo

```html
<div>
  	<vd-button @click="visiable = true"> 点击弹出 </vd-button>
</div>
<vd-dialog :visiable.sync="visiable" title="diy title"> 
  	<p>提示内容</p>
</vd-dialog>

<script>
    export default {
        data() {
            return {
                visiable: false
            }
        }
    }
</script>
```
:::

## wrapper

::: tip 

`wrapper` 主要用来禁止快捷关闭，将它设置成 `false` ，ESC 键 与 点击空白处将不会关闭弹窗

:::



:::demo
```html
<div>
  	<vd-button @click="visiable = true"> 点击弹出 </vd-button>
</div>
<vd-dialog :wrapper="false" :visiable.sync="visiable"> 
  	<p>提示内容</p>
</vd-dialog>

<script>
    export default {
        data() {
            return {
                visiable: false
            }
        }
    }
</script>
```
:::



## 参数

| 参数     | 必填 | 可选       | 类型        | 默认  | 说明           |
| -------- | ---- | ---------- | ----------- | ----- | -------------- |
| title    | 否   |            | slot\String | 提示  | 标题内容       |
| width    | 否   |            | String      | 40%   | 弹窗宽度       |
| top      | 否   |            | String      | 15vh  | 定位高度       |
| visiable | 否   | true/false | Boolean     | false | 控制弹窗开关(请使用`sync`修饰符传递)   |
| close    | 否   | true/false | Boolean     | true  | 控制 关闭icon |
| wrapper  | 否   | true/false | Boolean     | true  | 点击背景关闭   |
