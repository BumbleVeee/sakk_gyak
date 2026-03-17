import { tablazatMegjelenit } from "./tarolokatMegjelenit.js";

export function rendezesEsemenykezelok(lista, szuloElem) {
    let nevNo = document.getElementById("nevNo");
    let nevCsokk = document.getElementById("nevCsokk");
    let gyozNo = document.getElementById("gyozNo");
    let gyozCsokk = document.getElementById("gyozCsokk");

    nevNo.addEventListener("click", function () {
        console.log(this.id);
        lista.sort(function (a, b) {
            return a.nev < b.nev ? -1 : +1;
        });
        tablazatMegjelenit(lista, szuloElem)
    })

    nevCsokk.addEventListener("click", function () {
        console.log(this.id);
        lista.sort(function (a, b) {
            return a.nev < b.nev ? +1 : -1;
        });
        tablazatMegjelenit(lista, szuloElem)
    })

    gyozNo.addEventListener("click", function () {
        console.log(this.id);
        lista.sort(function (a, b) {
            return a.gyozelmek_szama - b.gyozelmek_szama;
        });
        tablazatMegjelenit(lista, szuloElem)
    })

    gyozCsokk.addEventListener("click", function () {
        console.log(this.id);
        lista.sort(function (a, b) {
            return b.gyozelmek_szama - a.gyozelmek_szama;
        });
        tablazatMegjelenit(lista, szuloElem)
    })
}

export function sakkEllenorzo(pozicio1, pozicio2) {
    
}