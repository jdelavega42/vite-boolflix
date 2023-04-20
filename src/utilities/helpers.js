import axios from "axios";
import { store } from "../store";

function getMovies() {
    const params = store.params;
    axios.get(store.moviesAPI, { params }).then((resp) => {
      store.movies = resp.data.results
    }).catch(error=>{
      console.log(error);
    })
  };

function getSeries() {
    const params = store.params;
    axios.get(store.seriesAPI, { params }).then((resp) => {
      store.series = resp.data.results
    }).catch(error=>{
      console.log(error);
    })
  };

 function handleInput() {
    getMovies();
    getSeries();
    store.params.query = ""

  }
// function getResp(myAPI, myArray) {
//     const params = store.params;
//     axios.get(myAPI, { params }).then((resp) => {
//         myArray = resp.data.results
//     })
// };

// function handleInput() {
//     getResp(store.moviesAPI, store.movies);
//     getResp(store.seriesAPI, store.series);
//     console.log(store.movies, 'gethandle');

//     store.params.query = ""
// } 
export {
    handleInput

}