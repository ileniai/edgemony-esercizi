import {GET} from './api.js';
//import { products } from "./user.js";

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

//const bodyEl = qS('.body')
const containerEl = qS('#container_user')
const btnEl = qS('.letter')



GET('users').then((users)=>
    users.forEach((user)=>{
       createCard(user)
    })
)


const createCard = (user)=>{
    const{ id, name, username, email, phone} = user

    const cardEl = cE('div')
    cardEl.className = 'card'

    const imgEl = cE('img')
    imgEl.setAttribute("src", "https://randomuser.me/api/portraits/women/"+id+".jpg");
    imgEl.setAttribute("alt", name);
    imgEl.className = 'image'

    const boxEl = cE('div')
    boxEl.className = 'intro'

    const nameEL = cE('h2')
    nameEL.textContent = name
    nameEL.className = 'name'

    const userNameEl = cE('h3')
    userNameEl.textContent = username
    userNameEl.className = 'info'

    const emailEl = cE('p')
    emailEl.textContent = email
    emailEl.className = 'info'

    const phoneEl = cE('p')
    phoneEl.textContent = phone
    phoneEl.className = 'info'

    boxEl.append(nameEL, userNameEl, emailEl, phoneEl);
    cardEl.append(imgEl, boxEl);
    containerEl.appendChild(cardEl)
   
}

/*btnEl.addEventListener('click',(e)=>{
    function filterUsersByLetter(letter) {
        const filteredUsers = users.filter(user => user.name.startsWith(letter));
        if (filteredUsers.length === 0) {
          document.getElementsByClassName('card').innerHTML = 'Nessun account trovato per questo filtro';
        } else {
          const cards = filteredUsers.map(user => createCard(user));
          document.getElementsByClassName('card').innerHTML = '';
          cards.forEach(card => document.getElementsByClassName('card').appendChild(card));
        }
      }
    
})*/


/*const filteredUsers = "letter, A-E.";
console.log(filteredUsers.startsWith("letter"));*/
btnEl.addEventListener('click',()=>{
  const users = checkUserByLetter ('A-E');
  function checkUserByLetter(name){
    const filteredUser = users.filter((user)=>{
      return user.name === name;
    })
    return filteredUser;
  }
})



