<template>
<div class="dual-image">
    <!-- <div class="image-container" :style="{'background-color': this.backgroundColorOne}"> -->
    <div class="image-container">
        <div class="image" :style="{'background-image': 'url(' + this.backgroundImageOne + ')'}"></div>
    </div>

    <!-- <div class="image-container" :style="{'background-color': this.backgroundColorTwo}"> -->
    <div class="image-container">
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
@import '../../assets/styles/all';

.dual-image {
    padding: 0 20px;
    // width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    background-color: #ffffff;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 40px;

    @include breakpoint(xs) {
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
        max-width: calc(100% - 40px);
    }

    .image-container {
        position: relative;
        width: 100%;
        margin-bottom: 10px;
        height: 400px;
        // background-color: gray;

        @include breakpoint(xs) {
            grid-template-columns: 1fr;
            grid-row-gap: 20px;
            
            &:last-child {
                margin-top: -100px;
            }

        }

        .image {
            position: absolute;
            // top: 46px;
            top: 0;
            // left: 51px;
            left: 0;
            // right: 51px;
            right: 0;
            bottom: 0;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;

            @include breakpoint(xs) {
                background-size: contain;
            }
        }
    }
}
</style>

