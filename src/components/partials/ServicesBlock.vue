<template>
<div class="services-block">
    <h3 class="dark">Services die wij bieden</h3>
    <div class="text">
        Als Pixeldenkers streven wij naar een pixel precies <a>Interface Design.</a>
        Wij hebben een passie voor zowel <a>Web als App Design.</a>
        Door het ontwikkelen van een <a>Digitale Branding</a> weten wij een unieke merkpersoonlijkheid
        neer te zetten waarbij de tone of voice consistent is.
        Wij werken met de meest recente <a>Web Development</a> technieken om zo tot een mooi product komen.
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
    text-align: center;

    .text {
        margin-top: 7px;
        font-family: $source-sans-pro;
        @include font-size(28px);
        font-weight: 300;
        line-height: 1.57;
        color: rgba(71, 89, 117, 0.64);

        a {
            font-weight: 400;
            color: $blue-dark;
            border: none;
            cursor: pointer;
        }
    }
}
</style>

