<template>
    <div class="hero-container" :style="{'background-image': 'radial-gradient(circle at 0 2%, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.0)), radial-gradient(circle at 42% 31%, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.0)), url(' + this.backgroundImage + ')'}">
        <div :class="['hero-content', position]">
            <h1>{{this.title}}</h1>
            <h3>{{this.subtitle}}</h3>
            <p>{{this.content}}</p>
            <button v-if="this.buttonText !== undefined" class="button-primary">{{this.buttonText}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: ['position', 'backgroundImage', 'title', 'subtitle', 'content', 'buttonText', 'buttonLink'],
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.hero-container {
    background-color: gray;
    background-size: cover;
    background-position: center;
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

        &.left {
            text-align: left;
            padding-top: 120px;
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
            max-width: 511px;
        }

        button {
            margin-top: 48px;
        }

    }
}
</style>
