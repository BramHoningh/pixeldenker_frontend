<template>
    <div class="logo-bar">
        <div class="logo">
            <img class="logo-img" :src="currentLogo" :srcset="logoSrcset" alt="Pixeldenker Logo">
        </div>
    </div>
</template>

<script>
export default {
    name: 'logobar',
    data () {
        return {
            whiteLogo: require("../assets/logo.png"),
            whiteLogox2: require("../assets/logo@2x.png"),
            whiteLogox3: require("../assets/logo@3x.png"),
            colorLogo: require("../assets/logo-color.png"),
            colorLogox2: require("../assets/logo-color@2x.png"),
            colorLogox3: require("../assets/logo-color@3x.png"),
            isWhiteLogo: true,
            hasEmoji: true,
            currentLogo: "",
            logoSrcset: ""
        }
    },
    mounted () {
        this.currentLogo = (this.isWhiteLogo ? this.whiteLogo : this.colorLogo)
        this.logoSrcset = (this.isWhiteLogo ? this.whiteLogox2 + " 2x, " + this.whiteLogox3 + " 3x" : this.colorLogox2 + " 2x, " + this.this.colorLogox3 + " 3x")
    }
}
</script>

<style lang="scss" scoped>
.logo-bar {
    img.logo-img {
        position: absolute;
        top: 38px;
        left: 56px;
    }
}
</style>
