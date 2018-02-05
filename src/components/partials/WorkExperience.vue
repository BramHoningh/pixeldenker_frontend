<template>
<div class="work-experience">
    <h2 class="dark center">Onze werkervaring</h2>
    <p class="dark center">Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind. Als ambitieuze jonge creatieveling met een passie voor </p>

    <div class="world-map">

        <div class="company-slider">
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
</div>
</template>

<script>
export default {
    name: "WorkExperience",
    data () {
        return {

        }
    },
    mounted () {
        var self = this;
        $(document).ready(function () {
            checkWindowWidth();

            $(window).resize(function () {
                checkWindowWidth();
            })

            function checkWindowWidth() {
                if($(window).width() < 767) {
                    setSlider();
                } else {
                    destroySlider();
                }
            }

            function setSlider() {
                $('.company-slider').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // asNavFor: '.reference-slider-for',
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    focusOnSelect: true,
                    infinite: true,
                });
            }

            function destroySlider() {
                // $('.company-slider').slick('unslick');
            }
        });
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

        @include breakpoint(xs) {
            padding: 0 24px;
        }
    }

    .world-map {
        position: relative;
        @include aspect-ratio(1308px, 445px);
        // background-color: gray;
        margin: 200px 16px 0;
        background: linear-gradient(to bottom, #edf2f7, rgba(246, 249, 254, 0.0)), linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
        background-image: url("../../assets/images/px-worldmap.png");
        background-size: cover;
        @include breakpoint(xs) {
            margin: 64px 0;
            @include aspect-ratio(358px, 456px);
        }

        .company-slider {
            @include breakpoint(xs) {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                // margin: 0 -8px;

            }
        }

        .company {
            position: absolute;
            @include breakpoint(xs) {
                position: relative;
                display: inline-block;
                width: auto !important;
                margin: 0 1.17%;
            }

            &.right {
                top: -40px;
                right: 10%;
                @include breakpoint(xs) {
                    top: auto;
                    right: auto;
                }
            }

            &.right-center {
                top: -100px;
                right: 25%;
                @include breakpoint(xs) {
                    top: auto;
                    right: auto;
                }
            }

            &.center {
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                @include breakpoint(xs) {
                    top: auto;
                    left: auto;
                    transform: translateX(0%);
                }
            }

            &.left-center {
                top: 22px;
                left: 25%;
                @include breakpoint(xs) {
                    top: auto;
                    left: auto;
                }
            }

            &.left {
                top: -112px;
                left: 12%;
                @include breakpoint(xs) {
                    top: auto;
                    left: auto;
                }
            }

            .logo {
                position: relative;
                width: 80px;
                height: 80px;
                @include border-radius(33px);
                box-shadow: 0 8px 16px 0 rgba(58, 138, 215, 0.16);
                @include breakpoint(xs) {
                    width: 64px;
                    height: 64px;
                    @include border-radius(26px);
                }
                
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
                    @include breakpoint(xs) {
                        width: 64px;
                        height: 64px;
                        @include border-radius(26px);
                    }
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
                @include breakpoint(xs) {
                    display: none;
                }

                &.person-2 {
                    right: -30px;
                    background-color: orange;
                }
            }
        }
    }
}
</style>

