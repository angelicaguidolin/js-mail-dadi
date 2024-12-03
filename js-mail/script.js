//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Non è necessario provvedere alla validazione delle email.

//CREARE UNA ARRAY CON LA LIASTA DELLE MAIL
const mail= ['Nathan@gmail.com','Ed@gmail.com','Fabio@gmail.com','Phil@gmail.com','Carlo@gmail.com', 'Lewis@gmail.com','Luca@gmail.com'];
//CHIEDERE ALL'UTENTE LA SUA EMAIL
let urMail= prompt("Inserisci qui la tua email");
//ATTRAVERSARE LA ARRAY PER CAPIRE SE C'è LA MAIL DELL'UTENTE
let isUrMailHere = false;
        //SE L'ESITO è POSITIVO STAMPARE UN PROMPT ("sei nella lista")
        //ALTRIMENTI ("non sei nella lista")
for(let i = 0; i< mail.length; i++){
    if(mail[i] === urMail){
        isUrMailHere= true
    }

}
if(isUrMailHere){
    alert("la tua mail è nella lista");
} else{
    alert("l tua mail non c'è nella lista")
}å