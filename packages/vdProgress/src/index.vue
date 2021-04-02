<template>
    <div class="vd-progress-container">
        <span v-if="title" class="progress-title">{{ title }}</span>
        <div class="vd-progress" :style="{ width }">
            <div
                :style="{
                    width: astrictPercent + '%',
                    backgroundColor: getProgressColor
                }"
                class="vd-progress-percent"
            ></div>
        </div>
        <span class="percent-font">{{
            exhibition(percent) || astrictPercent + "%"
        }}</span>
    </div>
</template>

<script>
export default {
    name: "vd-progress",
    props: {
        percent: {
            type: Number,
            default: 0,
        },
        width: String,
        color: {
            type: [Array, Function, String],
            default: "#214252",
        },
        title: String,
        exhibition: {
            type: Function,
            default: () => {
                return false;
            },
        },
    },
    computed: {
        getProgressColor() {
            let colorType = typeof this.color;
            switch (colorType) {
                case "object":
                    if (this.color.length > 0 && Array.isArray(this.color)) {
                        const colorActive = this.color.filter(
                            (item) => item.percent === this.percent
                        );
                        return colorActive.length > 0 ? colorActive[0].color : "#214252";
                    } else return "#214252";
                case "string":
                    return this.color;
                case "function":
                    return this.color(this.percent);
            }
        },
        astrictPercent() {
            if (this.percent > 100) return 100;
            else if (this.percent < 0) return 0;
            else return this.percent;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../common/const.scss";
// vd-progress
.vd-progress-container {
    width: auto;
    display: flex;
    align-items: center;
    .vd-progress {
            width: 100%;
            background-color: #ebeef5;
            min-height: 6px;
            border-radius: 50px;
            display: inline-block;
        .vd-progress-percent {
            height: 100%;
            transition: all 0.3s;
            height: 6px;
            border-radius: 50px;
        }
    }
    .progress-title {
        font-size: 14px;
        padding: 0 6px;
    }
    .percent-font {
        font-size: 14px;
        padding: 0 4px;
        color: $vd-font;
    }
}
</style>