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