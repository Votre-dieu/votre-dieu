## 引入

```js
import { vdProgress } from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'
Vue.use(vdProgress)
```

## 简单使用
<br/>
<vd-progress :percent="10" width="300px" />

```html
<vd-progress :percent="10" width="300px" />
```

## 自定义颜色
<br/><vd-progress :percent="10" color="red" width="300px" />

```html
<vd-progress :percent="10" color="red" width="300px" />
```

:::tip 扩展提示
`color` 属性可以传递三种形式的数据（Function、String、Array）
:::

## exhibition

<br/>

<vd-progress :exhibition="percent => percent >= 100 ? '满' : `${percent}%`" :percent="100" width="300px" />

```html
<vd-progress 
     :exhibition="percent => percent >= 100 ? '满' : `${percent}%`" 
     :percent="100" 
     width="300px" 
/>
```

`exhibition` 可以设置在 `percent` 在达到100的时候展示的文字内容

## title
<br />
<vd-progress :percent="10" title="title" width="300px" />

```jsx
<vd-progress :percent="10" title="title" width="300px" />
```



## 参数

|    参数    | 必填 | 可选 |          类型           |  默认   |            说明            |
| :--------: | :--: | :--: | :---------------------: | :-----: | :------------------------: |
|  percent   |  否  |      |         Number          |    0    |         进度条数值         |
|   width    |  否  |      |         String          |  100%   |         进度条宽度         |
|   color    |  否  |      | Array/ Function/ String | #214252 |         进度条颜色         |
|   title    |  否  |      |         String          |         |         进度条标题         |
| exhibition |  否  |      |        Function         |  100%   | 进度条达到百分百展示的内容 |
