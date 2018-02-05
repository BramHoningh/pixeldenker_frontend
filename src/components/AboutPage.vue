<template>
<div>
    <Hero position="left"
        :title="this.hero.title"
        :subtitle="this.hero.subtitle"
        :content="this.hero.content"
    />
</div>
</template>

<script>
import Hero from './partials/Hero';

export default {
    name: "AboutPage",
    components: {
        Hero
    },
    data () {
        return {
            hero: {
                title: "Wij zijn Pixeldenkers.",
                subtitle: "Wij zijn altijd in voor een uitdaging.",
                content: `Pixeldenker is een vrij jong digitaal bureau bestaande uit twee gepassioneerde studenten.
                Sinds 2015 werken wij aan projecten die wij leuk en inspirerend vinden.`
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

