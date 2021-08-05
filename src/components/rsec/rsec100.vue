<!-- Article 3.經歷-->
<template>
<v-container id="rsec100">
    <h2 class="my-3">經歷 Experience</h2>
    <!-- sm ~ lg -->
    <div v-for="(experience,index) in experiences" v-bind:key="index" class="d-lg-none my-3" color="primary">

        <h3>
            <span v-if="experience.startTime && experience.endTime">{{ experience.startTime }}~{{ experience.endTime }}</span>
            <span v-else-if="experience.endTime">{{ experience.endTime }}</span>
        </h3>

        <h3>
            {{experience.expName}}&nbsp;
            <template v-if="experience.job">{{experience.job}}</template>
        </h3>

        <div v-if="experience.content">
            <h4>工作內容:</h4>
            <p>{{experience.content}}</p>
        </div>

        <div v-for="(project,index) in projects" v-bind:key="index">
            <Rsec110 v-if='experience.expId == project.expId' :project="project" />
        </div>
    </div>

    <!-- lg^ -->
    <v-timeline class="d-none d-lg-block" dense align-top>
        <v-timeline-item v-for="(experience,index) in experiences" v-bind:key="index" color="primary">
            <v-row>
                <v-col cols="12" lg="2">
                    <h3>
                        <span v-if="experience.startTime && experience.endTime">{{ experience.startTime }}~{{ experience.endTime }}</span>
                        <span v-else-if="experience.endTime">{{ experience.endTime }}</span>
                    </h3>
                </v-col>
                <v-col cols="12" lg="10">
                    <h3>
                        {{experience.expName}}&nbsp;
                        <template v-if="experience.job">{{experience.job}}</template>
                    </h3>

                    <div v-if="experience.content">
                        <h4>工作內容:</h4>
                        <p>{{experience.content}}</p>
                    </div>

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

#rsec100 {
    .v-timeline::before {
        $needlessLength: 55px;
        top: $needlessLength;
        height: calc(100% - #{$needlessLength}*2);
    }
}
</style>
