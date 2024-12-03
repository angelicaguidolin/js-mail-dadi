/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


//CREARE UN ALERT CON IL NUMERO RANDOM PER L'UTENTE
//"                                   " PER IL COMPUTER
//SOMMARE I DUE NUMERI E FAR VINCERE IL PUNTEGGIO PIù ALTO
const urNumber= Number(alert(Math.trunc(Math.random()*6)+1))
console.log(urNumber)
const pcNumber= Number(alert(Math.trunc(Math.random()*6)+1))
console.log(pcNumber)
let totalNumber = urNumber + pcNumber
if(urNumber + pcNumber){
    totalNumber
}

