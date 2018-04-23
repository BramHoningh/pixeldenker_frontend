<template>
<div class="freebies-page" v-vpshow>
    <div class="content">
        <h1 class="dark center">Wij hebben momenteel nog geen Freebies</h1>
        <p class="dark center">Hier is momenteel nog niets vinden, met de onderstaande acties kun je weer zorgeloos gebruik maken van onze site.</p>
        <a href="/">Homepage</a>
    </div>
</div>
</template>

<script>
import { EventBus } from '../eventBus'

export default {
    name: 'freebies-page',
    data () {
        return {

        }
    },
    created () {
        EventBus.$emit('isCase', {isCaseLogo: false})

        EventBus.$emit('toggleMenu', { toggleMenu: false })
        EventBus.$emit('closeMenu', { toggleMenu: false })
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/all";

.freebies-page {
    position: relative;
    margin: 16px;
    background-image: linear-gradient(to bottom, #f6f9fe, #edf3fd);
    @include border-radius(6px);
    height: calc(100vh - 32px); 
    width: calc(100% - 32px);
    @include box-sizing(border-box);

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 625px;
        text-align: center;

        @include breakpoint(xs) {
            width: calc(100% - 20px);
        }

        a {
            font-family: $source-sans-pro;
            @include font-size(22px);
            font-weight: 300;
        }
    }
}
</style>

