// Lab 4 - Zad 1
function Ksiazka(tytul, autor, rok) {
    this.tyt = tytul;
    this.aut = autor;
    this.rok = rok;
    this.fullNazwa = function(){
        return this.tyt + ' - ' + this.aut +  `(${this.rok})`
}
}
    
const k1 = new Ksiazka("Harry Potter", "J.K. Rowling", "20XX")
console.log(k1.fullNazwa())