<template>
<div>
    <Hero position="left"
        :backgroundImage="this.hero.backgroundImage"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
        :content="this.hero.content"
    />
    <TextComp 
        :title="this.textComp.title"
        :content="this.textComp.content"
    />
    <TextSlider />
    <CrewBlock />
    <PhotoBlock 
        :backgroundImage="this.photo.backgroundImage"
    />
    <ServicesBlock />
    <WorkExperience />
</div>
</template>

<script>
import Hero from './partials/Hero';
import TextComp from './partials/Text';
import TextSlider from './partials/TextSlider';
import CrewBlock from './partials/CrewBlock';
import PhotoBlock from './partials/PhotoBlock';
import ServicesBlock from './partials/ServicesBlock';
import WorkExperience from './partials/WorkExperience';

export default {
    name: "AboutPage",
    components: {
        Hero,
        TextComp,
        TextSlider,
        CrewBlock,
        PhotoBlock,
        ServicesBlock,
        WorkExperience
    },
    data () {
        return {
            hero: {
                backgroundImage: "./static/images/rawpixel-com-296613.jpg",
                title: "Wij zijn Pixeldenkers.",
                subtitle: "Wij zijn altijd in voor een uitdaging.",
                content: `Pixeldenker is een vrij jong digitaal bureau bestaande uit twee gepassioneerde studenten.
                Sinds 2015 werken wij aan projecten die wij leuk en inspirerend vinden.`
            },

            textComp: {
                title: "Het beste resultaat is waar wij naar streven",
                content: "Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind. Als ambitieuze jonge creatieveling met een passie voor digital design werk ik nauw samen met mijn partners. "
            },

            photo: {
                backgroundImage: "./static/images/rawpixel-com-303966.jpg"
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

