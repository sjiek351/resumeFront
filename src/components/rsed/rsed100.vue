<!-- Article 4.證照-->
<template>
<v-container id="rsed100">
    <h2 class="title">證照</h2>
    <v-row>
        <v-col cols="12" lg="6" v-for="(item, index) in pdfList" :key="index" class="text-center">
            <h3>{{item.name}}</h3>
            <pdf :src="item.src" :key="item.index" class="pdf" />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import pdf from 'vue-pdf'
export default {
    name: "Rsed100",
    components: {
        pdf
    },
    data() {
        return {
            pdfList: [{
                    name: 'OCAJP',
                    src: '/static/pdf/eCertificate-ocajp.pdf'
                },
                {
                    name: 'OCPJP',
                    src: '/static/pdf/eCertificate-ocpjp.pdf'
                }
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
#rsed100 {
    .pdf {
        width: 500px;
        max-width: 100%;
        margin: auto;
    }
}
</style>
