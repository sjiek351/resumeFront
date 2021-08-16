<!-- 載入畫面-->
<template>
<div id="rsba100" class="d-flex align-center justify-center">
    <div id="headline">
        <v-divider dark />
        <h1 class="text-h1"><strong>YUNG YUN</strong></h1>
        <p class="text-h6 text-right">1 year Programmer</p>
        <v-divider dark />
    </div>

</div>
</template>

<script>
export default {
    name: 'Rsba100',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
#rsba100 {
    height: 90vh;
    background-image: linear-gradient(to right bottom, rgba(176, 192, 215, 0.8), rgba(0, 0, 0, 0.8)), url('~@/assets/img/webp/background.webp');
    background-size: cover;
    background-position: center bottom;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%);

    #headline {
        margin: 10px;
        color: white;
    }
}
</style>
