let imie = document.getElementById("imie")
imie.addEventListener('input', () => {
 const imieReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!imieReg.test(field.value)){
    field.setCustomValidity("asdsasd")
}

 }
);


class samochod{
    constructor(a, speed){
        this.imie = a;
        this.speed = speed;
        this.speedChange = function(speed) {
            this.speed += 10
    }
       
    }
}

let car = new samochod("BMW", 12)
console.log(car)
car.speedChange()
console.log(car)


