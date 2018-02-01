<template>
<div>
  <Hero position="center" />
  <TextComp />
  <TextSlider />
</div>
</template>

<script>
import Hero from './partials/Hero';
import TextComp from './partials/Text';
import TextSlider from './partials/TextSlider'

export default {
  name: 'HomePage',
  components: {
    Hero,
    TextComp,
    TextSlider
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/styles/all';

</style>
