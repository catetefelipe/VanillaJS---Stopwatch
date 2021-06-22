
var h = 0;
var m = 0;
var s = 0;

var time = 1000; //Equals one second
var stopwatch;



function start() {
    stopwatch = setInterval(() => { timer() }, time);
}

function pause() {
    clearInterval(stopwatch);
}

function reset() {
    clearInterval(stopwatch);
    h = 0;
    m = 0;
    s = 0;

    document.getElementById("counter").innerText = "00:00:00";
}

function timer() {
    s++;

    if (s == 59) {
        s = 0;
        m++;
    }

    if (m == 59) {
        m = 0;
        h++;
    }



    var format = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s); /* ? means if so, than add... AND : means if not than keep it */
        document.getElementById("counter").innerText = format;

        return format;
}