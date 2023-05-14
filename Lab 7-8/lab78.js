let imie = document.getElementById("imie")
imie.addEventListener('input', () => {
 const imieReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!imieReg.test(imie.value)){
    imie.setCustomValidity("halo?")
 }

 }
);



