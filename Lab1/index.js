for (i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        continue

    }
    console.log(i + ", ")
}

var a, b;
a = prompt("Liczba 1")
b = prompt("Liczba 2")
console.log(Number(a) + Number(b))

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);