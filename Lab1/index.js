



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



