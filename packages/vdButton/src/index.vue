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