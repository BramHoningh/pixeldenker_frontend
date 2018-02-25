<template>
<div class="dual-image">
    <div class="image-container" :style="{'background-color': this.backgroundColorOne}">
        <div class="image" :style="{'background-image': 'url(' + this.backgroundImageOne + ')'}"></div>
    </div>

    <div class="image-container" :style="{'background-color': this.backgroundColorTwo}">
        <div class="image" :style="{'background-image': 'url(' + this.backgroundImageTwo + ')'}"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "DualImage",
    props: ['backgroundColorOne', 'backgroundImageOne', 'backgroundColorTwo', 'backgroundImageTwo'],
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.dual-image {
    padding: 0 19px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 40px;

    .image-container {
        position: relative;
        width: 100%;
        margin-bottom: 10px;
        height: 400px;
        background-color: gray;

        .image {
            position: absolute;
            top: 46px;
            left: 51px;
            right: 51px;
            bottom: 0;
            background-position: center;
            background-size: cover;
        }
    }
}
</style>

