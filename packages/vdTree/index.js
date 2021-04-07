import vdTree from './src'

vdTree.install = function (Vue) {
    Vue.component(vdTree.name, vdTree)
}

export default vdTree