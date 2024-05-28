const { convertSolar2Lunar } = require('./lephucsinhlib');

import { cloneDate, getChristmasDay, timNgayTrongTuanSauNgay } from './utils';
import { simpleDate } from './commonData';
import { addDate } from './utils';
// chuyen doi ngay duong sang ngay âm


export const tinhngayramsau21thang3 = (y: number): simpleDate => {
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
export const tinhNgayPhucSinh = (year: number): Date => {// tim ngay chua nhat gan nhat SAU ngay ram
    const simpleDateParam: simpleDate = tinhngayramsau21thang3(year);
    let closestSunday = new Date(simpleDateParam.year + '-' + simpleDateParam.month + '-' + simpleDateParam.day);
    closestSunday.setDate(closestSunday.getDate());
    return timChuaNhatGanNhatTuNgay(closestSunday);
}
export function tinhLeChuaHienLinh(y: number): Date {
    // Lễ Hiển Linh: vào ngày 6/1 - nhưng thường chuyển vào ngày CN gần ngày 6/1 nhất
    const ngayLeHienLinh = new Date(y + '-01-06');
    switch(ngayLeHienLinh.getDay()) {
        case 1:// t2
            return new Date(y + '-01-05'); // -1
        case 2:// t3
            return new Date(y + '-01-04'); // -2
        case 3:// t4
            return new Date(y + '-01-03'); // -3
        case 4:// t5
            return new Date(y + '-01-02'); // +3 => base on rule 2022
        case 5:// t5
            return new Date(y + '-01-8'); // +2
        case 6:// t7
            return new Date(y + '-01-7');  // +1  
        default:
            return ngayLeHienLinh; // chu nhat
    }
}

export function tinhLeThanhGia(y: number): Date {
// the Octave (Bát Nhật Giáng Sinh) 25-1/1
// Lễ Thánh Gia: chọn ngày CN trong tuần Bát Nhật Giáng Sinh, nếu không có ngày CN, thì chọn ngày 30/12
 const christMas = getChristmasDay(y);
 let count = 1;
 let breakTheLoop = false;
 let foundDate = new Date(y + '-12-30');
 do {
    let octaveDay = addDate(christMas, count); // ngay thu 2 tuan bat nhat la 26, ngay 7: 1/1 => ignore
    if (octaveDay.getDay() == 0) {
        breakTheLoop = true;
        foundDate = cloneDate(octaveDay);
    }
    count++;
    if (count > 6) { // khoong tinh ngay 1/1
        breakTheLoop = true
    }
  } while (!breakTheLoop)
  return foundDate;
}
export function tinhLeChuaChiuPhepRua(y: number): Date {
    // Lễ Chúa chịu phép rửa: thường vào ngày CN tiếp theo CN Hiển Linh, trừ trường hợp CN hiển Linh rơi vào 2 ngày 7/1 và 8/1 thì lễ Chúa Chịu Phép rửa chọn ngay ngày thứ 2 sau đó
    const leHienLinh = tinhLeChuaHienLinh(y);
    const day7 = new Date(y + '-1-7');
    const day8 = new Date(y + '-1-8');
    let ngayLe: Date;
    if (leHienLinh.getTime() == day7.getTime()) {
        // chon ngay t2 ke tiep
        ngayLe =timNgayTrongTuanSauNgay(day7, 1);
    } else if (leHienLinh.getTime() == day8.getTime()) {
        // chon ngay t2 ke tiep
        ngayLe =timNgayTrongTuanSauNgay(day8, 1);
    } else {
        ngayLe = timNgayTrongTuanSauNgay(leHienLinh, 0);
    }
    return ngayLe;
}
