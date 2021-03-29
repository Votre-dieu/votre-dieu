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
    <h2>vd-button</h2>
    <vd-button @click="click1"> default </vd-button>
    <vd-button @click="click1" :disabled="true"> disabled </vd-button>
    <h3>type</h3>
    <vd-button type="primary"> primary </vd-button>
    <vd-button type="success"> success </vd-button>
    <vd-button type="info"> info </vd-button>
    <vd-button type="warning"> warning </vd-button>
    <vd-button type="danger"> danger </vd-button>
    <h3>size</h3>
    <vd-button size="mini"> mini </vd-button>
    <vd-button size="medium"> medium </vd-button>
    <vd-button size="large"> large </vd-button>
    <h2>vd-card</h2>
    <vd-card style="width: 400px; max-width: 88vw">
      <div slot="header" class="flex">
        <span class="f1">安墨对我说</span>
        <span class="f-s12"> ✅ 收藏</span>
      </div>
      <p class="t-i2">
        当你低着头只是一个劲地努力着，行走着，进行着，忽然抬头，发现自己已经站在曾经想要站着的位置了
      </p>
      <p class="t-r f-s12">——丶安墨</p>
      <p class="t-r f-s12">2021/2/1 22:39</p>
    </vd-card>
    <br />
    <vd-card style="width: 400px; max-width: 88vw" type="primary">
      <div slot="header">安墨对我说</div>
      <p class="t-i2">
        当你低着头只是一个劲地努力着，行走着，进行着，忽然抬头，发现自己已经站在曾经想要站着的位置了
      </p>
      <p class="t-r f-s12">——丶安墨</p>
      <p class="t-r f-s12">2021/2/1 22:39</p>
    </vd-card>
    <h2>vd-input</h2>
    <h3>基础使用</h3>
    <vd-input />
    <h3>type</h3>
    <vd-input placeholder="输入用户名" type="text" />
    <br />
    <vd-input placeholder="输入密码" type="password" />
    <h3>限制长度</h3>
    <vd-input type="text" maxlength="10" />
    <br />
    <vd-input type="text" maxlength="10" after="length" />
    <h3>双向绑定</h3>
    <vd-input type="text" :vModel.sync="value" />
    <p>value = {{ value }}</p>
    <vd-progress :color="colorsData" :percent="data1" width="300px" />
    <br>

    <vd-progress color="red" :percent="data1" width="300px" />
    <br>
    <vd-progress :percent="10" width="300px" />
    <br>

    <vd-progress :color="customColorMethod" :percent="data1" width="300px" />
    <br>
    <vd-button @click="data1 += 10"> + </vd-button>
    <vd-button @click="data1 -= 10"> - </vd-button>
    <br>
    <vd-progress :exhibition=" percent => percent >= 100 ? '满' : `${percent}%`" :percent="data1" width="300px" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      hhhhhh: 1,
      data1:10,
      val1: "333",
      value1: "test",
      value: "",
      colorsData: [
        {color:"#be0000", percent: 20},
        {color:"#e48900", percent: 40},
        {color:"#9ede73", percent: 60},
        {color:"#bule", percent: 90},
      ]
    };
  },
  methods: {
    changeVal(){
      this.data1 += 10;
    },
    customColorMethod(percentage) {
        if (percentage < 30) {
          return 'blue';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
    click1(e) {
      console.log(this.val1);
    },
    change1(v) {
      console.log(1);
    },
    blur1(v) {
      console.log(this.value1);
    },
  },
};
</script>

<style lang="scss">
@import "../common/style/const.scss";
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
</style>
