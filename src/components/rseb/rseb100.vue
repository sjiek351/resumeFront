<!-- Article 2.技能-->
<template>
<v-container>
    <h2 class="title">技能</h2>
    <v-row>
        <v-col cols="12" lg="3">
            <ul>語言
                <li v-for="(language, index) in languages" v-bind:key="index">{{language.name}}:{{language.level}}</li>
            </ul>
        </v-col>
        <v-col cols="12" lg="3">
            <ul>框架
                <li v-for="(framework, index) in frameworks" v-bind:key="index">{{framework.name}}:{{framework.level}}</li>
            </ul>
        </v-col>
        <v-col cols="12" lg="3">
            <ul>函式庫
                <li v-for="(library, index) in librarys" v-bind:key="index">{{library.name}}:{{library.level}}</li>
            </ul>
        </v-col>
        <v-col cols="12" lg="3">
            <ul>開發工具
                <li v-for="(tool, index) in tools" v-bind:key="index">{{tool.name}}:{{tool.level}}</li>
            </ul>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Rseb100',
    data() {
        return {
            languages: {},
            frameworks: {},
            librarys: {},
            tools: {}
        }
    },
    created: function () {
        this.findSkills();
    },
    methods: {
        findSkills() {
            this.$api.post('rseb100/findSkills')
                .then(response => {
                    const skills = response.data.skills;
                    this.languages = skills.filter(skill => {
                        return (skill.type == '1')
                    });
                    this.frameworks = skills.filter(skill => {
                        return (skill.type == '2')
                    });
                    this.librarys = skills.filter(skill => {
                        return (skill.type == '3')
                    });
                    this.tools = skills.filter(skill => {
                        return (skill.type == '4')
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },

}
</script>

<style scoped lang='scss'>
</style>
