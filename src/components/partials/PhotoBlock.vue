<template>
<div class="photo-block">
    <div class="photo-icon">
        <img src="../../assets/camera.svg" alt="Camera Icon">
        <span class="number">4</span>
    </div>

    <div class="content">
        <div class="company">
            <div class="icon"></div>
            <div class="name">DeHuyskamer</div>
        </div>
        <h3>Initatiefnemer van deHuyskamer</h3>
    </div>
</div>
</template>

<script>
export default {
    name: "PhotoBlock",
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
    @include border-radius(6px);
    background-image: radial-gradient(circle at 0 100%, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.0)), radial-gradient(circle at 0 0, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.0));
    box-shadow: 0 0 4px 0 rgba(72, 142, 255, 0.16);
    
    .photo-icon {
        line-height: 21px;

        img {
            width: 24px;
            height: 21px;
            vertical-align: top;
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

        .company {
            .icon {
                display: inline-block;
                width: 24px;
                height: 24px;
                background-color: purple;
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

