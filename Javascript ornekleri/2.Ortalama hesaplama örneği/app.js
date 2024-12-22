let vize1 = Number(prompt("1.vize sınav notunuzu giriniz: "));
let vize2 = Number(prompt("2.vize sınav notunuzu giriniz: "));
let final = Number(prompt("final sınav notunuzu giriniz: "));

let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4)

if (ortalama >= 60) {
    alert("Geçtiniz! Ortalamanız: " + ortalama);
}

else {
    alert("Kaldınız! Ortalamanız: " + ortalama);
};