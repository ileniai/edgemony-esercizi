//Sulla base dell'esercizio del giorno:

//Creare un account su https://developers.themoviedb.org/
//Ottenere una API KEY
//creare una pagina web che effettui anche una sola chiamata 
//GET stavolta per renderizzare una lista di serie tv, esempio
 //popular o top rated o entrambe, 
//e visaulizzare a schermo con uno stile a piacere.

//import { GET } from "./api.js";
//import { qS, qSA, movieCardGen, modalGen } from "./utils.js";

import { GET } from "./api.js";
import {qS, cE, tvCardGen} from "./utils.js"

const topRatedEl = qS (".top_rated");

GET("tv", "top_rated")
.then((data) => data.results.map((tv) =>topRatedEl.append(tvCardGen(tv)))
);