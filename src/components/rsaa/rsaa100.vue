<!-- Loading-->
<template>
<div id="rsaa100">
    <v-overlay z-index="100" opacity="0.8" :value="overlay">
        <div id="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
        </div>
    </v-overlay>
</div>
</template>

<script>
export default {
    name: 'Rsaa100',
    props: {
        overlay: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {}
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";

#rsaa100 {

    #sk-cube-grid {
        width: 40px;
        height: 40px;

        .sk-cube {
            width: 33%;
            height: 33%;
            background-color: white;
            float: left;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        }

        .sk-cube1,
        .sk-cube5,
        .sk-cube9 {
            animation-delay: 0.2s;
        }

        .sk-cube2,
        .sk-cube6 {
            animation-delay: 0.3s;
        }

        .sk-cube3 {
            animation-delay: 0.4s;
        }

        .sk-cube4,
        .sk-cube8 {
            animation-delay: 0.1s;
        }

        .sk-cube7 {
            animation-delay: 0s;
        }

    }

    @keyframes sk-cubeGridScaleDelay {

        0%,
        70%,
        100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        }

        35% {
            -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
        }
    }

}
</style>
