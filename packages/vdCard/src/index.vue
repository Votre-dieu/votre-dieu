<template>
    <div class="vd-card">
        <div :class="['vd-card_header',`card-type-${type}`]" v-if="$slots.header || header"> 
           <slot name="header"> {{ header }} </slot> 
        </div>
        <div class="vd-card__body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'vd-card',
        props: {
            header: {},
            shadow: {
                type: String
            },
            bodyStyle: {},
            type: {
                type: String,
                default: 'default'
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../common/const.scss";
// vd-card
.vd-card {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    border-radius: 6px;
    box-sizing: border-box;
    border: 1px solid $vd-card-border;
    .vd-card_header {
        border-radius: 6px 6px 0 0;
        padding: 10px 16px;
        width: 100%;
        background-color: $vd-default;
        font-size: 18px;
        color: $vd-font;
        box-sizing: border-box;
        border-bottom: 1px solid $vd-card-border;
        &.card-type-primary {
            background: $vd-primary;
            color: $vd-default;
        }
    }
    .vd-card__body {
        padding: 6px 16px;
        min-height: 40px;
        font-size: 14px;
        color: $vd-font;
    }
}
</style>