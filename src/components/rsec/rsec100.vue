<!-- Article 3.經歷-->
<template>
<v-container id="rsec100">
    <h2 class="title">經歷</h2>

    <v-timeline dense align-top>
        <v-timeline-item v-for="(experience,index) in experiences" v-bind:key="index" color="primary">
            <v-row>
                <v-col cols="12" lg="2">
                    <h3 v-if="experience.startTime && experience.endTime">{{ experience.startTime }}~{{ experience.endTime }}</h3>
                    <h3 v-else-if="experience.endTime">{{ experience.endTime }}</h3>
                </v-col>
                <v-col cols="12" lg="10">
                    <h3>{{experience.expName}}&nbsp;
                        <template v-if="experience.job">{{experience.job}}</template>
                    </h3>
                    <p v-if="experience.content">工作內容:{{experience.content}}</p>

                    <div v-for="(project,index) in projects" v-bind:key="index">
                        <Rsec110 v-if='experience.expId == project.expId' :project="project" />
                    </div>
                </v-col>
            </v-row>
        </v-timeline-item>
    </v-timeline>

</v-container>
</template>

<script>
import Rsec110 from "./rsec110.vue";
export default {
    name: 'Rsec100',
    components: {
        Rsec110,
    },
    data() {
        return {
            experiences: {},
            projects: {}
        }
    },
    created: function () {
        this.findExp();
    },
    methods: {
        findExp() {
            this.$api.post('rsec100/findExp')
                .then(response => {
                    this.experiences = response.data.experiences;
                    this.projects = response.data.projects;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/commonUtil.scss";
</style>
