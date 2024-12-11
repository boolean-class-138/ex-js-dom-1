// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// DOM Elements
// const imgLampOffElm = document.getElementById("lampOff");
// const imgLampOnElm = document.getElementById("lampOn");
const imgLampElm = document.getElementById("lamp");
const buttonElm = document.getElementById("btn");

let isLampOn = false;
// DOM Events
buttonElm.addEventListener("click", function() {
    // Inverto il valore di isLampOn
    isLampOn = !isLampOn;
    
    // Ho acceso la lampadina
    if(isLampOn) {
        // imgLampOnElm.classList.remove('d-none');
        // imgLampOffElm.classList.add('d-none');
        imgLampElm.src = 'img/yellow_lamp.png'
        buttonElm.innerHTML = "Spegni"
    } else { // Ho spento la lampadina
        // imgLampOnElm.classList.add('d-none');
        // imgLampOffElm.classList.remove('d-none');
        imgLampElm.src = 'img/white_lamp.png'
        buttonElm.innerHTML = "Accendi"
    }
});