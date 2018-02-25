<template>
<div>
    <Hero position="center"
        :backgroundImage="this.hero.backgroundImage"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
        :content="this.hero.content"
    />
    <ImageSlider
        :images="this.imageSlider.images"
    />
    <CrewBlock />
    <ServicesBlock />
    <DribbbleBlock />
    <WorkExperience />
    <Testimonials />
    <FooterBlock />
</div>
</template>

<script>
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
                backgroundImage: "./static/images/rawpixel-com-296613.jpg",
                title: "Bij Ons Staat de Gebruiker Centraal",
                subtitle: "Twee studenten met dezelfde ambitie, samen vormen wij Pixeldenker. Een ambitieus jong en betrokken team. Wij zijn Pixeldenkers. Wij combineer strategie, design en development om zo de digitale ambities van onze klanten te realiseren.",
                content: `Als klant sta jij centraal, wij begeleiden jou bij het realiseren van jouw digitale ambities. Bij Pixeldenker draait het om de gebruikerservaring op het gebied van zowel interactie als interface.`
            },

            imageSlider: {
                images: [
                    "./static/images/rawpixel-com-296613.jpg",
                    "./static/images/rawpixel-com-296613.jpg",
                    "./static/images/rawpixel-com-296613.jpg",
                    "./static/images/rawpixel-com-296613.jpg",
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

