## 全局引入
```js
// 全局注册
import VotreDieu from "votre-dieu";
import "votre-dieu/lib/index/index.css";
Vue.use(VotreDieu)
```

## 按需引入
按需引入需要你在 babel.config.js 中，粘贴这段代码

```js
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'votre-dieu',
        style: (name) => {
          return `${name}/index.css`;
        },
        camel2DashComponentName: false, // 是否需要驼峰转短线
        camel2UnderlineComponentName: false // 是否需要驼峰转下划线
      }
    ]
  ]
};
```
然后你还需要引入 `babel-plugin-import` 
```shell
yarn add babel-plugin-import
```

然后你就可以在 main.js 中这样去使用了

```js
import { vdButton, vdCard } from 'votre-dieu'
Vue.use( vdButton )
Vue.use( vdCard )
```

或者你可以在 .vue 页面/组件中使用components来组册
```html
<script>
    import { vdButton, vdCard } from 'votre-dieu'
    export default {
        components:{ vdButton, vdCard }
    }
</script>
```