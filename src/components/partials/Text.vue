<template>
<div class="text-component">
    <h3 v-if="this.title" class="dark">{{this.title}}</h3>
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
    padding: 100px 16px;
    z-index: 9998;
    max-width: 1024px;
    margin: 0 auto;

    p {
        max-width: 800px;
        white-space: pre-line;
    }

    @include breakpoint(xs) {
        padding: 64px 24px;
        text-align: center;
    }
}

</style>
