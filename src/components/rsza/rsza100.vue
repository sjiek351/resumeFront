<!-- Footer-->
<template>
<v-container id="rsza100">
    <v-row align="center" justify="center">
        <v-col cols="12">
            <v-footer padless>
                <v-card id="vFooterCard" class="lighten-1 text-center" flat tile>
                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text id="vFooterText">
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
            icons: [
                'fas fa-envelope',
                'fas fa-phone',
                'fab fa-facebook',
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";

#rsza100 {
    background-color: $primaryColor;

    #vFooterCard {
        width: 100%;
        background-color: $primaryColor;

        #vFooterText {
            color: $lightColor;
        }
    }

}
</style>
