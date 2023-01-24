//Sulla base della lezione del giorno, 
//creare una paginetta che effettui una 
//chiamata di tipo
 //GET all'endpoint https://dummyjson.com/users, 
 //renderizzare la lista di utenti, 
 //creando delle cards con i valori a 
 //vostra scelta (es. nome, cognome, ecc...)

 import {cE, qS, cardCreator} from "./utils.js"
 import {GET} from "./api.js"

 const bodyEl = qS("body");
 const containerEl = cE ("div");
 containerEl.className = "containeir";

 bodyEl.appendChild(containerEl); 
 

 GET("users?limit=150").then((data) => 
data.users.map((user) =>
containerEl.appendChild(cardCreator(user))));

