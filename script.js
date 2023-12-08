function atnaujintiLaika() {
    let laikas = new Date();
    let valandos = laikas.getHours();
    let minutes = laikas.getMinutes();
    let sekundes = laikas.getSeconds();

    if (valandos < 10){
        valandos = "0" + valandos;
    } else{
        valandos = valandos;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    } else{
        minutes = minutes;
    }

    if (sekundes < 10){
        sekundes = "0" + sekundes;
    } else{
        sekundes = sekundes;
    }
    
    let laikoTekstas = valandos + ":" + minutes + ":" + sekundes;

    document.getElementById("laikrodis").innerText = laikoTekstas;
}


atnaujintiLaika();

setInterval(atnaujintiLaika);