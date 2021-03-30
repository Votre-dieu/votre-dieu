import vdButton from './vdButton'
import vdCard from './vdCard'
import vdInput from './vdInput'
import vdProgress from './vdProgress'
import '../common/style/index.scss'

const components = [ 
    vdButton,
    vdCard,
    vdInput,
    vdProgress
]

// 全局注册
const install = function( Vue, opt = {} ) {
    components.forEach(item => {
        register( Vue, item )
    })
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
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
    install,
    vdButton,
    vdCard,
    vdInput,
    vdProgress
}