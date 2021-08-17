<!-- 管理版面-->
<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <h2 class="text-h2 my-3 text-center">
                <span class="highlight-primary">修改履歷資料</span>
            </h2>
        </v-col>

        <v-col cols="12" v-if="!idnCheck">
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="findPersonal()">
                <v-card class="ma-2" outlined tile>
                    <v-alert v-if="idnErr" border="right" color="secondary" dark>
                        查無資料
                    </v-alert>

                    <v-card-text>
                        <v-text-field v-model="idn" label="請輸入身分證字號" :rules="[idRule]" />
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer />
                        <v-btn type="submit" class="my-3" color="primary" :disabled="!valid">
                            確認
                        </v-btn>
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-col>

        <v-col cols="12" v-if="idnCheck" outlined tile>
            <v-card class="ma-2">
                <v-tabs background-color="primary" dark>
                    <v-tab v-for="(item, index) in items" :key="index" @click="goArticle(item.route)">
                        {{ item.tab }}
                    </v-tab>

                    <v-tab @click="changeIdn()">
                        <v-icon>fas fa-sign-out-alt</v-icon>
                    </v-tab>
                </v-tabs>

                <v-card flat>
                    <router-view :idn="idn" />
                </v-card>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "Rsda100",

    data() {
        return {
            idn: null,
            idnCheck: false,
            idnErr: false,
            valid: true,
            tab: null,
            items: [{
                    tab: "Personal",
                    route: "/Rsda100/Rsfa100",
                },
                {
                    tab: "Skill",
                    route: "/Rsda100/Rsfb100",
                },
                {
                    tab: "Experience",
                    route: "/Rsda100/Rsfc100",
                },
            ],
        };
    },
    methods: {
        findPersonal() {
            if (this.$refs.form.validate()) {
                this.idnErr = false;

                const data = {
                    idn: this.idn,
                };

                this.$api
                    .post("rsda100/findPersonal", data)
                    .then((response) => {
                        const personal = response.data.personal;
                        if (personal) {
                            this.idnCheck = true;
                            this.goArticle("/Rsda100/Rsfa100");
                        } else {
                            this.idnErr = true;
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        goArticle(route) {
            this.$router.push({
                path: route,
            });
        },
        changeIdn() {
            this.idn = null;
            this.idnCheck = false;
            this.$router.push("/Rsda100");
        },
        /* Vuetify 檢核 */
        idRule(value) {
            if (!value) {
                return "必填";
            }

            const regex = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
            if (!regex.test(value)) {
                return "身分證字號格式錯誤";
            }

            return true;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/commonUtil.scss";
</style>
