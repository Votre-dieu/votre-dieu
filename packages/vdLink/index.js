import vdLink from './src'

vdLink.install = function (Vue){
    Vue.component( vdLink.name, vdLink )
}

export default vdLink