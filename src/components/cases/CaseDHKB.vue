<template>
<div>
    <div class="case-page">
        <Hero v-vpshow type="case"
            :title="this.hero.title"
            :subtitle="this.hero.subtitle"
        />

        <ImageBlock v-vpshow
            :image="this.imageBlock.image1"
        />

        <TextComp v-vpshow
            :content="this.text.content1"
        />

        <TwoImageBlock v-vpshow
            :imageOne="this.dualImage.bgImageOne"
            :imageTwo="this.dualImage.bgImageTwo"
        />

        <TextComp v-vpshow
            :content="this.text.content2"
        />

        <TwoImageBlock v-vpshow
            :imageOne="this.twoImageBlock.imageOne"
            :imageTwo="this.twoImageBlock.imageTwo"
        />

        <TextComp v-vpshow
            :content="this.text.content4"
        />

        <ImageBlock v-vpshow
            :image="this.imageBlock.image2"
        />

        <ResultBlock v-vpshow
            :resultLink="'https://business.dehuyskamer.net'"
        />

        <FooterBlock v-vpshow
            :btnImage="this.footer.btnImage"
            :btnText="this.footer.btnText"
            :btnSecondaryText="this.footer.btnSecondaryText"
            :btnLink="this.footer.btnLink"
        />
    </div>
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
    name: "CaseDHKB",
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
            showCase: false,

            currentCase: {
                name: 'dehuyskamer-business',
                tagLine: "Ondernemen is onze passie",
                buttonText: "Bekijk Casestudy",
            },

            hero: {
                preContent: {
                    images: [
                        "../static/images/logo-agency5.png",
                        "../static/images/Avatar.jpeg",
                        "../static/images/Avatar.jpeg",
                    ],
                    text: "Ondernemen is onze passie"
                },
                title: "Het opzetten van een online product",
                subtitle: `deHuyskamer is een iniatief die resulteerde uit frustratie naar onze eigen ervaringen. De zoektocht naar een kamer is niet altijd even plezierig, en wij zijn van mening dat dit beter kan! Met ons achtergrond als Communication and Multimedia Design student zijn wij begonnen aan dit traject. Nog steeds werken wij elke dag vol passie aan het product.`,
            },

            dualImage: {
                bgColorOne: "#103b90",
                bgImageOne: "../static/images/dehuyskamer-business/img-small-color-1.png",
                bgColorTwo: "#e6e6e6",
                bgImageTwo: "../static/images/dehuyskamer-business/img-small-white-1.png"
            },

            text: {
                content1: `Naast dat wij werk leveren voor verschillende klanten geven wij veel prioriteit aan zelfgroei. Wij houden van goed ontworpen applicaties, zo erg dat we zelf zijn gestart met deHuyskamer. Ondernemen is simpelweg onze passie. Naast dat er veel leermogelijkheden aanwezig waren was ons doel een product neer te zetten die daadwerkelijk impact kan hebben.`,
                content2: `Bij het opzetten van een online marktplaats waarbij er diensten worden aangeboden is het cruciaal om aanbod te creëren. Zonder aanbod krijgt je platform geen gebruikers, maar zonder gebruikers zal er ook weinig aanbod zijn. Een van onze kernwaarden tijdens het process, ‘software ontwerpen en creëren waar je blij van wordt’. 
                        
                        Bij deHuyskamer wordt er van huurders een kleine bijdrage verwacht om de kwaliteit van het aanbod te kunnen waarborgen, en het platform draaiende te kunnen houden. Door het opzetten van een marketing website kunnen wij potentiële verhuurders informeren tijdens het werven.`,
                content4: "Tijdens het ontwerpprocess is er rekening gehouden met de tone of voice richting de potentiële huurders. Het ontwerp is opgezet vanuit componenten om het design zo generiek en consistent als mogelijk neer te zetten. Momenteel is het product nog in ontwikkeling, en blijven wij het doorontwikkelen."
            },

            twoImageBlock: {
                imageOne: "../static/images/dehuyskamer-business/img-normal-1.png",
                imageTwo: "../static/images/dehuyskamer-business/img-normal-1.png"
            },

            imageBlock: {
                image1: "../static/images/dehuyskamer-business/img-normal-1.png",
                image2: "../static/images/dehuyskamer-business/img-long-1.png"
            },

            footer: {
                btnImage: "../static/images/app-icon.png",
                btnText: "Next case",
                btnSecondaryText: "Spotter",
                btnLink: "spotter"
            }
        }
    },
    created () {
        EventBus.$on('showCase', event => {
            if (event.name === 'dehuyskamer-business') this.showCase = true
        })

        EventBus.$emit('isCase', {isCaseLogo: true})
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/all';

.work-preview {
    position: relative;
    margin: 16px;
    padding: 16px;
    background-image: linear-gradient(to bottom, #f6f9fe, rgba(237, 243, 253, 0));
    @include border-radius(6px);
    height: calc(100vh - 64px);

    .image {
        position: absolute;
        bottom: 0;
        left: 42px;
        right: 42px;
        height: 75%;
        background-color: gray;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-image: linear-gradient(to bottom, rgba(145, 195, 255, 0), rgba(88, 144, 255, 0.06));
    }
}

.case-page {
    display: grid;
    grid-row-gap: 50px;
}
</style>

