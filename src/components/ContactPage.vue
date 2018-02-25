<template>
<div class="contact-page">
    <div class="one">
        <h1 class="dark">Heb jij een uitdaging?</h1>
        <p class="dark">Wij staan altijd klaar voor een nieuwe uitdaging.
            Wil jij ons uitdagen of heb je een interessant idee om een keer over te sparren?
            Neem dan gerust contact met ons op, wij zijn iniedergeval erg benieuwd.
        </p>
        <button class="button-primary">Bekijk ons werk</button>
    </div>
    <div class="two">
        <div class="content">
            <div class="person">
                <div class="company"></div>
            </div>
            <h3 class="dark">Samen sparren?</h3>
            <p class="dark">Heb je een uitdagende vraag of een grensverleggend idee?
                Neem dan contact op met Rob.
                Bel mij op <a href="tel:+31621164664">06 2116 4664</a>
                of mail ons op <a href="mailto:hallo@pixeldenker.nl">hallo@pixeldenker.nl</a></p>
            <div class="map"></div>
        </div>
    </div>
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
@import '../assets/styles/all';

.contact-page {
    display: grid;
    grid-template-columns: 498px 1fr;
    grid-template-rows: auto;
    grid-column-gap: 41px;
    padding: 16px;

    @include breakpoint(md) {
        grid-template-columns: 1fr;
    }

    .one {
        padding: 140px 80px;
        min-height: calc(100vh - 32px);
        width: 100%;
        background-image: linear-gradient(to bottom, #f6f9fe, #edf3fd);
        @include border-radius(6px);
        @include box-sizing(border-box);
    }

    .two {
        position: relative;
        min-height: calc(100vh - 32px);
        width: 100%;
        background-color: white;

        .content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;

            .person {
                position: relative;
                width: 48px;
                height: 48px;
                margin-bottom: 24px;
                background-color: gray;
                border: 1px solid rgba(37, 52, 74, 0.16);
                box-shadow: 0 8px 32px 0 rgba(37, 52, 74, 0.16);
                @include border-radius(17px);

                .company {
                    position: absolute;
                    bottom: -12px;
                    right: -12px;
                    width: 24px;
                    height: 24px;
                    background-color: blue;
                    box-shadow: 0 8px 16px 0 rgba(99, 146, 247, 0.16);
                    @include border-radius(32px);
                }
            }

            p {
                margin-top: 0;
            }

            .map {
                width: 100%;
                height: 480px;
                background-color: gray;
                @include border-radius(6px);
            }
        }
    }
}
</style>

