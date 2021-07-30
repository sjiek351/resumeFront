<!-- Article 1.關於我-->
<template>
<v-container>
    <v-row v-if="personal">
        <v-col cols="12" lg="5" class="order-lg-2 flexCenter">
            <div class="text-center">
                <img id="photo" src="../../assets/img/webp/me.webp" />
                <h1><b>{{ personal.name }}&nbsp;{{ personal.nameEng }}</b></h1>
                <p>
                    {{ personal.job }}<br />
                    {{ personal.location }}<br />
                    電話 : {{ personal.cellphone }}<br />
                    郵件 : {{ personal.email }}
                </p>
            </div>
        </v-col>

        <v-col cols="12" lg="7" class="order-lg-1 flexCenter">
            <p>
                {{ personal.introduction }}
            </p>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import Rsea110 from "./rsea110.vue";
export default {
    name: "Rsea100",
    components: {
        Rsea110,
    },
    data() {
        return {
            personal: {}
        };
    },
    created: function () {
        this.findPersonal();
    },
    methods: {
        findPersonal() {
            this.$api.post('rsea100/findPersonal')
                .then(response => {
                    this.personal = response.data.personal;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
};
</script>

<style scoped>
#photo {
    max-width: 40vw;
}
</style>
