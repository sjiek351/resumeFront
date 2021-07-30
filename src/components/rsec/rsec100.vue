<!-- Article 3.經歷-->
<template>
<v-container id="rsec100">
    <h2 class="title spacing-playground py-0 px-2">經歷</h2>

    <v-timeline dense align-top>
        <v-timeline-item v-for="(company,index) in companys" v-bind:key="index" color="success">
            <v-row>
                <v-col cols="12" lg="2">
                    <span>{{ company.startTime }}-{{ company.endTime }}</span>
                </v-col>
                <v-col cols="12" lg="10">
                    <h5>{{company.companyName}} {{company.work}}</h5>
                    工作內容:{{company.content}}

                    <v-timeline dense align-top>
                        <v-timeline-item v-for="(project,index) in projects" v-bind:key="index" small>
                            <Rsec110 v-if='company.companyId == project.companyId' :project="project" />
                        </v-timeline-item>
                    </v-timeline>
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
            companys: {},
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
                    this.companys = response.data.companys;
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
    .v-timeline--dense:not(.v-timeline--reverse) {
        //修正時間條跑版
        $timeline-divider-width: 96px !default;
        $timeline-line-width: 2px !default;

        &:before {
            left: calc(#{$timeline-divider-width / 2} - #{$timeline-line-width / 2});
            right: initial;
        }
    }

    .v-timeline-item__inner-dot {
        background-color: $primaryColor;
    }
}
</style>
