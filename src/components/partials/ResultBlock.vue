<template>
<div class="result-block">
    <h2 class="dark">Benieuwd naar het resultaat?</h2>
    <p class="dark">Wil je onze front-end skills in het wild zien, of ben je gewoon benieuwd naar het eindresultaat? Bij Pixeldenker geven wij niet alleen om het design en usability, ook techniek is een van onze kernwaarden.
    </p>
    <a v-if="this.resultLink" :href="this.resultLink" target="_blank"><button class="button-primary">Bekijk online</button></a>
</div>
</template>

<script>
export default {
    name: "ResultBlock",
    props: ['resultLink'],
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.result-block {
    margin: 80px 20px;
    text-align: center;

    a {
        border-bottom: none;
    }

    h2, p {
        margin: 0 auto;
        max-width: 1025px;
    }

    p {
        margin-bottom: 64px;
    }
}
</style>

