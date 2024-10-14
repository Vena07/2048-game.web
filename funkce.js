let barvypocet = 1;

function barvy(){
    let obevenibarev = document.getElementById('paleta');
    switch(barvypocet){
        case 1:
            obevenibarev.style.display = 'flex';
            barvypocet = 2;
            break;
        case 2:
            obevenibarev.style.display = 'none';
            barvypocet = 1;
            break;
    }
}