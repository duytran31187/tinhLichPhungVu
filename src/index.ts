import { tinhNamPhungVu } from "./namPhungVu";

export function getTinhNamPhungVuInstant(year: number): tinhNamPhungVu {
    return new tinhNamPhungVu(year);
}