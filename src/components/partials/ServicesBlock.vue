<template>
<div class="services-block">
    <h3 class="dark">Services die wij bieden</h3>
    <div class="text">
        Hey, mijn naam is <a href="#">Web en app design</a> Rob Scholten. Een passievolle freelancer, een
        Pixeldenker. Sinds 2015 werk ik aan projecten die ik <a href="#">Branding</a> leuk en inspirerend vind.
        Als ambitieuze jonge creatieveling met een <a href="#">interface design</a> passie voor digital design
        werk ik nauw samen <a href="#">development</a> met mijn partners.
    </div>
</div>
</template>

<script>
export default {
    name: "ServicesBlock",
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.services-block {
    padding: 0 16px;
    margin: 139px auto 132px;
    max-width: 976px;

    .text {
        margin-top: 7px;
        font-family: $source-sans-pro;
        @include font-size(24px);
        font-weight: 300;
        line-height: 1.57;
        text-align: left;
        color: rgba(71, 89, 117, 0.64);
    }
}
</style>

