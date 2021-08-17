<!-- Article 經歷/專案-->
<template>
<v-container id="rsec110" v-if="project" fluid>
    <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 12 : 2" outlined shaped>

            <v-list-item three-line>
                <v-list-item-content>

                    <div class="text-overline mb-4">
                        Project
                    </div>

                    <v-card-title class="text-h5 mb-1">
                        {{project.projectName}} {{project.job}}
                    </v-card-title>

                    <v-card-subtitle>{{ project.starttime | moment("YYYY.MM") }}~{{ project.endtime | moment("YYYY.MM") }}</v-card-subtitle>

                    <v-card-text>
                        <!-- sm ~ lg -->
                        <v-chip-group class="d-lg-none" column>
                            <v-chip v-for="(skillName, index) in project.skillNames" :key="index" class="ma-1" color="primary" filter>{{skillName}}</v-chip>
                        </v-chip-group>
                        <!-- lg ~ -->
                        <v-chip-group class="d-none d-lg-flex" multiple>
                            <v-chip v-for="(skillName, index) in project.skillNames" :key="index" class="ma-1" color="primary" filter>{{skillName}}</v-chip>
                        </v-chip-group>

                        <div class="my-2">
                            <h4>專案工作內容:</h4>
                            <p v-html="project.jobDescribe" class="text-pre-line"></p>
                        </div>

                    </v-card-text>

                </v-list-item-content>

            </v-list-item>

            <v-card-actions>

                <v-spacer></v-spacer>

                <v-btn v-if="project.display" :href="project.display" target="_blank" outlined rounded text>
                    Demo
                </v-btn>

                <v-btn v-else rounded disabled>
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
            starttime: {
                type: String,
                default: ''
            },
            endtime: {
                type: String,
                default: ''
            },
            projectName: {
                type: String,
                default: ''
            },
            jobTitle: {
                type: String,
                default: ''
            },
            jobDescribe: {
                type: String,
                default: ''
            },
            skillNames: {
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

<style lang="scss" scoped>
</style>
