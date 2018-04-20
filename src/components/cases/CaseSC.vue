<template>
<div class="case-page">
    <Hero type="case"
        :preContent="this.hero.preContent"
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
        :imageOne="this.dualImage.bgImageOne"
        :imageTwo="this.dualImage.bgImageTwo"
    />

    <TextComp
        :content="this.text.content3"
    />

    <ImageBlock
        :image="this.imageBlock.image2"
    />

    <ResultBlock
        :resultLink="'http://www.steigersamenstellen.nl/'"
    />

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
    name: "CaseSC",
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
                    text: "Tijdens werkzaamheden voor",
                    linkText: "Triggerfish",
                    linkUrl: "https://www.triggerfish.nl/"
                },
                title: "Vindt in slechts drie stappen de voor jou benodigte steiger",
                subtitle: "Dit project is uitgevoerd tijdens werkzaamheden bij Triggerfish!. Een klant met ambitie, zoals Triggerfish! aangeeft veiligheid tot op de hoogste trede. Tijdens mijn stage periode bij Triggerfish heb ik als stagiair mogen werken aan misschien wel het leukste project. Van een strategie naar resultaat hebben wij dit 'samen' behaald. "
            },
            imageBlock: {
                image: "../static/images/altrex/img-normal-2.png",
                image2: "../static/images/altrex/img-normal-1.png"
            },
            text: {
                content1: `De Altrex steigerconfigurator biedt uitkomst bij het zoeken naar de juiste steiger. Aan de hand van een aantal filtermogelijkheden adviseert de Altrex steigerconfigurator in slechts drie stappen een passende steiger. Zelf proberen? Configureer uw steiger! 
                            
                            Als stagiair in samenwerking met het jonge en ambitieuze team van Triggerfish! heb ik mogen werken aan het ontwerp van de steigerconfiguratie. Tijdens dit project had ik als stagiair de rol interaction designer en werd ik begleid door een lead designer. Als interaction designer heb ik meegewerkt aan het ontwerp en heb ik een icongraphy mogen ontwikkelen. Hierbij moest op kleinformaat een duidelijk onderscheid worden aangetoond van alle typen steigers. `,
                content3: "Dit is ontwikkeld met perspectief vanuit de klant en Triggerfish! Het doel van het project: doormiddel van de Altrex beleving het juiste product in een zo eenvoudig mogelijk stappenplan te kunnen verkrijgen.",
                content4: "Het platform wordt en blijft binnen een gesloten testgroep uitbundig getest worden op zowel de usability als het concept. deHuyskamer is uitgegroeid tot onze “playground”.  Zo bied deHuyskamer ons de mogelijkheid te experimenteren met de nieuwste technieken en active gebruikers. Hierdoor wordt niet alleen het platform verbeterd, maar kan de opgedane kennis worden gebruikt tijdens lopende toekomstige projecten."
            },
            dualImage: {
                bgColorOne: "#27262c",
                bgImageOne: "../static/images/altrex/img-small-color-1.png",
                bgColorTwo: "#e6e6e6",
                bgImageTwo: "../static/images/altrex/img-small-color-2.png"
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

<style lang="scss" scoped>
.case-page {
    display: grid;
    grid-row-gap: 50px;
}
</style>

