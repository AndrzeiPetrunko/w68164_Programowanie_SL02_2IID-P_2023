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
    }
    speedChange(speed) {
        this.speed += 10
    }
}

let car = new samochod("BMW", speed)
console.log(car)
car.speedChange(speed)
console.log(car)


