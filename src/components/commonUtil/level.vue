<!-- 導覽列-->
<template>
<span id="level">
    <v-tooltip :disabled="disabled" right>
        <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="d-flex">
                <v-progress-linear v-for="n in rank" :key="n" :color="color" :height="height" class="mx-1 w30" value="100" rounded></v-progress-linear>
            </div>
        </template>
        <span>{{describe}}</span>
    </v-tooltip>
</span>
</template>

<script>
export default {
    name: 'Level',
    props: {
        rank: {
            type: Number,
            default: 5
        },
        color: String,
        describe: String,
        height: {
            type: Number,
            default: 12
        }
    },
    data() {
        return {

        }
    },
    computed: {
        disabled() {
            if (this.describe) {
                return false;
            }
            return true;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonUtil.scss";

#level {
    .w30 {
        width: 30px;
    }
}
</style>
