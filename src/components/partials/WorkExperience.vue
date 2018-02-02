<template>
<div class="work-experience">
    <h2 class="dark center">Onze werkervaring</h2>
    <p class="dark center">Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind. Als ambitieuze jonge creatieveling met een passie voor </p>

    <div class="world-map">
        <h1 class="text">DIT IS EEN WERELDKAART</h1>

        <div class="company left">
            <div class="logo">
                <div class="person"></div>
            </div>
        </div>

        <div class="company center">
            <div class="logo large">
                <div class="person"></div>
                <div class="person person-2"></div>
            </div>
        </div>

        <div class="company left-center">
            <div class="logo small">
                <div class="person"></div>
            </div>
        </div>

        <div class="company right-center">
            <div class="logo">
                <div class="person"></div>
            </div>
        </div>

        <div class="company right">
            <div class="logo small">
                <div class="person"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "WorkExperience",
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.work-experience {
    padding-top: 133px;

    p {
        max-width: 700px;
        margin: 16px auto 0;
    }

    .world-map {
        position: relative;
        @include aspect-ratio(1308px, 445px);
        background-color: gray;
        margin: 200px 16px 0;
	    background-image: linear-gradient(to bottom, #edf2f7, rgba(246, 249, 254, 0.0)), linear-gradient(#ffffff, #ffffff);

        .text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: black;
        }

        .company {
            position: absolute;

            &.right {
                top: -40px;
                right: 10%;
            }

            &.right-center {
                top: -100px;
                right: 25%;
            }

            &.center {
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            }

            &.left-center {
                top: 22px;
                left: 25%;
            }

            &.left {
                top: -112px;
                left: 12%;
            }

            .logo {
                position: relative;
                width: 80px;
                height: 80px;
                @include border-radius(33px);
                box-shadow: 0 8px 16px 0 rgba(58, 138, 215, 0.16);
                
                background-color: black;

                &.small {
                    width: 64px;
                    height: 64px;
                    @include border-radius(26px);
                }

                &.large {
                    width: 96px;
                    height: 96px;
                    @include border-radius(42px);
                }
            }

            .person {
                position: absolute;
                bottom: -8px;
                right: -8px;
                width: 32px;
                height: 32px;
                @include border-radius(16px);
                background-color: blue;
                border: 2px solid $white-main;
                box-shadow: 0 8px 32px 0 rgba(37, 52, 74, 0.16);

                &.person-2 {
                    right: -30px;
                    background-color: orange;
                }
            }
        }
    }
}
</style>

