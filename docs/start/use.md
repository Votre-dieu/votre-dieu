### 引入 votre-dieu

```js
import Vue from 'vue';
// 全局注册
import VotreDieu from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'
Vue.use(VotreDieu)

// 按需引入
import { vdButton, vdCard } from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'
Vue.use(vdButton, vdCard)
```