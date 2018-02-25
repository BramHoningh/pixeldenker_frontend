<template>
<div class="contact-page">
    <div class="one"></div>
    <div class="two"></div>
</div>
</template>

<script>
export default {
    name: "ContactPage",
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-page {
    display: grid;
    grid-template-columns: 498px 1fr;
    grid-template-rows: 100vh;
    grid-column-gap: 41px;
    padding: 16px;

    .one {
        height: 100%;
        width: 100%;
        background-color: blue;
    }

    .two {
        height: 100%;
        width: 100%;
        background-color: gray;
    }
}
</style>

