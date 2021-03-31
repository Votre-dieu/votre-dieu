# votre-dieu

## 下载依赖
```shell
npm install votre-dieu
// or
yarn add votre-dieu
or
cnpm install votre-dieu
```

## 引入注册
```js
# 全局注册
import VotreDieu from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'

Vue.use(VotreDieu)

# 按需引入
import { vdButton } from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'

Vue.use(vdButton)
```
## 简单使用
```html
<vd-button> default </vd-button>
```