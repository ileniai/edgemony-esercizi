// Creare uno slider (template via HTML), seguendo il wireframe presente in allegato, 
// seguendo le logiche viste durante la lezione. Lo stesso dovrà presentare 3 immagini che si 
// susseguono al click sui relativi pallini identificatori.


const carouselImg = document.querySelector('.carousel_img');
const pointerOne = document.querySelector('.pointerOne');
const pointerTwo = document.querySelector('.pointerTwo');
const pointerThree = document.querySelector('.pointerThree');
const imageOne = document.querySelector('.image1');
const imageTwo = document.querySelector('.image2');
const imageThree = document.querySelector('.image3');

pointerOne.addEventListener('click', () => {
    pointerOne.style.backgroundColor = 'transparent';
    imageTwo.style = 'display:none';
    imageThree.style = 'display:none';
    imageOne.style = 'display:block';

})

pointerTwo.addEventListener('click', () => {
    pointerTwo.style.backgroundColor = 'rgba(73,73,73,1)';
    imageOne.style = 'display:none';
    imageThree.style = 'display:none';
    imageTwo.style = 'display:block';
})

pointerThree.addEventListener('click', () => {
    pointerThree.style.backgroundColor = 'rgba(73,73,73,1)';
    imageOne.style = 'display:none';
    imageTwo.style = 'display:none';
    imageThree.style = 'display:block';
})





   







