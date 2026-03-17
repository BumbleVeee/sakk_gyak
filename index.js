import { ADATLISTA } from "./adat.js";
import { tablazatMegjelenit } from "./tarolokatMegjelenit.js";
import { rendezesEsemenykezelok } from "./fuggvenyek.js";

tablazatMegjelenit(ADATLISTA);
rendezesEsemenykezelok(ADATLISTA, document.getElementById("tablaadat"));