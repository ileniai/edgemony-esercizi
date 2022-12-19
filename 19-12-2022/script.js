//chieda all'utente di inserire una operazione 
let userOperator = prompt("Ciao, Che tipo di operazion vuoi svolgere?");
//chieda all'utente di inserire un primo numero
let firstNumber = prompt("Inserire il primo numero");
//chiede all'utente di inserire un secondo numero
let secondNumber = prompt("Inserire il secondo numero");
//infine dare il risultato dell'operazione in console
let intFirstNum = parseInt (intFirstNum);
let intSecNum = parseInt (intSecNum);

switch (userOperator) {
    case 'addizione':
        console.log(intFirstNum + intSecNum);
        break;
    case 'sottrazione':
        console.log(intFirstNum - intSecNum);
        break;
    case 'moltiplcazione':
        console.log(intFirstNum * intSecNum);    
        break;
    case 'divisione':
        console.log(intFirstNum / intSecNum);    
        break;
        default:
        console.log("Ci dispiace, questa non è una operazione."); 

}










