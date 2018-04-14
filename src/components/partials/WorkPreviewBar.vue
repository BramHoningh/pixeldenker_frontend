<template>
<div class="work-preview-bar">
    <div class="people">
        <div class="person"></div>
        <div class="person"></div>
        <div class="person"></div>
    </div>

    <span class="text">{{this.text}}</span>

    <button class="button-primary" @click="showCase()">{{this.buttonText}}</button>
</div>
</template>

<script>
import { EventBus } from '../../eventBus';

export default {
    name: "WorkPreviewBar",
    props: ['caseName', 'text', 'buttonText'],
    data () {
        return {

        }
    },
    methods: {
        showCase() {
            EventBus.$emit('showCase', {name: this.caseName})
        }
    },
    created () {
        EventBus.$emit('toggleLogo', {showLogo: false})
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.work-preview-bar {
    position: relative;
    margin-top: 9px;
    padding: 12px 44px;

    button {
        position: absolute;
        top: 0;
        right: 44px;
    }

    .people {
        position: relative;

        .person {
            position: absolute;
            top: 0;
            left: 0;
            width: 32px;
            height: 32px;
            background-color: gray;
            box-shadow: 0 8px 16px 0 rgba(58, 138, 215, 0.16);
            @include border-radius(80px);
            z-index: 100;

            &:nth-child(2) {
                left: 25px;
                background-color: blue;
                z-index: 99;
            }

            &:nth-child(3) {
                left: 50px;
                background-color: orange;
                z-index: 98;
            }
        }
    }

    .text {
        display: inline-block;
        margin-left: 95px;
        font-family: $source-sans-pro;
        @include font-size(18px);
        line-height: 1.94;
        color: $gray-dark-dark;
    }
}
</style>

