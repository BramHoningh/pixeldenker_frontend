<template>
    <div class="hero-container">
        <div :class="['hero-content', position]">
            <h1>Passievolle designers.</h1>
            <h3>Passie en ambitie zijn onze kernvoorwaarden.</h3>
            <p>Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind.</p>
            <button class="button-primary">Bekijk ons werk</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: ['position'],
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
    margin: 20px 16px;
    min-height: 778px;
    border-radius: 6px;
    background-image: radial-gradient(circle at 0 2%, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.0)), radial-gradient(circle at 42% 31%, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.0));

    @include breakpoint(xs) {
        position: relative;
        margin: 8px;
        height: calc(100vh - 16px);
        min-height: 0;

        .hero-content {
            &.left, &.center {
                padding: 95px 16px 0 !important;
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
