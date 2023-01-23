//ricreare una funzione asincrona 
//(utilizzando ASYNC / AWAIT) che effettui 
//una chiamata al seguente 
//endpoint: https://dummyjson.com/quotes.

//Lo stile è a scelta dell'utente e 
//la quantità di quote da visualizzare è 
//soltanto 1. Per qulunque riferimento 


import {cE,qS, cardCreator} from "./utils.js"
import {GET} from "./api.js"

//ENDPOINT QUOTES

//const data = {
         // id:1,
          //quote:"Life isn’t about getting and having, it’s about giving and being.",
          //author:"Kevin Kruse"
//       }
       
const bodyEl = qS("body");
const containerEl = cE("div");

bodyEl.appendChild(containerEl);

GET("quotes").then((data) => 
data.quotes.map((quote) => containerEl.appendChild(cardCreator(quote)))
);


