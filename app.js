// Kullanıcı ismi ekrana yazdırma

let userName = prompt("İsminizi Giriniz!");

let greeting = document.querySelector(".greeting");

if(userName == ""){
    alert("Boş Karakter!");
    greeting.innerHTML = "Boş Karakter!";
    greeting.style.color = "red";
}
else if (userName == null){
    alert("Girilmedi!");
    greeting.innerHTML = "Girilmedi!";
    greeting.style.color = "red";
}
else {
    greeting.innerHTML = `Merhaba ${userName}! Hoşgeldin!`;
};

// Saat

let saat = document.querySelector(`.saat`)
let dakika = document.querySelector(`.dakika`)
let saniye = document.querySelector(`.saniye`)
let gün = document.querySelector(`.gün`)

function tarihSaat() {
    const d = new Date();
    let dSaat = d.getHours();
    let dDakika = d.getMinutes();
    let dSaniye = d.getSeconds();
    let dDay = d.getUTCDay();

    saat.textContent = `${dSaat} :`
    dakika.textContent = `${dDakika} :`
    saniye.textContent = `${dSaniye}`
}

setInterval(tarihSaat, 1000); 