const body = document.querySelector("body");
const postForm = document.querySelector("#postForm");

const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputImage = document.querySelector("#image");
const inputDescription = document.querySelector("#description");

const divInfo = document.createElement("div");
divInfo.className = "info_";
const paraInfo = document.createElement("p");
paraInfo.className = "info_parag";
const btnInfo = document.createElement("buttonInfo")
btnInfo.className = "info_button";
btnInfo.textContent ="X";

divInfo.append(paraInfo, btnInfo);
body.appendChild(divInfo);

const aggiuntaPost = (obj, param) => {
  console.log(obj);
  fetch("https://api.escuelajs.co/api/v1/" + param, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("ID PRODOTTO" + data.id);
      inputCategory.value = "";
      inputImage.value = "";
      paraInfo.textContent = "Prodotto aggiunto";
    })
    .catch((e) => {
      paraInfo.textContent = "Errore! Prodotto non aggiunto";
      console.log(e);
    })
  }

postForm.addEventListener("submit", (event) => {
  event.preventDefault();


const newObject = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
};
    aggiuntaPost(newObject, "products");

});

const addPost = (obj) => {
  console.log(obj);
  fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      inputTitle.value = "";
      inputPrice.value = "";
      inputCategory.value = "";
      inputDescription.value = "";
      inputImage.value = "";
      paraInfo.textContent = "Prodotto aggiunto";
    })
    .cash((e) => {
      paraInfo.textContent = "Errore! Prodotto non aggiunto";
      console.log(e);
    });
    

const formCategory = document.querySelector("#formCategory");
const categoryName = document.querySelector("#categoryName");
const categoryImg = document.querySelector("#categoryImg");



formCategory.addEventListener("submit", (event) =>{
  event.preventDefault();

  const obj = {
    name: categoryName.value,
    Image: categoryImg.value,
  };
  aggiuntaPost(obj,"categories");
});



}