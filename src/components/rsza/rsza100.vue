<!-- Footer-->
<template>
<v-container id="rsza100">
    <v-row align="center" justify="center">
        <v-col cols="12">
            <v-footer padless>
                <v-card width="100%" color="primary" flat>
                    <v-card-text class="text-lg-center">
                        <v-container>
                            <v-row>
                                <v-col cols="12" lg="4">
                                    <v-btn class="mx-2" :href="'mailto:' + personal.email" target="_blank" icon>
                                        <v-icon size="24px">
                                            fas fa-envelope
                                        </v-icon>
                                    </v-btn>
                                    <span>E-mail : {{ personal.email }}</span>
                                </v-col>
                                <v-col cols="12" lg="4">
                                    <v-btn class="mx-2" :href="'tel:' + personal.cellphone" target="_blank" icon>
                                        <v-icon size="24px">
                                            fas fa-phone
                                        </v-icon>
                                    </v-btn>
                                    <span>Phone : {{ personal.cellphone }}</span>
                                </v-col>
                                <v-col cols="12" lg="4">
                                    <v-btn class="mx-2" :href="lineSrc" target="_blank" icon>
                                        <v-icon size="24px">
                                            fab fa-line
                                        </v-icon>
                                    </v-btn>
                                    <v-btn class="mx-2" :href="fbSrc" target="_blank" icon>
                                        <v-icon size="24px">
                                            fab fa-facebook
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="text-center">
                        &copy; {{ new Date().getFullYear() }} — <strong>{{personal.name}}</strong> All Rights Reserved.
                    </v-card-text>
                </v-card>
            </v-footer>
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
            fbSrc:'https://www.facebook.com/people/%E5%B4%94%E6%B0%B8%E6%98%80/100000409191287/',
            lineSrc:'https://line.me/ti/p/RxVnbTTeHt'
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
