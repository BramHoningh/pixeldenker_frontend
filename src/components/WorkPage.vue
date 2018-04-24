<template>
<div class="work-page">
    <div class="work-menu-container">
        <ul class="work-menu">
            <li><router-link to="/werk/dehuyskamer-business">deHuyskamer Business</router-link></li>
            <!-- <li><router-link to="/werk/dehuyskamer-webapp">deHuyskamer Webapp</router-link></li> -->
            <li><router-link to="/werk/steigerconfigurator">Steigerconfigurator</router-link></li>
            <li><router-link to="/werk/digital-chefs">Digital Chefs</router-link></li>
            <li><router-link to="/werk/spotter">Spotter</router-link></li>
            <!-- <li><router-link to="/werk/solvisoft">Solvisoft</router-link></li> -->
        </ul>
    </div>

    <div class="case-container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import { EventBus } from '../eventBus';
import { CaseData } from '../CaseData'
import WorkPreviewBar from './partials/WorkPreviewBar'

export default {
    name: "WorkPage",
    components: {
        WorkPreviewBar
    },
    data () {
        return {
            selected: 1,
            currentCase: null,
        }
    },
    methods: {
        changeCasePreview(name) {
            this.$router.push(`/werk/${name}`)
        }
    },
    created () {
        EventBus.$emit('toggleMenu', { toggleMenu: false })
        EventBus.$emit('closeMenu', { toggleMenu: false })
    },
    mounted () {
        // this.$router.push('/werk/dehuyskamer-business')
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/all';

.work-page {
    position: relative;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto;

    @include breakpoint(xs) {
        grid-template-columns: 1fr;
    }

    .work-menu-container {
        width: 100%;
        padding-right: 8px;
        @include box-sizing(border-box);
        border-right: 1px solid $border-light-gray;

        @include breakpoint(xs) {
            height: 60px;
            padding-right: 0;
            border: 1px solid #e6e6e6;
            box-shadow: 0 1px 4px 0 rgba(72, 76, 111, 0.1);
            padding: 12px 0;
        }
    }

    ul.work-menu {
        position: fixed;
        padding-top: 57px;
        min-height: 100vh;
        max-width: 100vw;
        list-style: none;
        @include box-sizing(border-box);

        @include breakpoint(xs) {
            position: relative;
            min-height: 60px;
            padding-top: 0;
            overflow-x: auto;
            white-space: nowrap;
        }

        li {
            margin: 4px 0 4px 8px;

            @include breakpoint(xs) {
                display: inline-block;
                margin: 0px 8px;
            }

            a {
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                line-height: 1.14;
                padding: 8px;
                border: 1px solid transparent;
                color: $main-menu-link;
                cursor: pointer;

                &:hover {
                    color: $main-menu-link-hover;
                    background-color: transparent;
                }

                &.router-link-exact-active {
                    font-weight: 600;
                    color: $blue-main-dark;
                    border-radius: 2px;
                    background-color: rgba(27, 105, 230, 0.08);
                    border: solid 1px rgba(37, 52, 74, 0.04);
                }   
            }
        }
    }
}
</style>

