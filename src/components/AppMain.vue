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
    <div v-if="store.movies.length === 0 & store.series.length === 0">
        <div class="container text-center">
            <h2>Watch movies and TV shows</h2>
            <p>With Amazon Prime, watch popular movies and TV shows, including Amazon Originals Tom Clancy's: Jack Ryan, The Bad Guy and LoL Season 2. Also, take advantage of unlimited 1-day shipping on 2 million products at no extra cost and 2-3 day shipping on millions more.</p>
            <h2>Amazon brings you the UEFA Champions League</h2>
            <p>Sign up today and watch live the top pick of Champions League on Wednesday exclusively on Prime Video, and highlights of all matches.</p>
            <h2>Your favorite channels all in one place</h2>
            <p>With Prime Video Channels, members can subscribe to premium and specialty channels with no long-term commitments and no additional apps to download. Each subscription starts with a free trial, and you can cancel anytime.</p>
            <h2 class="my-5">Prime Video Store</h2>
            <p>Even more movies, now available to rent or buy—no Prime membership required.</p>
            <div class="btn btn-primary">premi qui</div>
        </div>
    </div>
    <main v-else class="ms_main">
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 1rem;
    .ms_section{
        height: 50%;
        margin-bottom: 1.5rem;        
        .container {
            background-color: rgba($primaryColor, .23);
            position: relative;
            height: 100%;
            width: 100%;
            
            .ms_label {
                background-color: $primaryBg;
                color: $secondaryColor;
                font-size: 2rem;
                border-radius: .25rem;
                padding: .5rem;
                position: absolute;
                top: .5rem;
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

                .ms_card {
                    width: 20%;
                    min-width: 200px;
                    max-width: 400px;
                    height: 90%;
                    padding: 0 .5rem;
                }
            }
        }
    }
}
::-webkit-scrollbar {
                    background: transparent;
                }
</style>