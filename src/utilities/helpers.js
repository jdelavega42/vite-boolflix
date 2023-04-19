import axios from "axios";
import { store } from "../store";

function getMovies() {
    const params = store.params;
    axios.get(store.moviesAPI, { params }).then((resp) => {
      console.log(resp.data.results, 'movies');
      store.movies = resp.data.results
    })
  };

function getSeries() {
    const params = store.params;
    axios.get(store.seriesAPI, { params }).then((resp) => {
      console.log(resp.data.results, 'series');
      store.series = resp.data.results
    })
  };

 function handleInput() {
    getMovies();
    getSeries();
    store.params.query = ""

  }
export {
    handleInput

}