<!-- phaserGame 貓 -->
<template>
<div id="rsga100">
    <div id="activeCat" class="d-none d-lg-block">
    </div>
</div>
</template>

<script>
import ActiveCat from './phaser/activeCat'
export default {
    name: "Rsga100",
    data() {
        return {};
    },
    created() {
        const activeCat = new ActiveCat();
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
#rsga100 {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 10;
}

@media print {
    #rsga100 {
        position: absolute;
    }
}
</style>
