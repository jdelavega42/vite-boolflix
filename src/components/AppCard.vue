<script>
import LangFlag from 'vue-lang-code-flags';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
// library.add(faStar)
// library.add(faStarHalf)

export default {
    name:"AppCard",
    components: {
        LangFlag,
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
            return parseInt(this.obj.vote_average) / 2 
        }
    }
    
}
</script>

<template>
    <div class="ms_container">
        <div class="ms_front">
            <img :src="getImage" alt="">
            <div  v-if="!obj.poster_path" class="unavailable">
                <h2>Immagine non disponibile</h2>
                <h2>{{ getTitle }}</h2>
            </div>
        </div>
        <div class="ms_back">
            <h2>{{ getTitle }}</h2>
            <h3>{{ getOT }}</h3>
            <p v-if="!obj.original_language">Lingua non disponibile</p>
            <p v-else> <span> Lingua:</span> <lang-flag :iso="`${ obj.original_language }`" /></p>
            <p> {{ getStars }}/></p>
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star-half" />
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
.ms_container {
    position: relative;
    height: 100%;
    .ms_front {
        height: 100%;
        img {height: 100%;
            object-fit: cover;
        }
    }
    .ms_back {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    transition: 250ms;

    &:hover {
        opacity: 1;
    }
    };

}

</style>