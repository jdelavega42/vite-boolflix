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
    <div class="container movies">
        <ul class="row row-cols-5 g-3">
            <li class="col" v-for="(movie) in store.movies" :key="movie.id">
                <AppCard :obj="movie"/>
            </li>
        </ul>
    </div>
    <hr>
    <div class="container series">
        <div class="row row-cols-5 g-3">
            <div class="col" v-for="(serie) in store.series" :key="serie.id">
                <AppCard :obj="serie"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    background-color: rgba($color: grey, $alpha: .2);
    .col {
        height: 350px
    }
}

</style>