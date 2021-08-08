<!-- Article 2.技能-->
<template>
<v-container>
    <h2 class="my-3">技能 Skill</h2>
    <v-row>
        <v-col cols="12" class="d-flex align-center ">
            <Level :rank="1" :color="'yellow'" /><span class="mr-3">有學習</span>
            <Level :rank="1" :color="'orange'" /><span class="mr-3">有實務經驗</span>
            <Level :rank="1" :color="'red'" /><span class="mr-3">熟練</span>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" lg="3">

            <h3>語言</h3>
            <div v-for="(language, index) in languages" v-bind:key="index" class="d-flex align-center my-1">
                <span>{{language.skillName}}</span>
                <Level v-if="language.rank == 1" :rank="language.rank" :color="'yellow'" :describe="'有學習'" />
                <Level v-if="language.rank == 2" :rank="language.rank" :color="'orange'" :describe="'有實務經驗'" />
                <Level v-if="language.rank == 3" :rank="language.rank" :color="'red'" :describe="'熟練'" />
            </div>

        </v-col>
        <v-col cols="12" lg="3">

            <h3>框架</h3>
            <div v-for="(framework, index) in frameworks" v-bind:key="index" class="d-flex align-center my-1">
                <span>{{framework.skillName}}</span>
                <Level v-if="framework.rank == 1" :rank="framework.rank" :color="'yellow'" :describe="'有學習'" />
                <Level v-if="framework.rank == 2" :rank="framework.rank" :color="'orange'" :describe="'有實務經驗'" />
                <Level v-if="framework.rank == 3" :rank="framework.rank" :color="'red'" :describe="'熟練'" />
            </div>

        </v-col>
        <v-col cols="12" lg="3">

            <h3>函式庫</h3>
            <div v-for="(library, index) in librarys" v-bind:key="index" class="d-flex align-center my-1">
                <span>{{library.skillName}}</span>
                <Level v-if="library.rank == 1" :rank="library.rank" :color="'yellow'" :describe="'有學習'" />
                <Level v-if="library.rank == 2" :rank="library.rank" :color="'orange'" :describe="'有實務經驗'" />
                <Level v-if="library.rank == 3" :rank="library.rank" :color="'red'" :describe="'熟練'" />
            </div>

        </v-col>
        <v-col cols="12" lg="3">

            <h3>開發工具</h3>
            <div v-for="(tool, index) in tools" v-bind:key="index" class="d-flex align-center my-1">
                <span>{{tool.skillName}}</span>
                <Level v-if="tool.rank == 1" :rank="tool.rank" :color="'yellow'" :describe="'有學習'" />
                <Level v-if="tool.rank == 2" :rank="tool.rank" :color="'orange'" :describe="'有實務經驗'" />
                <Level v-if="tool.rank == 3" :rank="tool.rank" :color="'red'" :describe="'熟練'" />
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
