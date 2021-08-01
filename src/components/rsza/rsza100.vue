<!-- Footer-->
<template>
<v-container id="rsza100">
    <v-row align="center" justify="center">
        <v-col cols="12">
            <v-footer padless>
                <v-card width="100%" color="primary" flat tile>
                    <v-card-text class="text-lg-center">
                        <v-container>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-icon class="mx-1">
                                        fas fa-envelope
                                    </v-icon>
                                    <span>E-mail : {{ personal.email }}</span>
                                </v-col>
                                <v-col cols="12" lg="6">

                                    <v-icon class="mx-1">
                                        fas fa-phone
                                    </v-icon>
                                    <span>Phone : {{ personal.cellphone }}</span>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="text-center">
                        Copyright &copy; {{ new Date().getFullYear() }} — <strong>崔永昀</strong> All Rights Reserved.
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
            personal: {}
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
