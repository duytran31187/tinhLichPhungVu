import { nameOfDays } from "./commonData";
import { tinhNamPhungVu } from "./namPhungVu";

export function getTinhNamPhungVuInstant(year: number): tinhNamPhungVu {
    return new tinhNamPhungVu(year);
}
const ins = getTinhNamPhungVuInstant(2024);
console.log(ins.getFullLichPhungVuTheoNam());
export {nameOfDays};