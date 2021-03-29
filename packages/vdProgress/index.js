import vdProgress from './src'

vdProgress.install = function (Vue) {
  Vue.component( vdProgress.name, vdProgress )
}

export default vdProgress