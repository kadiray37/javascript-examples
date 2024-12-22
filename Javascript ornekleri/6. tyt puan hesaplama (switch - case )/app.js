let turkceDogru, TurkceYanlıs = 0;
let matematikDogru, matematikYanlıs = 0;
let sosyalDogru, sosyalYanlıs = 0;
let fenDogru, fenYanlıs = 0;
let okulPuanı = 0;

let yeniSatır = "\r\n";

let metin = "1.TYT Puan Hesaplama" + yeniSatır + "2. Sistemden Çıkış yap";
let deger = Number(prompt(metin));

switch (deger) { 
    case 1:
        okulPuanı = Number(prompt("Okul puanınızı giriniz"));
        
        turkceDogru = Number(prompt("türkçe doğru sayınısızı giriniz: "));
        turkceYanlıs = Number(prompt("türkçe yanlış sayısını giriniz: "));
        
        matematikDogru = Number(prompt("matematik doğru sayısını giriniz: "));
        matematikYanlıs = Number(prompt("matematik yanlış sayısını giriniz: "));

        sosyalDogru = Number(prompt("sosyal doğru sayısını giriniz: "));
        sosyalYanlıs = Number(prompt("sosyal yanlış sayısını giriniz: "));

        fenDogru = Number(prompt("fen doğru sayısını giriniz: "));
        fenYanlıs = Number(prompt("fen yanlış sayısını giriniz: "));

        let toplamDogru = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let toplamYanlıs = turkceYanlıs + matematikYanlıs + sosyalYanlıs + fenYanlıs;
        let toplamNet = toplamDogru - (toplamYanlıs / 4);
        let puan = toplamNet * 4 + 100+okulPuanı;
        alert("Toplam puanınız: " + puan);

        break;
    case 2:
        alert("Programdan çıkılıyor...");
        break;
    default:
        alert("Geçersiz giriş yaptınız.");
        break;
}