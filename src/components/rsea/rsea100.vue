<!-- Article 關於我-->
<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <h2 class="text-h2 my-3 text-center"><span class="highlight-primary"> About</span></h2>
        </v-col>

        <v-col cols="12" lg="5" class="order-lg-2 d-flex justify-center align-center">

            <div class="text-center">
                <img id="photo" class="rounded-circle" :src="photoSrc" />

                <transition name="fadeXReverseTransition">
                    <h1 v-show="personal.name && personal.nameEnglish "><b>{{ personal.name }}&nbsp;{{ personal.nameEnglish }}</b></h1>
                </transition>

                <transition name="fadeXReverseTransition">
                    <p v-show="personal.job && personal.location && personal.cellphone && personal.email">
                        {{ personal.job }}<br />
                        {{ personal.location }}<br />
                        電話 : {{ personal.cellphone | phoneFormat}}<br />
                        郵件 : {{ personal.email }}
                    </p>
                </transition>

            </div>
        </v-col>

        <v-col cols="12" lg="7" class="order-lg-1 d-flex justify-center align-center">
            <transition name="fadeXTransition">
                <p v-show="personal.introduction" v-html="personal.introduction" class="text-pre-line">
                </p>
            </transition>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "Rsea100",
    data() {
        return {
            personal: {},
            photoSrc: require('@/assets/img/webp/me.webp')
        };
    },
    created() {
        this.findPersonal();
    },
    methods: {
        findPersonal() {
            this.$api.post('rsea100/findPersonal')
                .then(response => {
                    this.personal = response.data.personal;
                })
                .catch(error => {
                    console.log(error);
                });
        },
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";

#photo {
    max-width: 30vw;
}
</style>
