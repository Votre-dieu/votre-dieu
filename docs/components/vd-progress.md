## 引入

```js
import { vdProgress } from 'votre-dieu'
Vue.use(vdProgress)
```

## 简单使用
<br/>

:::demo
```html
<vd-progress :percent="10" width="300px" />
```
:::

## 自定义颜色
<br/>

:::demo
```html
     <vd-progress :percent="10" color="red" width="300px" />
```
:::

:::tip 扩展提示
`color` 属性可以传递三种形式的数据（Function、String、Array）
:::

:::demo
```html
<template>
    <vd-progress :color="colorsData" :percent="percentage" width="300px" />
    <vd-progress :color="ColorMethod" :percent="percentage" width="300px" />
    <vd-button @click="add"> + </vd-button>
    <vd-button @click="subtract"> - </vd-button>
</template>

<script>
    export default {
          data() {
               return {
                    percentage: 0,
                    colorsData: [
                         {color:"#be0000", percent: 20},
                         {color:"#5cb87a", percent: 40},
                         {color:"#e48900", percent: 60},
                         {color:"#6f7ad3", percent: 80},
                         {color:"#9ede73", percent: 100}
                    ]
               }
          },
          methods: {
               subtract() {
                    this.percentage -= 20;
                    if (this.percentage < 0) this.percentage = 0;
               },
               add() {
                    this.percentage += 20;
                    if (this.percentage > 100) this.percentage = 100;
               },
               ColorMethod(percentage) {
                    if (percentage < 30)  return 'red';
                    else if (percentage < 70) return 'orange';
                    else return 'green';
               }
          }
     }
</script>
```
:::

## exhibition

<br/>

:::demo
```html
<vd-progress 
     :exhibition="percent => percent >= 100 ? '满' : `${percent}%`" 
     :percent="100" 
     width="300px" 
/>
```
:::

`exhibition` 可以设置在 `percent` 在达到100的时候展示的文字内容

## title
<br />

:::demo
```html
<div style="width:300px">
     <vd-progress :percent="10" title="title" width="300px" />
</div>
```
:::


## 参数

|    参数    | 必填 | 可选 |          类型           |  默认   |            说明            |
| :--------: | :--: | :--: | :---------------------: | :-----: | :------------------------: |
|  percent   |  否  |      |         Number          |    0    |         进度条数值         |
|   width    |  否  |      |         String          |  100%   |         进度条宽度         |
|   color    |  否  |      | Array/ Function/ String | #214252 |         进度条颜色         |
|   title    |  否  |      |         String          |         |         进度条标题         |
| exhibition |  否  |      |        Function         |  100%   | 进度条达到百分百展示的内容 |
