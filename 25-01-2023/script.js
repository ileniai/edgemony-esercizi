//1° ESERCIZIO
//creare un mock in formato JSON. 
 //eliminare eventuale chiamata fetch ed utilizzare 
 //il mock JSON creato per popolare i dati.

import myJson from "./mock.json" assert { type: "json" };
import {cE, qS, cardCreator} from "./utils.js"

const bodyEl = qS ("body");
const containerEl = cE ("div");
containerEl.className = "container";


bodyEl.appendChild(containerEl);

console.log(myJson);

myJson.products.map((item) => containerEl.appendChild(cardCreator(item)));
 
//2° ESERCIZIO



