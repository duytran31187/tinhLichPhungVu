const { convertSolar2Lunar } = require('./lephucsinhlib');

import { cloneDate, getChristmasDay, newDate, timNgayTrongTuanSauNgay } from './utils';
import { simpleDate, MuaphungSinh } from './commonData';
import { addDate, timChuaNhatGanNhatTuNgay } from './utils';
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
    const d = cloneDate(ngayLePhucSinh);
    d.setDate(d.getDate() - 46);
    return d;
}
export const tinhNgayPhucSinh = (year: number): Date | false => {// tim ngay chua nhat gan nhat SAU ngay ram
    const simpleDateParam: simpleDate = tinhngayramsau21thang3(year);
    let closestSunday = newDate(simpleDateParam.year, simpleDateParam.month, simpleDateParam.day);
    const foundDate = timChuaNhatGanNhatTuNgay(closestSunday);
    if (foundDate instanceof Date) {
        return foundDate;
    }
    // istanbul ignore next
    return false;
}
export function tinhLeChuaHienLinh(y: number): Date {
    // Lễ Hiển Linh: vào ngày 6/1 - nhưng thường chuyển vào ngày CN gần ngày 6/1 nhất
    const ngayLeHienLinh = newDate(y, 1, 6);
    switch (ngayLeHienLinh.getDay()) {
        case 1:// t2
            return newDate(y, 1, 5); // -1
        case 2:// t3
            return newDate(y, 1, 4); // -2
        case 3:// t4
            return newDate(y, 1, 3); // -3
        case 4:// t5
            return newDate(y, 1, 2); // +3 => base on rule 2022
        case 5:// t5
            return newDate(y, 1, 8); // +2
        case 6:// t7
            return newDate(y, 1, 7);  // +1  
        default: // istanbul ignore next
            return ngayLeHienLinh; // chu nhat
    }
}
export function tinhLeThanhGia(y: number): Date {
    // the Octave (Bát Nhật Giáng Sinh) 25-1/1
    // Lễ Thánh Gia: chọn ngày CN trong tuần Bát Nhật Giáng Sinh, nếu không có ngày CN, thì chọn ngày 30/12
    const christMas = getChristmasDay(y);
    let count = 1;
    let breakTheLoop = false;
    let foundDate = newDate(y,12,30);
    do {
        let octaveDay = addDate(christMas, count); // ngay thu 2 tuan bat nhat la 26, ngay 7: 1/1 => ignore
        if (octaveDay.getDay() == 0) {
            breakTheLoop = true;
            foundDate = octaveDay;
        }
        count++;
        if (count > 6) { // khoong tinh ngay 1/1
            breakTheLoop = true
        }
    } while (!breakTheLoop)
    return foundDate;
}
export function tinhLeChuaChiuPhepRua(y: number): Date | false {
    // Lễ Chúa chịu phép rửa: thường vào ngày CN tiếp theo CN Hiển Linh, trừ trường hợp CN hiển Linh rơi vào 2 ngày 7/1 và 8/1 thì lễ Chúa Chịu Phép rửa chọn ngay ngày thứ 2 sau đó
    const leHienLinh = tinhLeChuaHienLinh(y);
    const day7 = newDate(y, 1, 7);
    const day8 = newDate(y, 1, 8);
    let ngayLe: any;
    if (leHienLinh.getTime() == day7.getTime()) {
        // chon ngay t2 ke tiep
        ngayLe = timNgayTrongTuanSauNgay(day7, 1);
    } else if (leHienLinh.getTime() == day8.getTime()) {
        // chon ngay t2 ke tiep
        ngayLe = timNgayTrongTuanSauNgay(day8, 1);
    } else {
        ngayLe = timNgayTrongTuanSauNgay(leHienLinh, 0);
    }
    if (ngayLe instanceof Date) {
        return ngayLe;
    } else { // istanbul ignore next
        return false;
    }
}
export const tinhLeChuaKiToVua = (chuaNhatThuNhatMuaVong: Date): Date => {
    //Lễ Kitô Vua là Chúa Nhật gần với Chúa Nhật I Mùa Vọng
    let tuan = cloneDate(chuaNhatThuNhatMuaVong);
    tuan.setDate(tuan.getDate() - 7);
    return tuan;
}
export const tinhLeChuaThanhThanHienxuong = (easter: Date): Date => {
    const d = cloneDate(easter);
    return addDate(d, 49);
}
export const tinhLeChuaBaNgoi = (leChuaThanhThanHienXuong: Date): Date => {
    const d = cloneDate(leChuaThanhThanHienXuong);
    return addDate(d, 7);
}
export const tinhLeMinhMauThanhChua = (tinhLeChuaBaNgoi: Date): Date => {
    const d = cloneDate(tinhLeChuaBaNgoi);
    return addDate(d, 7);
}
export const tinhLeThanhTamChuaGieSu = (tinhLeMinhMauThanhChua: Date): Date => {
    const d = cloneDate(tinhLeMinhMauThanhChua);
    return addDate(d, 5);
}

export const tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong = (leKiToVua: Date, leChuatthienxuong: Date): number => {
    // leKiToVua la tuan 34
    let count = 33;
    let found = false;
    const chuaNhatThuongNienDauTienMua2 = cloneDate(leChuatthienxuong);
    chuaNhatThuongNienDauTienMua2.setDate(chuaNhatThuongNienDauTienMua2.getDate() + 7);
    if (
        leChuatthienxuong.getDay() != 0
        || leKiToVua.getDay() != 0
    ) {
        console.error('invalid params');
        return 100;
    }
    do {
        let sunday34 = cloneDate(leKiToVua); // la tuan 34
        sunday34.setDate(sunday34.getDate() - ((34 - count) * 7));
        count--;
        if (sunday34.toDateString() == chuaNhatThuongNienDauTienMua2.toDateString()) {
            found = true;
            count++;
        }
    } while (!found);
    return count;
}

export function tinhNamABC(y: number): string {
    let yearStr = y.toString();
    let yearNums = Array.from(yearStr);
    let countNum = 0;
    let year: string;
    yearNums.forEach((element) => {
        countNum += parseInt(<string>element);
    });
    switch (countNum % 3) {
        case 1:
            year = 'A';
            break;
        case 2:
            year = 'B';
            break;
        default:
            year = 'C';
    }
    return year;
}
export function tinh4TuanMuaVong(y: number): MuaphungSinh {
    let chrismastDate = getChristmasDay(y);
    let sundayFound = false;
    let count = 0;
    let finalResult: MuaphungSinh;
    do {
        let closestSunday_1 = chrismastDate;
        closestSunday_1.setDate(chrismastDate.getDate() - 1);
        if (closestSunday_1.getDay() === 0) { //sunday
            let sunday4 = new Date(closestSunday_1.getTime());
            let sunday3 = new Date(sunday4.getTime());
            sunday3.setDate(sunday3.getDate() - (7));
            let sunday2 = new Date(sunday3.getTime());
            sunday2.setDate(sunday2.getDate() - (7));
            let sunday1 = new Date(sunday2.getTime());
            sunday1.setDate(sunday2.getDate() - (7));
            sundayFound = true;
            finalResult = {
                week1: sunday1,
                week2: sunday2,
                week3: sunday3,
                week4: sunday4
            };
            break;
        }
        count++;
    } while (!sundayFound);
    return finalResult!;
};
export const firstSundayOfLent = (ashWednesday: Date): Date => {
    return  addDate(ashWednesday, 4);
}
export const secondSundayOfLent = (ashWednesday: Date): Date => {
    return  addDate(ashWednesday, 11);
}
export const thirdSundayOfLent = (ashWednesday: Date): Date => {
    return  addDate(ashWednesday, 18);
}
export const fourthSundayOfLent = (ashWednesday: Date): Date => {
    return  addDate(ashWednesday, 25);
}
export const fifthSundayOfLent = (ashWednesday: Date): Date => {
    return  addDate(ashWednesday, 32);
}
export const calculateTheAscentionOfTheLord = (easter: Date): Date => {
    return  addDate(easter, 42);
}
export const palmSunday = (ashWednesday: Date): Date => {
    return  addDate(ashWednesday, 39);
}