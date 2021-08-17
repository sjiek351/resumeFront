<!-- 導覽列-->
<template>
<v-card id="rsaa100">

    <v-app-bar color="primary" elevate-on-scroll>

        <v-toolbar-title class="pointer" @click="goHome()">
            <v-avatar size="56">
                <v-img :src="logoSrc" />
            </v-avatar>
            <span>YUNG</span>
        </v-toolbar-title>

        <v-spacer />

        <v-app-bar-nav-icon class="d-lg-none" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-items class="d-none d-lg-flex">

            <v-btn href="https://github.com/sjiek351" target="_blank" text>
                <v-icon>fab fa-github</v-icon>
                <span class="mx-2">Github</span>
            </v-btn>


            <v-btn @click="print()" text>
                <v-icon>fas fa-print</v-icon>
                <span class="mx-2">列印</span>
            </v-btn>


            <v-btn @click="toggleTheme()" text>
                <v-icon>fas fa-adjust</v-icon>
                <span class="mx-2">切換</span>
            </v-btn>


            <v-btn @click="toggleSetting()" text>
                <v-icon>fas fa-cog</v-icon>
                <span class="mx-2">管理</span>
            </v-btn>
        </v-toolbar-items>

    </v-app-bar>

    <v-bottom-sheet v-model="drawer">
        <v-bottom-navigation background-color="primary">
            <v-btn href="https://github.com/sjiek351" target="_blank" icon>
                <v-icon>fab fa-github</v-icon>
            </v-btn>

            <v-btn @click="toggleTheme()" icon>
                <v-icon>fas fa-adjust</v-icon>
            </v-btn>

            <v-btn @click="toggleSetting()" icon>
                <v-icon>fas fa-cog</v-icon>
            </v-btn>
        </v-bottom-navigation>

    </v-bottom-sheet>

</v-card>
</template>

<script>
export default {
    name: 'Rsaa100',
    data() {
        return {
            drawer: false,
            logoSrc: require('@/assets/img/webp/logo.webp'),
        }
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
        print() {
            window.print();
        },
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            this.drawer = false;
        },
        toggleSetting() {
            const settingPath = '/Rsda100';
            if (this.$route.path == settingPath) {
                this.$router.push('/');
            } else {
                this.$router.push('Rsda100');
            }
            this.drawer = false;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";

#rsaa100 {
    position: sticky;
    top: 0;
    z-index: 100;
}

@media print {
    #rsaa100 {
        position: relative;
        top: auto;
        z-index: auto;
    }
}
</style>
