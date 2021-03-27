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
    .vd-card {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        border-radius: 6px;
        box-sizing: border-box;
        border: 1px solid #ebeef5;
        .vd-card_header {
            border-radius: 6px 6px 0 0;
            padding: 10px 16px;
            width: 100%;
            background-color: #ffffff;
            font-size: 18px;
            box-sizing: border-box;
            border-bottom: 1px solid #ebeef5;
            &.card-type-primary {
                background: #214252;
                color: #ffffff;
            }
        }
        .vd-card__body {
            padding: 6px 16px;

            min-height: 40px;
            font-size: 14px;
        }
    }
</style>