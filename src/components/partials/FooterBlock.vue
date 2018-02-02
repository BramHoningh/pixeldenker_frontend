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

    .button-left {
        position: absolute;
        top: 50%;
        left: 33px;
        transform: translateY(-50%);
    }

    .button-right {
        position: absolute;
        top: 50%;
        right: 33px;
        transform: translateY(-50%);
    }
}
</style>

