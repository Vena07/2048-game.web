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