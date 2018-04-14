<template>
<div class="work-page">
    <div class="work-menu-container">
        <ul class="work-menu">
            <li><router-link to="/werk/dehuyskamer-business">deHuyskamer Business</router-link></li>
            <li><router-link to="/werk/dehuyskamer-webapp">deHuyskamer Webapp</router-link></li>
            <li><router-link to="/werk/steigerconfigurator">Steigerconfigurator</router-link></li>
            <li><router-link to="/werk/digital-chefs">Digital Chefs</router-link></li>
            <li><router-link to="/werk/spotter">Spotter</router-link></li>
            <li><router-link to="/werk/solvisoft">Solvisoft</router-link></li>
        </ul>
    </div>

    <div class="case-container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
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
    mounted () {
        this.$router.push('/werk/dehuyskamer-business')
    },
    watch: {
        '$route' (to, from) {
            if (to.fullPath === "/werk") {
                this.$router.push(from.path)
            }
        }
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

    .work-menu-container {
        width: 100%;
        padding-right: 8px;
        @include box-sizing(border-box);
        border-right: 1px solid $border-light-gray;
    }

    .work-menu {
        position: fixed;
        padding-top: 57px;
        min-height: 100vh;
        list-style: none;
        @include box-sizing(border-box);

        li {
            margin: 4px 0 4px 8px;

            a {
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                line-height: 1.14;
                padding: 8px;
                border: 1px solid transparent;
                color: $main-menu-link;
                cursor: pointer;
                @include breakpoint(xs) {
                    @include font-size(24px);
                    line-height: 1.50;
                    letter-spacing: -0.5px;
                    color: $white-main;
                }

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
                    @include breakpoint(xs) {
                        background-color: transparent;
                        border-color: transparent;
                    }
                }   
            }
        }
    }
}
</style>

