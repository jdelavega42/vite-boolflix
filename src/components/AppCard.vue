<script>
import LangFlag from 'vue-lang-code-flags';
import IsoFlag from 'vue-lang-code-flags/relation.js';
export default {
    name:"AppCard",
    components: {
        LangFlag,
    },
    data(){
        return {
            IsoFlag
        }
    },
    props: {
        obj: Object
    },
    computed: {
        getTitle() {
            if(!this.obj.title) {
                return this.obj.name
            } else {
                return this.obj.title
            }
            
        },
        getOT() {
            if(!this.obj.original_title) {
                return this.obj.original_name
            } else {
                return this.obj.original_title
            }
        },
        getImage() {
            if(this.obj.poster_path){
                let path = `https://image.tmdb.org/t/p/w342${this.obj.poster_path}`;
                return path
            }
        },
        getStars(){
            return parseInt(this.obj.vote_average / 2)
        },
    },
    mounted() {
        this.IsoFlag.hasOwnProperty(this.obj.original_language)
        console.log(this.IsoFlag.hasOwnProperty(this.obj.original_language));
    }
    
}
</script>

<template>
    <div class="ms_container">
        <div class="ms_front">
            <div  v-if="!obj.poster_path" class="unavailable">
                <h2>{{ getTitle }}</h2>
                <p>Immagine non disponibile</p>
            </div>
            <img v-else :src="getImage" alt="">
        </div>
        <div class="ms_back">
            <div class="title">
                <h2>{{ getTitle }}</h2>
                <h3 v-if="getTitle !== getOT">{{ getOT }}</h3>
            </div>
            <div class="bottom">
                <p v-if="!IsoFlag.hasOwnProperty(obj.original_language)">lingua non disponibile</p>
                <p v-else> <span>Lingua: </span><lang-flag :iso="`${ obj.original_language }`" /></p>
                <i  v-for="num in getStars" class="fa-solid fa-star"></i>
                <i v-for="num in 5 - getStars" class="fa-regular fa-star"></i>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.ms_container {
    position: relative;
    height: 100%;
    .ms_front {
        height: 100%;
        background-color: $primaryBg;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        div {
            padding: 1rem .5rem;

            h2 {
                font-size: 1.5rem;
            }
        }
    }
    .ms_back {
    padding: 1rem .5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba($secondaryBg, .75);
    opacity: 0;
    transition: 250ms;
    &:hover {
        opacity: 1;
    }
    h2 {
        font-size: 1.5rem;
    };
    h3 {
        font-size: 1.25rem;    
    }
    };

}

</style>