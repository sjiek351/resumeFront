<!-- 元件架構-->
<template>
<v-app>
    <!-- Navbar -->
    <Rsaa100 />

    <!-- banner -->
    <Rsba100 />

    <v-main>
        <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <div class="primary">
        <Rsza100 />
    </div>
</v-app>
</template>

<script>
import Rsaa100 from "./components/rsaa/rsaa100.vue";
import Rsba100 from "./components/rsba/rsba100.vue";
import Rsza100 from "./components/rsza/rsza100.vue";
export default {
    name: 'App',
    components: {
        Rsaa100,
        Rsba100,
        Rsza100,
    },
    data() {
        return {
            isNavbarShow: false,
            articleAreaY: 0
        };
    },
};
</script>

<style lang="scss">
</style>
