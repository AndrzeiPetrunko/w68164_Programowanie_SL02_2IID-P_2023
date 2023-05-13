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
  let button = document.querySelector('#i4')
  button.addEventListener('click', function(){
    let number = Math.floor(Math.random()*3 + 1 );
    let element = document.querySelector('#el'+number);
    if(element.style.visibility == ''){
        element.style.visibility = 'hidden'
    }
    else{
        element.style.visibility = '';  
    }

  })
// Lab 6 - Zad 4
let bttn = document.getElementById("123")
let lista = document.getElementById("lista")
bttn.addEventListener('click',()=>{
let li = document.createElement('li')
li.textContent = document.getElementById('txt1').value
lista.appendChild(li)
})
// Lab 6 - Zad 5
let btn5 = document.getElementById('btn5')
let table = document.getElementById('table')
btn5.addEventListener('click', ()=>{
let tr = document.createElement('tr')
let td1 = document.createElement("td")
let td2 = document.createElement("td")
td1.textContent = document.getElementById('txt1').value
td2.textContent = document.getElementById('txt2').value
tr.appendChild(td1)
tr.appendChild(td2)
table.appendChild(tr)
})
