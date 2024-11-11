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

document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp') {
        Nahoru();
    } else if (event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') {
        Dolu();
    } else if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') {
        Vlevo();
    } else if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') {
        Vpravo();
    }
});

function Nahoru() {
    for (let sloupec = 1; sloupec < 5; sloupec++) {
        for (let radek = 1; radek < 5; radek++) {
            let pin1 = "pin" + sloupec
            pin1 = pin1 + radek
            let kontrola = document.getElementById(pin1)
            if (kontrola && kontrola.innerText === "")
                pin2 = "pin" + sloupec;
                dalsiradek = radek + 1;
                pin2 = pin2 + dalsiradek;


        }
        
    }
}

Nahoru();

function Dolu() {
    console.log('Klávesa S nebo šipka dolů byla stisknuta!');
}

function Vlevo() {
    console.log('Klávesa A nebo šipka vlevo byla stisknuta!');
}

function Vpravo() {
    console.log('Klávesa D nebo šipka vpravo byla stisknuta!');
}































let startX;
let startY;
let endX;
let endY;

document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    handleSwipe();
});

function handleSwipe() {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Vodorovný tah
        if (deltaX > 0) {
            // Tah doprava
            Vpravo();
        } else {
            // Tah doleva
            Vlevo();
        }
    } else {
        // Svislý tah
        if (deltaY > 0) {
            // Tah dolů
            Dolu();
        } else {
            // Tah nahoru
            Nahoru();
        }
    }
}


