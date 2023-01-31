let sayHello = function(){
    console.log('un saluto a tutti')
}

let bye = function(){
    console.log('arrivederci')
}

//direttiva di esportazione per rendere queste funzioni disponibili nel progetto
//quindi esporto le funzioni che voglio utilizzare nel progetto
exports.sayHello = sayHello;
exports.bye = bye;