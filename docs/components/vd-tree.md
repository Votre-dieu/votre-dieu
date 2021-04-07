## 引入

```js
import { vdTree } from 'votre-dieu'
Vue.use(vdTree)
```

## 简单使用

:::tip
注意，关于 `vd-tree` 的内容不会讲解太多，可以参照之前作者写的文章[《详解 vue-tree-color》](http://blog.lovemysoul.vip/docs/vue-TreeColor.html) 和 [《树状结构图新增多个class》](https://mp.weixin.qq.com/s/xKJLdNg0LaWHSHB-Dkwksw)
:::

:::demo
```html
<template>
    <vd-tree :horizontal="true" :data="data"> </vd-tree>
</template>

<script>
export default {
  data(){
    return{
      data: {
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {
            id: 2,
            label: "研发部",
            children: [
              {
                id: 5,
                label: "研发-前端"
              },
              {
                id: 6,
                label: "研发-后端"
              },
              {
                id: 9,
                label: "UI设计"
              },
              {
                id: 10,
                label: "产品经理"
              }
            ]
          },
          {
            id: 4,
            label: "财务部"
          },
          {
            id: 9,
            label: "人事部"
          }
        ]
      }
    }
  }
}
</script>
```
:::


## 参数

| 参数      | 必填 | 可选            | 类型   | 默认    | 说明           |
| --------- | ---- | --------------- | ------ | ------- | -------------- |
| data      | 是  |  | Object |  | 树的数据     |
| horizontal | 否   |  true/false   | Boolean |         |  水平排列方式 |
| labelClassName | 否   |           | Function\String |         | 自定义class |
| labelWidth | 否   |           | Number\String |         | label 宽度 |
| collapsable | 否   |   true/false   | Boolean |     true    | 折叠展开的label icon |
