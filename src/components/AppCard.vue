<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name:"AppCard",
    props: {
        obj: Object
    },
    computed: {
        getTitle() {
            if(!this.obj.title) {
                return this.obj.name
            } else {
                this.obj.title
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
        getUS(){
            if(this.obj.original_language === "en") {
                return "gb"
            } else if  (this.obj.original_language === "ja"){
                return "jp"
            } else {
                return this.obj.original_language
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
            <h2 v-if="!obj.poster_path">Immagine non disponibile</h2>
        </div>
        <div class="ms_back">
            <h2>{{ getTitle }}</h2>
            <h3>{{ getOT }}</h3>
            <p v-if="!obj.original_language">Lingua non disponibile</p>
            <p v-else>Lingua: <span :class="`fi fi-${getUS} fis`"></span>{{ obj.original_language }}</p>
            <p>{{ getStars }}</p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
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