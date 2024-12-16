let currentTimeDisplay = document.getElementById("currentTimeDisplay");
let alarmSetTime = document.getElementById("alarmSetTime");
let alarmSound = document.getElementById("alarmSound");
let amPmSelector = document.getElementById("amPmSelector");
let inputs = document.getElementsByTagName("input");

function fun(input) {
    if (input.value.length === 1) {
        input.value = '0' + input.value;
    }
}

function clock() {
    let t = new Date();
    let date = t.toLocaleDateString('en-CA');
    let t1 = t.getHours() % 12 || 12;
    let t2 = t.getMinutes();
    t1 = t1 < 10 ? "0" + t1 : t1;
    t2 = t2 < 10 ? "0" + t2 : t2;

    currentTimeDisplay.innerHTML = t.toLocaleTimeString();

    let time = t1 + ":" + t2 + " " + (t.getHours() >= 12 ? "PM" : "AM");
    let time1 = inputs[1].value + ":" + inputs[2].value + " " + amPmSelector.value;

    if (time == time1 && inputs[0].value == date) {
        alarmSound.play();
        alarmSound.volume = 0.5;
    }
}

setInterval(clock, 1000);

function set() {
    let h = inputs[1].value;
    let m = inputs[2].value;
    let ap = amPmSelector.value;
    alarmSound.src = "ringtone.wav";
    if (h == "" || m == "" || ap == "") {
        alert("Please fill in all values");
        return;
    }

    let al = h + ':' + m + ' ' + ap;
    alarmSetTime.innerHTML = inputs[0].value + " at " + al;
}

function stop() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmSound.src = "";
}
