<!-- 導覽列-->
<template>
<v-app-bar id="rsaa100" color="primary" elevate-on-scroll>

    <v-toolbar-title>
        <v-avatar size="56"><v-img :src="logoSrc" /></v-avatar><span class="mx-1">YUNG</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn class="mx-2" href="https://github.com/sjiek351" target="_blank" icon>
        <v-icon>fab fa-github</v-icon>
    </v-btn>

    <v-btn class="mx-2" @click="changeTheme()" icon>
        <v-icon>fas fa-adjust</v-icon>
    </v-btn>

</v-app-bar>
</template>

<script>
export default {
    name: 'Rsaa100',
    data() {
        return {
            logoSrc: '/static/img/webp/logo.webp'
        }
    },
    methods: {
        changeTheme() {
            console.log(this.$vuetify.theme);
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
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
</style>
