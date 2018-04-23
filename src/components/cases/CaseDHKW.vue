<template>
<div class="case-page">
    <Hero v-vpshow type="case"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
    />

    <TwoImageBlock v-vpshow
        :imageOne="this.twoImageBlock.imageOne"
        :imageTwo="this.twoImageBlock.imageTwo"
    />

    <TextComp v-vpshow
        :content="this.text.content1"
    />

    <DualImage v-vpshow
        :backgroundColorOne="this.dualImage.bgColorOne"
        :backgroundImageOne="this.dualImage.bgImageOne"
        :backgroundColorTwo="this.dualImage.bgColorTwo"
        :backgroundImageTwo="this.dualImage.bgImageTwo"
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
        :image="this.imageBlock.image"
    />

    <DualImage v-vpshow
        :backgroundColorOne="this.dualImage.bgColorOne"
        :backgroundImageOne="this.dualImage.bgImageOne"
        :backgroundColorTwo="this.dualImage.bgColorTwo"
        :backgroundImageTwo="this.dualImage.bgImageTwo"
    />

    <TwoImageBlock v-vpshow
        :imageOne="this.twoImageBlock.imageOne"
        :imageTwo="this.twoImageBlock.imageTwo"
    />

    <ResultBlock v-vpshow />

    <FooterBlock v-vpshow
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
                        "../static/images/logo-agency5.png",
                        "../static/images/Avatar.jpeg",
                        "../static/images/Avatar.jpeg",
                    ],
                    text: "Ondernemen is onze passie",
                },
                title: "Het studentenkamer platform",
                subtitle: "deHuyskamer is ontstaan tijdens de studie waarbij wij als studenten aanliepen tegen het aanbod aan websites waar (studenten)kamers te vinden zijn. Als design en development minded studenten zijn wij zelfstandig aan de slag gegaan met een idee een platform voor studentenkamer verhuur te creëren waarbij de gebruiker centraal staat."
            },
            twoImageBlock: {
                imageOne: "../static/images/dehuyskamer-business/img-normal-1.png",
                imageTwo: "../static/images/dehuyskamer-business/img-normal-1.png"
            },
            dualImage: {
                bgColorOne: "#103b90",
                bgImageOne: "../static/images/dehuyskamer-webapp/img-small-color-1.png",
                bgColorTwo: "#103b90",
                bgImageTwo: "../static/images/dehuyskamer-webapp/img-small-color-2.png"
            },
            text: {
                content1: `Bij deHuyskamerhebben wij de gebruikers opgesplitst in twee groepen. De zoekende “studenten” willen snel en makkelijk een kamer vinden, de verhuurders willen gemakkelijk een kamer kunnen plaatsen en deze snel weer kunnen verhuren. Door het toepassen van een user-centered design zetten wij zowel de studenten als huurders waarbij op de eerste plaats. Gebruiksgemak stond aan de kern tijdens ons process.`,
                content2: `deHuyskamer is continue in ontwikkeling, om zo onze eigen ontwikkeling en het platform te kunnen verbeteren. Begonnen als een design proces met het opzetten van een low fidelity prototype wordt er nu iteratief wordt er gewerkt aan nieuwe features. Design elementen worden geplaatst op basis van prioriteit en hierbij wordt gefocust op zowel kleine als grote schermen.
                            
                            Nieuwe features worden uitvoerig getest door onze testgroep voordat deze binnen deHuyskamer worden geïntegreerd. Deze testgroep bestaat uit een uiteenlopende groep gebruikers. De UX keuzes zijn gebaseerd op inzichten vergaard uit interviews en testsessies met ons beta team.`,
                content4: "Het platform wordt en blijft binnen een gesloten testgroep uitbundig getest worden op zowel de usability als het concept. deHuyskamer is uitgegroeid tot onze “playground”.  Zo bied deHuyskamer ons de mogelijkheid te experimenteren met de nieuwste technieken en active gebruikers. Hierdoor wordt niet alleen het platform verbeterd, maar kan de opgedane kennis worden gebruikt tijdens lopende toekomstige projecten."
            },
            imageBlock: {
                image: "../static/images/dehuyskamer-business/img-long-1.png"
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

