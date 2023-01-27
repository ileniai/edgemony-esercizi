//creare un intervallo temporale che simuli un conto alla rovescia, che dopo n secondi:

//mostra il timer in schermo, come visto a lezione;
//che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;
//la presenza di un pulsante STOP interrompe il flusso temporale, tramite il relativo clearInterval.

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const bodyEl = document.body;
const wrapperEl = cE ("div");
const titleEl = cE("h1");
const buttonEl = cE ("button")
const imgEl = qS("img")

buttonEl.textContent = "STOP"
titleEl.className = "title"

bodyEl.appendChild(wrapperEl);
wrapperEl.append(titleEl, imgEl, buttonEl)


let countDown = 6;

const contDownOne = setInterval(() => {
    if (countDown === 0) {
     titleEl.textContent = "Dance with me";
     imgEl.style.display = "block";
    } else {
     countDown--;
      titleEl.textContent = countDown;
      imgEl.style.display = "none";
    }
  }, 1000);

    buttonEl.addEventListener("click", () => {
        clearInterval(contDownOne);
    })
    
  