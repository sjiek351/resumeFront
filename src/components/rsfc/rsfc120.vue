<!-- Article 1.關於我-->
<template>
<v-container>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="modifyProject()">
        <v-row>

            <v-col cols="12" lg="6">
                <v-text-field v-model="project.expId" label="* 經驗編號" counter="8" :rules="[expIdRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="project.projectId" label="* 專案編號" counter="8" :rules="[projectIdRule]" />
            </v-col>

            <v-col cols="12" lg="6">

                <v-menu v-model="starttimeMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="project.starttime" label="* 開始日期" prepend-icon="fas fa-calendar-day" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="project.starttime" @input="starttimeMenu = false"></v-date-picker>
                </v-menu>

            </v-col>

            <v-col cols="12" lg="6">

                <v-menu v-model="endtimeMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="project.endtime" label="* 結束日期" prepend-icon="fas fa-calendar-day" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="project.endtime" @input="endtimeMenu = false"></v-date-picker>
                </v-menu>

            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="project.projectName" label="* 經驗名稱" counter="30" :rules="[projectNameRule]" />
            </v-col>

            <v-col cols="12" lg="6">
                <v-text-field v-model="project.jobTitle" label="職位" counter="10" :rules="[jobTitleRule]" />
            </v-col>

            <v-col cols="12">
                <v-chip class="ma-2">
                    <v-text-field v-model="skillNameInput" label="技能" counter="30" :rules="[skillNameInputRule]" />
                    <v-icon @click="addTechnology()">
                        fas fa-plus-circle
                    </v-icon>
                </v-chip>
                <v-chip-group column>
                    <v-chip v-for="(skillName, index) in project.skillNames" :key="index" class="ma-2" color="primary" text-color="white" close @click:close="removeTechnology(index)">
                        {{skillName}}
                    </v-chip>
                </v-chip-group>
            </v-col>

            <v-col cols="12">
                <v-textarea v-model="project.jobDescribe" label="工作內容" counter="300" :rules="[jobDescribeRule]" clear-icon="far fa-times-circle" clearable />
            </v-col>

        </v-row>

        <v-row align="center" justify="space-around">
            <div class="my-3">
                <v-btn type="submit" class="mx-1" color="primary" :disabled="!valid">
                    變更專案
                </v-btn>

                <v-btn class="mx-1" color="secondary" @click="deleteProject()">
                    刪除專案
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
    name: "Rsfc120",
    components: {
        Messagebar
    },
    data() {
        return {
            project: {
                expId: null,
                projectId: null,
                starttime: null,
                endtime: null,
                projectName: null,
                jobTitle: null,
                jobDescribe: null,
                skillNames: []
            },
            skillNameInput: null,
            starttimeMenu: false,
            endtimeMenu: false,
            valid: true,
            message: null,
            messageKey: 0
        };
    },
    methods: {
        addTechnology() {
            if (this.skillNameInput && this.skillNameInput.length <= 30) {
                this.project.skillNames.push(this.skillNameInput);
            }
        },
        removeTechnology(index) {
            this.project.skillNames.splice(index, 1);
        },
        modifyProject() {
            if (this.$refs.form.validate()) {
                const data = this.project;

                this.$api.post('rsfc100/modifyProject', data)
                    .then(response => {
                        this.$emit('needRender', true);
                        this.message = response.data.message;
                        this.messageKey++;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        deleteProject() {
            const data = this.project;

            this.$api.post('rsfc100/deleteProject', data)
                .then(response => {
                    this.$emit('needRender', true);
                    this.message = response.data.message;
                    this.messageKey++;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        /* Vuetify 檢核 */
        expIdRule(value) {
            if (!value) {
                return '必填';
            }

            if (value.length != 8) {
                return '請填寫至8字元';
            }

            return true;
        },
        projectIdRule(value) {
            if (!value) {
                return '必填';
            }

            if (value.length != 8) {
                return '請填寫至8字元';
            }

            return true;
        },
        projectNameRule(value) {
            if (!value) {
                return '必填';
            }

            if (value.length > 30) {
                return '請勿超過30字元';
            }

            return true;
        },
        jobTitleRule(value) {
            if (value && value.length > 10) {
                return '請勿超過10字元';
            }

            return true;
        },
        skillNameInputRule(value) {
            if (value && value.length > 30) {
                return '請勿超過30字元';
            }

            return true;
        },
        jobDescribeRule(value) {
            if (value && value.length > 300) {
                return '請勿超過300字元';
            }

            return true;
        },
    },
};
</script>

<style scoped>

</style>
