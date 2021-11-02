<!-- Article 修改經歷版面/經歷-->
<template>
<v-container>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="modifyExperience()">
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="experience.expId" label="* 經驗編號" counter="8" :rules="[expIdRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-menu v-model="starttimeMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="experience.starttime" label="* 開始日期" prepend-icon="fas fa-calendar-day" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="experience.starttime" @input="starttimeMenu = false"></v-date-picker>
                </v-menu>
            </v-col>

            <v-col cols="12" lg="6">
                <v-menu v-model="endtimeMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="experience.endtime" label="* 結束日期" prepend-icon="fas fa-calendar-day" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="experience.endtime" @input="endtimeMenu = false"></v-date-picker>
                </v-menu>
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="experience.expName" label="* 經驗名稱" counter="30" :rules="[expNameRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="experience.jobTitle" label="職位" counter="10" :rules="[jobTitleRule]" />
            </v-col>

            <v-col cols="12">
                <v-textarea v-model="experience.jobDescribe" label="工作內容" counter="300" :rules="[jobDescribeRule]" clear-icon="far fa-times-circle" clearable />
            </v-col>
        </v-row>

        <v-row align="center" justify="space-around">
            <div class="my-3">
                <v-btn type="submit" class="mx-1" color="primary" :disabled="!valid">
                    變更經歷
                </v-btn>

                <v-btn class="mx-1"  color="red" dark @click="deleteExperience()">
                    刪除經歷
                </v-btn>
            </div>
        </v-row>
    </v-form>
    <Messagebar :message="message" :key="messageKey" />
</v-container>
</template>

<script>
import Messagebar from "../commonUtil/messagebar.vue";
export default {
    name: "Rsfc110",
    components: {
        Messagebar
    },
    data() {
        return {
            experience: {
                expId: null,
                starttime: null,
                endtime: null,
                expName: null,
                jobTitle: null,
                jobDescribe: null,
            },
            starttimeMenu: false,
            endtimeMenu: false,
            valid: true,
            message: null,
            messageKey: 0
        };
    },
    methods: {
        modifyExperience() {
            if (this.$refs.form.validate()) {
                const data = this.experience;

                this.$api
                    .post("rsfc100/modifyExperience", data)
                    .then((response) => {
                        this.$emit('needRender', true);
                        this.message = response.data.message;
                        this.messageKey++;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        deleteExperience() {
            const data = this.experience;

            this.$api
                .post("rsfc100/deleteExperience", data)
                .then((response) => {
                    this.$emit('needRender', true);
                    this.message = response.data.message;
                    this.messageKey++;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        /* Vuetify 檢核 */
        expIdRule(value) {
            if (!value) {
                return "必填";
            }

            if (value.length != 8) {
                return "請填寫至8字元";
            }

            return true;
        },
        expNameRule(value) {
            if (!value) {
                return "必填";
            }

            if (value.length > 30) {
                return "請勿超過30字元";
            }

            return true;
        },
        jobTitleRule(value) {
            if (value && value.length > 10) {
                return "請勿超過10字元";
            }

            return true;
        },
        jobDescribeRule(value) {
            if (value && value.length > 300) {
                return "請勿超過300字元";
            }

            return true;
        },
    },
};
</script>

<style scoped>
</style>
