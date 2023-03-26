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
    document.getElementById("p1").innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);


// Суть проги: у текстовому вікні ми даємо число, кнопкою запускаємо код. Він генерує число від 1 до 100. Кожен раз прога дає результат
// наше число більше/менше ніж число проги. Якщо вони однакові, то прога зупиняється, дає нам кількість спроб, за які вона знайшла нашу
// цифру і перезапускає сторінку. 



function game() {
    var number = document.getElementById("number").innerHTML
    let attempts = 0
    do {
        var rand_num = Math.round(100 * Math.random());
        attempts++;
    }
    while (number != rand_num)
    document.write(`Our number is found within ${attempts} attempts !!!`)
}
//прив'язазати код на кнопку!!!!
// element.removeEventListener("click", game); --- відв'язати від кнопки натискання


