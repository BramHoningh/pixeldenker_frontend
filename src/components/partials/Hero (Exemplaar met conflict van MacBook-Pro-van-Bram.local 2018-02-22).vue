<template>
    <div class="hero-container">
        <div :class="['hero-content', position]">
            <h1 class="dark">{{this.title}}</h1>
            <h3 class="dark" v-if="this.subTitle !== undefined">{{this.subtitle}}</h3>
            <p class="dark">{{this.content}}</p>
            <button v-if="this.buttonText !== undefined" class="button-primary">{{this.buttonText}}</button>
            <button v-if="this.secondButtonText !== undefined" class="button-secondary second-button">{{this.secondButtonText}}</button>
            <div class="image"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: ['position', 'backgroundImage', 'title', 'subtitle', 'content', 'buttonText', 'buttonLink', 
    'secondButtonText', 'secondButtonLink'],
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.hero-container {
    position: relative;
    background-image: linear-gradient(to bottom, #f6f9fe, #edf3fd);
    // background-size: cover;
    // background-position: center;
    margin: 20px 16px;
    min-height: 778px;
    border-radius: 6px;

    @include breakpoint(xs) {
        position: relative;
        margin: 8px;
        height: calc(100vh - 16px);
        min-height: 0;

        .hero-content {
            &.left, &.center {
                padding: 95px 16px 0 !important;
            }

            p {
                margin-top: 8px;
            }

            button {
                position: absolute;
                bottom: 32px;
                left: 16px;
                right: 16px;
                width: calc(100% - 32px);
            }
        }
    }

    .hero-content {
        padding: 89px 80px;
        // padding-bottom: 200px;

        .image {
            position: absolute;
            left: 50%;
            bottom: -400px;
            // bottom: 0;
            transform: translateX(-50%);
            width: 100%;
            max-width: 1024px;
            height: 767px;
            background-color: gray;
        }

        &.left {
            text-align: left;
            padding-top: 190px;
            padding-left: 140px;
        }

        &.center {
            text-align: center;
            padding-top: 218px;

            p {
                margin: 0 auto;
            }
        }

        h3 {
            margin-top: 40px;
        }

        p {
            max-width: 743px;
        }

        button {
            margin-top: 30px;
        }

        button.second-button {
            margin-left: 16px;
        }

    }
}
</style>
