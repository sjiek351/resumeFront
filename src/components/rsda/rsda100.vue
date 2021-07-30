<!-- 導覽列-->
<template>
<div id="rsda100">
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand class="mx-5 pointer" @click="$common.scroll2Position(0)">Yung</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="mx-3"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="mx-3" is-nav>
            <b-navbar-nav>
                <b-nav-item class="mx-2" @click="$common.scroll2Position(positionAbout)">關於我</b-nav-item>
                <b-nav-item class="mx-2" @click="$common.scroll2Position(positionSkill)">技能</b-nav-item>
                <b-nav-item class="mx-2" @click="$common.scroll2Position(positionExp)">經歷</b-nav-item>
                <b-nav-item class="mx-2" @click="$common.scroll2Position(positionCerti)">證照</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Rsda100',
    
    data() {
        return {
            msg: 'Rsda100'
        }
    },
    methods: {
        scroll2Position(y) {
            window.scrollTo(0, y);
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/commonUtil.scss";

#rsda100 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
</style>
