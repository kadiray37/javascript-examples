let kilo = Number(prompt("kilonuzu giriniz: "));
let boy = Number(prompt("uzunluğunuzu giriniz: "));

let kiloIndeksi = kilo / (boy * 2);

if (kiloIndeksi < 18.5) {
    alert("İdeal kilonun altındasınız kilo endeksiniz: " + kiloIndeksi);
}
else if (kiloIndeksi >= 18.5 && kiloIndeksi <= 24.9) {
    alert("İdeal kilodasınız kilo endeksiniz: " + kiloIndeksi);
}
else if (kiloIndeksi >= 25 && kiloIndeksi <= 29.9) { 
    alert("ideal kilonun üstündesiniz kilo endeksiniz: " + kiloIndeksi);
}
else if (kiloIndeksi >= 30 && kiloIndeksi <= 39.9) {
    alert("ideal kilonun çok üstündesin(obez) kilo endeksiniz: " + kiloIndeksi);
}
else if (kiloIndeksi >= 40) {
    alert("ideal kilonun çok üstündesin(morbid obez) kilo endeksiniz: " + kiloIndeksi);
}
else {
    alert("Geçersiz değer girdiniz!");
}