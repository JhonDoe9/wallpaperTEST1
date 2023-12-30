

function updateTime() {
    var dateInfo = new Date();

    /* time */
    var hr,
        _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
        sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
        ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateInfo.getHours() == 13) {
        hr = 23;
    } else if (dateInfo.getHours() > 24) {
        hr = dateInfo.getHours() - 24;
    } else {
        hr = dateInfo.getHours();
    }

    var currentTime = hr + ":" + _min + ":" + sec;

    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;


    /* date */
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
        month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        day = dateInfo.getDate();

    // store date
    var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

    document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

// print time and date once, then update them every second
updateTime();
setInterval(function () {
    updateTime()
}, 1000);

// CAMBIA VALORI PER SPOSTAMENTO

var posizioneIniziale = { x: 50, y: 50 };
var intervalloSpostamento;


function gestisciSpostamento(checkbox) {
    if (checkbox.checked) {
        // cambiare i numeri per spostamento
        spostaOggetto(50, 17);
    } else {
        spostaOggetto(posizioneIniziale.x, posizioneIniziale.y);
    }
}

function spostaOggetto(posizioneX, posizioneY) {
    var oggetto = document.getElementById('oggetto');
    oggetto.style.left = posizioneX + '%';
    oggetto.style.top = posizioneY + '%';
}

