import vdButton from './vdButton'
import vdCard from './vdCard'
import vdInput from './vdInput'
import '../common/style/index.scss'

const components = [ 
    vdButton,
    vdCard,
    vdInput
]

const VotreDieu = {}
// 全局注册
export default VotreDieu.install = function( Vue, opt = {} ) {
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
    vdButton,
    vdCard,
    vdInput
}