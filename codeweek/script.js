import {GET} from './api.js';
//import { products } from "./user.js";

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

//const bodyEl = qS('.body')
const containerEl = qS('#container_user')
const btnAe = qS('#ae')
const btnFl = qS('#fl')
const btnMz = qS('#mz')
const btnEl = qS('#all')
const searchEl = qS('#search-letter')

//I CREATE THE CARD

const createCard = (user, filter)=>{
    const{id, name, username, email, phone} = user

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
    //containerEl.appendChild(cardEl)

  //I CREATE CONDITIONS

  const initial = name[0]
    if (filter == 'search') {
      containerEl.appendChild(cardEl)
    }
    if(filter == 'ae'){
      if(initial.toLowerCase() == 'a' 
      || initial.toLowerCase() == 'b'
      || initial.toLowerCase() == 'c'
      || initial.toLowerCase() == 'd'
      || initial.toLowerCase() == 'e'){
        containerEl.appendChild(cardEl)
      }
    }//else{'Nessun utente trovato'}
    if(filter == 'fl'){
      if(initial.toLowerCase() == 'f'
      || initial.toLowerCase() == 'g'
      || initial.toLowerCase() == 'h'
      || initial.toLowerCase() == 'i'
      || initial.toLowerCase() == 'k'
      || initial.toLowerCase() == 'l'){
        containerEl.appendChild(cardEl)
      }
    }//else{'Nessun utente trovato'}
    if(filter == 'mz'){
      if(initial.toLowerCase() == 'm'
      || initial.toLowerCase() == 'n'
      || initial.toLowerCase() == 'o'
      || initial.toLowerCase() == 'p'
      || initial.toLowerCase() == 'r'
      || initial.toLowerCase() == 's'
      || initial.toLowerCase() == 't'
      || initial.toLowerCase() == 'v'
      || initial.toLowerCase() == 'z'){
        containerEl.appendChild(cardEl)
      }
   // }else{'Nessun utente trovato'}{
    }if(filter == 'all'){
      containerEl.appendChild(cardEl)
    } 
  }

  //I ADD EVENTS TO THE BUTTONS

btnAe.addEventListener("click",()=>{
  containerEl.textContent = ''//innerHTML = ''
  GET('users').then((users)=>
  users.forEach((user)=>{
     createCard(user, 'ae')
  }))
});
btnFl.addEventListener("click", () => {
  containerEl.textContent = ''//innerHTML = ''
  GET('users').then((users)=>
  users.forEach((user)=>{
     createCard(user, 'fl')
  }))
});
btnMz.addEventListener("click", () => {
  containerEl.textContent = ''//innerHTML = ''
  GET('users').then((users)=>
  users.forEach((user)=>{
     createCard(user, 'mz')
  }))
});

btnEl.addEventListener("click", () => {
  containerEl.textContent = ''//innerHTML = ''
  GET('users').then((users)=>
  users.forEach((user)=>{
     createCard(user, 'all')
  }))
  
});

  //SET EVENT FOR SEARCH

     let serchedName = '';
     
     const cardDelete = () =>{
      const cardEl = document.querySelectorAll('.card')
      cardEl.forEach((user) => user.remove());
     };

     searchEl.addEventListener('input',(event)=>{
      cardDelete();
      serchedName = event.target.value;
      console.log(serchedName);

      GET('users').then((users)=>
        users.map((user) => {
          
          let name = user.name;
          let ints = name.split(' ');
          
          if (ints[0].includes(serchedName)) {
            containerEl.append(createCard(user, 'search'));  
          } else{'Attention! No users found'}  
          
        })
      )
    })
 
  
    
