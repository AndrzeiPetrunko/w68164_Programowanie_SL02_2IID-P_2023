function Alert() {
    alert("Zadanie 1")
}


console.log("Zadanie 2")


for (let i = 0; i <= 100; i++) {
    if (i%2==0) {
        console.log(i)
    }
} 

let a = Number(prompt("Pierwsza liczba:"));
let b = Number(prompt("Druga liczba:"));

console.log("Zadanie 3")

console.log(a + b)


function Zadanie4() {
    let Time = new Date()
    document.getElementById("p2").innerHTML = Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds()
    
}
setInterval(Zadanie4, 1000)
let tries = 0
function Game() {
    let num2 = Math.round(Math.random() * 10)
    let num1 = Number(document.getElementById("t1").value)
    if (num1 > num2){
        alert("Liczba jest większa od wylosowanej !!!")
        tries++
    }
    if (num1 < num2){
        alert("Liczba jest mniejsza od wylosowanej !!!")
        tries++
    }
    if (num1 === num2) {
        alert("Congrats !!!)
    }
}



