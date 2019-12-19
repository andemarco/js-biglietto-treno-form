var genera = document.getElementById('genera')
genera.addEventListener('click',
  function() {
    // // Chiedere numero km
    var inputKm = document.getElementById('km');
    var kmDaPercorrere = (inputKm.value);

    // // Chiedere età
    var inputEta = document.getElementById('age');
    var fasciaEta = inputEta.value;

    // //Chiedere Nome e Cognome
    var inputName = document.getElementById('name');
    var name = inputName.value

    // //Generare Numero Carrozza
    var carriage = Math.floor(Math.random() * 10) + 1;

    //Generare Numero CP
    var cP = Math.floor(Math.random() * 10000) + 90000;

    // // Calcolo prezzo totale del viaggio (0.21/KM)
    var costoBiglietto = (0.21 * kmDaPercorrere);
    // // sconto del 20% per i minorenni
    var ticketTipe = 'Tariffa Standard';
    if (fasciaEta == 'minorenne' ) {
      costoBiglietto = costoBiglietto - (0.21*20/100);
      ticketTipe = 'Sconto Minorenne';
    // // 40% per gli over 65.
  } else if (fasciaEta == 'over 65') {
      costoBiglietto = costoBiglietto - (0.21*40/100);
      ticketTipe = 'Sconto Silver';
    }

    // // STAMPA BIGLIETTO
    //Nome
    document.getElementById('passengerName').innerHTML = name;
    //Offerta
    document.getElementById('ticketTipe').innerHTML = ticketTipe;
    //Codice CP
    document.getElementById('carriageNumber').innerHTML = carriage;
    //Carrozza
    document.getElementById('cpCode').innerHTML = cP;
    //costo Biglietto
    document.getElementById('ticketPrice').innerHTML ='€ ' + costoBiglietto.toFixed(2);
  }
);
