// Emissionswerte der Kontinente
// Europa

var Europe08 : number = 4965.7;
var Europe18 : number = 4209.3;

/* Nordamerika */

var nAmerica08 : number = 6600.4;
var nAmerica18 : number = 6035.6;

/* Südamerika */

var sAmerica08 : number = 1132.6;
var sAmerica18 : number = 1261.5;

/* Afrika */

var Africa08: number = 1028;
var Africa18: number = 1235.5;

/* Asien */

var Asia08: number = 12954.7;
var Asia18: number = 16274.1; 

/* Australien */

var Australia08: number = 1993;
var Australia18: number = 2100.5

/* Gesamtemission der Welt 2018 */ 

var EmissionGes: number = Europe18 + nAmerica18 + sAmerica18 + Africa18 + Asia18 + Australia18;


/* allgemeine Funktion */

function continentValues(continent:string, wert08:number, wert18:number) {
    document.querySelector("#titleRegion").innerHTML= continent;
    document.querySelector("#emAbRegion").innerHTML= continent;
    document.querySelector("#emissionAbsolute").innerHTML= wert18 + "kg CO2";
    document.querySelector("#emissionRelative").innerHTML= ((wert18/EmissionGes)*100).toFixed(2) + "%";
    document.querySelector("#growthRatePercent").innerHTML= (((wert18/wert08)-1)*100).toFixed(2) + "%";
    document.querySelector("#growthRateAbsolute").innerHTML= (wert18-wert08).toFixed(2) + "kg CO2";

    document.querySelector(".chart").setAttribute("style", "height:" + ((wert18/EmissionGes)*100) + "%");
}

/* Events */
document.querySelector(".europe").addEventListener("click", function() {
    continentValues("Europe", Europe08, Europe18);
})

document.querySelector(".northamerica").addEventListener("click", function() {
    continentValues("North America", nAmerica08, nAmerica18);
})

document.querySelector(".southamerica").addEventListener("click", function() {
    continentValues("South America", sAmerica08, sAmerica18);
})

document.querySelector(".africa").addEventListener("click", function() {
    continentValues("Africa", Africa08, Africa18);
})

document.querySelector(".asia").addEventListener("click", function() {
    continentValues("Asia", Asia08, Asia18);
})

document.querySelector(".australia").addEventListener("click", function() {
    continentValues("Australia", Australia08, Australia18);
})