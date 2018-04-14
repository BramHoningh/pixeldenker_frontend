<template>
    <div :class="{'logo-bar': true, 'menuIsOpen': menuIsOpen}">
        <div class="hamburger-menu" @click="toggleMenu">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>

        <div class="logo">
            <img v-show="this.showLogo" :class="{'logo-img': true, 'case-logo': this.isCase}" :src="currentLogo" alt="Pixeldenker Logo">
        </div>

        <div v-show="this.isCase" class="label">
            <span class="text">case study</span>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../eventBus';

export default {
    name: 'logobar',
    data () {
        return {
            whiteLogo: require("../assets/logo.png"),
            colorLogo: require("../assets/logo-color.svg"),
            isWhiteLogo: false,
            hasEmoji: true,
            currentLogo: "",
            logoSrcset: "",
            showLogo: true,
            isCase: false,
            menuIsOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            EventBus.$emit('toggleMenu', { toggleMenu: !this.menuIsOpen })
            document.getElementsByTagName("body")[0].classList.toggle('stopScroll')      

            this.menuIsOpen = !this.menuIsOpen

            this.currentLogo = (this.menuIsOpen ? this.whiteLogo : this.colorLogo) 
        }
    },  
    mounted () {
        this.currentLogo = (this.isWhiteLogo ? this.whiteLogo : this.colorLogo)
    },
    created () {
        EventBus.$on('toggleLogo', event => {
            this.showLogo = event.showLogo
        })

        EventBus.$on('changeLogoColor', event => {
            this.isWhiteLogo = event.changeLogoColor
        })

        EventBus.$on('isCase', event => {
            this.isCase = event.isCaseLogo
        })

        EventBus.$on('closeMenu', event => {
            if (this.menuIsOpen) {
                this.toggleMenu()
            }
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/all';

.logo-bar {

    @include breakpoint(xs) {
        .hamburger-menu {
            position: absolute;
            top: 29px;
            left: 26px;
            z-index: 999;
            width: 24px;
            height: 17px;
            // background-color: gray;

            span.item {
                display: block;
                height: 3px;
                background-color: #475975;
                @include border-radius(3px);
                @include transition(all, 500ms);

                &:nth-child(1) {
                    width: 24px;
                }

                &:nth-child(2) {
                    width: 18px;
                    margin-top: 4px;
                }

                &:nth-child(3) {
                    width: 12px;
                    margin-top: 4px;
                } 
            }
        }
    }

    img.logo-img {
        position: absolute;
        top: 38px;
        left: 56px;
        z-index: 999;

        &.case-logo {
            left: 260px;
        }

        @include breakpoint(xs) {
            top: 26px;
            right: 26px;
            left: auto;
            width: 61px;
        }
    }

    .label {
        position: absolute;
        right: 48px;
        top: 40px;
        padding: 8px 14px;
        font-family: 'Poppins', sans-serif;
        @include font-size(12px);
        font-weight: 600;
        text-transform: uppercase;
        color: #5a7298;
        z-index: 999;
        border: solid 1px rgba(90, 114, 152, 0.24);
        @include border-radius(3px);
    }

    &.menuIsOpen {
        .hamburger-menu {
            span.item { 
                background-color: $white-main;

                &:nth-child(1) {
                    width: 24px;
                }

                &:nth-child(2) {
                    width: 24px;
                }

                &:nth-child(3) {
                    width: 24px;
                } 
            }
        }
    }
}
</style>
