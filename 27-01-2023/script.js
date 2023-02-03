//Sulla base dell'esercizio del giorno:

//Creare un account su https://developers.themoviedb.org/
//Ottenere una API KEY
//creare una pagina web che effettui anche una sola chiamata 
//GET stavolta per renderizzare una lista di serie tv, esempio
 //popular o top rated o entrambe, 
//e visaulizzare a schermo con uno stile a piacere.

//import { GET } from "./api.js";
//import { qS, qSA, movieCardGen, modalGen } from "./utils.js";

import { GET} from "./api.js";
import {qS, cE, tvCardGen} from "./utils.js"

const topRatedEl = qS ('.top_rated')
const mostPopularEl = qS ('.most_popular')
const airingTodayEl = qS ('.airing_today')

GET('tv', 'top_rated', '')
.then((data) => {
    console.log(data, 'top_rated')
    data.results.map((tv) =>topRatedEl.append(tvCardGen(tv)))
});

GET('tv', 'most_popular', '')
.then((data) => {
    console.log(data, 'most_popular')
    data.results.map((tv) =>mostPopularEl.append(tvCardGen(tv)))
});

GET('tv', 'airing_today', '')
.then((data) => {
    console.log(data, 'airing_today')
    data.results.map((tv) =>airingTodayEl.append(tvCardGen(tv)))
});






