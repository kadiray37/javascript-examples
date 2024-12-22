



let metin = " ben bir javascript öğrencisiyim ve bu işi yapmayı çok seviyorum";
let harf = prompt(" harfi giriniz: ");
let sonuc = check(harf);
alert("harf sayusu: "+sonuc)

function check(harf) {
    let toplam = 0;
    for (i = 0; i <= metin.length; i++) {
        if (metin.charAt(i) === harf) {
            toplam = toplam + 1;
        }
    }
    return toplam;
}