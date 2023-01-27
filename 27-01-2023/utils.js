const qS = (type) => document.querySelector(type);
const cE = (element) => document.createElement(element);

const tvCardGen = (data) => {
    const cardEl = cE ("div");
    const imgEl = cE ("img");

    cardEl.setAttribute ("id", data.id);
    cardEl.className = "tv";
  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }
  imgEl.setAttribute("alt", data.name);
  cardEl.appendChild(imgEl);

  return cardEl;
}

export {qS, cE, tvCardGen};
