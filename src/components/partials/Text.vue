<template>
<div class="text-component">
    <h2 class="dark">{{this.title}}</h2>
    <p class="dark">{{this.content}}</p>
</div>
</template>

<script>
export default {
    name: "textComponent",
    props: ['title', 'content'],
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.text-component {
    position: relative;
    background-color: $white-main;
    padding: 160px;
    z-index: 9998;

    p {
        max-width: 800px;
    }

    @include breakpoint(xs) {
        padding: 64px 24px;
        text-align: center;
    }
}

</style>
