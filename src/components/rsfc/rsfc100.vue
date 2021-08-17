<!-- Article 修改經歷版面-->
<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <Rsec100 :key="componentKey" class="printBlock" />
        </v-col>

        <v-col cols="12">
            <h2>
                <span v-if="!isProject">修改經歷</span>
                <span v-else>修改專案</span>
                <v-switch v-model="isProject" label="Project"></v-switch>
            </h2>

            <template v-if="!isProject">
                <Rsfc110 class="printBlock" @needRender="renderRsec100" />
            </template>

            <template v-else>
                <Rsfc120 class="printBlock" @needRender="renderRsec100" />
            </template>
        </v-col>

    </v-row>
</v-container>
</template>

<script>
import Rsec100 from "../rsec/rsec100.vue";
import Rsfc110 from "../rsfc/rsfc110.vue";
import Rsfc120 from "../rsfc/rsfc120.vue";
export default {
    name: "Rsfc100",
    components: {
        Rsec100,
        Rsfc110,
        Rsfc120
    },
    data() {
        return {
            isProject: false,
            needRender: false,
            componentKey: 0
        };
    },
    methods: {
        renderRsec100() {
            this.componentKey++;
        }
    },
};
</script>

<style scoped>

</style>
