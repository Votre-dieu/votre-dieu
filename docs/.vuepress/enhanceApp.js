export default ({
	Vue
}) => {
	import('../../packages').then( m => {
		Vue.use(m.default)
	})
}
