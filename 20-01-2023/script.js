const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");
const productsList = document.querySelector(".products");
const footer = document.querySelector("footer");
const paragrafoErr = document.createElement("p");

btn1.addEventListener("click", () => {
  img1.classList.add("show");
  img2.classList.remove("show");
  img3.classList.remove("show");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});

btn2.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.add("show");
  img3.classList.remove("show");

  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.remove("show");
  img3.classList.add("show");

  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

const cart = [];



fetch("https://api.escuelajs.co/api/v1/products/")
  .then(res => res.json())
  .then(data =>
    data.forEach(element => {
      cardCreator(element);
    })
  )
  .catch(e => {
    paragrafoErr.textContent = "C'è stato un errore!!"
    console.log(e)
  });

  const cardCreator = item => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const idEl = document.createElement("idproduct");
  idEl.className = "id_product"
  idEl.textContent = item.id;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.images[0]);
  imgEl.setAttribute("alt", "Attention!!");

  const h1El = document.createElement("h1");
  h1El.className = "title";
  h1El.textContent = item.title.slice(0, 10);

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = "€" + item.price;

  const descEl = document.createElement("p");
  descEl.className = "description";
  descEl.textContent = item.description.slice(0, 30);

  const addBtn = document.createElement("button");
  addBtn.textContent = "Aggiungi al Carrello";

  addBtn.addEventListener("click", () => {
    cart.push(item);
    alert("Prodotto aggiunto")
      addProducts()
  });

  cardEl.append(idEl, imgEl, h1El, priceEl, descEl, addBtn);
  productsList.appendChild(cardEl);
};

const addProducts = () => {
  tendina.innerHTML = "";
  cart.forEach((item,index) => {
      const divEl =document.createElement("div");
      divEl.className = "Pippo";
      const paraEl = document.createElement("p");
      paraEl.className = "Pluto";
      paraEl.textContent = item.title + " € " + item.price 
      const deleteBtn =document.createElement("button");
      deleteBtn.textContent ="X";

      deleteBtn.addEventListener("click", () => {
        cartEl.remove();
        cart.splice(index, 1);
      });

      divEl.appendChild(paraEl)
      tendina.appendChild(divEl)
  });
};
