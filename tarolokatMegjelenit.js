import { ADATLISTA } from "./adat.js";

export function megjelenit(adat = {nev, nemzetiseg, gyozelmek_szama}, TBODYELEM) {
    let kod = `<tr><td>${adat.nev}</td><td>${adat.nemzetiseg}</td><td>${adat.gyozelmek_szama}</td></tr>`

    TBODYELEM.innerHTML += kod
}

export function tablazatMegjelenit(ADATLISTA) {
    const TBODYELEM = document.querySelector("tbody");

    TBODYELEM.innerHTML = "";

    ADATLISTA.forEach(function(adat){megjelenit(adat, TBODYELEM);});
}