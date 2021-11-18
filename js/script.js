const numeroBombe = 16;
let stop_partita = false;

const play = document.getElementById("play");
const risultato = document.getElementById("risultato");

play.addEventListener('click', function(){
    const selezione = document.querySelector("#difficolta").value;
    const cont = document.querySelector(".container");
    risultato.innerHTML = " "
    cont.innerHTML = "";
    let mosse = 0;
    stop_partita = false;
    const bombe = createBomb(numeroBombe, selezione);

    console.log(bombe); //Vedere bombe

    for(let i = 1; i <= selezione; i++){
        const quadrato = addSquare(selezione, i);
        cont.appendChild(quadrato);

        quadrato.addEventListener('click', function(){
            if(mosse != (selezione - 16) && !this.classList.contains('clicked') && !this.classList.contains('bomb'))mosse++;
            if(bombe.includes(parseInt(this.textContent)) && stop_partita == false)bombaTrovata(this, mosse);
            else if(stop_partita == false)this.classList.add('clicked');
            console.log(mosse);
            if(mosse == (selezione - 16))haiVinto(mosse);
        });
    }

});

// ********************** funzioni *************************
function addSquare(selezione, num) {
    const node = document.createElement('div');
    node.className = 'quadrato';
    node.innerHTML = num;
    if(selezione == 81)node.className = 'quadrato hard';
    else if(selezione == 49)node.className = 'quadrato crazy';
    return node;
}

function createBomb(numeroBombe, numeroCelle){
    const array = [];
    while(array.length < numeroBombe){
        const numeroRandom = Math.floor(Math.random() * (numeroCelle - 1 + 1) ) + 1;
        if(!array.includes(numeroRandom)) {
            array.push(numeroRandom);
        }
    }
    return array;
}

function bombaTrovata(elemento, mosse){
    risultato.innerHTML = "Hai perso , con " + mosse + " mosse effettuate";
    risultato.style.color = "red";
    elemento.classList.add('bomb');
    stop_partita = true;
}

function haiVinto(mosse){
    risultato.innerHTML = "Hai Vinto!! , con " + mosse + " mosse effettuate";
    risultato.style.color = "green";
    stop_partita = true;
}