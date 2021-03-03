
var tekno = [
        {
        "puan": "4.6(122 YORUM)",
        "kod": "PA2N0006TR",
        "ad": "IPHONE 6 16 AKILLI TELEFON UZAY GRİSİ",
        "fiyat": 1.399
    }
    ]

    var jsonVeri = JSON.stringify(tekno);
    var veri = JSON.parse(jsonVeri);
    
$(document).ready(function () {

    for (var i = 0; i < veri.length; i++) {
        var satir = "<ul>";
        satir += "<li>" + veri[i].puan + "</li>";
        satir += "<li>" + veri[i].kod + "</li>";
        satir += "<h4>" + veri[i].ad + "</h4>";
        satir += "<p>" + veri[i].fiyat + "</p>";
        satir += "</ul>";

        $(".widget-list").append(satir);
        $(".widget-swiperr").append(satir);
    };
});
$(function () {
    $(".urunAra").hover(function () {
        $("#icon").hide(1000);
    });
});