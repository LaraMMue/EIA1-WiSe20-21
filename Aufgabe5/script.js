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
/* Emissionswerte Europa */
console.log("Europa:");
console.log("Die Emission von Europa im Jahr 2018 ist: " + Europe18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + EuropeProzentWelt + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + EuropeVerglProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + EuropeVerglZahl + " kg CO2");
/* Emissionswerte Nordamerika */
console.log("Nordamerika:");
console.log("Die Emission von Nordamerika im Jahr 2018 ist: " + nAmerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + nAmericaProzentWelt + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + nAmericaVerglProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + nAmericaVerglZahl + " kg CO2");
/* Emissionswerte Südamerika */
console.log("Südamerika:");
console.log("Die Emission von Südamerika im Jahr 2018 ist: " + sAmerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + sAmericaProzentWelt + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um + " + sAmericaVerglProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das + " + sAmericaVerglZahl + " kg CO2");
/* Emissionswerte Afrika */
console.log("Afrika:");
console.log("Die Emission von Afrika im Jahr 2018 ist: " + Africa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + AfricaProzentWelt + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um + " + AfricaVerglProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das + " + AfricaVerglZahl + " kg CO2");
/* Emissionswerte Asien */
console.log("Asien:");
console.log("Die Emission von Asien im Jahr 2018 ist: " + Asia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + AsiaProzentWelt + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um + " + AsiaVerglProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das + " + AsiaVerglZahl + " kg CO2");
/* Emissionswerte Australien */
console.log("Australien:");
console.log("Die Emission von Australien im Jahr 2018 ist: " + Australia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + AustraliaProzentWelt + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um + " + AustraliaVerglProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das + " + AustraliaVerglZahl + " kg CO2");
//# sourceMappingURL=script.js.map