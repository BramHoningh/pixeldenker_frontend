<template>
<div>
  <div class="content-container">
    <Hero type="left" 
          :backgroundImage="this.hero.bgImage"
          :heroImage="this.hero.heroImage"
          :title="this.hero.title" 
          :subtitle="this.hero.content" 
          :buttonText="this.hero.buttonText"
          :buttonLink="this.hero.buttonLink"
          :secondButtonText="this.hero.secondButtonText"
          :secondButtonLink="this.hero.secondButtonLink"
    />
    <TextComp 
          :title="this.textComp.title"
          :content="this.textComp.content"
    />
    <DualImage
          :backgroundColorOne="this.dualImage.bgColorOne"
          :backgroundImageOne="this.dualImage.bgImageOne"
          :backgroundColorTwo="this.dualImage.bgColorTwo"
          :backgroundImageTwo="this.dualImage.bgImageTwo"
    />
    <WorkExperience />
    <CustomersPartners 
      :partners="this.partners"
    />
    <FooterBlock
      :btnText="this.footer.btnText"
      :btnLink="this.footer.btnLink"
    />
  </div>
  <div class="parallax-bottom">
    <PhotoBlock 
        :backgroundImage="this.photoBlockTwo.bgImage"
        :icon="this.photoBlockTwo.icon"
        :name="this.photoBlockTwo.name"
        :title="this.photoBlockTwo.title"
    />
  </div>
</div>
</template>

<script>
import { EventBus } from '../eventBus';
import Hero from './partials/Hero';
import TextComp from './partials/Text';
import DualImage from './partials/DualImage';
import PhotoBlock from './partials/PhotoBlock';
import WorkExperience from './partials/WorkExperience';
import CustomersPartners from './partials/CustomersPartners';
import FooterBlock from './partials/FooterBlock';

export default {
  name: 'HomePage',
  components: {
    Hero,
    TextComp,
    DualImage,
    PhotoBlock,
    WorkExperience,
    CustomersPartners,
    FooterBlock
  },
  data () {
    return {
      hero: {
        bgImage: "./static/images/DSCF0946.jpg",
        heroImage: "./static/images/header-img.png",
        title: "Pixel Perfectionistisch.",
        content: "Wij zijn pixeldenkers, twee ambitieuze jonge creatievelingen met een passie voor digital. Pixeldenker combineert design en development voor het realiseren van de digitale ambities van onze klanten.",
        buttonText: "Bekijk ons werk",
        buttonLink: "werk",
        secondButtonText: "Of lees ons verhaal",
        secondButtonLink: "over-ons"
      },

      textComp: {
        title: "Gepassioneerde creatievelingen",
        content: "Wij zijn twee ambitieuze studenten met een en dezelfde passie. Wij voeren werk uit wat wij interessant vinden, en waar wij als professionals in kunnen groeien. Onze focus ligt op het waarborgen van kwaliteit, dit doen wij pixel voor pixel."
      },

      dualImage: {
        bgColorOne: "#103b90",
        bgImageOne: "./static/images/rentalCarApp.gif",
        bgColorTwo: "#f6f9fe",
        bgImageTwo: "./static/images/dehuyskamer-business/img-small-white-1.png",
      },

      partners: [
        "./static/images/clients/client-logo.svg",
        "./static/images/clients/client-logo-2.svg",
        "./static/images/client-logo.png",
        "./static/images/clients/client-logo-4.svg",
        "./static/images/clients/client-logo-9.svg",
        "./static/images/clients/spotter.png",
        "./static/images/clients/A-S_logo_CMYK.png",
      ],

      photoBlockOne: {
        bgImage: "./static/images/mockup_macbook_brainstorming_1.jpg",
        icon: "./static/images/logo-agency5.png",
        name: "deHuyskamer",
        title: "Initiatiefnemer van deHuyskamer"
      },

      photoBlockTwo: {
        bgImage: "./static/images/mockup_macbook_brainstorming_1.jpg",
        icon: "./static/images/logo-agency5.png",
        name: "deHuyskamer",
        title: "Initiatiefnemer van deHuyskamer"
      },

      footer: {
        btnText: "Bekijk ons werk",
        btnLink: "werk"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/styles/all';

.content-container {
  background-color: $white-main;
  margin-bottom: 773px;
  @include breakpoint(xs) {
    margin-bottom: 580px;
  }
}

.parallax-bottom {
  position: fixed;
  bottom: 0;
  left: 100px;
  right: 0;
  z-index: -999;
  @include breakpoint(xs) {
    left: 0;
  }
}

</style>
