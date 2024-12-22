let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const  yeniSatır = "\r\n";

const yakitMetni  = "1.Dize" + yeniSatır
                  + "2.Benzin" + yeniSatır
                  + "3.LPG" + yeniSatır
                  + "Lütfen yakıtı seçiniz:" + yeniSatır;
        
let yakitTipi = Number(prompt(yakitMetni));
if (yakitTipi == 1 || yakitTipi == 2 || yakitTipi == 3) {
        let yakitLitresi = Number(prompt("Almak istediğiniz yakıt litresini giriniz: "));
        let bakiye = Number(prompt("bakiyenizi giriniz: "));

        if (yakitTipi == 1) {
            let odenecekTutar = dizel * yakitLitresi;
            if (odenecekTutar > bakiye) {
                alert("Yetersiz bakiye!");
            }
            else {
                alert("Ödemeniz için teşekkür ederiz!" + yeniSatır + "Ödemeniz: " + odenecekTutar);
                bakiye = bakiye- odenecekTutar;
                alert("Yeni bakiyeniz: " + bakiye);
            }
        }
        else if (yakitTipi == 2) { 
            let odenecekTutar = benzin * yakitLitresi;
            if (odenecekTutar > bakiye) {
                alert("Yetersiz bakiye!");
            }
            else {
                alert("Ödemeniz için teşekkür ederiz!" + yeniSatır + "Ödemeniz: " + odenecekTutar);
                bakiye = bakiye - odenecekTutar;
                alert("Yeni bakiyeniz: " + bakiye);
            }
        }
        else if (yakitTipi == 3) {
            let odenecekTutar = lpg * yakitLitresi;
            if (odenecekTutar > bakiye) {
                alert("Yetersiz bakiye!");
            }
            else {
                alert("Ödemeniz için teşekkür ederiz!" + yeniSatır + "Ödemeniz: " + odenecekTutar);
                bakiye = bakiye - odenecekTutar;
                alert("Yeni bakiyeniz: " + bakiye);
            }
        }

}
else {
    alert("Geçersiz yakıt tipi!");
}

