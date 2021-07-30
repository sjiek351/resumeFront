<!-- 載入畫面-->
<template>
<div class="hello">

    <canvas id="canvas" width="300" height="300"></canvas>
    <!-- <input type="button" @click="clickme()" /> -->

</div>
</template>

<script>
export default {
    name: 'Rsba100',
    data() {
        return {
            msg: 'Rsba100'
        }
    },
    mounted() {
        // const _canvas = document.getElementById('canvas');

        // if (_canvas.getContext) { //判斷是否支援
        //     const ctx = _canvas.getContext('2d');
        //     //宣告ctx渲染方式

        //     this.draw(ctx);
        //     //執行draw function

        // } else {
        //     alert('your browser not support canvas')
        //     //如果不支援
        // };
    },
    methods: {
        // draw(ctx) {

        //     //利用ctx開始繪製
        //     ctx.fillStyle = "rgb(200,0,0)";
        //     //fillStyle:定義用於繪畫的顏色填充模式

        //     ctx.fillRect(10, 10, 55, 50);
        //     //fillRect:繪製被填充的矩形

        //     ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        //     ctx.fillRect(30, 30, 55, 50);
        //     //同上
        // }
    },
}
</script>

<style scoped>
#canvas {
    border: 5px solid black;
}
</style>
