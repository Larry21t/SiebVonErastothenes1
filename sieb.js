const GroessteZahl= 400;
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









