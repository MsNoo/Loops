function NO1() {
    console.log("----------");
    console.log("No1");
    /*
    Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, 
    atspausdinkite juos atskirtus tarpais ir suskaičiuokite 
    kiek tarp jų yra didesnių už 150.  
    Skaičiai didesni nei 275 turi būti atspausdinti 
    skliausteliuose” [ ] “.
    */
    let count = 0;
    let text = "";
    let number = [];

    for (let i = 0; i < 299; i++) {
        number.push(Math.round(Math.random() * 300));

        if (number[i] > 150) {
            count++;
        }

        if (number[i] <= 275) {
            text += number[i] + " ";
        }
        if (number[i] > 275) {
            text += "[" + number[i] + "] ";
        }
    }
    console.log("Greater than 150: " + count);
    console.log(text);
};

function NO2() {
    console.log("----------");
    console.log("No2");
    /*
    Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, 
    kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. 
    Po paskutinio skaičiaus kablelio neturi būti.
    */

    let text = "";
    let arryNumber;
    let arry = [];

    for (let i = 0; i < 299; i++) {
        arryNumber = Math.floor(Math.random() * 299);

        if (arryNumber % 77 == 0) {
            text += arryNumber + ", ";
        }
    }
    console.log(text.substring(0, text.length - 2));

    // console.log("---- Other approach -----");
    // for (let i = 77; i < 3000; i+= 77){
    //     arryNumber = Math.floor(Math.random() * 299);
    //     text += arryNumber + " ";
    // }
    // console.log(text.substring(0, text.length - 2));

};

function NO3() {
    console.log("----------");
    console.log("No3");
    /*
    Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.
    * * * * * * * * * * *
    * * * * * * * * * * *
    * * * * * * * * * * *
    * * * * * * * * * * *
    * * * * * * * * * * *
    * * * * * * * * * * *
    * * * * * * * * * * *
    */

    let simb;
    for (let i = 0; i < 20; i++) {
        simb = "";
        for (let j = 0; j < 20; j++) {
            simb += "* ";
        }
        console.log(simb);
    }
};

function NO4() {
    console.log("----------");
    console.log("No4");
    /*
    Prieš tai nupieštam kvadratui nupieškite 
    istrižaines zaigzdute pakeisdami kitu simboliu. 
    (reikės išsiaiškinti, kaip atvaizduoti tekstą HTML)
* * * * * * * 
* * * * * * * 
* * * * * * * 
* * * * * * *
* * * * * * * 
* * * * * * * 
* * * * * * * 
    */

    let simb;
    for (let i = 0; i < 20; i++) {
        simb = "";
        for (let a = 0; a < 20; a++) {
            if ((i == a) || (i + a) == 19) {
                // (10 - (i + a) == 1)) {
                simb += "@ "
            }
            else {
                simb += "* ";
            }
        }
        console.log(simb);
    }
};

function NO5() {
    console.log("----------");
    console.log("No5");
    /*
    Metam monetą. Monetos kritimo rezultatą imituojam 
    Math.random() funkcija, kur 0 yra herbas, 
    o 1 - skaičius. Monetos metimo rezultatus 
    išvedame į ekraną atskiroje eilutėje: 
    “S” jeigu iškrito skaičius ir “H” jeigu herbas. 
    Suprogramuokite tris skirtingus scenarijus kai 
    monetos metimą stabdome:
    Iškritus herbui;
    Tris kartus iškritus herbui;
    Tris kartus iš eilės iškritus herbui;
    */

    function No1() {
        let coin;
        console.log("---- First scenario ----");
        while (true) {
            coin = Math.round(Math.random() * 2);
            if (coin == 0) {
                coin = "H";
            }
            else {
                coin = "S";
            }
            console.log(coin);

            if (coin == "H") {
                console.log("Iskrito herbas, stabdoma");
                break;
            }
        }
    }

    function No2() {
        console.log("---- Second scenario ----");
        let count = 0;
        while (true) {
            coin = Math.round(Math.random() * 2);

            if (coin == 0) {
                coin = "H";
                count++;
            }
            else {
                coin = "S";
            }
            console.log(coin);

            if (count == 3) {
                console.log("Herbas iskrito 3 kartus, stabdoma");
                break;
            }
        }
    }

    function No3() {
        console.log("---- Third scenario ----");
        let i = 0;
        let count = 0;
        while (true) {
            coin = Math.round(Math.random() * 2);

            if (coin == 0) {
                coin = "H";
                count++;
            }
            else {
                coin = "S";
            }
            console.log(coin);

            if (coin == "S") {
                count = 0;
            }

            if (count == 3) {
                console.log("Herbas is eiles iskrito tris kartus, stabdoma");
                break;
            }
        }
    }

    No1();
    No2();
    No3();
};

function NO6() {
    console.log("----------");
    console.log("No6");
    /*
    Kazys ir Petras žaidžiai šaškėm. 
    Petras surenka taškų kiekį nuo 10 iki 20, 
    Kazys surenka taškų kiekį nuo 5 iki 25. 
    Vienoje eilutėje išvesti žaidėjų vardus su 
    taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. 
    Taškų kiekį generuokite funkcija ​Math.random()​. 
    Žaidimą laimi tas, kas greičiau surenka 222 taškus. 
    Partijas kartoti tol, kol kažkuris žaidėjas pirmas 
    surenka 222 arba daugiau taškų.
    */
    let petras;
    let kazys;
    let sumaPetras = 0;
    let sumaKazys = 0;

    while (true) {
        petras = Math.round(Math.random() * 10 + 10);
        sumaPetras += petras;
        if (sumaPetras >= 222) {
            console.log("Partija laimejo: Petras");
            break;
        }

        kazys = Math.round(Math.random() * 20 + 5);
        sumaKazys += kazys;

        if (sumaKazys >= 222) {
            console.log("Partija laimejo: Kazys");
            break;
        }
    }
    console.log("Petro tasku suma: " + sumaPetras);
    console.log("Kazio tasku suma: " + sumaKazys);
};

function NO7() {
    console.log("----------");
    console.log("No7");
    /*
    Reikia nupaišyti pilnavidurį rombą, taip pat, 
    kaip ir pilnavidurį kvadratą 
    (https://lt.wikipedia.org/wiki/Rombas), 
    kurio aukštis 21 eilutė.
    */

    let simb;
    for (let i = 0; i < 21; i++) {
        simb = "";
        for (let a = 0; a < 21; a++) {
            if (((a + i) > 10) &&
                ((a - i) < 10) &&
                ((i - a) < 10) &&
                ((a + i) < 30)) {
                simb += "@ ";
            }
            else {
                simb += "* "
            }
        }
        console.log(simb);
    }
};

function NO8() {
    console.log("----------");
    console.log("No8");
    /*
    Sumodeliuokite vinies kalimą. 
    Įkalimo gylį sumodeliuokite pasinaudodami Math.random()
    funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
    “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį
    įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
    “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis
    vinį įkala 20-30 mm, bet yra 50% tikimybė
    (pasinaudokite Math.random() funkcija tikimybei
    sumodeliuoti), kad smūgis nepataikys į vinį.
    Suskaičiuokite kiek reikia smūgių.
    */

    function no1() {
        let i = 0;
        console.log("I dalis. Mazi smugiai");
        for (let a = 0; a < 5; a++) {
            let length = 85;
            let count = 0;
            console.log("---- " + (a + 1) + " VINIS ----- \nSMUGIAI");
            while (i <= length) {
                let depth = Math.round(Math.random() * 15 + 5);
                length = length - depth;
                console.log(depth + " mm");
                if (length <= 0) {
                    console.log("Vinis ikalta " + count + " smugiais");
                    break;
                }
                count++;
            }
        }
    }

    function no2() {
        let i = 0;
        let status;
        console.log("----------------------------------------------------");
        console.log("II dalis. Dideli smugiai");
        for (let a = 0; a < 5; a++) {
            let length = 85;
            let count = 0;
            let count2 = 0;
            console.log("---- " + (a + 1) + " VINIS ----- \n---- Smugiai ----");
            while (i <= length) {
                let depth = Math.round(Math.random() * 10 + 20);
                let possibility = Math.floor(Math.random() * 2);
                if (possibility == 1) {
                    status = true;
                }
                if (possibility == 0) {
                    status = false;
                }
                console.log(status);

                if (status == true) {
                    count2++;
                }
                if (status == false) {
                    length = length - depth;
                    console.log(depth + " mm");
                    count++;
                    if (length <= 0) {
                        console.log("Vinis ikalta " + count + " smugiais");
                        console.log("Nepataikyta " + count2 + " smugiai(-u)");
                        break;
                    }
                }
            }
        }
    }

    no1();
    no2();
};

function NO9() {
    console.log("----------");
    console.log("No9");
    /*
    Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 
    200, atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). 
    Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik 
    pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir 
    patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo 
    mažiausio iki didžiausio. (reikės split() funkcijos ir masyvų.)
    */

    let stringArr = "";
    let splitStringArr;

    for (let i = 0; i < 10; i++) {
        number = Math.floor(Math.random() * 11);
        console.log(number);
        stringArr += number + " ";
        splitStringArr = stringArr.split(" ");

    }
    for(let i = 0; i < splitStringArr.length; i++){
        for (let j = 0; j < i; j++) {
            if (splitStringArr[i] == splitStringArr[j]) {
                console.log("sutampa elementas: " + i);
                break;
            }
        }
    }


    console.log("Ilgis: " + splitStringArr.length);
    console.log(splitStringArr);


};

NO1();
NO2();
NO3();
NO4();
NO5();
NO6();
NO7();
NO8();
NO9();