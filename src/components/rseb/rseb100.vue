<!-- Article 2.技能-->
<template>
<v-container>
    <h2>技能</h2>
    <v-row>
        <v-col cols="12" class="d-flex align-center ">
            <Level :level="1" :color="'yellow'" /><span class="mr-3">有學習</span>
            <Level :level="1" :color="'orange'" /><span class="mr-3">有實務經驗</span>
            <Level :level="1" :color="'red'" /><span class="mr-3">熟練</span>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" lg="3">

            <h3>語言</h3>
            <div v-for="(language, index) in languages" v-bind:key="index" class="d-flex align-center my-1">
                {{language.name}}
                <Level v-if="language.level == 1" :level="language.level" :color="'yellow'" :describe="'有學習'" />
                <Level v-if="language.level == 2" :level="language.level" :color="'orange'" :describe="'有實務經驗'" />
                <Level v-if="language.level == 3" :level="language.level" :color="'red'" :describe="'熟練'" />
            </div>

        </v-col>
        <v-col cols="12" lg="3">

            <h3>框架</h3>
            <div v-for="(framework, index) in frameworks" v-bind:key="index" class="d-flex align-center my-1">
                {{framework.name}}
                <Level v-if="framework.level == 1" :level="framework.level" :color="'yellow'" :describe="'有學習'"></Level>
                <Level v-if="framework.level == 2" :level="framework.level" :color="'orange'" :describe="'有實務經驗'"></Level>
                <Level v-if="framework.level == 3" :level="framework.level" :color="'red'" :describe="'熟練'"></Level>
            </div>

        </v-col>
        <v-col cols="12" lg="3">

            <h3>函式庫</h3>
            <div v-for="(library, index) in librarys" v-bind:key="index" class="d-flex align-center my-1">
                {{library.name}}
                <Level v-if="library.level == 1" :level="library.level" :color="'yellow'" :describe="'有學習'"></Level>
                <Level v-if="library.level == 2" :level="library.level" :color="'orange'" :describe="'有實務經驗'"></Level>
                <Level v-if="library.level == 3" :level="library.level" :color="'red'" :describe="'熟練'"></Level>
            </div>

        </v-col>
        <v-col cols="12" lg="3">

            <h3>開發工具</h3>
            <div v-for="(tool, index) in tools" v-bind:key="index" class="d-flex align-center my-1">
                {{tool.name}}
                <Level v-if="tool.level == 1" :level="tool.level" :color="'yellow'" :describe="'有學習'"></Level>
                <Level v-if="tool.level == 2" :level="tool.level" :color="'orange'" :describe="'有實務經驗'"></Level>
                <Level v-if="tool.level == 3" :level="tool.level" :color="'red'" :describe="'熟練'"></Level>
            </div>

        </v-col>
    </v-row>
</v-container>
</template>

<script>
import Level from "../commonUtil/level.vue";
export default {
    name: 'Rseb100',
    components: {
        Level
    },
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
