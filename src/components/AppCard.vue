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
    },
    methods: {
        showInfo() {
            this.obj.show = !this.obj.show;
            console.log('press');
        }
    }
}
</script>

<template>
    <div class="ms_container">
        <div class="ms_front">
            <div  v-if="!obj.poster_path" class="unavailable">
                <h2>{{ getTitle }}</h2>
                <p>Image non available</p>
            </div>
            <img v-else :src="getImage" alt="">
        </div>
        <div class="ms_back">
            <div class="ms_top">
                <h2>{{ getTitle }}</h2>
                <h3 v-if="getTitle !== getOT">{{ getOT }}</h3>
            </div>
            <div class="ms_bottom">
                <p v-if="!IsoFlag.hasOwnProperty(obj.original_language)">Language not available</p>
                <p v-else> <span>Language: </span><lang-flag :iso="`${ obj.original_language }`" /></p>
                <div class="rating">
                    <i  v-for="num in 5" class=" fa-star" :class="num <= getStars ? 'fa-solid' : 'fa-regular' "></i>
                </div>
                <button  class="ms_btn" @click="showInfo" >More Info</button>
                <p v-show="this.obj.show"> {{ obj.overview }}</p>
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
        align-content: flex-start;
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba($secondaryBg, .9);
        opacity: 0;
        transition: 250ms;
        overflow-y: auto;
        &:hover {
            opacity: 1;
        }
        h2 {
            font-size: 1rem;
            font-weight: bold
        };
        h3 {
            font-size: .75rem;
            font-weight: bold;    
        }
        .ms_bottom {
            display: flex;
            flex-direction: column;
            .ms_btn {
                background-color: rgba($secondaryColor, .75);
                border: none;
                border-radius: .5rem;
                &:hover {
                    background-color: rgba($primaryBg, .75);
                    color: $secondaryColor;
                    transition: 250ms;
                }
            }
        };

    };

}

</style>