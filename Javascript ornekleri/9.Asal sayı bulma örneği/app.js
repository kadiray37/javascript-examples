let sayi = Number(prompt("Asal olup olmadığını kontrol etmek istediğiniz sayıyı giriniz: "));
let sonuc = true;
for (let i = 2; i <= Math.floor(sayi / 2); i++){
    if (sayi % i == 0) {
        sonuc = false;
        break;
    }
}
if (sonuc) {
    alert(sayi + " asal sayıdır.");
} else {
    alert(sayi + " asal sayı değildir.");
}


