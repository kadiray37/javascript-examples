let binary = prompt("2lik sayı giriniz(sadece 1 ve 0 kullanın): ");

function convertBinaryToDecimal(binary) {
    let toplam = 0;
    let ust = 0;
    for (let i = binary.length - 1; i >= 0; i--){

        if (Number(binary.charAt(i) != 0)){
            toplam = toplam + Number(binary.charAt(i) * Math.pow(2, ust));
        }
         ust++;
    }
    console.log("sonuç: " + toplam);
}
convertBinaryToDecimal(binary);