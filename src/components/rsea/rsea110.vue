<!-- Article 1.個人資訊/自傳-->
<template>
<div id="rsea110" class="container">
    <div class="row" v-if="personal">
        <div class="offset-lg-1 col-lg-3 my-3 text-center">
            <h1><b>{{ personal.name }}&nbsp;{{ personal.nameEng }}</b></h1>
            <p>
                {{ personal.job }}<br />
                {{ personal.location }}<br />
                電話 : {{ personal.cellphone }}<br />
                郵件 : {{ personal.email }}
            </p>
        </div>
        <p class="offset-lg-1 col-lg-6">
            {{ personal.introduction }}
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: "Rsea110",
    props: {
        personal: {
            name: String,
            nameEng: String,
            job: String,
            location: String,
            cellphone: String,
            email: String,
            introduction: String
        }
    },
    data() {
        return {
        };
    },
};
</script>

<style scoped>
</style>
