<template>
  <div id="app">
    <h1>配色表</h1>
    <ul>
      <li class="vd-default">#FFFFFF</li>
      <li class="vd-success">#9EDE73</li>
      <li class="vd-warning">#E48900</li>
      <li class="vd-danger">#BE0000</li>
      <li class="vd-info">#536162</li>
      <li class="vd-primary">#214252</li>
    </ul>
    <h1>vd-button</h1>
    <vd-button  @click="click1"> default </vd-button>
    <vd-button @click="click1" :disabled="true"> disabled </vd-button>
    <br>
    <vd-button type="primary" > primary </vd-button>
    <vd-button type="success" > success </vd-button>
    <vd-button type="info" > info </vd-button>
    <vd-button type="warning" > warning </vd-button>
    <vd-button type="danger" > danger </vd-button>
    <br>
    <vd-button size="mini"> mini </vd-button>
    <vd-button size="medium"> medium </vd-button>
    <vd-button size="large"> large </vd-button>
    <h1>vd-card</h1>
    <vd-card style="width:400px;">
      <div slot="header" class="flex">
          <span class="f1">安墨对我说</span>
          <span class="f-s12"> ✅ 收藏</span>
      </div>
      <p class="t-i2">当你低着头只是一个劲地努力着，行走着，进行着，忽然抬头，发现自己已经站在曾经想要站着的位置了</p>
      <p class="t-r f-s12">——丶安墨</p>
      <p class="t-r f-s12">2021/2/1 22:39</p>
    </vd-card>
    <br>
    <vd-card style="width:400px;" type="primary">
      <div slot="header">
         安墨对我说
      </div>
      <p class="t-i2">当你低着头只是一个劲地努力着，行走着，进行着，忽然抬头，发现自己已经站在曾经想要站着的位置了</p>
      <p class="t-r f-s12">——丶安墨</p>
      <p class="t-r f-s12">2021/2/1 22:39</p>
    </vd-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    click1(e){
      console.log(e)
    }
  },
   
}
</script>

<style lang="scss">
@import '../common/style/const.scss';
button {
  margin: 6px !important;
}
.flex {
  display: flex;
}
.f1{
    flex:1; 
    align-items: center;
    justify-content: center;
}
.t-r{
  text-align: right;
}
.f-s12{
  font-size: 12px;
}
.t-i2{
  text-indent: 2em;
}
#app {
  padding: 20px;
}
ul{
  border: 1px solid #cccccc;
  display: inline-block;
}
ul > li{
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}

.vd-default {
  background-color: $vd-default;
  color: $vd-font;
}
.vd-success {
  background-color: $vd-success;
}
.vd-warning {
  background-color: $vd-warning;
}
.vd-danger {
  background-color: $vd-danger;
}
.vd-info {
  background-color: $vd-info;
}
.vd-primary {
  background-color: $vd-primary;
}
</style>
