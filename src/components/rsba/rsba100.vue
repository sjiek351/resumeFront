<!-- Header-->
<template>
<div id="rsba100">
    <transition name="fadeYTransition">
        <Rsba110 v-show="navbarShow" />
    </transition>

    <div id="banner" class="d-flex align-center justify-center">
        <div id="headline">
            <v-divider dark />

            <div class="d-flex">
                <v-avatar class="mx-3" size="65">
                    <v-img :src="logoSrc" />
                </v-avatar>
                <h1 class="text-h2">
                    <strong>YUNG YUN</strong>
                </h1>
            </div>

            <p class="text-h6 text-right">1 year Programmer</p>

            <v-divider dark />
        </div>

        <div id="downBtn">
            <v-btn icon @click="$common.scroll2Position(bannerBottomY)">
                <v-icon>fas fa-angle-double-down</v-icon>
            </v-btn>
        </div>
    </div>

</div>
</template>

<script>
import Rsba110 from "./rsba110.vue";
export default {
    name: 'Rsba100',
    components: {
        Rsba110,
    },
    data() {
        return {
            navbarShow: false,
            bannerBottomY: 0,
            logoSrc: require('@/assets/img/webp/logo.webp'),
        }
    },
    mounted() {
        //初始化參數
        const banner = document.getElementById('banner');
        this.bannerBottomY = banner.offsetTop + banner.clientHeight;

        //新增監聽
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        //刪除監聽
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.scrollY;

            if (scrollTop > this.bannerBottomY - 30) {
                this.navbarShow = true;
            } else {
                this.navbarShow = false;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";

#rsba100 {
    #banner {
        height: 100vh;
        background-image: url('~@/assets/img/webp/background.webp');
        background-size: cover;
        background-position: center;
        position: relative;

        #headline {
            margin: 10px;
        }

        #downBtn {
            position: absolute;
            bottom: 25%;
            animation: fadeDown 3s ease-in-out infinite;
        }

    }

}

@keyframes fadeDown {
    0% {
        opacity: 0;
        transform: translate(0px, -10px);
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(0px, 10px);
    }
}
</style>
