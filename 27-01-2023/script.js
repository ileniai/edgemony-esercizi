//Sulla base dell'esercizio del giorno:

//Creare un account su https://developers.themoviedb.org/
//Ottenere una API KEY
//creare una pagina web che effettui anche una sola chiamata 
//GET stavolta per renderizzare una lista di serie tv, esempio
 //popular o top rated o entrambe, 
//e visaulizzare a schermo con uno stile a piacere.

import { GET, searchTvShow} from "./api.js";
import {qS, cE, tvCardGen} from "./utils.js"

const topRatedEl = qS ('.top_rated')
const popularEl = qS ('.popular')
const airingTodayEl = qS ('.airing_today')
const buttonEl = qS('.search-btn')
const serchEl = qS('.search-input')


GET('tv', 'top_rated', '')
.then((data) => {
    console.log(data, 'top_rated')
    data.results.map((tv) =>topRatedEl.append(tvCardGen(tv)))
});

GET('tv', 'popular', '')
.then((data) => {
    console.log(data, 'popular')
    data.results.map((tv) =>popularEl.append(tvCardGen(tv)))
});

GET('tv', 'airing_today', '')
.then((data) => {
    console.log(data, 'airing_today')
    data.results.map((tv) =>airingTodayEl.append(tvCardGen(tv)))
});

let serchedValue = ''

serchEl.addEventListener('input',(element)=>{
    serchedValue=element.target.value;
    serchedValue=serchedValue.toLowerCase();
})

buttonEl.addEventListener('click',()=>{
    searchTvShow(serchedValue).then((data)=>{
        if(serchedValue != ''){
            popularEl.textContent = '';
        }
        data.results.map((element)=>{
            if(element.name.toLowerCase().includes(serchedValue)){
                popularEl.append(tvCardGen(element))
            }
        })
        
    })
})








