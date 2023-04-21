<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
    name: "AppMain",
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
    <main class="ms_main">
        <section class="ms_section">
            <div class="container movies">
                <span class="ms_label shadow">Movies</span>
                <ul class="ms_col">
                    <li class="ms_card" v-for="(movie) in store.movies" :key="movie.id">
                        <AppCard :obj="movie" />
                    </li>
                </ul>
            </div>
        </section>
        <section class="ms_section">
            <div class="container series">
                <span class="ms_label shadow">Series</span>
                <ul class="ms_col">
                    <li class="ms_card" v-for="(serie) in store.series" :key="serie.id">
                        <AppCard :obj="serie" />
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.ms_main {
    height: calc(100% - 100px);
    width: 100%;
    .ms_section{
        height: 50%;
        .container {
            background-color: rgba($primaryColor, .23);
            position: relative;
            height: 100%;
            width: 100%;
            
            .ms_label {
                background-color: $primaryBg;
                color: $secondaryColor;
                border-radius: .25rem;
                padding: .5rem;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                transform: translate(-50%, -50%);
                
            }
            
            .ms_col {
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                height: 100%;
                width: 100%;
                overflow-x: auto;
                overflow-y: hidden;
                // scrollbar-color: transparent;
                .ms_card {
                    width: 20%;
                    max-width: 400px;
                    height: 90%;
                    padding: 0 .5rem;
                }
            }
        }
    }
}
</style>