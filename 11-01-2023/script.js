//Creare una singola card tutto in statico (via HTML),inserire gli elementi a piacere, come immagini, testo o titoli, 
//indispensabile per aggiungere un button con una X come testo.

//Aggiungere un evento al cui click del mouse sulla class intera:

//Cambi il colore del testo di tutta la card
//Aggiungere un secondo evento al cui click 
//del mouse sul pulsante con la X - 
//Elimini la card stessa

const bodyEl= document.querySelector('body');

const cardEl= () => {
    const sectionCard= document.querySelector('section');
    sectionCard.className='card';
    const titleEl= document.querySelector(h1);
    titleEl.className='Bag';
    titleEl.textContent='NiceBag';
    const textEl= document.querySelector('p');
    textEl.className='text2';
    textEl.textContent='click here to change color';
    imgEl.setAttribute('src', 'immagine.jpg');
    imgEl.setAttribute('alt', 'attention!');
    imgEl.className="imgBag";
    buttonEl= document.querySelector('button');
    buttonEl.className='btn';

    sectionCard.append(titleEl, textEl, imgEl, buttonEl);
    bodyEl.appendChild(sectionCard);

}

cardEl()

function changeClick(){
    
    document.addEventListener('click' (changeColorbtn));
}









//function ChangeTitle(){
    //const titleEl= document.querySelector('h1');
    //titleEl.className='Bag';
    //titleEl.textContent='NiceBag';
    //const textEl= document.querySelector('p');
    //textEl.className='Bag';
    //textEl.textContent='click here to change color';}