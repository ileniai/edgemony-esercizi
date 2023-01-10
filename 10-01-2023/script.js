//Sulla base della lezione del giorno, scrivere una funzione che generi una hero dinamicamente tramite Javascript. 
//Devo essere presenti i seguenti elementi:

//Image di sfondo
//Un titolo principale
//Un sottotitolo descrittivo breve

const bodyEl= document.querySelector('body');

const heroEl= () => {
    const sectionHero= document.querySelector('section');
    sectionHero.className="hero";
    const imgEl=document.createElement('img');
    imgEl.setAttribute('src', 'immagine.jpg');
    imgEl.setAttribute('alt', 'sorry but this is not img');
    imgEl.className="imgHero";
    const titleEl= document.createElement('h1');
    titleEl.className='heroTitle';
    titleEl.textContent='This is my Hero!';
    const paragraphEl= document.createElement('p');
    paragraphEl.className='paragraphHero';
    paragraphEl.textContent='breve illustrazione di un progetto';


    sectionHero.append(imgEl, titleEl, paragraphEl);
    bodyEl.appendChild(sectionHero);

}

heroEl()
