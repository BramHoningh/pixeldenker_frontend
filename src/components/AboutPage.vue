<template>
<div>
    <Hero type="about"
        :heroImage="this.hero.backgroundImage"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
        :buttonText="this.hero.buttonText"
        :secondButtonText="this.hero.secondButtonText"
    />
    <CrewBlock />
    <ServicesBlock />
    <DribbbleBlock
        :images="this.dribbbleBlock.images"
    />
    <WorkExperience />
    <Testimonials />
    <FooterBlock
        :btnText="this.footer.btnText"
        :btnLink="this.footer.btnLink"
    />
</div>
</template>

<script>
import { EventBus } from '../eventBus';
import Hero from './partials/Hero';
import ImageSlider from './partials/ImageSlider';
import TextComp from './partials/Text';
import TextSlider from './partials/TextSlider';
import CrewBlock from './partials/CrewBlock';
import PhotoBlock from './partials/PhotoBlock';
import ServicesBlock from './partials/ServicesBlock';
import DribbbleBlock from './partials/DribbbleBlock';
import WorkExperience from './partials/WorkExperience';
import Testimonials from './partials/Testimonials';
import FooterBlock from './partials/FooterBlock';

export default {
    name: "AboutPage",
    components: {
        Hero,
        ImageSlider,
        TextComp,
        TextSlider,
        CrewBlock,
        PhotoBlock,
        ServicesBlock,
        DribbbleBlock,
        WorkExperience,
        Testimonials,
        FooterBlock
    },
    data () {
        return {
            hero: {
                backgroundImage: "./static/images/Solvisoft/portfolio-img@2x.png",
                title: "Bij Ons Staat de Gebruiker Centraal",
                subtitle: "Twee studenten met dezelfde ambitie, samen vormen wij Pixeldenker. Een ambitieus jong en betrokken team. Wij zijn Pixeldenkers. Wij combineer strategie, design en development om zo de digitale ambities van onze klanten te realiseren.",
                content: `Als klant sta jij centraal, wij begeleiden jou bij het realiseren van jouw digitale ambities. Bij Pixeldenker draait het om de gebruikerservaring op het gebied van zowel interactie als interface.`,
                buttonText: "Bekijk ons werk",
                secondButtonText: "Bekijk deHuyskamer"
            },

            dribbbleBlock: {
                images: [
                    './static/images/dribbble/webshop-solvisoft-1.png',
                    './static/images/dribbble/8.jpg',
                    './static/images/dribbble/5.jpg',
                    './static/images/dribbble/1.png',
                    './static/images/dribbble/Spotter-animation-small.gif',
                    './static/images/dribbble/dribbble-800x600-article_.02.png',
                ]
            },

            footer: {
                btnText: "Bekijk ons werk",
                btnLink: "contact"
            }
        }
    },
    created () {
        EventBus.$emit('isCase', {isCaseLogo: false})
    }
}
</script>

<style lang="scss" scoped>

</style>

