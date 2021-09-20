const siebHoehe= 10;
const siebBreite= 10;
const GroessteZahl= siebHoehe*siebBreite - 1;
const SliderMax = 2000
const SliderMin = 0
const SliderAktuell = 1000
var ZahlenImSieb= []


function ZahlenAuflisten() {
    var zahl= 0
    while(zahl<= GroessteZahl) {
        ZahlenImSieb.push( zahl);
        zahl= zahl+1
    }
}

function Sieben() {
    var Siebzahl=2 // Zahl, die gesiebt wird
    var Summand=2 // Anzahl Zahlen, die gesprungen werden

    while(Summand<= GroessteZahl/2){
        Siebzahl=Summand;    
        Siebzahl= Siebzahl+Siebzahl;
        while(Siebzahl<= GroessteZahl) {
            ZahlenImSieb[Siebzahl]= "X";
            Siebzahl= Siebzahl+Summand;
        }
        Summand = Summand+1;   
    }  
}




var aktuellerSummand = 2;
var aktuelleSiebzahl = 2;
function siebSchritt1(){   
    var ret = false
    if (ZahlenImSieb[0] === 0){
        ZahlenImSieb[0] = "X";
        ret = true
    }
    else{
        if (ZahlenImSieb[0] === "X"){
            ZahlenImSieb[0] = "";
            ret = true
        }
        else{
            if (ZahlenImSieb[1] === 1){
                ZahlenImSieb[1] = "X"
                ret = true
            }
            else{
                if (ZahlenImSieb[1] === "X"){
                    ZahlenImSieb[1] = ""
                    ret = true
                }
                else{
                    if (aktuelleSiebzahl === 2){
                        aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
                    }
                    if (aktuelleSiebzahl <= GroessteZahl){
                        if (ZahlenImSieb [aktuelleSiebzahl] === aktuelleSiebzahl){
                            ZahlenImSieb[aktuelleSiebzahl]= "X"
                            ret = true
                        }
                        else{
                            if (ZahlenImSieb[aktuelleSiebzahl] === "X"){
                                ZahlenImSieb [aktuelleSiebzahl] = ""
                                aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
                                ret = true
                            }
                            else{
                                while (ZahlenImSieb[aktuelleSiebzahl] === ""){
                                    aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
                                }
                            }
    
                        }

                    }
                    else{
                        aktuellerSummand = aktuellerSummand+1
                        aktuelleSiebzahl = aktuellerSummand + aktuellerSummand
                        while(ZahlenImSieb [aktuelleSiebzahl]=== ""){
                            aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
                        }
                        if (ZahlenImSieb [aktuelleSiebzahl] === aktuelleSiebzahl) {
                            ZahlenImSieb [aktuelleSiebzahl] = "X"
                            ret = true
                        }
                        else{
                            if (ZahlenImSieb [aktuelleSiebzahl] === "X"){
                                ZahlenImSieb [aktuelleSiebzahl] = ""
                                ret = true
                            }
                        }
        

                    }   
       
                }
                          
            }       
        }
    }
  return ret  

}  

function siebSchritt2() {
    while (aktuellerSummand <= GroessteZahl){
        if(siebSchritt1()){
            break;
        }
    }
    

}




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
    var timeout= 2000- parseInt( myRange.value)
    setTimeout( nextStep, timeout ) //Als zweites Objekt werden hier die Millisekunden eingesetzt, diese sollen dem aktuellen Wert des Sliders entsprechen.
}



function wertAnzeigen(val){
    absatz.innerHTML = "Zeit in Millisekunden: " + (2000-val); 
}



// Slider erstellen

var body = document.getElementsByTagName ("body") [0]
var myInput = document.getElementById ("myInput")
myInput = document.createElement ("div")
myInput.id = "myInput"
myInput.innerHTML = `<input id=\"my-range\" type=\"range\" min=\"${SliderMin}\" max=\"${SliderMax}\" value=\"${SliderAktuell}\" class=\"slider\">`
var absatz = document.getElementById ("absatz")
absatz = document.createElement ("p")
absatz.id = "absatz"
absatz.innerHTML = "Zeit in Millisekunden: " 


body.appendChild (absatz)
body.appendChild (myInput)

var myRange= document.getElementById ("my-range")
myRange.oninput = function() {
    wertAnzeigen(this.value) 
    // nextStep(this.value)
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













