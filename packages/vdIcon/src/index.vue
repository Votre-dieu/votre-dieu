<template>
    <i v-show="icon" @click="clickIcon" :style="{ color, 'font-size': size }" :class="[icon]" ></i>
</template>

<script>
  export default {
    name: "vd-icon",
    props: { 
      icon:{
        type: String,
        required: true
      }, 
      color: {
        type: String,
        default:'#606266'
      }, 
      size: {
        type: String,
        default: '16px'
      } 
    },
    methods: {
        clickIcon(event){
            this.$emit('click', event)
        }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../../common/fonts/iconfont.css';
</style>