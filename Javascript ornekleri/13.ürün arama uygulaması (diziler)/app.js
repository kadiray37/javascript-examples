let urun1 = {
    isim: " LENOVO V15",
    kategori: "teknoloji",
    fiyat : 18.999
}
let urun2 = {
    isim: "ASUS ZenBook Pro Duo",
    kategori: "teknoloji",
    fiyat : 15.999
}

let urun3 = {
    isim: "LENOVO Pavilion 15",
    kategori: "teknoloji",
    fiyat : 14.999
}
let urun4 = {
    isim: "Asus Spectre x360",
    kategori: "teknoloji",
    fiyat : 16.999
}
let urun5 = {
    isim: "Lenovo Pavilion 14",
    kategori: "teknoloji",
    fiyat : 17.999
}

let urunler = [urun1, urun2, urun3, urun4, urun5];
let fitreliUrunler = [];
let kullanıcıUrunIsmi = prompt("aramak istediğiniz ürünü giriniz (asus veya lenovo): ");

urunBulma(urunler);
fitreliUrunleriYazdır(fitreliUrunler);


function urunBulma(urunler) {

    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullanıcıUrunIsmi.toUpperCase(), 0)) {
            fitreliUrunler.push(urun);
        }
    });
}


function fitreliUrunleriYazdır(urunler) {
    urunler.forEach(function (urun) {
        console.log("+-------------------------------+");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("+-------------------------------+");
    });
}