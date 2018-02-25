<template>
<div style="position: relative;margin: 0 15px;">
   <div class="image-slider-left-overlay"></div>
   <div class="image-slider-right-overlay"></div>

   <div class="image-slider">
      <div class="image-slide" :key="index" v-for="(image, index) in images" :style="{'background-image': 'url(' + image + ')'}">

      </div>
   </div>
</div>
</template>

<script>
export default {
    name: "ImageSlider",
    props: ['images'],
    data () {
        return {

        }
    },
    mounted() {
        $(document).ready(function() {
            $('.image-slider').slick({
                dots: true,
                arrows: false,
                autoplay: false,
            });

            $('.image-slider-left-overlay').on('click', function() {
                $('.image-slider').slick('slickPrev');
            });

            $('.image-slider-right-overlay').on('click', function() {
                $('.image-slider').slick('slickNext');
            });
        });
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/all";

.image-slider-left-overlay {
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   width: 50%;
   z-index: 999;
   cursor: url('../../assets/back-left.svg'), auto;

   &:hover {
      cursor: url('../../assets/back-left.svg'), auto;
   }
}

.image-slider-right-overlay {
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   width: 50%;
   z-index: 999;
   cursor: url('../../assets/next-right.svg'), auto;

   &:hover {
      cursor: url('../../assets/next-right.svg'), auto;
   }
}

.image-slide {
   height: 800px;
   background-size: cover;
   background-position: center;
   @include border-radius(5px);
}
</style>

