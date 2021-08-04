<!-- Article 1.關於我-->
<template>
<v-container>
    <v-row v-if="personal">
        <v-col cols="12" lg="5" class="order-lg-2 d-flex justify-center align-center">
            <div class="text-center">
                <img id="photo" class="rounded-circle" :src="photoSrc" />
                <h1><b>{{ personal.name }}&nbsp;{{ personal.nameEng }}</b></h1>
                <p>
                    {{ personal.job }}<br />
                    {{ personal.location }}<br />
                    電話 : {{ personal.cellphone }}<br />
                    郵件 : {{ personal.email }}
                </p>
            </div>
        </v-col>

        <v-col cols="12" lg="7" class="order-lg-1 d-flex justify-center align-center">
            <p v-html="personal.introduction">
            </p>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "Rsea100",
    data() {
        return {
            personal: {},
            photoSrc: '/static/img/webp/me.webp'
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
