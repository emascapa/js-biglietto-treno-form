//prezzo biglietto al kilometro
const priceTicketKm = 0.21;


//assegno al bottone 'genera' e 'annulla' del form una variabile
const buttonTicketGenerator = document.getElementById('ticket_generator');
const buttonTicketEraser = document.getElementById('ticket_eraser');


//salvo in una variabiole il form a tendina dell'età
const ageForm = document.getElementById('age_form');


//assegno agli span della finestra che andrò a generare delle variabili
const nameSpan = document.getElementById('customer_name');
const discountSpan = document.getElementById('discount_offer');
const vagonSpan = document.getElementById('vagon');
const idTrainSpan = document.getElementById('id_train');
const priceSpan = document.getElementById('ticket_price');

const ticketWindow = document.getElementById('ticket_window');



//al click del bottone 'genera' succederano un po' di cose eheh
buttonTicketGenerator.addEventListener('click', function() {
    //salvo i valori inseriti nei form in variabili
    //aggiungo nome
    const customerName = document.getElementById('name_form').value;
    //aggiungo km
    const kmTrip = document.getElementById('km_form').value;
    //aggiungo opzione scelta età
    const ageChoice = ageForm.options[ageForm.selectedIndex].index;


    //il resto del codice viene eseguito se i valori inseriti nel form non sono nulli
    if (customerName === '' && kmTrip == '') {
        alert('Inserisci Nome passeggero e numero di chilometri da effettuare');
    } else if (customerName === '') {
        alert('Inserisci Nome passeggero');
    } else if (kmTrip == '') {
        alert('Inserisci numero di chilometri da effettuare');
    } else {
        
        //stampo in console
        console.log('hai cliccato');
        console.log(`Nome: ${customerName}`);
        console.log(`KM: ${kmTrip}`);
        console.log(`opzione età: ${ageChoice}`);

        //calcolo prezzo biglietto standard
        let ticketPrice = kmTrip * priceTicketKm;
        console.log(`prezzo iniziale: ${ticketPrice}`);

        //applico eventuale sconto
        let discount;
        if (ageChoice === 0) {
            ticketPrice = ticketPrice * 0.8;
            discount = 'Offerta Young';
        } else if (ageChoice === 2) {
            ticketPrice = ticketPrice * 0.6;
            discount = 'Offerta Senior';
        } else {
            discount = 'Tariffa Standard';
        }

        //arrotondo il risultato alle prime due cifre decimali
        ticketPrice = ticketPrice.toFixed(2);
        console.log(`prezzo finale: ${ticketPrice}`);

        //creo numero carrozza casuale
        const randomVagonNumber = Math.floor((Math.random() * 10) + 1);
        console.log(`numero carrozza: ${randomVagonNumber}`);

        //creo numero treno casuale
        const randomTrainNumber = Math.floor(Math.random() * 100000);
        console.log(`numero treno: ${randomTrainNumber}`);



        //vado a inserire i valori nella finestra generata
        nameSpan.innerHTML = customerName;
        discountSpan.innerHTML = discount;
        vagonSpan.innerHTML = randomVagonNumber;
        idTrainSpan.innerHTML = randomTrainNumber;
        priceSpan.innerHTML = `${ticketPrice} €`;


        //rendo la finestra del biglietto visibile
        ticketWindow.classList.add('d-block');
    }

});

buttonTicketEraser.addEventListener('click', function() {
    //cancello i valori nella finestra generata
    nameSpan.innerHTML = '';
    discountSpan.innerHTML = '';
    vagonSpan.innerHTML = '';
    idTrainSpan.innerHTML = '';
    priceSpan.innerHTML = '';

    //nascondo la finestra del biglietto 
    ticketWindow.classList.remove('d-block');
});