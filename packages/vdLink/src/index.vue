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

<style lang="scss" scoped>
@import "../../../common/const.scss";
// vd-link
.vd-link-default {
    color: $vd-font;
    border-color: $vd-font;
}
.vd-link-primary {
    color: $vd-primary;
    border-color: $vd-primary;
}
.vd-link-success {
    color: $vd-success;
    border-color: $vd-success;
}
.vd-link-info {
    color: $vd-info;
    border-color: $vd-info;
}
.vd-link-danger {
    color: $vd-danger;
    border-color: $vd-danger;
}
.vd-link-warning {
    color: $vd-warning;
    border-color: $vd-warning;
}
.vd-link-boder:hover {
    border-bottom: 1px solid;
}
.vd-link {
    text-decoration: none !important;
    cursor: pointer;
    margin: 0 2px;
}
</style>