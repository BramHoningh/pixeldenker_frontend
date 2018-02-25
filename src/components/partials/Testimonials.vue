<template>
<div class="testimonials">
    <h2 class="dark center">Wat anderen over ons te zeggen hebben</h2>
    <p class="dark center">Wij kunnen wel uren praten over onze passie,
        maar wie kunnen je beter informeren over onze kundigheid dan onze klanten zelf?</p>

    <div class="testimonial-slider">
        <div class="slider-nav-container">
            <div class="slider-nav-left"></div>
            <div class="slider-nav-right"></div>

            <div class="slider-nav">
                <div class="slider-nav-item">
                    <div class="image">
                        <div class="company-logo"></div>
                    </div>
                </div>

                <div class="slider-nav-item">
                    <div class="image">
                        <div class="company-logo"></div>
                    </div>
                </div>

                <div class="slider-nav-item">
                    <div class="image">
                        <div class="company-logo"></div>
                    </div>
                </div>

                <div class="slider-nav-item">
                    <div class="image">
                        <div class="company-logo"></div>
                    </div>
                </div>  

                <div class="slider-nav-item">
                    <div class="image">
                        <div class="company-logo"></div>
                    </div>
                </div>

                <div class="slider-nav-item">
                    <div class="image">
                        <div class="company-logo"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-slider">
            <div class="main-slider-item">
                <div class="job">Academic program manager - Microsoft</div>
                <div class="name">Brian Hewitt</div>
                <div class="text">
                    When I met Rob when he still was a student, he immediately got the attention of the team because of his ability to understand the actual needs and context. He is trustworthy and reliable and is own urgency to keep learning works inspiring to others
                </div>
            </div>

            <div class="main-slider-item">
                <div class="job">CEO - Google</div>
                <div class="name">Bram Honingh</div>
                <div class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, mollitia? Neque vel perspiciatis ipsum atque explicabo, reprehenderit quas voluptate quod.
                </div>
            </div>

            <div class="main-slider-item">
                <div class="job">Lead Designer - Apple</div>
                <div class="name">Rob Scholten</div>
                <div class="text">
                    When I met Rob when he still was a student, he immediately got the attention of the team because of his ability to understand the actual needs and context. He is trustworthy and reliable and is own urgency to keep learning works inspiring to others
                </div>
            </div>

            <div class="main-slider-item">
                <div class="job">Academic program manager - Microsoft</div>
                <div class="name">Brian Hewitt</div>
                <div class="text">
                    When I met Rob when he still was a student, he immediately got the attention of the team because of his ability to understand the actual needs and context. He is trustworthy and reliable and is own urgency to keep learning works inspiring to others
                </div>
            </div>

            <div class="main-slider-item">
                <div class="job">Academic program manager - Microsoft</div>
                <div class="name">Brian Hewitt</div>
                <div class="text">
                    When I met Rob when he still was a student, he immediately got the attention of the team because of his ability to understand the actual needs and context. He is trustworthy and reliable and is own urgency to keep learning works inspiring to others
                </div>
            </div>

            <div class="main-slider-item">
                <div class="job">Academic program manager - Microsoft</div>
                <div class="name">Brian Hewitt</div>
                <div class="text">
                    When I met Rob when he still was a student, he immediately got the attention of the team because of his ability to understand the actual needs and context. He is trustworthy and reliable and is own urgency to keep learning works inspiring to others
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Testimonials",
    data () {
        return {

        }
    },
    mounted () {
        var self = this;
        $(document).ready(function() {
            $('.slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.main-slider',
                dots: false,
                arrows: false,
                centerMode: true,
                focusOnSelect: true,
                infinite: false,
            });

            $('.main-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.slider-nav',
                fade: true
            });
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.slick-current {
   .image {
      height: 80px !important;
      width: 80px !important;
      margin-top: -20px !important;
      opacity: 1 !important;
      border-radius: 32px !important;
      -webkit-filter: blur(0px) !important;
	  filter: blur(0px) !important;
   }
}

.slider-nav-left {
   position: absolute;
   left: 0;
   top: 0;
   height: 100%;
   width: 80px;
   background: white;
   background: -webkit-linear-gradient(left, $white-main, rgba(0,0,0,0));
   background: -o-linear-gradient(right, $white-main, rgba(0,0,0,0));
   background: -moz-linear-gradient(right, $white-main, rgba(0,0,0,0));
   background: linear-gradient(to right, $white-main, rgba(0,0,0,0));
   z-index: 999;
}

.slider-nav-right {
   position: absolute;
   right: 0;
   top: 0;
   height: 100%;
   width: 80px;
   background: white;
   background: -webkit-linear-gradient(right, $white-main, rgba(0,0,0,0));
   background: -o-linear-gradient(left, $white-main, rgba(0,0,0,0));
   background: -moz-linear-gradient(left, $white-main, rgba(0,0,0,0));
   background: linear-gradient(to left, $white-main, rgba(0,0,0,0));
   z-index: 999;
}

.testimonials {
    padding: 0 16px;

    h2 {
        max-width: 618px;
        margin: 0 auto;
    }

    p {
        max-width: 700px;
        margin: 0 auto;
    }

    .testimonial-slider {
        max-width: 1136px;
        margin: 120px auto 0;
        border: 1px solid $gray-main-light;

        .slider-nav-container {
            position: relative;
            max-width: 500px;
            min-height: 100px;
            margin: 66px auto 19px;

            .slider-nav {

                .slider-nav-item {

                    .image {
                        position: relative;
                        width: 40px;
                        height: 40px;
                        @include border-radius(100px);
                        background-image: url('http://via.placeholder.com/70x70');
                        background-size: cover;
                        margin: 0 auto;
                        @include transition(all, 230ms);
                        opacity: 0.8;
                        -webkit-filter: blur(3.6px);
                        filter: blur(3.6px);
                        cursor: pointer;

                        .company-logo {
                            position: absolute;
                            right: -5px;
                            bottom: 0;
                            width: 24px;
                            height: 24px;
                            background-image: url('http://via.placeholder.com/70x70');
                            background-size: cover;
                            @include border-radius(32px);
                            background-color: $white-main;
                            box-shadow: 0 8px 16px 0 rgba(99, 146, 247, 0.16);
                        }
                    }
                }
            }
        }

        .main-slider {
            margin-top: -40px;

            .main-slider-item {
                width: 100px;
                height: auto;

                .job {
                    font-family: $source-sans-pro;
                    @include font-size(14px);
                    line-height: 1.0;
                    text-align: center;
                    text-transform: uppercase;
                    color: $gray-main;
                    opacity: 0.66;
                }

                .name {
                    margin-top: 4px;
                    font-family: $poppins;
                    @include font-size(20px);
                    font-weight: 600;
                    line-height: 1.0;
                    letter-spacing: -0.7;
                    text-align: center;
                    color: $gray-dark-dark;
                }

                .text {
                    font-family: $source-sans-pro;
                    @include font-size(28px);
                    font-weight: 300;
                    line-height: 1.57;
                    text-align: center;
                    color: rgba(90, 108, 137, 0.56);
                    max-width: 770px;
                    margin: 38px auto 89px;
                    @include breakpoint(xs) {
                        padding: 0 10px;
                        @include font-size(16px);
                    }

                    &:before {
                        content: "“";
                    }

                    &:after {
                        content: "”";
                    }
                }
            }
        }
    }
}
</style>

