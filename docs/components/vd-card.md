## 引入

```js
import { vdCard } from 'votre-dieu'
Vue.use(vdCard)
```

## 简单使用
:::demo
```html
<vd-card style="width:400px;" >
    <div slot="header">
         安墨对我说
    </div>
    <p>当你低着头只是一个劲地努力着，行走着，进行着，忽然抬头，发现自己已经站在曾经想要站着的位置了</p>
</vd-card>
```
:::

## 复杂的slot

:::demo
```html
<vd-card style="width:400px;" :bodyStyle="{ padding: 0 }" >
    <div slot="header" class="header">
        <span>安墨对我说</span> 
        <vd-button @click="showContent = !showContent" class="action"> 
            {{ showContent ? 'hide' : 'show' }} 
        </vd-button>
    </div>
    <p v-show="showContent">当你低着头只是一个劲地努力着，行走着，进行着，忽然抬头，发现自己已经站在曾经想要站着的位置了</p>
</vd-card>

<script>
    export default {
        data() {
            return {
                showContent: false
            }
        }
    }
</script>

<style>
    .header {
        display:flex;
        align-items: center;
    }
    span {
        flex:1
    }
</style>
```
:::

## 自定义 CardBody

:::demo
```html
<vd-card style="width:400px;" 
        :bodyStyle="{  
            backgroundImage: 'url(https://lovemysoul.vip/votre-dieu/logo.png)', 
            width: '100%', 
            height: '400px', 
            backgroundSize: '100% 100%' 
        }" 
    >
    <div slot="header">
         Logo
    </div>
</vd-card>
```
:::

## 说明

`header` ：具名插槽

`body` ： 默认插槽

## 参数

| 参数      | 必填 | 可选            | 类型   | 默认    | 说明           |
| --------- | ---- | --------------- | ------ | ------- | -------------- |
| type      | 否   | primary/default | String | default | header颜色     |
| bodyStyle | 否   |                 | Object |         | body自定义样式 |

<style>
.demo-content{
    overflow: auto;
}
</style>