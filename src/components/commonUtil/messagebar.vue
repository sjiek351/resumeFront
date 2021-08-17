<!-- 導覽列-->
<template>
<div class="text-center" v-if="message">
    <v-snackbar v-model="messageShow" :timeout="timeout">
        {{ message.msgCode }}: {{ message.msgInfo }}

        <template v-slot:action="{ attrs }">
            <v-btn color="secondary" text v-bind="attrs" @click="messageShow = false">
                關閉
            </v-btn>
        </template>
    </v-snackbar>
</div>
</template>

<script>
export default {
    name: 'Messagebar',
    props: {
        message: {
            msgCode: {
                type: String,
                default: null
            },
            msgInfo: {
                type: String,
                default: null
            }
        }
    },
    data() {
        return {
            messageShow: true,
            timeout: 2000,
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
