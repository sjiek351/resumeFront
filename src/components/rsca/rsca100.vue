<!-- 履歷版面-->
<template>
<div>
    <Rsea100 id="rsea100" />
    <v-divider />
    <Rseb100 id="rseb100" />
    <v-divider />
    <Rsec100 id="rsec100" />
    <v-divider />
    <Rsed100 id="rsed100" />
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
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/commonUtil.scss";

</style>
