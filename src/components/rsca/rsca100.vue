<!-- 履歷版面-->
<template>
<div>
    <Rsea100 id="rsea100" class="printBlock" />

    <svg viewBox="0 0 1000 150">
        <path d="M 0 0 C 160 80, 560 80, 1000 60 L 1000 150 C 500 80, 400 80, 0 100" :stroke="getSecondaryColor()" :fill="getSecondaryColor()" />
    </svg>

    <Rseb100 id="rseb100" class="printBlock" />

    <svg viewBox="0 0 1000 150">
        <path d="M 0 50 C 450 80, 860 80, 1000 20 L 1000 135 C 500 80, 400 80, 0 140" :stroke="getSecondaryColor()" :fill="getSecondaryColor()" />
    </svg>

    <Rsec100 id="rsec100" class="printBlock" />

    <svg viewBox="0 0 1000 150">
        <path d="M 0 40 C 500 100, 700 80, 1000 35 L 1000 120 C 590 90, 400 70, 0 130" :stroke="getSecondaryColor()" :fill="getSecondaryColor()" />
    </svg>

    <Rsed100 id="rsed100" class="printBlock" />
</div>
</template>

<script>
import Rsea100 from "../rsea/rsea100.vue";
import Rseb100 from "../rseb/rseb100.vue";
import Rsec100 from "../rsec/rsec100.vue";
import Rsed100 from "../rsed/rsed100.vue";
export default {
    name: "Rsaa100",
    components: {
        Rsea100,
        Rseb100,
        Rsec100,
        Rsed100,
    },
    methods: {
        getSecondaryColor() {
            const theme = this.$vuetify.theme;
            if (theme.dark) {
                return theme.themes.dark.secondary;
            }
            return theme.themes.light.secondary;
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/commonUtil.scss";
</style>
