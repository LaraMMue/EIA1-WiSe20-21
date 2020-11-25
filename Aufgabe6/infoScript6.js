// Emissionswerte der Kontinente
// Europa
var Europe08 = 4965.7;
var Europe18 = 4209.3;
/* Nordamerika */
var nAmerica08 = 6600.4;
var nAmerica18 = 6035.6;
/* Südamerika */
var sAmerica08 = 1132.6;
var sAmerica18 = 1261.5;
/* Afrika */
var Africa08 = 1028;
var Africa18 = 1235.5;
/* Asien */
var Asia08 = 12954.7;
var Asia18 = 16274.7;
/* Australien */
var Australia08 = 1993;
var Australia18 = 2100.5;
/* Gesamtemission der Welt 2018 */
var EmissionGes = Europe18 + nAmerica18 + sAmerica18 + Africa18 + Asia18 + Australia18;
// Berechnungen
/* Europa */
var EuropeProzentWelt = ((Europe18 / EmissionGes) * 100).toFixed(2);
var EuropeVerglProzent = (((Europe18 / Europe08) - 1) * 100).toFixed(2);
var EuropeVerglZahl = (Europe18 - Europe08).toFixed(2);
/* Nordamerika */
var nAmericaProzentWelt = ((nAmerica18 / EmissionGes) * 100).toFixed(2);
var nAmericaVerglProzent = (((nAmerica18 / nAmerica08) - 1) * 100).toFixed(2);
var nAmericaVerglZahl = (nAmerica18 - nAmerica08).toFixed(2);
/* Südamerika */
var sAmericaProzentWelt = ((sAmerica18 / EmissionGes) * 100).toFixed(2);
var sAmericaVerglProzent = (((sAmerica18 / sAmerica08) - 1) * 100).toFixed(2);
var sAmericaVerglZahl = (sAmerica18 - sAmerica08).toFixed(2);
/* Afrika */
var AfricaProzentWelt = ((Africa18 / EmissionGes) * 100).toFixed(2);
var AfricaVerglProzent = (((Africa18 / Africa08) - 1) * 100).toFixed(2);
var AfricaVerglZahl = (Africa18 - Africa08).toFixed(2);
/* Asien */
var AsiaProzentWelt = ((Asia18 / EmissionGes) * 100).toFixed(2);
var AsiaVerglProzent = (((Asia18 / Asia08) - 1) * 100).toFixed(2);
var AsiaVerglZahl = (Asia18 - Asia08).toFixed(2);
/* Australien */
var AustraliaProzentWelt = ((Australia18 / EmissionGes) * 100).toFixed(2);
var AustraliaVerglProzent = (((Australia18 / Australia08) - 1) * 100).toFixed(2);
var AustraliaVerglZahl = (Australia18 - Australia08).toFixed(2);
/* ----------------------------------------------------------------- */
/* Funktion Europa */
function Europa() {
    document.getElementById("titleRegion").innerHTML = "Europe";
    document.getElementById("emAbRegion").innerHTML = "Europe";
    document.getElementById("emissionAbsolute").innerHTML = Europe18 + "kg CO2";
    document.getElementById("emissionRelative").innerHTML = EuropeProzentWelt + "%";
    document.getElementById("growthRatePercent").innerHTML = EuropeVerglProzent + "%";
    document.getElementById("growthRateAbsolute").innerHTML = EuropeVerglZahl + "kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + EuropeProzentWelt + "%");
}
document.querySelector(".europe").addEventListener('click', Europa);
/* Funktion Nordamerika */
function Nordamerika() {
    document.getElementById("titleRegion").innerHTML = "North America";
    document.getElementById("emAbRegion").innerHTML = "North America";
    document.getElementById("emissionAbsolute").innerHTML = nAmerica18 + "kg CO2";
    document.getElementById("emissionRelative").innerHTML = nAmericaProzentWelt + "%";
    document.getElementById("growthRatePercent").innerHTML = nAmericaVerglProzent + "%";
    document.getElementById("growthRateAbsolute").innerHTML = nAmericaVerglZahl + "kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + nAmericaProzentWelt + "%");
}
document.querySelector(".northamerica").addEventListener('click', Nordamerika);
/* Funktion Südamerika */
function SouthAmerica() {
    document.getElementById("titleRegion").innerHTML = "South America";
    document.getElementById("emAbRegion").innerHTML = "South America";
    document.getElementById("emissionAbsolute").innerHTML = sAmerica18 + "kg CO2";
    document.getElementById("emissionRelative").innerHTML = sAmericaProzentWelt + "%";
    document.getElementById("growthRatePercent").innerHTML = sAmericaVerglProzent + "%";
    document.getElementById("growthRateAbsolute").innerHTML = sAmericaVerglZahl + "kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + sAmericaProzentWelt + "%");
}
document.querySelector(".southamerica").addEventListener('click', SouthAmerica);
/* Funktion Afrika */
function Africa() {
    document.getElementById("titleRegion").innerHTML = "Africa";
    document.getElementById("emAbRegion").innerHTML = "Africa";
    document.getElementById("emissionAbsolute").innerHTML = Africa18 + "kg CO2";
    document.getElementById("emissionRelative").innerHTML = AfricaProzentWelt + "%";
    document.getElementById("growthRatePercent").innerHTML = AfricaVerglProzent + "%";
    document.getElementById("growthRateAbsolute").innerHTML = AfricaVerglZahl + "kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + AfricaProzentWelt + "%");
}
document.querySelector(".africa").addEventListener('click', Africa);
/* Funktion Asien */
function Asia() {
    document.getElementById("titleRegion").innerHTML = "Asia";
    document.getElementById("emAbRegion").innerHTML = "Asia";
    document.getElementById("emissionAbsolute").innerHTML = Asia18 + "kg CO2";
    document.getElementById("emissionRelative").innerHTML = AsiaProzentWelt + "%";
    document.getElementById("growthRatePercent").innerHTML = AsiaVerglProzent + "%";
    document.getElementById("growthRateAbsolute").innerHTML = AsiaVerglZahl + "kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + AsiaProzentWelt + "%");
}
document.querySelector(".asia").addEventListener('click', Asia);
/* Funktion Australien */
function Australia() {
    document.getElementById("titleRegion").innerHTML = "Australia";
    document.getElementById("emAbRegion").innerHTML = "Australia";
    document.getElementById("emissionAbsolute").innerHTML = Australia18 + "kg CO2";
    document.getElementById("emissionRelative").innerHTML = AustraliaProzentWelt + "%";
    document.getElementById("growthRatePercent").innerHTML = AustraliaVerglProzent + "%";
    document.getElementById("growthRateAbsolute").innerHTML = AustraliaVerglZahl + "kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + AustraliaProzentWelt + "%");
}
document.querySelector(".australia").addEventListener('click', Australia);
//# sourceMappingURL=infoScript6.js.map