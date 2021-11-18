const play = document.getElementById("play");

play.addEventListener('click', function(){
    const selezione = document.querySelector("#difficolta").value;
    const cont = document.querySelector(".container");
    cont.innerHTML = "";
    for(let i = 1; i <= selezione; i++){
        const quadrato = addSquare(selezione, i);
        cont.appendChild(quadrato);

        quadrato.addEventListener('click', function(){
            this.classList.add('clicked');
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