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
