const siebHoehe= 10;
const siebBreite= 10;
const groessteZahl= siebHoehe*siebBreite - 1;
const sliderMax = 2000
const sliderMin = 0
const slideraktuell = 1000

/* View Model für Sieb. Für jede Zelle im Sieb ein Feld im Array.
   Mit render() wird dieses Array als Sieb dargestellt. Steht in 
   einem Feld eine Zahl, wird die Zahl in die Zelle geschrieben.
   Steht im Feld ein X, wird die Zelle schwarz ausgefüllt. Steht
   im Feld nichts (also ''), wird die Zelle geleert.
*/
var ZahlenImSieb= []

function ZahlenAuflisten() {
    var zahl= 0
    while(zahl<= groessteZahl) {
        ZahlenImSieb.push( zahl);
        zahl= zahl+1
    }
}

// Siebt die Zahlen im View Model
// function Sieben() {
//     var Siebzahl=2 // Zahl, die gesiebt wird
//     var Summand=2 // Anzahl Zahlen, die gesprungen werden

//     while(Summand<= GroessteZahl/2){
//         Siebzahl=Summand;    
//         Siebzahl= Siebzahl+Siebzahl;
//         while(Siebzahl<= GroessteZahl) {
//             ZahlenImSieb[Siebzahl]= "X";
//             Siebzahl= Siebzahl+Summand;
//         }
//         Summand = Summand+1;   
//     }  
// }



// gibt True zurück, falls die Zelle schwarz ausgefüllt wurde
function ZelleSchwarzAusfuellenFallsEineZahlDrinSteht( zellenIndex) {
    var ret= false
    if (ZahlenImSieb[zellenIndex] === zellenIndex){
        ZahlenImSieb[zellenIndex] = "X"
        ret = true
    }
    return ret    
}

// gibt true zurück, falls die Zelle geleert wurde
function ZelleLeerenFallsSchwarzAusgefuellt ( zellenIndex){
    var ret = false
    if (ZahlenImSieb[zellenIndex] === "X"){
        ZahlenImSieb[zellenIndex] = "";
        ret = true
    }
    return ret
}

/* Solange die Zelle mit der aktuellen Siebzahl schon leer ist, 
   wird die aktuelle Siebzahl um den Summanden erhöht
*/
function SiebzahlUmDenSummandenErhoehenSolangeDieSiebzahlZelleGeleertIst (){
    while (ZahlenImSieb[aktuelleSiebzahl] === ""){
        aktuelleSiebzahl += aktuellerSummand
        
    }
}

/* Wenn die aktuelle Siebzahl 2 ist, wird die aktuelle Siebzahl um den Summanden erhöht,
   es braucht aber eigentlich diese Funktion nicht, man könnte direkt die Variable aktuelleSiebzahl = 4
   definieren
*/
function SiebzahlUmDenSummandenErhoehenWennDieSiebzahl2Ist(){
    if (aktuelleSiebzahl === 2) {
        aktuelleSiebzahl += aktuellerSummand
    }
}

/* Erhöht den Summanden um eins, falls die aktuelle Siebzahl
   grösser als die Konstante groessteZahl ist
*/
function SummandenErhoehenFallsDieSiebzahlGroesserAlsDieGroessteZahlIst (){
    if (aktuelleSiebzahl > groessteZahl){
        aktuellerSummand++

    }
}

/* Definiert den Wert der Variablen aktuelleSiebzahl neu, falls die aktuelleSiebzahl grösser als die groessteZahl ist. 
   Der Wert der Variablen aktuelleSiebzahl entspricht nun zweimal dem Wert der Variable aktuellerSummand.
*/
function SiebzahlNeuFestlegenFallsDieSiebzahlGroesserAlsDieGroessteZahlIst(){
    if (aktuelleSiebzahl > groessteZahl){
        aktuelleSiebzahl = 2* aktuellerSummand
    }
    

}


var aktuellerSummand = 2;
var aktuelleSiebzahl = 2;
/* Treibt das Sieben vorwärts. Jenachdem wird ein Siebschritt ausgeführt
   oder nicht. Gibt True zurück, falls ein Siebschritt ausgeführt wurde,
   sonst False.
*/
function siebSchritt1(){   
    var ret = false

    if( ZelleSchwarzAusfuellenFallsEineZahlDrinSteht( 0)) {
        return true;
    }
    
    if( ZelleLeerenFallsSchwarzAusgefuellt( 0)) {
        return true;
    }
    if( ZelleSchwarzAusfuellenFallsEineZahlDrinSteht( 1)) {
        return true;
    }
    if( ZelleLeerenFallsSchwarzAusgefuellt( 1)) {
        return true;
    }
    SiebzahlUmDenSummandenErhoehenWennDieSiebzahl2Ist()

    if (aktuelleSiebzahl <= groessteZahl){
        if ( ZelleSchwarzAusfuellenFallsEineZahlDrinSteht (aktuelleSiebzahl)){
            return true;
        }
        if ( ZelleLeerenFallsSchwarzAusgefuellt (aktuelleSiebzahl)) {
            aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
            return true;
        }
        SiebzahlUmDenSummandenErhoehenSolangeDieSiebzahlZelleGeleertIst()       
    }
    SummandenErhoehenFallsDieSiebzahlGroesserAlsDieGroessteZahlIst() 
    SiebzahlNeuFestlegenFallsDieSiebzahlGroesserAlsDieGroessteZahlIst()
    SiebzahlUmDenSummandenErhoehenSolangeDieSiebzahlZelleGeleertIst()

    if (ZelleSchwarzAusfuellenFallsEineZahlDrinSteht(aktuelleSiebzahl)){
        return true;
    }
    
    if (ZelleLeerenFallsSchwarzAusgefuellt(aktuelleSiebzahl)){
        return true;
    }
    
}   
    
    
    /* Steht in der ersten Zelle eine Zahl, so muss die erste Zelle
       schwarz ausgefüllt werden.
    */
//     if (ZahlenImSieb[0] === 0){
//         ZahlenImSieb[0] = "X";
//         ret = true
//     }
//     else{
//         /* Ist die erste Zelle schwarz ausgefüllt, so kann sie 
//            geleert werden.
//         */
//         if (ZahlenImSieb[0] === "X"){
//             ZahlenImSieb[0] = "";
//             ret = true
//         }
//         else{
//             if (ZahlenImSieb[1] === 1){
//                 ZahlenImSieb[1] = "X"
//                 ret = true
//             }
//             else{
//                 if (ZahlenImSieb[1] === "X"){
//                     ZahlenImSieb[1] = ""
//                     ret = true
//                 }
//                 else{
//                     if (aktuelleSiebzahl === 2){
//                         aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
//                     }
//                     if (aktuelleSiebzahl <= GroessteZahl){
//                         if (ZahlenImSieb [aktuelleSiebzahl] === aktuelleSiebzahl){
//                             ZahlenImSieb[aktuelleSiebzahl]= "X"
//                             ret = true
//                         }
//                         else{
//                             if (ZahlenImSieb[aktuelleSiebzahl] === "X"){
//                                 ZahlenImSieb [aktuelleSiebzahl] = ""
//                                 aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
//                                 ret = true
//                             }
//                             else{
//                                 while (ZahlenImSieb[aktuelleSiebzahl] === ""){
//                                     aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
//                                 }
//                             }
    
//                         }

//                     }
//                     else{
//                         aktuellerSummand = aktuellerSummand+1
//                         aktuelleSiebzahl = aktuellerSummand + aktuellerSummand
//                         while(ZahlenImSieb [aktuelleSiebzahl]=== ""){
//                             aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
//                         }
//                         if (ZahlenImSieb [aktuelleSiebzahl] === aktuelleSiebzahl) {
//                             ZahlenImSieb [aktuelleSiebzahl] = "X"
//                             ret = true
//                         }
//                         else{
//                             if (ZahlenImSieb [aktuelleSiebzahl] === "X"){
//                                 ZahlenImSieb [aktuelleSiebzahl] = ""
//                                 ret = true
//                             }
//                         }
        

//                     }   
       
//                 }
                          
//             }       
//         }
//     }
//   return ret  

// }  

function siebSchritt2() {
    while (aktuellerSummand <= groessteZahl){
        if(siebSchritt1()){
            break;
        }
    }
    

}



/* Bringt das Array ZahlenAuflisten ins View,
   der Inhalt des Arrays wird in Zellen in einer Tabelle geschrieben
*/
function render(){
    var body= document.getElementsByTagName( "body")[0]
    var sieb= document.getElementById( "sieb")
    if (sieb){                                   // wenn es ein Tag mit dem Namen "sieb" hat
        body.removeChild(sieb)                   // im Body soll das Kind "sieb" geloescht werden
    }
    sieb= document.createElement( "div")        
    sieb.id= "sieb"
    var table= document.createElement( "table")
    var tableHTML= ""

    for( var row= 0; row< siebHoehe; row++) {
         var rowHTML1 = ZahlenImSieb.slice( row* siebBreite, (row+1)* siebBreite).join("</td><td>")  // die Zahlen im definierten Bereich werden in Zellen geschrieben
         var rowHTML2 = "<tr><td>" + rowHTML1 + "</td></tr>"                                         // schreibt die Zahlen in den Zellen von rowHTML1 in einer Zeile <tr>
         rowHTML2 = rowHTML2.replace("<td>X</td>", "<td class=\"mystyle1\">X</td>")
         tableHTML= tableHTML + rowHTML2 
    }
    table.innerHTML= tableHTML
    sieb.appendChild( table);
    body.appendChild( sieb);
}





function nextStep() {
    siebSchritt2()
    render()
    var timeout= sliderMax- parseInt( myRange.value)
    setTimeout( nextStep, timeout ) //Als zweites Objekt werden hier die Millisekunden eingesetzt, diese sollen dem aktuellen Wert des Sliders entsprechen.
}



function wertAnzeigen(val){
    absatz.innerHTML = "Zeit in Millisekunden: " + (sliderMax-val); 
}



// Slider erstellen
var body = document.getElementsByTagName ("body") [0]
var myInput = document.getElementById ("myInput")
myInput = document.createElement ("div")
myInput.id = "myInput"
myInput.innerHTML = `<input id=\"my-range\" type=\"range\" min=\"${sliderMin}\" max=\"${sliderMax}\" value=\"${slideraktuell}\" class=\"slider\">`
var absatz = document.getElementById ("absatz")
absatz = document.createElement ("p")
absatz.id = "absatz"
absatz.innerHTML = "Zeit in Millisekunden: " 


body.appendChild (absatz)
body.appendChild (myInput)

var myRange= document.getElementById ("my-range")
myRange.oninput = function() {
    wertAnzeigen(this.value) 
}



// Button erstellen
 var body = document.getElementsByTagName("body")[0]
 var buttonB = document.getElementById ("buttonB")
 if (buttonB){
     body.removeChild (buttonB)
 }
 buttonB= document.createElement ("div")
 buttonB.id = "buttonB"
 buttonB.innerHTML= "<button>Next step</button>"
 buttonB.onclick= nextStep
 body.appendChild( buttonB)


ZahlenAuflisten()
render()












