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
  <AppHeader @search="this.handleInput()"/>
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>