<template>
<div class="crew-block">
    <p class="dark center">
        Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker.
        Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind.
        Als ambitieuze jonge creatieveling met een passie voor digital design werk ik nauw samen met mijn partners. 
    </p>

    <div class="crew">
        <div class="crew-member">
            <div class="tooltip">{{this.member1.tagLine}}</div>
            <div class="image" :style="{'background-image': 'url(' + this.member1.bgImage + ')'}"></div>
            <div class="job">{{this.member1.job}}</div>
            <div class="name">{{this.member1.name}}</div>
        </div>

        <div class="crew-member">
            <div class="tooltip dark">{{this.member2.tagLine}}</div>
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
            member1: {
                bgImage: "./static/images/Avatar.jpeg",
                tagLine: "Lid van de T500",
                job: "Visueel designer - Pixeldenker",
                name: "Rob Scholten"
            },

            member2: {
                bgImage: "./static/images/Avatar.jpeg",
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
    text-align: center;

    p {

        &:before {
            content: "“";
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(72, 142, 255, 0.08);
            line-height: 56px;
            @include font-size(200px);
        }
    }

    .crew {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 1px;
        padding-top: 117px;

        .crew-member {
            width: 100%;

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

