let barvypocet = 1;

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