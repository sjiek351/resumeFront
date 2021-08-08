<!-- 導覽列-->
<template>
<v-card id="rsaa100">
    
    <v-app-bar color="primary" elevate-on-scroll>

        <v-toolbar-title class="pointer" @click="goHome()">
            <v-avatar size="56">
                <v-img :src="logoSrc" />
            </v-avatar><span class="mx-1">YUNG</span>
        </v-toolbar-title>

        <v-spacer />

        <v-app-bar-nav-icon class="d-lg-none" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <div class="d-none d-lg-block">
            <v-btn class="mx-2" href="https://github.com/sjiek351" target="_blank" icon>
                <v-icon>fab fa-github</v-icon>
            </v-btn>

            <v-btn class="mx-2" @click="print()" icon>
                <v-icon>fas fa-print</v-icon>
            </v-btn>

            <v-btn class="mx-2" @click="changeTheme()" icon>
                <v-icon>fas fa-adjust</v-icon>
            </v-btn>

            <v-btn class="mx-2" @click="goSetting()" icon>
                <v-icon>fas fa-cog</v-icon>
            </v-btn>
        </div>

    </v-app-bar>

    <v-bottom-sheet v-model="drawer">
        <v-bottom-navigation background-color="primary">
            <v-btn href="https://github.com/sjiek351" target="_blank" icon>
                <v-icon>fab fa-github</v-icon>
            </v-btn>

            <v-btn @click="changeTheme()" icon>
                <v-icon>fas fa-adjust</v-icon>
            </v-btn>

            <v-btn @click="goSetting()" icon>
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
            group: null,
            logoSrc: './static/img/webp/logo.webp',
        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        print() {
            window.print();
        },
        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
        goHome() {
            this.$router.push('/');
        },
        goSetting() {
            this.$router.push('Rsda100');
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/commonUtil.scss";

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
