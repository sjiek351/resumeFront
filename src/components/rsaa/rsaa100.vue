<!-- 元件架構-->
<template>
<div id="rsaa100">
    <!-- <Rsba100 /> -->
    <Rsca100 id="rsca100" :position="articleAreaY" />
    <Rsda100 id="rsda100" :class="{'navbarShow':isNavbarShow, 'navbarHide':!isNavbarShow}" />
    <div id="articleArea">
        <Rsea100 id="rsea100" />
        <div class="primaryBlock"></div>
        <Rseb100 id="rseb100" />
        <Rsec100 id="rsec100" />
        <Rsed100 id="rsed100" />
    </div>
    <div id="footerArea">
        <Rsza100 />
    </div>
</div>
</template>

<script>
import Rsba100 from "../rsba/rsba100.vue";
import Rsca100 from "../rsca/rsca100.vue";
import Rsda100 from "../rsda/rsda100.vue";
import Rsea100 from "../rsea/rsea100.vue";
import Rseb100 from "../rseb/rseb100.vue";
import Rsec100 from "../rsec/rsec100.vue";
import Rsed100 from "../rsed/rsed100.vue";
import Rsza100 from "../rsza/rsza100.vue";
export default {
    name: "Rsaa100",
    components: {
        Rsba100,
        Rsca100,
        Rsda100,
        Rsea100,
        Rseb100,
        Rsec100,
        Rsed100,
        Rsza100,
    },
    data() {
        return {
            //導覽列設定
            articleAreaY: 0, //監聽基準
            isNavbarShow: false, //顯示
        };
    },
    mounted() {
        //設定導覽列監聽
        this.articleAreaY = document.getElementById('articleArea').offsetTop;
        window.addEventListener("scroll", this.showNavbar);

    },
    beforeDestroy() {
        //移除導覽列監聽
        window.removeEventListener("scroll", this.showNavbar);
    },
    methods: {
        //導覽列顯示控制
        showNavbar() {
            const scrollY = window.scrollY;
            this.isNavbarShow = (scrollY > (this.articleAreaY - 200)) ? true : false;
        }
    },

};
</script>

<style lang="scss">
@import "../../assets/scss/commonUtil.scss";

#rsaa100 {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(../../assets/img/webp/background.webp);
    background-repeat: no-repeat, no-repeat;
    background-size: cover, cover;
    background-attachment: fixed, fixed;
    background-position: center, center;
    color: $lightColor;

    #articleArea {
        background: white;
        color: $darkColor;

        .primaryBlock {
            width: 100%;
            height: 100px;
            background-color: $primaryColor;
            clip-path: polygon(28% 26%, 0 0, 0 93%, 11% 79%, 48% 100%, 50% 70%, 88% 100%, 100% 80%, 100% 16%, 82% 0, 69% 52%, 48% 0);
        }
    }

    #footerArea {
        background-color: $primaryColor;
    }
}

.navbarShow {
    $time: 500ms;

    visibility: visible;
    opacity: 1;
    transition-duration: $time;
    animation: slideDown $time linear 1;
}

.navbarHide {
    $time: 400ms;

    visibility: hidden;
    opacity: 0;
    transition-duration: $time;
    animation: slideUp $time linear 1;
}

@keyframes slideDown {
    0% {
        top: -100px;
    }

    100% {
        top: 0;
    }
}

@keyframes slideUp {
    0% {
        top: 0;
    }

    100% {
        top: -100px;
    }
}
</style>
