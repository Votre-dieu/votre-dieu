import vdButton from './vdButton'
import '../common/style/index.scss'

const components = [ 
    vdButton
]

const VotreDieu = {}
// 全局注册
export default VotreDieu.install = function( Vue, opt = {} ) {
    console.log(opt)
    components.forEach(item => {
        register( Vue, item )
    })
}

/**
 * 注册组件
 * @param { vue } _v
 * @param { component } com
 */
function register ( _v, com ) {
    if(typeof _v !== 'function' && typeof com !== 'object') return
    _v.component( com.name, com)
}
// 按需暴露
export {
    vdButton
}