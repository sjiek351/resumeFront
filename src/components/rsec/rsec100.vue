<!-- Article 經歷-->
<template>
<v-container id="rsec100">
    <v-row>

        <v-col cols="12">
            <h2 class="text-h2 my-3 text-center"><span class="highlight-primary">Experience</span></h2>
        </v-col>

        <!-- sm ~ lg -->
        <v-col cols="12">
            <div v-for="(exp,index) in exps" v-bind:key="index" class="d-lg-none my-3" color="primary">

                <h3>
                    <span v-if="exp.starttime != exp.endtime">{{ exp.starttime | moment("YYYY.MM") }}~{{ exp.endtime | moment("YYYY.MM") }}</span>
                    <span v-else>{{ exp.endtime | moment("YYYY.MM") }}</span>
                </h3>

                <h3>
                    {{exp.expName}}&nbsp;
                    <template v-if="exp.jobTitle">{{exp.jobTitle}}</template>
                </h3>

                <div v-if="exp.jobDescribe">
                    <h4>工作內容:</h4>
                    <p>{{exp.jobDescribe}}</p>
                </div>

                <div v-for="(project, index) in exp.projects" v-bind:key="index">
                    <v-lazy v-model="isActive" :options="{ threshold: 1 }" transition="fadeYTransition">
                        <Rsec110 :project="project" />
                    </v-lazy>
                </div>
            </div>
        </v-col>

        <!-- lg ~ -->
        <v-col cols="12">
            <v-timeline class="d-none d-lg-block" dense align-top>
                <v-timeline-item v-for="(exp,index) in exps" v-bind:key="index" color="primary">
                    <v-row>
                        <v-col cols="12" lg="2">
                            <h3>
                                <span v-if="exp.starttime != exp.endtime">{{ exp.starttime | moment("YYYY.MM") }}~{{ exp.endtime | moment("YYYY.MM") }}</span>
                                <span v-else>{{ exp.endtime | moment("YYYY.MM") }}</span>
                            </h3>
                        </v-col>
                        <v-col cols="12" lg="10">
                            <h3>
                                {{exp.expName}}&nbsp;
                                <template v-if="exp.jobTitle">{{exp.jobTitle}}</template>
                            </h3>

                            <div v-if="exp.jobDescribe">
                                <h4>工作內容:</h4>
                                <p>{{exp.jobDescribe}}</p>
                            </div>

                            <div v-for="(project,index) in exp.projects" v-bind:key="index">
                                <v-lazy v-model="isActive" :options="{ threshold: 1 }" transition="fadeYTransition">
                                    <Rsec110 :project="project" />
                                </v-lazy>
                            </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>
            </v-timeline>
        </v-col>

    </v-row>
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
            exps: {},
            isActive: false,
        }
    },
    created: function () {
        this.findExp();
    },
    methods: {
        findExp() {
            this.$api.post('rsec100/findExps')
                .then(response => {
                    this.exps = response.data.exps;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";

#rsec100 {
    .v-timeline::before {
        $needlessLength: 55px;
        top: $needlessLength;
        height: calc(100% - #{$needlessLength}*2);
    }
}
</style>
