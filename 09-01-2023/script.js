//ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.
//Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data 
//la possibilita di scegliere quale operazione effettuare. 
//Siate liberi di aggiungere gli argomenti a piacere, 
//come per esempio i numeri, se chiederli all'utente o meno

const sum = (numOne, numTwo) => numOne + numTwo; 
const sub = (numOne, numTwo) => numOne - numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const division = (numOne, numTwo) => numOne / numTwo;

const calculator = () => {
    const operator = prompt("Inserisci una operazione");
    const numOne = parseInt(prompt("Inserisci un numero"));
    const numTwo = parseInt(prompt("Inserisci un secondo numero"));

    switch (operator) {
        case "addizione":
            console.log(sum(numOne, numTwo));
            break;
        case "sottazione":
            console.log(sub(numOne, numTwo));
            break;
        case "moltiplicazione":
            console.log(mult(numOne, numTwo));
            break;
        case "divisione":
            console.log(division(numOne, numTwo));
            break;
        default:
            console.log ("operazione errata");
    }
}
calculator()

//Provare a completare l'esercizio sopra applicando qualche callback.
//Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback.

function callbackFuction(num1, num2, callback){
    console.log(callback(num1, num2));
}

callbackFuction(50, 9, sum);
callbackFuction(50, 9, sub);
callbackFuction(50, 9, mult);
callbackFuction(50, 9, division);
