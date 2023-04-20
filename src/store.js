import { reactive } from "vue"
export const store = reactive ({
    moviesAPI: "https://api.themoviedb.org/3/search/movie",
    seriesAPI: "https://api.themoviedb.org/3/search/tv",
    params: {
        api_key: "4e8f14aec233d6aec7d5960d3ae1f024",
        query: "",
    },
    movies: [],
    series: [],

});