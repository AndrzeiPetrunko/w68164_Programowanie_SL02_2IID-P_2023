// Lab 4 - Zad 1
function Ksiazka(tytul, autor, rok) {
    this.tyt = tytul;
    this.aut = autor;
    this.rok = rok;
    this.fullNazwa = function(){
        return this.tyt + ' - ' + this.aut +  ` (${this.rok})`
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

//Lab 4 - Zad 3 & 4
function Car(marka, model, rok_p, kolor, speed) {
    this.marka = marka
    this.model = model
    this.rok_p = rok_p
    this.kolor = kolor
    this.speed = speed
    this.acceleration = function(n) {
        this.speed = this.speed + n
    }
    this.age = function(){
        let year = new Date()
        return `Wiek tego samochodu: ${year.getFullYear() - this.rok_p} lat.`
    }
}
const carNew = new Car("BMW","X5",2015,"Niebieski",50 )
console.log(carNew)
carNew.acceleration(50)
console.log(carNew.age())
// Lab 4 - Zad 5 & 6
function newObject(){
    bok1 = parseInt(document.getElementById("bok1").value)
    bok2 = parseInt(document.getElementById("bok2").value)
    if (bok1 <= 0 || bok2 <= 0){
        console.log("Jedna z liczb jest równa lub mniejsza od zera !!!")
        return
    }
    function prostokat(bok1, bok2) {
        this.width = bok1;
        this.height = bok2;
        this.pole = function() {
            return `Pole tego prostokąta: ${this.height * this.width} jendostek kwadratowych.`
        }
        this.obwod = function(){
            return `Obwód tego prostokąta: ${this.height * 2 + this.width * 2} jednostek.`
        }
        this.ifKwadrat = function() {
            if (this.height === this.width) {
                return "To jest kwadrat."
            }
            else {
                return "To jest prostokąt."
            }
            }
        }
    const prostokaT = new prostokat(bok1,bok2)
    console.log(`${prostokaT.pole()} \n\n${prostokaT.obwod()} \n\n${prostokaT.ifKwadrat()}`)
}


