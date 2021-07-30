<!-- 頁首-->
<template>
<v-container id="rsca100" class="flexCenter">
    <div id="logoArea" class="flexCenter">
        <h1>my logo</h1>
        <div id="about" @click="$common.scroll2Position(position)">
            <b-iconstack id="aboutIcon" font-scale="0.8" rotate="90">
                <b-icon stacked icon="chevron-right" shift-h="-3" variant="white"></b-icon>
                <b-icon stacked icon="chevron-right" shift-h="3" variant="white"></b-icon>
            </b-iconstack>
            <span>About</span>
        </div>

    </div>

</v-container>
</template>

<script>
export default {
    name: 'Rsca100',
    props: {
        position: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            msg: 'Rsca100'
        }
    },
    methods: {
        // scroll2Position() {
        //     window.scrollTo(0, this.position);
        // }
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/commonUtil.scss";

#rsca100 {
    height: 100vh;

    #logoArea {
        width: 60%;
        height: 60%;
        border: 5px solid black;

        animation-duration: 10s;
        animation-name: blur;
        animation-iteration-count: infinite;

        #about {
            position: absolute;
            bottom: 0;
            cursor: pointer;

            #aboutIcon {
                animation-duration: 2s;
                animation-name: float;
                animation-iteration-count: infinite;
            }
        }

    }

}

@keyframes blur {
    0% {
        backdrop-filter: blur(10px);
    }

    50% {
        backdrop-filter: blur(0px);
    }

    100% {
        backdrop-filter: blur(10px);
    }
}

@keyframes float {
    0% {
        opacity: 0;
        transform: translateY(-5px);
    }

    50% {
        opacity: 1;
        transform: translateY(0px);
    }

    100% {
        opacity: 0;
        transform: translateY(5px);
    }

}
</style>
