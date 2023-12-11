//laikrodis
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


//forma
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const resultsDiv = document.getElementById('results');
    const duomenys = {};
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        duomenys.fname = form.querySelector('input[name="fname"]').value;
        duomenys.lname = form.querySelector('input[name="lname"]').value;
        duomenys.email = form.querySelector('input[name="email"]').value;
        duomenys.phone = form.querySelector('input[name="phone"]').value;
        duomenys.date = form.querySelector('input[name="date"]').value;
        duomenys.adress = form.querySelector('input[name="adress"]').value;
        duomenys.postal = form.querySelector('input[name="postal"]').value;
        duomenys.city = form.querySelector('input[name="city"]').value;
        duomenys.country = form.querySelector('input[name="country"]').value;
        duomenys.speed = form.querySelector('input[name="internet-speed"]').value;
        duomenys.socket = Number(form.querySelector('input[name="internet-socket"]').value);
        duomenys.price = Number(form.querySelector('input[name="internet-price"]').value);
        duomenys.quality = Number(form.querySelector('input[name="internet-quality"]').value);
        duomenys.safety = Number(form.querySelector('input[name="internet-safety"]').value);
        
        duomenys.speed = +duomenys.speed;
        duomenys.socket = +duomenys.speed;
        duomenys.price = +duomenys.speed;
        duomenys.quality = +duomenys.speed;
        duomenys.safety = +duomenys.speed;

        let average = (duomenys.speed + duomenys.socket + duomenys.price + duomenys.quality + duomenys.safety) / 5;
        
  
        let email = false;
        let phone = false;
        let adress = false;
        
        if (!duomenys.email.includes('@') || !duomenys.email.includes('.')) {
            console.log('Netinkamas elektronino pašto adresas!');
            email = true;
        }
        
        if (duomenys.phone.length !== 12) {
            console.log('Telefono numerio formatas netinkamas');
            phone = true;
        }
        
        if (!duomenys.adress || !duomenys.postal || !duomenys.city || !duomenys.country) {
            console.log('Netinkamas gyvenamasis adresas!');
            adress = true;
        }
        
        if (email && phone && adress) {
            alert("Netinkamas telefono numeris, adresas ir elektroninis paštas");
            return;
        } 
        else if (adress && email ) {
            alert("Netinkamas adresas ir elektroninis paštas");
            return;
        }

        else if (email && phone){
            alert("Netinkamas elektronins paštas ir telefono numeris");
            return;
        }

        else if (adress && phone){
            alert("Netinkamas adresas ir telefono numeris");
            return;
        }

        else if (adress){
            alert("Netinkamas adresas");
            return;
        }
        
        else if(email){
            alert("Netinkamas elektroninis paštas");
            return;
        }
        
        else if (phone){
            alert("Netinkamas telefono numeris");
            return;
        }
        
        duomenys.fullAdress = `${duomenys.adress}, ${duomenys.postal}, ${duomenys.city}, ${duomenys.country}`;
  
    
        console.log('Vardas:', duomenys.fname);
        console.log('Pavardė:', duomenys.lname);
        console.log('Elektroninis paštas:', duomenys.email);
        console.log('Telefono numeris:', duomenys.phone);
        console.log('Paslaugų atlikimo data:', duomenys.date);
        console.log('Interneto greitis:', duomenys.speed);
        console.log('Interneto rozečių skaičius:', duomenys.socket);
        console.log('Interneto paslaugų mokestis:', duomenys.price);
        console.log('Interneto kokybė:', duomenys.quality);
        console.log('Saugumas internete:', duomenys.safety);
    
        fullAdress = (duomenys.adress + ', ' + duomenys.postal + ', ' + duomenys.city + ' ' + duomenys.country);
        console.log('Adresas: ', fullAdress);

        alert("Vardas: " + duomenys.fname + "\n" +
            "Pavardė: " + duomenys.lname + "\n" +
            "Elektroninis paštas: " + duomenys.email + "\n" +
            "Telefono numeris: " + duomenys.phone + "\n" +
            "Paslaugų atlikimo data: " + duomenys.date + "\n" +
            "Interneto greitis: " + duomenys.speed + "\n" +
            "Interneto rozečių skaičius: " + duomenys.socket + "\n" +
            "Interneto paslaugų mokestis: " + duomenys.price + "€\n" +
            "Interneto kokybė: " + duomenys.quality + "\n" +
            "Saugumas internete: " + duomenys.safety + "\n" +
            "Adresas: " + fullAdress + "\n" +
            "Duomenys: " + duomenys.fname + " " + duomenys.lname + " (" + duomenys.email + ") " + average);

    });
});