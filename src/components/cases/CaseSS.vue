<template>
<div class="case-page">
    <Hero v-vpshow type="case"
        :preContent="this.hero.preContent"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
    />

    <ImageBlock v-vpshow
        :image="this.imageBlock.image"
    />

    <TextComp v-vpshow
        :content="this.text.content1"
    />

    <TwoImageBlock v-vpshow
        :imageOne="this.twoImageBlock.imageOne"
        :imageTwo="this.twoImageBlock.imageTwo"
    />

    <TextComp v-vpshow
        :content="this.text.content2"
    />

    <ImageBlock v-vpshow
        :image="this.imageBlock.image3"
    />

    <TextComp v-vpshow
        :content="this.text.content3"
    />

    <ImageBlock v-vpshow
        :image="this.imageBlock.image2"
    />

    <ResultBlock v-vpshow 
        resultLink="https://www.solvisoft.com/nl-nl"
    />

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
    name: "CaseSS",
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
                        "../static/images/Solvisoft/solvisoft.png",
                        "../static/images/Avatar.jpeg"
                    ],
                    text: "Tijdens werkzaamheden voor ",
                    linkText: "Solvisoft",
                    linkUrl: "https://www.solvisoft.com/nl-nl"
                },
                title: "Samen voor een sterke online aanwezigheid",
                subtitle: "Solvisoft ontwikkelt innovatieve bedrijfssoftware en verleent complete IT-diensten. Solvisoft neemt zorgen uit handen zodat bedrijven zich kunnen focussen op belangrijke bedrijfsaspecten. Voor Solvisoft verzorgen wij visuele uitwerkingen voor e-commerce projecten."
            },
            imageBlock: {
                image: "../static/images/solvisoft-business/img-normal-1.png",
                image2: "../static/images/solvisoft-business/img-long-1.png",
                image3: "../static/images/solvisoft-business/img-long-2.png",
            },
            text: {
                content1: "Tijdens deze projecten heeft Solvisoft leidende hand en wordt er rekening gehouden met de kaders van de aangeboden software. Binnen deze projecten neemt Rob de rol aan als Visueel Designer, hierbij stemt Solvisoft het ontwerp af met de opdrachtgever.",
                content2: "Onze werkzaamheden bestaan uit het opzetten van interface ontwerpen voor zowel nieuwe als bestaande webshops. Dit realiseren wij door het opzetten van templates en het verlenen van maatwerk waar dit nodig is. Bij het opzetten van een template wordt er rekening gehouden met de verschillende identiteiten waarop het toegepast kan worden.",
                content3: "Bij projecten waar maatwerk is vereist kijken wij altijd zorgvuldig naar de branding en tone-of-voice voor het project. ‘Hoe kunnen wij het bedrijf visueel positioneren?’ en ‘Hoe zet je een uniek ontwerp neer waarbij de branding van het bedrijf niet verloren gaat die binnen de opgegeven kaders valt?’ zijn kernvragen tijdens ons proces. Hiernaast verzorgen wij ook de ontwerpen voor de Solvisoft website.",
            },
            twoImageBlock: {
                imageOne: "../static/images/Solvisoft/img-small-white-4.png",
                imageTwo: "../static/images/Solvisoft/img-small-white-5.png"
            },
            footer: {
                btnImage: "../static/images/logo-agency5.png",
                btnText: "Next case",
                btnSecondaryText: "deHuyskamer",
                btnLink: "dehuykamer"
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
