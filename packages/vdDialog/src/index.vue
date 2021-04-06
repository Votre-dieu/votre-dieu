<template>
  <transition name="dialog-fade">
    <div
      class="vd-dialog_wrapper"
      v-show="visiable"
      @click.self="!!wrapper ? closeDialog() : '' "
    >
      <div :class="['vd-dialog']" :style="{ width, 'margin-top': top, 'background-color': backgroundColor }">
        <div class="vd-dialog_header">
          <slot name="title">
            <span class="vd-dialog_title">{{ title }}</span>
          </slot>
          <vd-icon v-if="close" size="20px" icon="vd-icon-close" @click="closeDialog" />
        </div>
        <div class="vd-dialog_body">
          <slot></slot>
        </div>
        <div class="vd-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import vdIcon from '../../vdIcon'
export default {
  name: "vd-dialog",
  methods: {
    closeDialog() {
      this.$emit("update:visiable", false);
    },
  },
  components:{ vdIcon },
  props: {
    title: {
      type: String,
      default: "提示",
    },
    wrapper: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "40%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visiable: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: true,
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    }
  },
  mounted() {
    if (!!this.wrapper) {
      window.addEventListener(
        "keydown",
        (e) => {
          if (e.keyCode === 27) this.closeDialog();
        },
        false
      );
    }
  },
};
</script>
<style lang="scss" scoped>
.vd-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: -3vh;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .vd-dialog {
    position: relative;
    margin: 15vh auto 50px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    &_header {
      padding: 20px 20px 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #efefef;
      box-sizing: border-box;
      .vd-dialog_title {
        line-height: 24px;
        font-size: 18px;
      }
      .vd-icon-close {
        cursor: pointer;
      }
    }
    &_body {
      padding: 30px 20px;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .vd-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.35s;
}

.dialog-fade-leave-active {
  animation: fade 0.39s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-3vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>