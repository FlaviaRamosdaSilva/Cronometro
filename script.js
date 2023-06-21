
let cron
let h2 = document.querySelector("h2")
let hh = 0
let mm = 0
let ss = 0

function start() {
    cron = setInterval(function () {
        timer()
    }, 1000)
}

function stop() {
    clearInterval(cron)
}

function reset() {
    location.reload();
}

function timer() {
    ss++
    if (ss == 60) {
        ss = 0;
        mm++
    }
    if (mm == 60) {
        ss = 0;
        hh++
    }
    let format = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
    h2.innerHTML = format;
}

