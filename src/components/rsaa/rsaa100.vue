<!-- 導覽列-->
<template>
<v-app-bar id="rsaa100" color="primary" elevate-on-scroll>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Yung</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn class="mx-2" @click="changeTheme()" icon>
        <v-icon>fas fa-adjust</v-icon>
    </v-btn>

</v-app-bar>
</template>

<script>
export default {
    name: 'Rsaa100',

    data() {
        return {}
    },
    methods: {
        scroll2Position(y) {
            window.scrollTo(0, y);
        },
        changeTheme() {
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
