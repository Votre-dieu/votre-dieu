import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入组件库
import votreDieu from '../packages'

console.log(votreDieu)
// 注册组件库
Vue.use( votreDieu )
new Vue({
  render: h => h(App)
}).$mount('#app')
