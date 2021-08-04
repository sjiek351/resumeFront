<!-- Article 3.經歷/專案經歷-->
<template>
<v-container id="rsec110" v-if="project">
    <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 12 : 2" outlined shaped>

            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        Project
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        {{project.projectName}} {{project.job}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ project.startTime }}~{{ project.endTime }}</v-list-item-subtitle>
                    <v-card-text>
                        <div>
                            <v-chip v-for="(technology, index) in project.technologys" :key="index" class="ma-1" color="primary">{{technology}}</v-chip>
                        </div>
                        <div class="my-2">
                            <h4>專案工作內容:</h4>
                            <p v-html="project.content"></p>
                        </div>
                    </v-card-text>
                </v-list-item-content>

            </v-list-item>

            <v-card-actions>
                <v-btn v-if="project.display" :href="project.display" target="_blank" outlined rounded text >
                    Demo
                </v-btn>
                <v-btn v-else color="primary" outlined rounded text>
                    不適合展示
                </v-btn>
            </v-card-actions>

        </v-card>
    </v-hover>
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
