// Lab 5 - Zad 1
/*let wiek = parseInt(prompt("Ile masz na lat?: "))
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
console.log(`${temperature} stopniów Celsjuzsa są równe ${temperature * 9/2 + 32} stopniom Fahrenheita.`) */
// Lab 5 - Zad 3
let list = [6,6,1,3,0,-7,6,-2,2]
function listDo(){
    console.log(`Nasza tablica: ${list}`)
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i]

    }
    console.log(`Suma liczb tablicy: ${sum}`)
    //
    let even = []
    for (let i = 0; i < list.length; i++) {
        if (list[i]==0){
            continue
        }
        if (list[i]%2==0){
            even.push(list[i])
        }

    }
    console.log(`Parzyste liczby z tablicy: ${even}`)
    //
    let multiplication = []
    for (let i = 0; i < list.length; i++) {
        multiplication.push(" " + list[i] * 3 )
    }
    console.log(`Tablica, mnożona przez 3:${multiplication}`)
    //
    let n_albumu = 68164
    list.push(n_albumu)
    console.log(`Tablica z numerem albumu:${list}`)
    for (let i = 0; i < list.length; i++) {
        if(list[i] === n_albumu){
            console.log(`Indeks numeru albumu w tablice: ${i}`)
            list.pop()
        }
    }
    //
    console.log(`Średnią aretmetyczną jest: ${Math.round(sum / list.length * 100)/100}`)
    //
    biggest = list[0]
    for (let i = 1; i < list.length; i++) {
        if (list[i] > biggest){
            biggest = list[i]
        }
    }
    console.log(`Największa wartość tablicy: ${biggest}`)
    //
    repeat = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] == biggest){
            repeat++
        }
    }
    console.log(`Ilość wystąpień wybranej wartości: ${repeat}`)
// Lab 5 - Zad 4
fibonacci = [0,1]
for (let i = 2; i < 100; i++) {
 fibonacci.push(fibonacci[i-2]+fibonacci[i-1])
}
console.log(fibonacci)


}
listDo()