<template>
  <div id="app">
    <MainMenu />

    <div class="router-view">
      <LogoBar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/Menu'
import LogoBar from '@/components/LogoBar'

export default {
  name: 'app',
  components: {
    MainMenu,
    LogoBar
  }
}
</script>

<style lang="scss">
@import "./assets/styles/all";

html, body, ul {
  margin: 0;
  padding: 0;
}

.router-view {
  overflow: auto;
  position: relative;
  margin-left: 100px;
  width: calc(100% - 100px);
}
</style>
