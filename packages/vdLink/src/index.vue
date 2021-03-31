<template>
    <a :href="href || undefined" 
        :class="[
            'vd-link',
            `vd-link-${type}`,
            {
                'vd-link-boder': underline
            }
        ]" 
        :target="target"
    >
        <slot/>
    </a>
</template>

<script>
    export default {
        name:"vd-link",
        props: {
            href: String,
            type: {
                type: String,
                default: 'default'
            },
            underline: {
                type: Boolean,
                default: true
            },
            target: {
                type: String,
                default: undefined
            }
        }
    }
</script>