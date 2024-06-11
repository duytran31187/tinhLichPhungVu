import { nameOfDays } from "./commonData";
import { tinhNamPhungVu } from "./namPhungVu";

export function getTinhNamPhungVuInstant(year: number): tinhNamPhungVu {
    return new tinhNamPhungVu(year);
}
const ins = getTinhNamPhungVuInstant(2024);
const fullYear = ins.getFullLichPhungVuTheoNam();
// console.log(fullYear);
// for (let key in fullYear) {
//     if (fullYear[key]['cacNgayLe'].length > 0) {
//         for(let i in fullYear[key]['cacNgayLe']) {
//             console.log( fullYear[key].date.toDateString() + ':' + fullYear[key]['cacNgayLe'][i]['name']);
//         }
//     } else {
//         console.log( fullYear[key].date.toDateString());
//     }
    
// }
export {nameOfDays};