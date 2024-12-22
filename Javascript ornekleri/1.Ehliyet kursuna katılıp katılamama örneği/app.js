let yas = Number(prompt("yaşınızı giriniz: "));
let cash = Number(prompt("bütçenizi giriniz: "));

if (yas >= 18 && cash >= 3000) {
    alert("ehliyet kursuna katılabilirsiniz");
}
else {
    alert("ehliyet kursuna katılamayacaksınız");
};
