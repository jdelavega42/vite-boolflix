<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import { handleInput } from './utilities/helpers'

export default{
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
      handleInput
    }
  },
}
</script>

<template>
  <div class="body">
    <AppHeader @search="this.handleInput()"/>
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/partials/variables" as *;

  .body {
    background-color: $primaryBg;
    color: white;
    height: 100vh;
    width: 100%;
  }

</style>