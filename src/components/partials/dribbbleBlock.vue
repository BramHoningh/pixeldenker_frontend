<template>
<div class="dribbble-block">
    <div v-for="(image, index) in this.images" :key="index" class="post" :style="{'background-image': 'url(' + image + ')'}"></div>
</div>
</template>

<script>
export default {
    name: "DribbbleBlock",
    props: ['images'],
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.dribbble-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1248px;

    @include breakpoint(md) {
        grid-template-columns: 1fr 1fr;
    }

    @include breakpoint(xs) {
        grid-template-columns: 1fr;
        max-width: auto;
    }

    .post {
        width: 100%;
        height: 300px;
        // background-color: gray;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        // border: 1px solid $gray-light;

        @include breakpoint(xs) {
            background-size: contain;
        }
    }
}
</style>

