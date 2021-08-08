<!-- Article 1.關於我-->
<template>
<v-container>
    <v-row>
        <v-col cols="12" lg="6">
            <v-text-field v-model="name" label="* 名字(3字元內)" :rules="[nameRule]" />
        </v-col>
        <v-col cols="12" lg="6">
            <v-text-field v-model="nameEnglish" label="英文名字(20字元內)" :rules="[nameEnglishRule]" />
        </v-col>
        <v-col cols="12" lg="6">
            <v-text-field v-model="job" label="期待職位(10字元內)" :rules="[jobRule]" />
        </v-col>
        <v-col cols="12" lg="6">
            <v-text-field v-model="location" label="期待地區(10字元內)" :rules="[locationRule]" />
        </v-col>
        <v-col cols="12" lg="6">
            <v-text-field v-model="cellphone" label="* 聯絡手機" :rules="[cellphoneRule]" />
        </v-col>
        <v-col cols="12" lg="6">
            <v-text-field v-model="email" label="* 聯絡信箱(50字元內)" :rules="[emailRule]" />
        </v-col>
        <v-col cols="12">
            <v-textarea v-model="introduction" label="自我介紹(500字元內)" :rules="[introductionRule]" clear-icon="mdi-close-circle" clearable />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "Rsfa100",
    data() {
        return {
            name: null,
            nameEnglish: null,
            job: null,
            location: null,
            cellphone: null,
            email: null,
            introduction: null
        };
    },
    methods: {
        /* Vuetify 檢核 */
        nameRule(value) {
            if (!value) {
                return '必填';
            }

            if (value.length > 3) {
                return '請勿超過3字元';
            }

            return true;
        },
        nameEnglishRule(value) {
            if (value && value.length > 20) {
                return '請勿超過20字元';
            }

            return true;
        },
        jobRule(value) {
            if (value && value.length > 10) {
                return '請勿超過10字元';
            }

            return true;
        },
        locationRule(value) {
            if (value && value.length > 10) {
                return '請勿超過10字元';
            }

            return true;
        },
        cellphoneRule(value) {
            if (!value) {
                return '必填';
            }

            const regex = /^09[0-9]{8}$/;
            if (!regex.test(value)) {
                return '手機格式錯誤';
            }

            return true;
        },
        emailRule(value) {
            if (!value) {
                return '必填';
            }

            if (value.length > 50) {
                return '請勿超過50字元';
            }

            const regex = /.+@.+/;
            if (!regex.test(value)) {
                return '信箱格式錯誤';
            }

            return true;
        },
        introductionRule(value) {
            if (value && value > 500) {
                return '請勿超過500字元';
            }

            return true;
        },
    },
};
</script>

<style scoped>
</style>
