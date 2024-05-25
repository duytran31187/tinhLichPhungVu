const { convertSolar2Lunar } = require('./lephucsinhlib');

import { cloneDate, getChristmasDay } from './utils';
import { simpleDate } from './commonData';
import { addDate } from './utils';
// chuyen doi ngay duong sang ngay âm


const tinhngayramsau21thang3 = (y: number): simpleDate => {
    // tim ngay rằm
    let ngayRamFound = false;
    let count = 0;

    let dateFrom21: number = 21;
    let month: number = 3;
    do {
        const ngayAm = convertSolar2Lunar(
            dateFrom21,
            month,
            y,
            7 // UTC+7
        );
        const lunarDay = ngayAm[0];
        if (lunarDay === 16) { // month can be different
            ngayRamFound = true;
        }
        count++;
        dateFrom21++;
        if (dateFrom21 == 32) { // qua thang 4
            dateFrom21 = 1;
            month = 4;
        }

    } while (!ngayRamFound)
    return {
        year: y,
        month: month,
        day: dateFrom21
    };
};

export function tinhThuTuLeTro(ngayLePhucSinh: Date) {
    const thutuLeTro = cloneDate(ngayLePhucSinh);
    thutuLeTro.setDate(thutuLeTro.getDate() - 46);
    return thutuLeTro;
}


const timChuaNhatGanNhatTuNgay = (d: Date): Date => {
    // chua nhat gan nhat sau ngay d, có thể là ngày d
    let sundayFound = false;
    let closestSunday = cloneDate(d);
    do {
        if (closestSunday.getDay() === 0) { //sunday
            sundayFound = true;
            break;
        }
        closestSunday.setDate(closestSunday.getDate() + 1);
    } while (!sundayFound)
    return closestSunday;
}
export const tinhNgayPhucSinh = (year: number) => {// tim ngay chua nhat gan nhat SAU ngay ram
    const simpleDateParam: simpleDate = tinhngayramsau21thang3(year);
    let closestSunday = new Date(simpleDateParam.year + '-' + simpleDateParam.month + '-' + simpleDateParam.day);
    closestSunday.setDate(closestSunday.getDate());
    return timChuaNhatGanNhatTuNgay(closestSunday);
}
export function tinhLeChuaHienLinh(y: number) {
    const christmasDate = getChristmasDay(y);
    const chuaNhatSauGiangsinh = timChuaNhatGanNhatTuNgay(christmasDate);
    chuaNhatSauGiangsinh.setDate(chuaNhatSauGiangsinh.getDate())
    return addDate(chuaNhatSauGiangsinh, 7);
}
