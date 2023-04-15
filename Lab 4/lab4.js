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

//Lab 4 - Zad 3
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
        return Number(year.getFullYear) - Number(this.rok_p)
    }
}
const carNew = new Car("BMW","X5",2015,"Niebieski",50 )
console.log(carNew)
carNew.acceleration(50)
console.log(carNew.age())

