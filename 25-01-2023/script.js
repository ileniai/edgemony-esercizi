//1° ESERCIZIO
//creare un mock in formato JSON. 
 //eliminare eventuale chiamata fetch ed utilizzare 
 //il mock JSON creato per popolare i dati.

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

import myJson from "./mock.json" assert { type: "json" };


const bodyEl = qS("body");
//creo card

const cardCreator = (data) => {
    const containerEl = cE ("div");
    const containerCardEl = cE ("div");
    const titleEl = cE ("h3");
    const priceEl = cE ("p");
    const quantityEl = cE ("p");

    containerEl.className = "container";
    containerCardEl.className = "container_card"
    titleEl.className = "title_card";
    titleEl.textContent = data.title;
    priceEl.className = "price_card";
    priceEl.textContent = " € " + data.price
    quantityEl.className = "quantity_card";
    quantityEl.textContent = data.quantity;


    containerCardEl.append(titleEl, priceEl, quantityEl);
    containerEl.appendChild(containerCardEl);
    bodyEl.appendChild(containerEl);
    return containerEl;

}


console.log(myJson);

myJson.map((item) => (cardCreator(item)));
 
//2° ESERCIZIO



