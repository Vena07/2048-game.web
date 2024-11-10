let barvypocet = 1;
let uspechypocet = 1;

function barvy(){
    let obevenibarev1 = document.getElementById('paleta');
    let obevenibarev2 = document.getElementById('buttonpaleta');
    switch(barvypocet){
        case 1:
            obevenibarev1.style.display = 'flex';
            obevenibarev2.style.display = 'none';
            barvypocet = 2;
            break;
        case 2:
            obevenibarev1.style.display = 'none';
            obevenibarev2.style.display = 'flex';
            barvypocet = 1;
            break;
    }
}

function napoveda(){
    let obveneinapoveda1 = document.getElementById('napovedaokno');
    let obveneinapoveda2 = document.getElementById('hra');
    switch(uspechypocet){
        case 1:
            obveneinapoveda1.style.display = 'flex';
            obveneinapoveda2.style.filter = 'blur(5px)';
            obveneinapoveda2.style.index = '-1';
            uspechypocet = 2;
            break;
        case 2:
            obveneinapoveda1.style.display = 'none';
            obveneinapoveda2.style.filter = 'blur(0px)';
            obveneinapoveda2.style.index = '1';
            uspechypocet = 1;
            break;
    }
}


let piny = ["pin11","pin12","pin13","pin14",
    "pin21","pin22","pin23","pin24",
    "pin31","pin32","pin33","pin34",
    "pin41","pin42","pin43","pin44"]


    function pridanibloku() {
    let opakovani = true;

    

    while (opakovani) {
        let rada = Math.floor(Math.random() * 4) + 1;
        let sloupec = Math.floor(Math.random() * 4) + 1;
        let vybraneID = "pin" + rada; 
        vybraneID = vybraneID + sloupec; 
        let vybranypin = document.getElementById(vybraneID);

        
        if (vybranypin && vybranypin.innerText === "") {
            vybranypin.innerHTML = "2";
            opakovani = false;
        }

        
    }
}

for (let index = 0; index < 2; index++) {
    pridanibloku();
}
