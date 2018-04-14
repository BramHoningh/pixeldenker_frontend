<template>
<div class="image-block">
    <div class="image">
        <img :src="this.image">
    </div>
</div>
</template>

<script>
export default {
    name: "ImageBlock",
    props: ['image'],
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.image-block {
    display: grid;
    grid-template-columns: 1fr;
    margin: 16px;
    // padding: 110px 110px 0;
    // background-image: linear-gradient(to bottom, #f6f9fe, rgba(237, 243, 253, 0));

    .image {
        margin: 0 auto -40px;
        // max-width: 1024px;
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>

