function esParoImpar1(numero){
    if(numero % 2 === 0){
        console.log("Es par");
        return;
    }

    console.log("Es impar");
}

function esParoImpar2(numero){
    numero % 2 === 0 ? console.log("Es par") : console.log("Es impar");
}

esParoImpar1(10);
esParoImpar2(20);


