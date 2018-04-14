<template>
<div class="result-block">
    <h2 class="dark">Benieuwd naar het resultaat?</h2>
    <p class="dark">Hey, mijn naam is Web en app design Rob Scholten.
        Een passievolle freelancer, een pixeldenker.
        Sinds 2015 werk ik aan projecten die ik Branding leuk en inspirerend vind.
        Als ambitieuze jonge creatieveling met een interface design passie voor digital
        design werk ik nauw samen development met mijn partners.
    </p>
    <button class="button-primary">Bekijk online</button>
</div>
</template>

<script>
export default {
    name: "ResultBlock",
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.result-block {
    margin: 80px 0;
    text-align: center;

    h2, p {
        margin: 0 auto;
        max-width: 1025px;
    }

    button {
        margin-top: 64px;
    }
}
</style>

