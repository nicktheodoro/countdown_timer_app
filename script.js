document.getElementById("timeTo").addEventListener("input", calcDateIntevarl)

function calcDateIntevarl() {

    let timeTo = document.querySelector('#timeTo')
    timeTo = Date.parse(timeTo.value)

    const now = Date.now()

    let interval = timeTo - now
    convertMiliseconds(interval)

    // select element
    document.querySelector('.clock-day').innerHTML = days
    document.querySelector('.clock-hours').innerHTML = hours + 3 // add 3 hours to brazil utc time
    document.querySelector('.clock-minutes').innerHTML = minutes
    document.querySelector('.clock-seconds').innerHTML = seconds

    // start dynamic counter of date
    startTimer = setInterval(calcDateIntevarl, 1000)

    if (now >= timeTo) {
            clearInterval(startTimer);
			document.querySelector('.clock-day').innerHTML = 'D'
			document.querySelector('.clock-hours').innerHTML = 'O'
			document.querySelector('.clock-minutes').innerHTML = 'N'
			document.querySelector('.clock-seconds').innerHTML = 'E'
	}
}

function convertMiliseconds(ms) {

    days     = Math.floor(ms / 86400000)
    seconds  = Math.floor(( ms / 1000 ) % 60)
    minutes  = Math.floor(( ms / 60000 ) % 60)
    hours    = Math.floor(( ms / 3600000 ) % 24)
}