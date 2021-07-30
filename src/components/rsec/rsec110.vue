<!-- Article 3.經歷/專案經歷-->
<template>
<v-container id="rsec110" v-if="project">
    <v-row>
        <v-col cols="12" lg="3">
            <span>{{ project.startTime }}-{{ project.endTime }}</span>
        </v-col>
        <v-col cols="12" lg="9">
            <h5>{{project.projectName}} {{project.work}}</h5>
            使用技術:<v-chip v-for="(technology, index) in project.technologys" :key="index" class="m-1" label outlined>{{technology}}</v-chip><br />
            工作內容:{{project.content}}<br />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Rsec110',
    props: {
        project: Array[{
            startTime: {
                type: String,
                default: ''
            },
            endTime: {
                type: String,
                default: ''
            },
            projectName: {
                type: String,
                default: ''
            },
            work: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            },
            technologys: {
                type: Array,
                default: []
            }
        }]
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
</style>
