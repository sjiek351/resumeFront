<!-- Article 修改關於我-->
<template>
<v-container>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="modifyPersonal()">
        <v-row>
            <v-col cols="12" lg="6">
                <v-text-field v-model="personal.name" label="* 名字" counter="3" :rules="[nameRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="personal.nameEnglish" label="英文名字" counter="20" :rules="[nameEnglishRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="personal.job" label="期待職位" counter="10" :rules="[jobRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="personal.location" label="期待地區" counter="10" :rules="[locationRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="personal.cellphone" label="* 聯絡手機" counter="10" :rules="[cellphoneRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="personal.email" label="* 聯絡信箱" counter="50" :rules="[emailRule]" />
            </v-col>

            <v-col cols="12">
                <v-textarea v-model="personal.introduction" label="自我介紹" counter="500" :rules="[introductionRule]" clear-icon="far fa-times-circle" clearable />
            </v-col>
        </v-row>

        <v-row align="center" justify="space-around">
            <v-btn type="submit" class="my-3" color="primary" :disabled="!valid">
                變更
            </v-btn>
        </v-row>
    </v-form>
    <Messagebar :message="message" :key="messageKey" />
</v-container>
</template>

<script>
import Messagebar from "../commonUtil/messagebar.vue";
export default {
    name: "Rsfa100",
    props: {
        idn: String,
    },
    components: {
        Messagebar
    },
    data() {
        return {
            personal: {
                idn: null,
                name: null,
                nameEnglish: null,
                job: null,
                location: null,
                cellphone: null,
                email: null,
                introduction: null,
            },
            valid: true,
            message: null,
            messageKey: 0
        };
    },
    created() {
        this.findPersonal();
    },
    methods: {
        findPersonal() {
            this.personal.idn = this.idn;
            const data = this.personal;

            this.$api
                .post("rsfa100/findPersonal", data)
                .then((response) => {
                    this.personal = response.data.personal;
                    this.message = response.data.message;
                    this.messageKey++;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        modifyPersonal() {
            if (this.$refs.form.validate()) {
                this.personal.idn = this.idn;
                const data = this.personal;

                this.$api
                    .post("rsfa100/modifyPersonal", data)
                    .then((response) => {
                        this.personal = response.data.personal;
                        this.message = response.data.message;
                        this.messageKey++;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        /* Vuetify 檢核 */
        nameRule(value) {
            if (!value) {
                return "必填";
            }

            if (value.length > 3) {
                return "請勿超過3字元";
            }

            return true;
        },
        nameEnglishRule(value) {
            if (value && value.length > 20) {
                return "請勿超過20字元";
            }

            return true;
        },
        jobRule(value) {
            if (value && value.length > 10) {
                return "請勿超過10字元";
            }

            return true;
        },
        locationRule(value) {
            if (value && value.length > 10) {
                return "請勿超過10字元";
            }

            return true;
        },
        cellphoneRule(value) {
            if (!value) {
                return "必填";
            }

            const regex = /^09[0-9]{8}$/;
            if (!regex.test(value)) {
                return "手機格式錯誤";
            }

            return true;
        },
        emailRule(value) {
            if (!value) {
                return "必填";
            }

            if (value.length > 50) {
                return "請勿超過50字元";
            }

            const regex = /.+@.+/;
            if (!regex.test(value)) {
                return "信箱格式錯誤";
            }

            return true;
        },
        introductionRule(value) {
            if (value && value > 500) {
                return "請勿超過500字元";
            }

            return true;
        },
        /* */
    },
};
</script>

<style scoped>
</style>
