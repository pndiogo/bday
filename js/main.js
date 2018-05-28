// card selections
const $cardPaulo = $('#paulo');
const $cardCatarina = $('#catarina');
const $cardInes = $('#ines');
const $cardSara = $('#sara');

// anniversaries in milliseconds
const persons = {
    paulo: {
        id: 'paulo',
        fullName: 'Paulo Diogo',
        date: '15 Fevereiro',
        bDay: new Date('Feb 15, 2019 00:00:00').getTime(),
    },
    catarina: {
        name: 'Catarina Lopes',
        bDay: new Date('Feb 25, 2019 00:00:00').getTime()
    },
    ines: {
        name: 'Inês Diogo',
        bDay: new Date('Jul 5, 2018 00:00:00').getTime()
    },
    sara: {
        name: 'Sara Diogo',
        bDay: new Date('Set 30, 2018 00:00:00').getTime()
    },
    insertNameAndDate: (idName) => {
        // find card
        const $card = $('#' + idName);
        // display full name
        $card.find('.card-title').text(this.idName.fullName);
        // display date
        $card.find('.card-subTitle').text(this.idName.date);
    }
}

persons.insertNameAndDate(persons.paulo.id);

// update every second
const intvl = setInterval(() => {
    // get todays date and time (ms)
    const now = new Date().getTime();
    
    // distance from now to launch date
    const distance = persons.paulo.bDay - now;
    
    // time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));
    
    // display result
    $cardPaulo.find('.card-text').html(`
        <div>${days}<span> Days</span></div>
        <div>${hours}<span> Hours</span></div>
        <div>${mins}<span> Minutes</span></div>
        <div>${seconds}<span> Seconds</span></div>
    `);

    // if launch date passed
    if(distance < 0) {
        // stop countdown
        clearInterval(intvl);
        // style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Parabéns!';
    }
}, 1000);