<!-- 元件架構-->
<template>
<v-app id="app">
    <!-- v-app-bar -->
    <Rsaa100 />

    <v-main>
        <v-container fluid>

            <router-view></router-view>

        </v-container>
    </v-main>

    <!-- v-footer -->
    <div class="primary">
        <Rsza100 />
    </div>
</v-app>
</template>

<script>
import Rsaa100 from "./components/rsaa/rsaa100.vue";
import Rsza100 from "./components/rsza/rsza100.vue";
export default {
    name: 'App',
    components: {
        Rsaa100,
        Rsza100,
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="scss">
#app {
}
</style>
