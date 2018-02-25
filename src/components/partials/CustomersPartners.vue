<template>
<div class="customers-partners">
    <h2 class="dark center">Klanten en partners waar wij trots op zijn</h2>
    <p class="dark center">Wij werken aan dingen die wij leuk vinden, dit doen wij in samenwerking met onze partners. Voor de volgende klanten en partners hebben wij onze digitale oplossing mogen verwezenlijken.</p>

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
@import '../../assets/styles/all';

.customers-partners {

    @include breakpoint(xs) {
        padding: 0 24px;
    }

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

        @include breakpoint(xs) {
            grid-template-columns: 1fr 1fr;
            margin-top: 65px;
        }

        .partner {
            width: 100%;
            height: 32px;
            background-color: gray;
            margin-bottom: 115px;

            @include breakpoint(xs) {
                margin-bottom: 65px;
            }
        }
    }
}
</style>

