<script>
export default {
    name: "vd-input",
    props: {
        vModel: [String,Number],
        type: {
            type: String,
            default: "text",
        },
        name: String,
        alt: String,
        maxlength: {
            type: [Number, String],
        },
        placeholder: String,
        width: {
            type: String,
            default: '300px'
        },
        after: String
    },
    data() {
        return {
            value: "",
            vdBorderErr: false,
        };
    },
    render(createElement) {
        return createElement("div", {
            class:['vd-input']
        }, 
        [
            createElement(
                "input",
                {
                    class: ["vd-input__inner", { "vd-border-err": this.vdBorderErr }],
                    domProps: {
                        value: this.value,
                        type: this.isCorrect,
                        name: this.name,
                        alt: this.alt,
                        placeholder: this.placeholder,
                        maxLength: this.maxlength,
                    },
                    style: {
                        width: this.width
                    },
                    on: {
                        input: (event) => {
                            this.value = event.target.value;
                            this.dispatch("input", event.target.value, event);
                            this.dispatch("change", event.target.value, event);
                        },
                        blur: (event) => this.dispatch("blur", event.target.value, event),
                        focus: (event) => this.dispatch("focus", event.target.value, event),
                        change: (event) => {
                            this.value = event.target.value;
                            this.dispatch("change", event.target.value, event);
                        },
                        keydown: (event) => {
                            if (event.keyCode === 13)
                                this.dispatch("enter", event.target.value, event);
                        },
                    },
                    ref: "vd-input-ref",
                }
            ),
            this.after === "length" && createElement("span", { class: ["vd-input-slot"] }, 
                    [
                        !!!this.maxlength
                        ? console.warn("If you want to use the length attribute, 'maxlength' is required\n ——vdInput")
                        : createElement("span",
                            {
                                class: "vd-input-slot__content"
                            },
                            `${String(this.value).length || 0 }/${this.maxlength}`
                        )
                    ]
                )
            ]
        );
    },
    methods: {
        dispatch(name, value, event) {
            this.$emit("update:vModel", this.valType === "number" ? Number(value) : String(value))
            this.$emit(name, this.valType === "number" ? Number(value) : String(value), event);
        }
    },
    computed: {
        isCorrect() {
            return this.type !== "password" && this.type !== "text" ? "text" : this.type
        },
    },
    created() {
        this.value = this.vModel || "";
        this.valType = typeof this.vModel
    },
};
</script>
