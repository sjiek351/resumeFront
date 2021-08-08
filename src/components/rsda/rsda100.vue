<!-- 管理者版面-->
<template>
<v-container>
    <h1>修改履歷</h1>
    <v-row>
        <v-col cols="12">
            <v-card>

                <v-tabs background-color="primary" dark>
                    <v-tab v-for="(item, index) in items" :key="index" @click="goArticle(item.route)">
                        {{ item.tab }}
                    </v-tab>
                </v-tabs>

                <v-card flat>

                    <router-view />

                </v-card>

            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Rsda100',

    data() {
        return {
            tab: null,
            items: [{
                    tab: 'Personal',
                    route: '/Rsda100'
                },
                {
                    tab: 'Skill',
                    route: '/Rsda100/Rsfb100'
                }
            ],
        }
    },
    methods: {
        goArticle(route) {
            this.$router.push(route);
        }

    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/commonUtil.scss";
</style>
