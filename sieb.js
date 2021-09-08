const siebHoehe= 10;
const siebBreite= 10;
const GroessteZahl= siebHoehe*siebBreite - 1;
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
    if (ZahlenImSieb[0] != "X"){
        ZahlenImSieb[0] = "X";
        ret = true
    }
    else{
        if (ZahlenImSieb[1] != "X"){
            ZahlenImSieb[1] = "X"
            ret = true
        }
        else{
            
            if (aktuelleSiebzahl == 2) {
                        aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
                        ZahlenImSieb[aktuelleSiebzahl]= "X"
                        aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
                        ret = true
                    }
            else{
                
                    while(ZahlenImSieb [aktuelleSiebzahl]== "X"){
                        aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand
                    }
                    if (aktuelleSiebzahl<= GroessteZahl){
                        ZahlenImSieb [aktuelleSiebzahl] = "X";
                        aktuelleSiebzahl = aktuelleSiebzahl + aktuellerSummand; 
                        ret = true                  
                    }
                    else{
                        aktuellerSummand = aktuellerSummand+1
                        aktuelleSiebzahl = aktuellerSummand + aktuellerSummand
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
        body.removeChild(sieb)                   // im Body soll das Kind "sieb" gelöscht werden
    }
    sieb= document.createElement( "div")        
    sieb.id= "sieb"

    var table= document.createElement( "table")
    var tableHTML= ""
    
    for( var row= 0; row< siebHoehe; row++) {
         var rowHTML1 = ZahlenImSieb.slice( row* siebBreite, (row+1)* siebBreite).join("</td><td>")  // die Zahlen im definierten Bereich werden in Zellen geschrieben
         var rowHTML2 = "<tr><td>" + rowHTML1 + "</td></tr>" // schreibt die Zahlen in den Zellen von rowHTML1 in einer Zeile <tr>
         tableHTML= tableHTML + rowHTML2 
    }
    table.innerHTML= tableHTML
    sieb.appendChild( table);
    body.appendChild( sieb);
}






    var body = document.getElementsByTagName("body")[0]
    var buttonB = document.getElementById ("buttonB")
    if (buttonB){
        body.removeChild (buttonB)
    }
    buttonB= document.createElement ("div")
    buttonB.id = "buttonB"
    buttonB.innerHTML= "<button>Next step</button>"
    buttonB.onclick= function() {
        siebSchritt2()
        render()
    }
    body.appendChild( buttonB)


ZahlenAuflisten()
render()


