const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

//creazione card
const cardCreator = (data) => {
    const containerEl = cE("div");
    const containerText = cE("div")
    const quoteEl = cE("p");
    const authorEl = cE("p");

    containerEl.className = "card";

    quoteEl.textContent =  "Citazione ---> " + data.quote;
    authorEl.textContent = "Autore ---> " + data.author;
    containerText.className = "creator_text_card";

    containerText.append(quoteEl, authorEl)
    containerEl.appendChild(containerText);
    return containerEl;
};






export{cE, qS, cardCreator}