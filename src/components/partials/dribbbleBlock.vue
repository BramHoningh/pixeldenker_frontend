<template>
<div class="dribbble-block">
    <div class="post"></div>
    <div class="post"></div>
    <div class="post"></div>
    <div class="post"></div>
    <div class="post"></div>
    <div class="post"></div>
</div>
</template>

<script>
export default {
    name: "DribbbleBlock",
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
    max-width: 1248px;

    @include breakpoint(xs) {
        grid-template-columns: 1fr;
        max-width: auto;
        margin: 0 16px;
    }

    .post {
        width: 100%;
        height: 300px;
        background-color: gray;
        border: 1px solid $gray-light;
    }
}
</style>

