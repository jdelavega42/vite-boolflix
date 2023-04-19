<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
    name:"AppMain",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main class="container">Io sono Main</main>
    <div class="container movies">
        <div class="row row-cols-5">
            <div class="col" v-for="(movie) in store.movies" :key="movie.id">
                <AppCard :obj="movie"/>
            </div>
        </div>
    </div>
    <hr>
    <div class="container series">
        <div class="row row-cols-5">
            <div class="col" v-for="(serie) in store.series" :key="serie.id">
                <AppCard :obj="serie"/>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>