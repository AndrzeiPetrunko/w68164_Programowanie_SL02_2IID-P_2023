// Lab 6 - Zad 1
/*let n = prompt("Podaj liczbę dla Zadania 1: ")
function silnia(n) {
    if (n == 0 || n == 1 ) {
        return 1
    }
    else {
        do {
            return n * silnia(n - 1)
        }
        while (n > 0)
    }
}
console.log(`Silnia ${n} jest równa ${silnia(n)}`) */
// Lab 6 - Zad 2
// Lab 6 - Zad 4
const btn = document.getElementById('123')
btn.addEventListener('click', clickButton)
var txt = document.getElementById('txt1')
clickIs = false
const clickButton = function(){
        if (clickIs == false) {
            txt.textContent = "Hejka"
            clickIs = true
        }
        else {
            txt.textContent = " "
            clickIs = false
        }
}