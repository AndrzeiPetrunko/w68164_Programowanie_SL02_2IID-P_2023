for (i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        continue

    }
    console.log(i + ", ")
}

var a, b;
a = prompt("Liczba 1")
b = prompt("Liczba 2")
console.log(Number(a) + Number(b))

var date = new Date();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	document.getElementById("p1").innerHTML = current_time;