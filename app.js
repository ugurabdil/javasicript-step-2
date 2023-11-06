//BENZİN İSTASYONU SİSTEMİ
/* 
1-DİZEL:24.53
2-BENZİN:22.25
3-LPG:11.1
*/

let dizel=24.53, benzin=22.25, lpg=11.1;
const yenisatir= "\r\n";

const yakitmetni="1-Dizel"+yenisatir+
"2-Benzin"+yenisatir+
"3-LPG"+yenisatir+
"Yakıt türünü seçiniz";

let yakitTipi=prompt(yakitmetni);

if(yakitTipi=="1"|| yakitTipi=="2"|| yakitTipi=="3"){

    let yakitLitresi=Number(prompt("Yakıt Litresi Giriniz"));
    let bakiye=Number(prompt("Bakiyenizi Giriniz"));

    if(yakitTipi=="1"){
        let ödenecekTutar=dizel*yakitLitresi;
        if(ödenecekTutar<bakiye){
            bakiye=bakiye-ödenecekTutar;
            alert("yakıt alma işleminiz başarılı"+yenisatir+
            "kalan bakiye:"+bakiye);
           
        }else{
            alert("Bakiyeniz yeterli değildir"+yenisatir+
            "ödenecek Tutar:"+ödenecekTutar+yenisatir+
            "bakiye:"+bakiye+yenisatir+
            "eksik tutar:"+(ödenecekTutar-bakiye));
        }
    }else if(yakitTipi=="2"){
        if(yakitTipi=="2"){
            let ödenecekTutar=benzin*yakitLitresi;
            if(ödenecekTutar<bakiye){
                bakiye=bakiye-ödenecekTutar;
                alert("yakıt alma işleminiz başarılı"+yenisatir+
                "kalan bakiye:"+bakiye);
               
            }else{
                alert("Bakiyeniz yeterli değildir"+yenisatir+
                "ödenecek Tutar:"+ödenecekTutar+yenisatir+
                "bakiye:"+bakiye+yenisatir+
                "eksik tutar:"+(ödenecekTutar-bakiye));
            }
        }
    }else if(yakitTipi=="3"){
        if(yakitTipi=="3"){
            let ödenecekTutar=lpg*yakitLitresi;
            if(ödenecekTutar<bakiye){
                bakiye=bakiye-ödenecekTutar;
                alert("yakıt alma işleminiz başarılı"+yenisatir+
                "kalan bakiye:"+bakiye);
            }else{
                alert("Bakiyeniz yeterli değildir"+yenisatir+
                "ödenecek Tutar:"+ödenecekTutar+yenisatir+
                "bakiye:"+bakiye+yenisatir+
                "eksik tutar:"+(ödenecekTutar-bakiye));
            }
        }
    }
}else{
alert("Geçerli Yakıt Türü Seçin Lütfen");
}
