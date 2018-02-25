<template>
<div>
  <div class="content-container">
    <Hero position="left" 
          :backgroundImage="this.hero.bgImage"
          :title="this.hero.title" 
          :content="this.hero.content" 
          :buttonText="this.hero.buttonText"
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
    <CustomersPartners />
    <FooterBlock />
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
        title: "Pixel Perfectionistisch.",
        content: "Wij zijn pixeldenkers, twee ambitieuze jonge creatievelingen met een passie voor digital. Pixeldenker combineert design en development voor het realiseren van de digitale ambities van onze klanten.",
        buttonText: "Bekijk ons werk",
        secondButtonText: "Of lees ons verhaal"
      },

      textComp: {
        title: "Gepassioneerde creatievelingen",
        content: "Wij zijn twee ambitieuze studenten met een en dezelfde passie. Wij voeren werk uit wat wij interessant vinden, en waar wij als professionals in kunnen groeien. Onze focus ligt op het waarborgen van kwaliteit, dit doen wij pixel voor pixel."
      },

      dualImage: {
        bgColorOne: "#103b90",
        bgImageOne: "./static/images/DSCF0946.jpg",
        bgColorTwo: "#f6f9fe",
        bgImageTwo: "./static/images/DSCF0946.jpg",
      },

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
    }
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
