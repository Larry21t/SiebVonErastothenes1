const siebHoehe= 20;
const siebBreite= 21;
const GroessteZahl= siebHoehe*siebBreite;
var ZahlenImSieb= []
function ZahlenAuflisten() {
    var zahl= 0
    while(zahl< GroessteZahl) {
        ZahlenImSieb.push( zahl);
        zahl= zahl+1
    }
}

function Sieben() {
    var a=2 // Zahl, die gesiebt wird
    var b=2 // Anzahl Zahlen, die gesprungen werden

    while(b<= GroessteZahl/2){
        a=b       
        a= a+a
        while(a< GroessteZahl) {
            ZahlenImSieb[a]= "X";
            a= a+b;
        }
        b = b+1;   
    }  
}

function Sieb() {
    ZahlenAuflisten()
    Sieben()
    ZahlenImSieb[0]= "X"
    ZahlenImSieb[1]= "X"
}

function render(){
    var body= document.getElementsByTagName( "body")[0]
    var sieb= document.getElementById( "sieb")
    if (sieb){
        body.removeChild(sieb)
    }
    sieb= document.createElement( "div")
    sieb.id= "sieb"

    var table= document.createElement( "table")
    var tableHTML= ""
    
    for( var row= 0; row< siebHoehe; row++) {
         var rowHTML1 = ZahlenImSieb.slice( row* siebBreite, (row+1)* siebBreite).join( "</td><td>")
         var rowHTML2 = "<tr><td>" + rowHTML1 + "</td></tr>"
         tableHTML= tableHTML + rowHTML2
    }
    table.innerHTML= tableHTML
    sieb.appendChild( table);
    body.appendChild( sieb);
}

Sieb();
render();









