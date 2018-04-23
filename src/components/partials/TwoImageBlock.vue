<template>
<div class="two-image-block">
    <div class="image">
        <img :src="this.imageOne">
    </div>
    <div class="image">
        <img :src="this.imageTwo">
    </div>
</div>
</template>

<script>
export default {
    name: "TwoImageBlock",
    props: ['imageOne', 'imageTwo'],
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.two-image-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    margin: 16px;
    // padding: 110px 110px 0;
    // background-image: linear-gradient(to bottom, #f6f9fe, rgba(237, 243, 253, 0));
    @include breakpoint(xs) {
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
    }

    .image {
        margin: 0 auto -40px;
        max-width: 1024px;

        @include breakpoint(xs) {
            margin-bottom: 0px;
        }

        img {
            width: 100%;
        }
    }
}
</style>

