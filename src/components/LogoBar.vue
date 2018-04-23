<template>
    <div ref="logoBar" :class="{'logo-bar': true, 'menuIsOpen': menuIsOpen, 'case-menu': isCase}">
        <div ref="hamburger" class="hamburger-menu" @click="toggleMenu">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>

        <div ref="logo" class="logo">
            
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

        $(window).scroll(function (event) {
            if ($(this).scrollTop() > 55) {
                $('.logo-bar').addClass('top-nav-mobile')
            } else {
                $('.logo-bar').removeClass('top-nav-mobile')
            }
        })
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
    // position: fixed;
    z-index: 9999;
    width: 100%;

    @include breakpoint(xs) {
        .hamburger-menu {
            position: fixed;
            top: 29px;
            left: 26px;
            z-index: 999;
            width: 24px;
            height: 17px;
            @include transition(all, 400ms);
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

    &.case-menu {
        @include breakpoint(xs) {
            // margin-top: 55px;
            @include transition(all, 500ms);

            .hamburger-menu {
                // top: 84px;
                margin-top: 55px;
                @include transition(all, 500ms);
            }

            img.logo-img {
                margin-top: 55px;
                @include transition(all, 500ms);
            }

            &.top-nav-mobile {
                margin-top: 0;

                .hamburger-menu {
                    // position: fixed;
                    // top: 0px;
                    margin-top: 0;
                }
            }

            &.menuIsOpen {
                margin-top: 0;

                .hamburger-menu {
                    margin-top: 0;
                    top: 29px;
                }

                img.logo-img {
                    margin-top: 0;
                    top: 26px;
                }
            }
        }
    }

    img.logo-img {
        position: absolute;
        top: 38px;
        left: 56px;
        z-index: 999;
        @include transition(all, 400ms);

        @include breakpoint(xs) {
            top: 26px;
            right: 26px;
            left: auto !important;
            width: 61px;
        }

        &.case-logo {
            left: 240px;
        }
    }

    .label {
        position: absolute;
        right: 140px;
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

        @include breakpoint(xs) {
            display: none;
        }
    }

    &.menuIsOpen {

        .hamburger-menu {
            span.item { 
                background-color: $white-main;

                &:nth-child(1) {
                    width: 24px;
                    transform-origin: left center;
                    transform: rotate(45deg);
                }

                &:nth-child(2) {
                    width: 24px;
                    opacity: 0;
                }

                &:nth-child(3) {
                    margin-top: 7px;
                    width: 24px;    
                    transform-origin: left center;
                    transform: rotate(-45deg);
                } 
            }
        }
    }
}
</style>
