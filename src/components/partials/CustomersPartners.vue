<template>
<div class="customers-partners">
    <h2 class="dark center">Klanten en partners waar wij trots op zijn</h2>
    <p class="dark center">Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind. Als ambitieuze jonge creatieveling met een passie voor digital design werk ik nauw samen met mijn partners. </p>

    <div class="partners">
        <div class="partner"></div>
        <div class="partner"></div>
        <div class="partner"></div>
        <div class="partner"></div>

        <div class="partner"></div>
        <div class="partner"></div>
        <div class="partner"></div>
        <div class="partner"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "CustomersPartners",
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.customers-partners {
    p {
        max-width: 800px;
        margin: 16px auto 0;
    }

    .partners {
        max-width: 980px;
        margin: 120px auto 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 1px;

        .partner {
            width: 100%;
            height: 32px;
            background-color: gray;
            margin-bottom: 115px;
        }
    }
}
</style>

