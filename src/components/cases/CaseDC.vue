<template>
<div class="case-page">
    <Hero type="case"
        :preContent="this.hero.preContent"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
    />

    <TwoImageBlock
        :imageOne="this.twoImageBlock.imageOne"
        :imageTwo="this.twoImageBlock.imageTwo"
    />

    <TextComp
        :content="this.text.content1"
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
    name: "CaseDHK",
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
                        "../static/images/logo-agency1.png",
                        "../static/images/Avatar.jpeg"
                    ],
                    text: "Tijdens werkzaamheden voor",
                    linkText: "Digital Chefs",
                    linkUrl: "http://digitalchefs.nl/"
                },
                title: "Kennisvolle werkzaamheden",
                subtitle: "In opdracht van Digital Chefs heb ik aan meerdere projecten morgen werken. Digital Chefs transformeert bedrijfsprocessen met innovatieve en gebruiksvriendelijke software om je vingers bij af te likken. Mijn rol zat hem voornamelijk in het vertalen van wireframes naar visuele eindproducten, tijdens deze projecten had Digital Chefs een leidende rol."
            },
            twoImageBlock: {
                imageOne: "../static/images/digital-chefs/img-small-white-1.png",
                imageTwo: "../static/images/digital-chefs/img-small-white-3.png"
            },
            text: {
                content1: "In opdracht van Digital Chefs realiseren en creëerden wij de gewenste gebruikers ervaring. Dit doen we op verschillende devices en altijd pixel-precies. De uitgevoerde werkzaamheden zijn ervaren als zeer leerzaam."
            },
            footer: {
                btnImage: "../static/images/logo-agency5.png",
                btnText: "Next case",
                btnSecondaryText: "deHuyskamer",
                btnLink: "dehuyskamer"
            }
        }
    },
    created () {
        EventBus.$emit('isCase', {isCaseLogo: true})
    }
}
</script>

<style lang="scss" scoped>
.case-page {
    display: grid;
    grid-row-gap: 50px;
}
</style>

