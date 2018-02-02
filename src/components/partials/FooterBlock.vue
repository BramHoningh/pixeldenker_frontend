<template>
<footer class="main-footer">
    <button class="button-left button-primary facebook-messenger"><img class="icon" src="../../assets/facebook-messenger.svg"> Stuur een bericht</button>
    <button class="button-right button-secondary">Bekijk ons werk</button>
</footer>
</template>

<script>
export default {
    name: "FooterBlock",
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.main-footer {
    position: relative;
    margin: 100px 16px 24px 16px;
    height: 116px;
    @include border-radius(6px);
    background-image: linear-gradient(to left, #f6f9fe, #edf3fd);
    @include breakpoint(xs) {
        margin: 100px 8px 24px 8px;
        height: 80px;
    }

    .button-left {
        position: absolute;
        top: 50%;
        left: 33px;
        transform: translateY(-50%);

        @include breakpoint(xs) {
            left: 16px;
            width: calc(100% - 32px);
        }
    }

    .button-right {
        position: absolute;
        top: 50%;
        right: 33px;
        transform: translateY(-50%);
        @include breakpoint(xs) {
            display: none;
        }
    }
}
</style>

