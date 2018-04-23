<template>
<div>
    <Hero v-vpshow type="about"
        :heroImage="this.hero.backgroundImage"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
        :buttonText="this.hero.buttonText"
        :buttonLink="this.hero.buttonLink"
        :secondButtonText="this.hero.secondButtonText"
        :secondButtonLink="this.hero.secondButtonLink"
    />
    <CrewBlock v-vpshow />
    <ServicesBlock v-vpshow />
    <DribbbleBlock v-vpshow
        :images="this.dribbbleBlock.images"
    />
    <WorkExperience v-vpshow />
    <Testimonials v-vpshow />
    <FooterBlock v-vpshow
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
                subtitle: "Twee studenten met dezelfde ambitie, samen vormen wij Pixeldenker. Een ambitieus, jong en betrokken team. Wij zijn Pixeldenkers. Wij combineren strategie, design en development om zo de digitale ambities van onze klanten te realiseren.",
                content: `Als klant sta jij centraal, wij begeleiden jou bij het realiseren van jouw digitale ambities. Bij Pixeldenker draait het om de gebruikerservaring op het gebied van zowel interactie als interface.`,
                buttonText: "Bekijk ons werk",
                buttonLink: "werk",
                secondButtonText: "Bekijk deHuyskamer",
                secondButtonLink: "werk/dehuyskamer-business"
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
                btnText: "Neem contact op",
                btnLink: "contact"
            }
        }
    },
    created () {
        EventBus.$emit('isCase', {isCaseLogo: false})

        EventBus.$emit('toggleMenu', { toggleMenu: false })
        EventBus.$emit('closeMenu', { toggleMenu: false })
    }
}
</script>

<style lang="scss" scoped>

</style>

