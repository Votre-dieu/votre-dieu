import vdCard from './src'

vdCard.install = function (Vue) {
  Vue.component( vdCard.name, vdCard )
}

export default vdCard