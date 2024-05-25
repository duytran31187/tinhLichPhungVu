import { NamPhungVu } from "./commonData";
import { tinh4TuanMuaVong, tinhNamABC } from "./tinh4TuanMuaVong";
import { tinhLeChuaHienLinh, tinhThuTuLeTro, tinhNgayPhucSinh } from "./tinhlephucsinh";
import { addDate, getChristmasDay } from "./utils";

export function tinhNamPhungVu(y: number): NamPhungVu {
    const tuanmuaVong = tinh4TuanMuaVong(y);
    const easter = tinhNgayPhucSinh(y);
    const ashWednesday = tinhThuTuLeTro(easter);
    return {
        year: y,
        yearABC: tinhNamABC(y),
        oddEven: y % 2 == 0 ? 'Even ( Năm chẵn)' : 'Odd (Năm lẻ)',
        ashWed: ashWednesday,
        firstSundayOfLent: addDate(ashWednesday, 4),
        secondSundayOfLent: addDate(ashWednesday, 11),
        thirdSundayOfLent: addDate(ashWednesday, 18),
        fourthSundayOfLent: addDate(ashWednesday, 25),
        fifthSundayOfLent: addDate(ashWednesday, 32),
        palmSunday: addDate(ashWednesday, 39),
        easterSunday: easter,
        secondSundayOfEaster: addDate(easter, 7),
        thirdSundayOfEaster: addDate(easter, 14),
        fourthSundayOfEaster: addDate(easter, 21),
        fifthSundayOfEaster: addDate(easter, 28),
        sixthSundayOfEaster: addDate(easter, 35),
        theAscentionOfTheLord: addDate(easter, 42),
        pentecostSunday: addDate(easter, 49),
        firstSundayOfAdvent: tuanmuaVong.week1,
        secondSundayOfAdvent: tuanmuaVong.week2,
        thirdSundayOfAdvent: tuanmuaVong.week3,
        fourthSundayOfAdvent: tuanmuaVong.week4,
        christmas: getChristmasDay(y),
        theEpiphanyOfTheLord: tinhLeChuaHienLinh(y),
    }
}