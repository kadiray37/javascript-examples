let altSatır = "\r\n";
let metin = "1.pazartesi" + altSatır
    + "2.salı" + altSatır
    + "3.çarşamba" + altSatır
    + "4.perşembe" + altSatır
    + "5.cuma" + altSatır
    + "6.cumartesi" + altSatır
    + "7.pazar" + altSatır
    + "lütfen bir seçim yapınız";
    
let deger = Number(prompt(metin));


switch (deger)
{ 
    case 1:
        console.log("pazartesi günü");
        break;
    case 2:
        console.log("salı günü");
        break;
    case 3:
        console.log("Çarşamba günü");
        break;
    case 4:
        console.log("Perşembe Günü");
        break;
    case 5:
        console.log("Cuma Günü");
        break;
    case 6:
        console.log("Cumartesi Günü");
        break;
    case 7:
        console.log("pazar Günü");
        break;
    default:
        console.log("girilen sayi 1 ile 7 arasında değil");
};