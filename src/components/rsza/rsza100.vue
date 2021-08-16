<!-- Footer-->
<template>
<v-container id="rsza100">
    <v-row>
        <v-col cols="12">
            <h2 class="text-h2 my-3 text-center"><span class="highlight-secondary">Contact Me</span></h2>
        </v-col>

        <v-col cols="12" lg="4">
            <v-hover v-slot="{ hover }">
                <v-card class="mx-2 text-center" :elevation="hover? 15:5" outlined>
                    <v-card-text>
                        <v-btn :href="'mailto:' + personal.email" target="_blank" outlined fab>
                            <v-icon>
                                fas fa-envelope
                            </v-icon>
                        </v-btn>

                        <h3 class="text--primary my-3">
                            EMAIL
                        </h3>

                        <v-divider class="ma-4" inset />

                        <p>{{ personal.email }}</p>
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-col>

        <v-col cols="12" lg="4">
            <v-hover v-slot="{ hover }">
                <v-card class="mx-2 text-center" :elevation="hover? 15:5" outlined>
                    <v-card-text>
                        <v-btn class="mx-2" :href="'tel:' + personal.cellphone" target="_blank" outlined fab>
                            <v-icon>
                                fas fa-phone
                            </v-icon>
                        </v-btn>

                        <h3 class="text--primary my-3">
                            PHONE
                        </h3>

                        <v-divider class="ma-4" inset />

                        <p>{{ personal.cellphone | phoneFormat }}</p>
                    </v-card-text>

                </v-card>
            </v-hover>
        </v-col>

        <v-col cols="12" lg="4">
            <v-hover v-slot="{ hover }">
                <v-card class="mx-2 text-center" :elevation="hover? 15:5" outlined>
                    <v-card-text>
                        <v-btn class="mx-2" :href="lineSrc" target="_blank" outlined fab>
                            <v-icon>
                                fab fa-line
                            </v-icon>
                        </v-btn>

                        <h3 class="text--primary my-3">
                            LINE
                        </h3>

                        <v-divider class="ma-4" inset />

                        <p>QRcode</p>
                    </v-card-text>

                </v-card>
            </v-hover>
        </v-col>

        <v-col cols="12">
            <v-divider />
        </v-col>

        <v-col cols="12" class="text-center">
            &copy; {{ new Date().getFullYear() }} — <strong>{{personal.name}}</strong> All Rights Reserved.
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Rsza100',
    data() {
        return {
            personal: {},
            fbSrc: 'https://www.facebook.com/people/%E5%B4%94%E6%B0%B8%E6%98%80/100000409191287/',
            lineSrc: 'https://line.me/ti/p/RxVnbTTeHt'
        }
    },
    created: function () {
        this.findPersonal();
    },
    methods: {
        findPersonal() {
            this.$api.post('rsza100/findPersonal')
                .then(response => {
                    this.personal = response.data.personal;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";
</style>
