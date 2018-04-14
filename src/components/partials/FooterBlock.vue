<template>
<footer class="main-footer">
    <button class="button-left button-primary facebook-messenger"><img class="icon" src="../../assets/facebook-messenger.svg"> Stuur een bericht</button>
    <button class="button-right button-secondary">
        <div v-if="this.btnImage" class="image" :style="{'background-image': 'url(' + this.btnImage + ')'}"></div>
        <span class="text">{{this.btnText}} </span>
        <span class="secondary-text" v-show="this.btnSecondaryText">{{this.btnSecondaryText}}</span>
    </button>
</footer>
</template>

<script>
export default {
    name: "FooterBlock",
    props: ['btnImage', 'btnText', 'btnSecondaryText', 'btnLink'],
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

        .image {
            display: inline-block;
            vertical-align: middle;
            width: 32px;
            height: 32px;
            margin-right: 16px;
            @include border-radius(32px);
            background-size: cover;
            background-position: center;
            box-shadow: 0 8px 16px 0 rgba(99, 146, 247, 0.16);
        }

        span.text {
            vertical-align: middle;
        }

        span.secondary-text {
            vertical-align: middle;
            padding-left: 8px;
            color: #d5d9e3;
        }
    }
}
</style>

