<template>
    <button @click="vdClick($event)"  
        :class="[
            'vd-button', 
            `button-type-${type}`, 
            `button-size-${size}`,
            {
                'vd-disabled': disabled
            }
        ]"
        :disabled="prohibit"
    > 
        <slot /> 
    </button>
</template>

<script>
    export default {
        name: 'vd-button',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                default: 'medium'
            },
            disabled: Boolean
        },
        methods:{
            vdClick(e) {
                this.$emit('click',e)
            }
        },
        computed: {
            prohibit() {
                return this.disabled || undefined;
            }
        },
    }
</script>

<style lang="scss">
@import "../../../common/const.scss";
// vd-button
.vd-button {
    padding: 8px 14px;
    margin: 0;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    border: unset;
    min-width: 2em;
    min-height: 1.5em;
    &:active {
        opacity: 0.8;
    }
    &.button-type-default {
        border: 1px solid $vd-border;
        background-color: $vd-default;
        color: $vd-font;
    }
    &.button-type-primary {
        color: $vd-default;
        background-color: $vd-primary;
    }
    &.button-type-success {
        color: $vd-default;
        background-color: $vd-success;
    }
    &.button-type-warning {
        color: $vd-default;
        background-color: $vd-warning;
    }
    &.button-type-danger {
        color: $vd-default;
        background-color: $vd-danger;
    }
    &.button-type-info {
        color: $vd-default;
        background-color: $vd-info;
    }
    &.button-size-medium {
        padding: 8px 14px;
        font-size: 14px;
    }
    &.button-size-mini {
        padding: 6px 12px;
        font-size: 12px;
    }
    &.button-size-large {
        padding: 10px 16px;
        font-size: 16px;
    }
}
// 禁用样式
.vd-disabled {
    cursor: not-allowed;
    opacity: 0.7;
    &:active {
        opacity: unset;
    }
}
</style>