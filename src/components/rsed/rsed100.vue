<!-- Article 證照-->
<template>
<v-container id="rsed100">
    <h2 class="text-h2 my-3 text-center"><span class="highlight-primary">Certificate</span></h2>

    <v-lazy v-model="isActive" :options="{ threshold: 1 }" transition="fadeYTransition">
        <v-row>
            <v-col cols="12" lg="6" v-for="(certificate, index) in certificates" :key="index">

                <h3 class="text-center">{{certificate.title}}</h3>

                <v-hover v-slot="{ hover }">
                    <v-card :class="{ 'cardHover': hover }" outlined>
                        <v-img :src="certificate.src" class="d-flex align-center justify-center">
                            <v-row class="d-flex align-center justify-center">
                                <v-scroll-y-reverse-transition>

                                    <v-btn v-if="hover" color="black" @click="showImg(certificate.src)" fab dark large>
                                        <v-icon dark>
                                            fas fa-expand
                                        </v-icon>
                                    </v-btn>

                                </v-scroll-y-reverse-transition>
                            </v-row>
                        </v-img>
                    </v-card>
                </v-hover>

            </v-col>
        </v-row>
    </v-lazy>

    <vue-easy-lightbox :visible="lightboxVisible" :imgs="lightboxImg" @hide="lightboxHide()"></vue-easy-lightbox>
</v-container>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
    name: "Rsed100",
    components: {
        VueEasyLightbox
    },
    data() {
        return {
            certificates: [{
                    title: 'OCAJP',
                    src: require('@/assets/img/webp/eCertificate-ocajp.webp')
                },
                {
                    title: 'OCPJP',
                    src: require('@/assets/img/webp/eCertificate-ocpjp.webp')
                }
            ],
            isActive: false,
            lightboxImg: '',
            lightboxVisible: false
        };
    },
    methods: {
        showImg(src) {
            this.lightboxImg = src;
            this.lightboxVisible = true;
        },
        lightboxHide() {
            this.lightboxVisible = false;
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";

#rsed100 {
    .cardHover {
        opacity: 0.4;
    }

}
</style>
