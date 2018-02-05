<template>
<div>
  <div class="content-container">
    <Hero position="center" 
          :backgroundImage="this.hero.bgImage"
          :title="this.hero.title" 
          :subtitle="this.hero.subtitle" 
          :content="this.hero.content" 
          :buttonText="this.hero.buttonText"
    />
    <TextComp 
          :title="this.textComp.title"
          :content="this.textComp.content"
    />
    <TextSlider />
    <PhotoBlock 
          :backgroundImage="this.photoBlockOne.bgImage"
          :icon="this.photoBlockOne.icon"
          :name="this.photoBlockOne.name"
          :title="this.photoBlockOne.title"
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
import TextSlider from './partials/TextSlider';
import PhotoBlock from './partials/PhotoBlock';
import WorkExperience from './partials/WorkExperience';
import CustomersPartners from './partials/CustomersPartners';
import FooterBlock from './partials/FooterBlock';

export default {
  name: 'HomePage',
  components: {
    Hero,
    TextComp,
    TextSlider,
    PhotoBlock,
    WorkExperience,
    CustomersPartners,
    FooterBlock
  },
  data () {
    return {
      hero: {
        bgImage: "./static/images/DSCF0946.jpg",
        title: "Passievolle designers.",
        subtitle: "Passie en ambitie zijn onze kernvoorwaarden.",
        content: "Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind.",
        buttonText: "Bekijk ons werk"
      },

      textComp: {
        title: "Even voorstellen",
        content: "Hey, mijn naam is Rob Scholten. Een passievolle freelancer, een pixeldenker. Sinds 2015 werk ik aan projecten die ik leuk en inspirerend vind. Als ambitieuze jonge creatieveling met een passie voor digital design werk ik nauw samen met mijn partners. "
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
