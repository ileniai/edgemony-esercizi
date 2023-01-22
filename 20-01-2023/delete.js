const body = document.querySelector("body");
const deleteForm = document.querySelector("#formDelete");
const inputProductId = document.querySelector("#productId");

const deleteFunction = (param) => {
  console.log(param);
  fetch("https://api.escuelajs.co/api/v1/products/" + param, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => {
      paraInfo.textContent = "Errore! Prodotto non eliminato";
      console.log(e);
    })
  }

deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var productId = inputProductId.value;
  deleteFunction(productId);
});
