const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

//creo card
const cardCreator = (data) => {
    const body = qS ("body");
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
    body.append(containerEl, containerCardEl);
    return containerEl;


}

export {cE, qS,cardCreator}