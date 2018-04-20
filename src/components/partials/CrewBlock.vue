<template>
<div class="crew-block">
    <p class="dark center">
        <span class="quote" :style="{'background-image': 'url(' + this.quote.image + ')'}"></span>
        Pixeldenker is een samenwerking tussen een designer en developer.
        Sinds 2015 werken wij aan projecten die wij zowel leuk als inspirerend vinden.
        Wij betrekken onze klant(en) in het proces. Zo bereiken we samen het doel.
    </p>

    <div class="crew">
        <div class="crew-member left">
            <div class="tooltip left">{{this.member1.tagLine}}</div>
            <div class="image" :style="{'background-image': 'url(' + this.member1.bgImage + ')'}"></div>
            <div class="job">{{this.member1.job}}</div>
            <div class="name">{{this.member1.name}}</div>
        </div>

        <div class="crew-member right">
            <div class="tooltip dark right">{{this.member2.tagLine}}</div>
            <div class="image" :style="{'background-image': 'url(' + this.member2.bgImage + ')'}"></div>
            <div class="job">{{this.member2.job}}</div>
            <div class="name">{{this.member2.name}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "CrewBlock",
    data () {
        return {
            quote: {
                image: './static/images/quote.svg'
            },
            member1: {
                bgImage: "./static/images/Avatar.jpeg",
                tagLine: "Lid van de T500",
                job: "Visueel designer - Pixeldenker",
                name: "Rob Scholten"
            },

            member2: {
                bgImage: "./static/images/bram.jpg",
                tagLine: "<p>Hallo!</p>",
                job: "Developer - Pixeldenker",
                name: "Bram Honingh"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.crew-block {
    position: relative;
    max-width: 590px;
    margin: 158px auto 213px;

    @include breakpoint(xs) {
        padding: 0 24px;
        margin-bottom: 100px;
    }

    p {
        position: relative;

        span.quote {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 60px;
            background-size: cover;
        }
    }

    .crew {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 1px;
        padding-top: 117px;
        @include breakpoint(xs) {
            grid-template-columns: 1fr;
            padding-top: 0;
        }

        .crew-member {
            width: 100%;
            text-align: center;
            @include breakpoint(xs) {
                margin-top: 60px;
            }

            &.right {
                @include breakpoint(xs) {
                    text-align: right;
                }
            }

            &.left {
                @include breakpoint(xs) {
                    text-align: left;
                }
            }

            .image {
                margin: 25px auto 0;
                width: 80px;
                height: 80px;
                background-size: cover;
                @include border-radius(32px);
                box-shadow: 0 8px 32px 0 rgba(37, 52, 74, 0.16);
	            border: 1px solid rgba(37, 52, 74, 0.16);
            }

            .job {
                margin-top: 24px;
                font-family: $source-sans-pro;
                @include font-size(14px);
                line-height: 1.0;
                text-align: center;
                color: $gray-main;
                opacity: 0.66;
            }

            .name {
                margin-top: 4px;
                font-family: $poppins;
                @include font-size(20px);
                font-weight: 600;
                line-height: 1.0;
                letter-spacing: -0.7px;
                color: $gray-dark-dark;
                text-align: center;
            }
        }
    }
}
</style>

