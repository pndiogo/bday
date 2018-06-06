// card selections
const $cardPaulo = $('#paulo');
const $cardCatarina = $('#catarina');
const $cardInes = $('#ines');
const $cardSara = $('#sara');

// select and apply animate animation to header
$('.header').addClass('animated bounceIn');

// select and apply animate animation to card img
$('.card-img-top').each(function(index) {        
    var that = this;
    var t = setTimeout(function() { 
        console.log(that);
        $(that).addClass('animated bounce'); 
    }, 225 * index);        
});

// user anniversaries in milliseconds
const persons = {
    paulo: {
        id: 'paulo',
        fullName: 'Paulo Diogo',
        date: '15 Fevereiro',
        bDay: new Date('Feb 15, 2019 16:30:00').getTime(),
    },
    catarina: {
        id: 'catarina',
        fullName: 'Catarina Lopes',
        date: '25 Fevereiro',
        bDay: new Date('Feb 25, 2019 13:15:00').getTime()
    },
    ines: {
        id: 'ines',
        fullName: 'Inês Diogo',
        date: '5 Julho',
        bDay: new Date('Jul 5, 2018 18:18:00').getTime()
    },
    sara: {
        id: 'sara',
        fullName: 'Sara Diogo',
        date: '30 Setembro',
        bDay: new Date('Sep 30, 2018 05:55:00').getTime()
    },
    insertNameAndDate: (user) => {
        // find card
        const $card = $('#' + user.id);
        // display full name
        $card.find('.card-title').text(user.fullName);
        // display date
        $card.find('.card-subTitle').text(user.date);
    }
}

// function invocations to add names and birthday date
persons.insertNameAndDate(persons.paulo);
persons.insertNameAndDate(persons.catarina);
persons.insertNameAndDate(persons.ines);
persons.insertNameAndDate(persons.sara);

// update every second
const intvl = setInterval(() => {

    // time calculations
    const dateCalculations = (user) => {
        
        // get todays date and time in milliseconds
        const now = new Date().getTime();
        // distance from now to birthday date
        const date = user.bDay;
        const distance = date - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / (1000));

        // display result
        $('#' + user.id).find('.card-text').html(`
        <div>${days}<span> Days</span></div>
        <div>${hours}<span> Hours</span></div>
        <div>${mins}<span> Minutes</span></div>
        <div>${seconds}<span> Seconds</span></div>
        `);

        // update progressbar
        const daysLeft = (((365 - days) * 100)/365).toFixed();
        $('#' + user.id).find('.progress-bar').attr({
            style: "width: " + daysLeft + "%",
            "aria-valuenow": daysLeft
        });

        // if launch date passed
        if(distance < 0) {
            // stop countdown
            clearInterval(intvl);
            // style and output text
            countdown.style.color = '#17a2b8';
            countdown.innerHTML = 'Parabéns!';
        }
    }
    dateCalculations(persons.paulo);
    dateCalculations(persons.catarina);
    dateCalculations(persons.ines);
    dateCalculations(persons.sara);
}, 1000);