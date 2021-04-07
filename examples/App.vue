<template>
  <div id="app">
    <h2>配色表</h2>
    <ul>
      <li class="vd-default">#FFFFFF</li>
      <li class="vd-success">#9EDE73</li>
      <li class="vd-warning">#E48900</li>
      <li class="vd-danger">#BE0000</li>
      <li class="vd-info">#536162</li>
      <li class="vd-primary">#214252</li>
    </ul>
    <vd-tree :data="data"> </vd-tree>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data: {
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {
            id: 2,
            label: "产品研发部",
            children: [
              {
                id: 5,
                label: "研发-前端"
              },
              {
                id: 6,
                label: "研发-后端"
              },
              {
                id: 9,
                label: "UI设计"
              },
              {
                id: 10,
                label: "产品经理"
              }
            ]
          },
          {
            id: 3,
            label: "销售部",
            children: [
              {
                id: 7,
                label: "销售一部"
              },
              {
                id: 8,
                label: "销售二部"
              }
            ]
          },
          {
            id: 4,
            label: "财务部"
          },
          {
            id: 9,
            label: "HR人事"
          }
        ]
      }
    }
  },
  methods:{
    renderContent(){
      return `1111`
    }
  }
}
</script>

<style lang="scss">
@import "../common/const.scss";
button,
input {
  margin: 6px !important;
}
.flex {
  display: flex;
}
.f1 {
  flex: 1;
  align-items: center;
  justify-content: center;
}
.t-r {
  text-align: right;
}
.f-s12 {
  font-size: 12px;
}
.t-i2 {
  text-indent: 2em;
}
#app {
  padding: 20px;
}
ul {
  border: 1px solid $vd-border;
  display: inline-block;
}
ul > li {
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
// 初始化样式
ol,ul,li {
    list-style: none;
}
ol,ul,li {
    padding: 0;
}
</style>
