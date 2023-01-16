//Seguendo quello fatto oggi a lezione effettuata una chiamate fetch()alla seguente API web: 
//https://api.escuelajs.co/api/v1/products
//e stampate in console nome e descrizione del prodotto simile a questo formato

//--------------
//Tasty Rubber Soap
//The Football Is Good For Training And Recreational Purposes
//--------------
//Modern Bronze Chair
//New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016

//State molto attendi all'asincronicità dellaPROMISE



//const productsEl = document.querySelector(".productsList");
//const downloadDataBtn = document.querySelector(".button");
//const loaderEl = document.querySelector(".loader");




//fetch----primo esercizio

    fetch("https://api.escuelajs.co/api/v1/products" ) 
    .then ( res => res. json ())
    .then (data => {
        console.log(data);
        manupulationData(data); 
    })

    const manupulationData =(data) => {
        data.forEach ((item) => {
            console.log("----");
            console.log('title: +{item.title}');
            console.log("----");
            console.log('description:+{item.description}');
        });
    };



    
    


    
