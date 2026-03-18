import { ADATLISTA } from "./adat.js";
import { tablazatMegjelenit } from "./tarolokatMegjelenit.js";
import { rendezesEsemenykezelok, poziciok } from "./fuggvenyek.js";

tablazatMegjelenit(ADATLISTA);
rendezesEsemenykezelok(ADATLISTA, document.getElementById("tablaadat"));
poziciok();