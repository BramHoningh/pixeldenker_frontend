<template>
<div>
  <div class="content-container">
    <Hero v-vpshow type="left" 
          :backgroundImage="this.hero.bgImage"
          :heroImage="this.hero.heroImage"
          :title="this.hero.title" 
          :subtitle="this.hero.content" 
          :buttonText="this.hero.buttonText"
          :buttonLink="this.hero.buttonLink"
          :secondButtonText="this.hero.secondButtonText"
          :secondButtonLink="this.hero.secondButtonLink"
    />

    <TextComp v-vpshow 
          :title="this.textComp.title"
          :content="this.textComp.content"
    />

    <DualImage v-vpshow
          :backgroundColorOne="this.dualImage.bgColorOne"
          :backgroundImageOne="this.dualImage.bgImageOne"
          :backgroundColorTwo="this.dualImage.bgColorTwo"
          :backgroundImageTwo="this.dualImage.bgImageTwo"
    />

    <WorkExperience v-vpshow />
    
    <CustomersPartners v-vpshow 
      :partners="this.partners"
    />

    <FooterBlock v-vpshow
      :btnText="this.footer.btnText"
      :btnLink="this.footer.btnLink"
    />
  </div>
  <div class="parallax-bottom">
    <PhotoBlock v-vpshow 
        :backgroundImage="this.photoBlockTwo.bgImage"
        :icon="this.photoBlockTwo.icon"
        :name="this.photoBlockTwo.name"
        :title="this.photoBlockTwo.title"
    />
  </div>
</div>
</template>

<script>
import { EventBus } from "../eventBus";

const Hero = () => import("./partials/Hero");
const TextComp = () => import("./partials/Text");
const DualImage = () => import("./partials/DualImage");
const PhotoBlock = () => import("./partials/PhotoBlock");
const WorkExperience = () => import("./partials/WorkExperience");
const CustomersPartners = () => import("./partials/CustomersPartners");
const FooterBlock = () => import("./partials/FooterBlock");

// import Testimonials from './partials/Testimonials';

// import Hero from './partials/Hero';
// import TextComp from './partials/Text';
// import DualImage from './partials/DualImage';
// import PhotoBlock from './partials/PhotoBlock';
// import WorkExperience from './partials/WorkExperience';
// import CustomersPartners from './partials/CustomersPartners';
// import FooterBlock from './partials/FooterBlock';

export default {
  name: "HomePage",
  components: {
    Hero,
    TextComp,
    DualImage,
    PhotoBlock,
    WorkExperience,
    CustomersPartners,
    FooterBlock
  },
  data() {
    return {
      hero: {
        bgImage: "./static/images/DSCF0946.jpg",
        heroImage: "./static/images/header-img.png",
        title: "Pixel Perfectionistisch.",
        content:
          "Wij zijn pixeldenkers, twee ambitieuze jonge creatievelingen met een passie voor digital. Pixeldenker combineert design en development voor het realiseren van de digitale ambities van onze klanten.",
        buttonText: "Bekijk ons werk",
        buttonLink: "werk",
        secondButtonText: "Of lees ons verhaal",
        secondButtonLink: "over-ons"
      },

      textComp: {
        title: "Gepassioneerde creatievelingen",
        content:
          "Wij zijn twee ambitieuze studenten met een en dezelfde passie. Wij voeren werk uit wat wij interessant vinden, en waar wij als professionals in kunnen groeien. Onze focus ligt op het waarborgen van kwaliteit, dit doen wij pixel voor pixel."
      },

      dualImage: {
        bgColorOne: "#103b90",
        bgImageOne: "./static/images/rentalCarApp.gif",
        bgColorTwo: "#f6f9fe",
        bgImageTwo: "./static/images/dehuyskamer-business/img-small-white-1.png"
      },

      partners: [
        "./static/images/clients/client-logo-1.png",
        "./static/images/clients/client-logo-2.png",
        "./static/images/clients/client-logo-3.svg",
        "./static/images/clients/client-logo-4.png",
        "./static/images/clients/client-logo-5.svg",
        "./static/images/clients/client-logo-6.png",
        "./static/images/clients/client-logo-7.png"
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
    };
  },
  created() {
    EventBus.$emit("isCase", { isCaseLogo: false });

    EventBus.$emit("toggleMenu", { toggleMenu: false });
    EventBus.$emit("closeMenu", { toggleMenu: false });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/all";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to,
.fade-leave-active {
  opacity: 0;
}

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
