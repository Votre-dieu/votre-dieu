import vdDialog from './src'

vdDialog.install = function (Vue) {
    Vue.component( vdDialog.name, vdDialog )
}

export default vdDialog