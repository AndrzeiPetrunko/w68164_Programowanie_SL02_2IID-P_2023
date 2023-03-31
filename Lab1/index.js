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
    var number = document.getElementById("number").value
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


// Lab 4 - Zad 1
function Ksiazka(tytul, autor, rok) {
    this.tyt = tytul;
    this.aut = autor;
    this.rok = rok;
    this.fullNazwa = function(){
        return this.tyt + ' - ' + this.aut + ' in ' + this.rok
}
}
    
const k1 = new Ksiazka("Harry Potter", "J.K. Rowling", "20XX")
console.log(k1.fullNazwa())


// Lab 4 - Zad 2
function Student(imie, nazwisko, num_alb, o1, o2, o3) {
this.name = imie;
this.surname = nazwisko;
this.num_alb = num_alb;
this.grade1 = o1;
this.grade2 = o2;
this.grade3 = o3;
this.fullInfo = function () {
    this.average = function() {
        return Math.round((o1 + o2 + o3) / 3)
    }
    return this.name + ' ' + this.surname + ', ' + this.num_alb + ', ' + ' średnia ocena: ' + this.average()
}
}
const stud1 = new Student("John", "Smith", "w12345", 3, 5, 5)
console.log(stud1.fullInfo())


//Lab 4 - Zad 3
function Car(marka, model, rok_p, kolor, speed) {
    this.marka = marka
    this
}
// lmao


