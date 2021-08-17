<!-- Article 修改技能-->
<template>
<v-container>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="modifySkill()">
        <v-row>
            <v-col cols="12">
                <Rseb100 class="printBlock" :key="componentKey" />
            </v-col>

            <v-col cols="6">
                <v-text-field v-model="skill.skillName" label="* 技能名稱" counter="30" :rules="[skillNameRule]" />
            </v-col>

            <v-col cols="3">
                <v-select v-model="skill.type" :items="typeItem" item-text="text" item-value="value" label="* 技能類別"></v-select>
            </v-col>

            <v-col cols="3">
                <v-select v-model="skill.rank" :items="rankItem" item-text="text" item-value="value" label="* 技能等級"></v-select>
            </v-col>
        </v-row>

        <v-row align="center" justify="space-around">
            <div class="my-3">
                <v-btn type="submit" class="mx-1" color="primary" :disabled="!valid">
                    變更
                </v-btn>

                <v-btn class="mx-1" color="secondary" :disabled="!valid" @click="deleteSkill()">
                    刪除
                </v-btn>
            </div>
        </v-row>
    </v-form>
    <Messagebar :message="message" :key="messageKey" />
</v-container>
</template>

<script>
import Rseb100 from "../rseb/rseb100.vue";
import Messagebar from "../commonUtil/messagebar.vue";
export default {
    name: "Rsfb100",
    components: {
        Rseb100,
        Messagebar
    },
    data() {
        return {
            skill: {
                skillName: null,
                type: 1,
                rank: 1,
            },
            typeItem: [{
                text: '語言',
                value: 1
            }, {
                text: '框架',
                value: 2
            }, {
                text: '函式庫',
                value: 3
            }, {
                text: '工具',
                value: 4
            }],
            rankItem: [{
                text: '有學習',
                value: 1
            }, {
                text: '有實務經驗',
                value: 2
            }, {
                text: '熟練',
                value: 3
            }],
            valid: true,
            componentKey: 0,
            message: null,
            messageKey: 0
        };
    },
    methods: {
        renderRseb100() {
            this.componentKey++;
        },
        modifySkill() {
            if (this.$refs.form.validate()) {
                const data = this.skill;

                this.$api.post('rsfb100/modifySkill', data)
                    .then(response => {
                        this.renderRseb100();
                        this.message = response.data.message;
                        this.messageKey++;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        deleteSkill() {
            if (this.$refs.form.validate()) {
                const data = this.skill;

                this.$api.post('rsfb100/deleteSkill', data)
                    .then(response => {
                        this.renderRseb100();
                        this.message = response.data.message;
                        this.messageKey++;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        /* Vuetify 檢核 */
        skillNameRule(value) {
            if (!value) {
                return '必填';
            }

            if (value.length > 30) {
                return '請勿超過30字元';
            }

            return true;
        },
        /* */
    },
};
</script>

<style scoped>
</style>
