<template>
<div class="work-experience">
    <h2 class="dark center">Onze werkervaring</h2>
    <p class="dark center">Wij hebben de kans gekregen om deel uit te maken van de volgende bureaus als stagiaires. De opgedane kennis passen wij toe in ons dagelijks activiteiten.</p>

    <div class="world-map">

        <div class="company-slider">
            <div class="company left">
                <div class="tooltip">Stagiar Visual Designer</div>
                <div class="logo logo3">
                    <div class="person"></div>
                </div>
            </div>

            <div class="company center">
                <div class="tooltip">Stagiair Visual Designer</div>
                <div class="logo logo2 large">
                    <div class="person"></div>
                    
                </div>
            </div>

            <div class="company left-center">
                <div class="tooltip">Founders</div>
                <div class="logo logo5 small">
                    <div class="person"></div>
                    <div class="person person-2"></div>
                </div>
            </div>

            <div class="company right-center">
                <div class="tooltip">Creative Thinkers</div>
                <div class="logo logo4">
                    <div class="person"></div>
                    <div class="person person-2"></div>
                </div>
            </div>

            <div class="company right">
                <div class="tooltip">Freelance UX/UI Designer</div>
                <div class="logo logo1 small">
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
  data() {
    return {};
  },
  mounted() {
    var self = this;
    $(document).ready(function() {
      checkWindowWidth();

      $(window).resize(function() {
        checkWindowWidth();
      });

      function checkWindowWidth() {
        if ($(window).width() < 767) {
          setSlider();
        } else {
          destroySlider();
        }
      }

      function setSlider() {
        $(".company-slider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          // asNavFor: '.reference-slider-for',
          dots: false,
          arrows: false,
          centerMode: true,
          focusOnSelect: true,
          infinite: true
        });
      }

      function destroySlider() {
        // $('.company-slider').slick('unslick');
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/all";

.work-experience {
  padding-top: 133px;
  background-color: #ffffff;

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
    margin: 50px 16px;
    // background: linear-gradient(to bottom, #edf2f7, rgba(246, 249, 254, 0.0)), linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
    // background-image: url("../../assets/images/px-worldmap.png");
    background-image: radial-gradient(
      50% 50% at 50% 50%,
      #f2f6fe,
      rgba(242, 246, 253, 0)
    );
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
      cursor: pointer;

      .tooltip {
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        @include transition(all, 230ms);
      }

      &:hover {
        .tooltip {
          opacity: 1;
        }
      }

      @include breakpoint(xs) {
        position: relative;
        display: inline-block;
        width: auto !important;
        margin: 0 1.17%;
      }

      &.right {
        top: 170px;
        right: 10%;
        @include breakpoint(xs) {
          top: auto;
          right: auto;
        }

        .tooltip {
          width: 170px;
        }
          
        &:hover {
            .person {
                right: auto;
                right: 13px;
                bottom: -25px;
            }
        }
      }

      &.right-center {
        top: 100px;
        right: 25%;
        @include breakpoint(xs) {
          top: auto;
          right: auto;
        }

        .tooltip {
          width: 110px;
          bottom: 90px;
        }

        &:hover {
          .person {
            right: auto;
            right: 31px;
            bottom: -25px;
          }

          .person-2 {
            right: 9px;
          }
        }
      }

      &.center {
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        @include breakpoint(xs) {
          top: auto;
          left: auto;
          transform: translateX(0%);
        }

        .tooltip {
          width: 140px;
          bottom: 110px;
        }

        &:hover {
          .person {
            right: auto;
            right: 31px;
            bottom: -25px;
          }

          .person-2 {
            right: 9px;
          }
        }
      }

      &.left-center {
        top: 222px;
        left: 25%;
        @include breakpoint(xs) {
          top: auto;
          left: auto;
        }

        &:hover {
          .person {
            right: auto;
            right: 25px;
            bottom: -25px;
          }

          .person-2 {
            right: 3px;
          }
        }
      }

      &.left {
        top: 70px;
        left: 12%;
        @include breakpoint(xs) {
          top: auto;
          left: auto;
        }

        .tooltip {
            width: 150px;
            bottom: 90px; 
        }

        &:hover {
          .person {
            right: auto;
            right: 22px;
            bottom: -25px;
          }
        }
      }

      .logo {
        position: relative;
        width: 80px;
        height: 80px;
        @include border-radius(40px);
        box-shadow: 0 8px 16px 0 rgba(58, 138, 215, 0.16);
        background-size: cover !important;
        @include breakpoint(xs) {
          width: 64px;
          height: 64px;
          @include border-radius(26px);
        }

        background-color: black;

        &.small {
          width: 64px;
          height: 64px;
          @include border-radius(32px);
        }

        &.large {
          width: 96px;
          height: 96px;
          @include border-radius(48px);
          @include breakpoint(xs) {
            width: 64px;
            height: 64px;
            @include border-radius(26px);
          }
        }

        &.logo1 {
          background: url("../../../static/images/logo-agency1.png");
        }

        &.logo2 {
          background: url("../../../static/images/logo-agency2.png");
        }

        &.logo3 {
          background: url("../../../static/images/logo-agency3.png");
        }

        &.logo4 {
          background: url("../../../static/images/logo-agency4.png");
        }

        &.logo5 {
          background: url("../../../static/images/logo-agency5.png");
        }
      }

      .person {
        position: absolute;
        bottom: -8px;
        right: -8px;
        width: 32px;
        height: 32px;
        @include border-radius(32px);
        border: 2px solid $white-main;
        box-shadow: 0 8px 32px 0 rgba(37, 52, 74, 0.16);
        background-image: url("../../../static/images/Avatar.jpeg");
        background-size: cover;
        @include transition(all, 230ms);
        @include breakpoint(xs) {
          display: none;
        }

        &.person-2 {
          right: -30px;
          background-image: url("../../../static/images/Avatar.jpeg");
          background-size: cover;
        }
      }
    }
  }
}
</style>

