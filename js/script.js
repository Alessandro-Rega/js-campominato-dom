const numeroBombe = 16;
let mosse = 0;

const play = document.getElementById("play");

play.addEventListener('click', function(){
    const selezione = document.querySelector("#difficolta").value;
    const cont = document.querySelector(".container");
    cont.innerHTML = "";
    const bombe = createBomb(numeroBombe, selezione);

    console.log(bombe); //Vedere bombe

    for(let i = 1; i <= selezione; i++){
        const quadrato = addSquare(selezione, i);
        cont.appendChild(quadrato);

        quadrato.addEventListener('click', function(){
            if(bombe.includes(parseInt(this.textContent)))bombaTrovata(this);
            else this.classList.add('clicked');
            mosse ++;
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

function bombaTrovata(elemento){
    elemento.classList.add('bomb');
}