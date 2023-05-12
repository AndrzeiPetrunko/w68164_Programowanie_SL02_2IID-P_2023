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
let selected;
const btn1 = document.getElementById("i1");
const btn2 = document.getElementById("i2");
const btn3 = document.getElementById("i3");
btn1.addEventListener('click', ()=>handleClick(btn1));
btn2.addEventListener('click', ()=>handleClick(btn2));
btn3.addEventListener('click', ()=>handleClick(btn3));
console.log(btn1)

function handleClick(btn){
if(selected){
    selected.classList.remove("selected");
}
    btn.classList.add("selected")
    selected = btn
}
// Lab 6 - Zad 3
const btn4 = document.getElementById("i4")
btn4.addEventListener('click', transparencyChange())
// Lab 6 - Zad 4
