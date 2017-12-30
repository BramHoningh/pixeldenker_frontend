<template>
<div>
  <Hero position="center" />
  <TextComp />
</div>
</template>

<script>
import Hero from './partials/Hero';
import TextComp from './partials/Text';

export default {
  name: 'HomePage',
  components: {
    Hero,
    TextComp
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
