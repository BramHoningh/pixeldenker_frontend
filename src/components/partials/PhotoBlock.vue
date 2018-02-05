<template>
<div class="photo-block" :style="{'background-image': 'radial-gradient(circle at 0 100%, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.0)), radial-gradient(circle at 0 0, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.0)), url(' + this.backgroundImage + ')'}">
    <div class="photo-icon">
        <img src="../../assets/icons/camera.svg" alt="Camera Icon">
        <span class="number">4</span>
    </div>

    <div class="content">
        <div class="company">
            <div class="icon" :style="{'background-image': 'url(' + this.icon + ')'}"></div>
            <div class="name">{{this.name}}</div>
        </div>
        <h3>{{this.title}}</h3>
    </div>
</div>
</template>

<script>
export default {
    name: "PhotoBlock",
    props: ['backgroundImage', 'icon', 'name', 'title'],
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.photo-block {
    position: relative;
    margin: 12px 16px;
    padding: 32px 40px;
    height: 675px;
    background-color: gray;
    background-size: cover;
    background-position: center;
    @include border-radius(6px);
    box-shadow: 0 0 4px 0 rgba(72, 142, 255, 0.16);

    @include breakpoint(xs) {
        height: 524px;
        margin: 12px 8px;
        padding: 16px;
    }
    
    .photo-icon {
        line-height: 21px;

        @include breakpoint(xs) {
            line-height: 14px;
        }

        img {
            width: 24px;
            height: 21px;
            vertical-align: top;

            @include breakpoint(xs) {
                width: 16px;
                height: 14px;
            }
        }

        span.number {
            font-family: 'Source Sans Pro', sans-serif;
            @include font-size(14px);
            color: $white-main;
            margin-left: 8px;
        }
    }

    .content {
        position: absolute;
        bottom: 34px;
        left: 42px;

        @include breakpoint(xs) {
            bottom: 16px;
            left: 16px;
        }

        .company {
            .icon {
                display: inline-block;
                width: 24px;
                height: 24px;
                background-size: cover;
                background-position: center;
                @include border-radius(32px);
                box-shadow: 0 8px 16px 0 rgba(99, 146, 247, 0.16);
                vertical-align: middle;
            }

            .name {
                display: inline-block;
                line-height: 24px;
                vertical-align: bottom;
                font-family: 'Source Sans Pro', sans-serif;
                @include font-size(13px);
                font-weight: 600;
                opacity: 0.66;
                color: $white-main;
                text-transform: uppercase;
            }
        }

        h3 {
            margin-top: 5px;
        }
    }
}
</style>

