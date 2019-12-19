// Chiedere numero km
var inputKm = document.getElementById('km');
var kmDaPercorrere = parserInt(inputKm.value);

// Chiedere età
var inputEta = document.getElementById('age');
var fasciaEta = inputEta.value;
//Chiedere Nome e Cognome
var inputName = document.getElementById('name');
var name = inputName.value
// Calcolo prezzo totale del viaggio (0.21/KM)
var costoBiglietto = (0.21 * nkm);
console.log(costoBiglietto);
var messaggio = (costoBiglietto.toFixed(2));
// sconto del 20% per i minorenni
if (fasciaEta == 'minorenne' ) {
  costoBiglietto = costoBiglietto - (0.21*20/100);
// 40% per gli over 65.
} else if (fasciaEta == 'Over 65') {
  costoBiglietto = costoBiglietto - (0.21*40/100);
}
// STAMPA COSTO BIGLIETTO
document.getElementById('ticketTreno').innerHTML = ' € ' + messaggio;
