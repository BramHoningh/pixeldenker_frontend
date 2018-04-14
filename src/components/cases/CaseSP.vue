<template>
<div class="case-page">
    <Hero type="case"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
    />

    <ImageBlock
        :image="this.imageBlock.image"
    />

    <TextComp
        :content="this.text.content1"
    />

    <TwoImageBlock
        :imageOne="this.twoImageBlock.imageOne"
        :imageTwo="this.twoImageBlock.imageTwo"
    />

    <TextComp
        :content="this.text.content2"
    />

    <TwoImageBlock
        :imageOne="this.twoImageBlock.imageThree"
        :imageTwo="this.twoImageBlock.imageFour"
    />

    <ResultBlock />

    <FooterBlock
        :btnImage="this.footer.btnImage"
        :btnText="this.footer.btnText"
        :btnSecondaryText="this.footer.btnSecondaryText"
        :btnLink="this.footer.btnLink"
    />

</div>
</template>

<script>
import { EventBus } from '../../eventBus';

import WorkPreviewBar from '../partials/WorkPreviewBar'
import Hero from '../partials/Hero'
import DualImage from '../partials/DualImage';
import TextComp from '../partials/Text';
import TwoImageBlock from '../partials/TwoImageBlock';
import ImageBlock from '../partials/ImageBlock';
import ResultBlock from '../partials/ResultBlock';
import FooterBlock from '../partials/FooterBlock';

export default {
    name: "CaseSP",
    components: {
        WorkPreviewBar,
        Hero,
        DualImage,
        TextComp,
        TwoImageBlock,
        ImageBlock,
        ResultBlock,
        FooterBlock
    },
    data () {
        return {
            hero: {
                preContent: {
                    images: [
                        "../static/images/logo-agency3.png",
                        "../static/images/Avatar.jpeg"
                    ],
                    text: "Het fitness handboek",
                },
                title: "App design for the web",
                subtitle: "Iedereen die naar de sportschool gaat of er eens is geweest kent het gevoel van verwarring en onwetendheid. Tenzij je gebruik maakt van een sportschool met personal coach heb je weinig tot geen begeleiding in je eerste trainings maanden. De doelgroep van Spotter heeft deze privilege helaas niet."
            },
            imageBlock: {
                image: "../static/images/Spotter/img-normal-double-1.png"
            },
            text: {
                content1: "Een studiegenoot heeft voor zijn afstuderen juist dit probleem proberen te tackelen en kwam met Spotter als oplossing. Spotter kan worden gezien als een persoonlijke assistent die je helpt bij je trainingen en je voorziet van relevante informatie. Wij werden gekozen om het concept te voorzien van een “gebruiksvriendelijk jasje”.",
                content2: `Het ontwerp is gemaakt aan de hand van een minimal viable product. Spotter wordt uitgewerkt als een webapp die moet aanvoelen als een native app. Door deze keuze zijn er een aantal design keuzes gemaakt waaronder de top navigatie bar. Waarom geen tabbar vraag je je misschien af? Een tabbar conflicteert namelijk met de tabbar van de mobile browser. Deze vorm van navigatie wordt binnen de gehele app gehanteerd. Deze vorm van navigatie is zowel bij IOS als Android gebruikers bekend.
                        
                        Bij het ontwerp process stond het visualiseren van data centraal, er was veel data aanwezig maar de vertaling naar een begrijpelijk interface stond nog open. Door niet teveel data tegelijk te tonen behoud je de aandacht van de gebruiker, ook voel het design scanbaar aan. Het gehele design inclusief logo en huisstijl is door ons verzorgd. 
                `
            },
            twoImageBlock: {
                imageOne: "../static/images/Spotter/img-small-white-1.png",
                imageTwo: "../static/images/Spotter/img-small-white-2.png",
                imageThree: "../static/images/Spotter/img-small-white-3.png",
                imageFour: "../static/images/Spotter/img-small-white-4.png"
            },
            footer: {
                btnImage: "../static/images/logo-agency5.png",
                btnText: "Next case",
                btnSecondaryText: "deHuyskamer",
                btnLink: "dehuyskamer-business"
            }
        }
    },
    created () {
        EventBus.$emit('isCase', {isCaseLogo: true})
    }
}
</script>

<style lang="scss">
.case-page {
    display: grid;
    grid-row-gap: 50px;
}
</style>
