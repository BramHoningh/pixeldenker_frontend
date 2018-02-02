<template>
<div>
    <div class="text-slider">
        <div class="slide">
            <h3 class="title">Wij maken digitale ontwerpen</h3>
            <div class="content">Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. <a href="#">Bekijk ons werk.</a>
                Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind. Als ambitieuze jonge creatieveling
                met een passie voor digital design werk ik nauw samen met mijn partners.</div>
        </div>
        <div class="slide">
            <h3 class="title">Wij maken digitale ontwerpen</h3>
            <div class="content">Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. <a href="#">Bekijk ons werk.</a>
                Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind. Als ambitieuze jonge creatieveling
                met een passie voor digital design werk ik nauw samen met mijn partners.</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "TextSlider",
    data () {
        return {

        }
    },
    mounted () {
        var self = this;
        $(document).ready(function () {
            $('.text-slider').slick({
                autoplay: true,
                autoplaySpeed: 10000,
                arrows: false,
                dots: true,
            })
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.text-slider {
    position: relative;
    margin: 12px 16px;
    padding: 208px 0;
    text-align: center;
    color: $white-main;
    background-color: $black-main;
    @include border-radius(6px);

    h3 {
        text-shadow: 0 1px 2px rgba(14, 17, 24, 0.64);
    }

    .content {
        font-family: $poppins;
        max-width: 600px;
        margin: 12px auto 0;
        @include font-size(22px);
        line-height: 1.59;
    }
}
</style>
