// Lab 6 - Zad 1
let n = prompt("Podaj liczbę dla Zadania 1: ")
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
console.log(`Silnia ${n} jest równa ${silnia(n)}`)
// Lab 6 - Zad 2
