// Lab 5 - Zad 1
let wiek = parseInt(prompt("Ile masz na lat?: "))
if (wiek >= 18){
    alert("Jesteś pełnoletni.")
}
else if (wiek < 0) {
    alert("Jest podana błądna liczba !!!")
}
else {
    alert("Jesteś niepołnoletni.")
}
// Lab 5 - Zad 2
let temperature = parseInt(prompt("Podaj temperaturę (Celsjusza): "))
console.log(`${temperature} stopniów Celsjuzsa są równe ${temperature * 9/2 + 32} stopniom Fahrenheita.`)
