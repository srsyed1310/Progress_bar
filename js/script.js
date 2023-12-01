const number_65 = document.querySelector('#number_65');
const number_100 = document.querySelector('#number_100');
const number_80 = document.querySelector('#number_80');

let count = 0;

setInterval(() => {
    if (count == 65) {
        clearInterval();
    } else {
        count += 1;
        number_65.innerHTML = count + "%";
    }
}, 30);

// Additional code for the 100% counter

let count100 = 0;

setInterval(() => {
    if (count100 == 100) {
        clearInterval();
    } else {
        count100 += 1;
        number_100.innerHTML = count100 + "%";
    }
}, 30);

// Additional code for the 80% counter
let count80 = 0;

setInterval(() => {
    if (count80 == 80) {
        clearInterval();
    } else {
        count80 += 1;
        number_80.innerHTML = count80 + "%";
    }
}, 30);
