//ricreare una funzione asincrona 
//(utilizzando ASYNC / AWAIT) che effettui 
//una chiamata al seguente 
//endpoint: https://dummyjson.com/quotes.

//Lo stile è a scelta dell'utente e 
//la quantità di quote da visualizzare è 
//soltanto 1. Per qulunque riferimento 


import {cE,qS, cardCreator} from "./utils.js"
import {GET} from "./api.js"

const bodyEl = qS("body");
const containerEl = cE("div");
containerEl.className = "container";

bodyEl.appendChild(containerEl);

GET("quotes").then((data) => 
containerEl.appendChild (cardCreator(data.quotes[1])));
