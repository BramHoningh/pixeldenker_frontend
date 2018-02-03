<template>
    <div class="menu">
        <ul class="menu-links">
            <li><a class="active" href="#">Thuis</a></li>
            <li><a href="#">Werk</a></li>
            <li><a href="#">Over</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Freebie</a></li>
        </ul>

        <ul class="icons">
            <li class="menu-icon"><a href="#"><img src="#" alt=""></a></li>
            <li class="menu-icon"><a href="#"><img src="#" alt=""></a></li>
            <li class="menu-icon"><a href="#"><img src="#" alt=""></a></li>
            <li class="menu-icon"><a href="#"><img src="#" alt=""></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "main-menu",
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/all';

.menu {
    height: 100vh;
    width: 100px;
    border-right: 1px solid $border-light-gray;
    position: fixed;

    @include breakpoint(xs) {
        display: none;
        width: calc(100% - 16px);
        height: calc(100vh - 16px);
        z-index: 998;
        background-color: $black-main;
        margin: 8px;
        @include border-radius(6px);
    }

    ul.menu-links {
        list-style: none;
        width: 100%;
        padding-top: 57px;
        @include breakpoint(xs) {
            padding-top: 80px;
        }

        li {
            text-align: center;
            width: 84px;
            margin: 4px auto;
            @include breakpoint(xs) {
                text-align: left;
                margin: 0;
                margin-left: 28px;
            }

            a {
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                width: 100%;
                line-height: 1.14;
                padding: 8px 0;
                border: 1px solid transparent;
                color: $main-menu-link;
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

                &.active {
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

    ul.icons {
        position: absolute;
        bottom: 57px;
        left: 0;
        right: 0;
        @include breakpoint(xs) {
            bottom: 24px;
            left: 28px;
            right: auto;
        }

        li.menu-icon {
            text-align: center;
            width: 100%;
            margin: 20px 0;
            @include breakpoint(xs) {
                display: inline-block;
                width: auto;
                margin: 0;
                margin-right: 32px;
            }

            a {
                width: 38px;
                height: 38px;
                background-color: gray;
                border: none;
            }
        }
    }
}

</style>

