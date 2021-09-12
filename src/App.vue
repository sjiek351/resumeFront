<!-- 元件架構-->
<template>
<v-app>
    <!-- Loading -->
    <Rsaa100 :overlay="overlay" />

    <!-- Header -->
    <Rsba100 />

    <v-main>
        <router-view></router-view>
    </v-main>

    <Rsga100 />

    <!-- Footer -->
    <div class="secondary">
        <Rsza100 />
    </div>

</v-app>
</template>

<script>
import Rsaa100 from "./components/rsaa/rsaa100.vue";
import Rsba100 from "./components/rsba/rsba100.vue";
import Rsga100 from "./components/rsga/rsga100.vue";
import Rsza100 from "./components/rsza/rsza100.vue";
export default {
    name: 'App',
    components: {
        Rsaa100,
        Rsba100,
        Rsga100,
        Rsza100,
    },
    data() {
        return {
            overlay: true
        };
    },
    mounted() {
        this.overlay = false; //關閉Loading畫面
    }
};
</script>

<style lang="scss">
</style>
