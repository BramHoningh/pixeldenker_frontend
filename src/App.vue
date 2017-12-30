<template>
  <div id="app">
    <Menu />

    <div class="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style>
html, body, ul {
  margin: 0;
  padding: 0;
}

.router-view {
  margin-left: 100px;
  width: calc(100% - 100px);
}
</style>
