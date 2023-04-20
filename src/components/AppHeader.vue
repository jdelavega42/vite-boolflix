<script>
import { store } from '../store';
export default {
    name:"AppHeader",
    emits: ['search'],
    data() {
        return{
            store
        }
    }
}
</script>

<template>
<header class="container d-flex justify-content-between">
    <div class="title"><span class="">Prime</span>Boolean</div>
    <input v-model.trim="store.params.query" @keyup.enter="$emit('search')" type="text" placeholder="Premi invio per la ricerca">
</header>
</template>

<style lang="scss" scoped>

</style>