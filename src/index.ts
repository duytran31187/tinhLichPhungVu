import { NamPhungVu } from "./commonData";
import { tinhLeChuaThanhThanHienxuong, tinh4TuanMuaVong, tinhNamABC, tinhLeChuaHienLinh, tinhThuTuLeTro, tinhNgayPhucSinh, tinhLeThanhGia, tinhLeChuaChiuPhepRua, tinhLeChuaKiToVua, tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong, firstSundayOfLent, secondSundayOfLent, thirdSundayOfLent, palmSunday, fifthSundayOfLent, fourthSundayOfLent, calculateTheAscentionOfTheLord} from "./cacNgayLeNamPhungVu";
import { addDate, cloneDate, getChristmasDay } from "./utils";
export const nameOfDays = {
    year: 'year( Năm)',
    yearABC: 'A|B|C (năm A|B|C)',
    oddEven: 'Odd|Even (Năm chẵn lẻ)',
    theEpiphanyOfTheLord: 'The Epiphany of the Lord (Lễ Chúa Hiển Linh)',
    leChuaChiuPhepRua: 'Lễ Chúa chịu phép rửa',
    ashWed: 'Ash Wednesday (Thứ tư lễ tro)',
    firstSundayOfLent: 'First Sunday of Lent (Chúa nhật thứ nhất mùa chay)',
    secondSundayOfLent: 'Second Sunday of Lent (Chúa nhật thứ 2 mùa chay)',
    thirdSundayOfLent: 'Third Sunday of Lent (Chúa nhật thứ 3 mùa chay)',
    fourthSundayOfLent: 'Fourth Sunday of Lent (Chúa nhật thứ 4 mùa chay)',
    fifthSundayOfLent: 'Fifth Sunday of Lent (Chúa nhật thứ 5 mùa chay)',
    palmSunday: 'Palm Sunday (Lễ Lá)',
    easterSunday: 'Easter Sunda (Phục sinh)',
    secondSundayOfEaster: 'Second Sunday of Easter (Chúa nhật thứ 2 phục sinh)',
    thirdSundayOfEaster: 'Third Sunday of Easter (Chúa nhật thứ 3 phục sinh)',
    fourthSundayOfEaster: 'Fourth Sunday of Easter (Chúa nhật thứ 4 phục sinh)',
    fifthSundayOfEaster: 'Fifth Sunday of Easter (Chúa nhật thứ 5 phục sinh)',
    sixthSundayOfEaster: 'Sixth Sunday of Easter (Chúa nhật thứ 6 phục sinh)',
    theAscentionOfTheLord: 'The Ascention of the Lord (Lễ Chúa Lên Trời)',
    pentecostSunday: 'Pentecost Sunday (Lễ Chúa Thánh Thần hiện xuống)',
    firstSundayOfAdvent: 'First Sunday of Advent (Chúa nhật thứ nhất mùa vọng)',
    secondSundayOfAdvent: 'Second Sunday of Advent (Chúa nhật thứ 2 mùa vọng)',
    thirdSundayOfAdvent: 'Third Sunday of Advent (Chúa nhật thứ 3 mùa vọng)',
    fourthSundayOfAdvent: 'Fourth Sunday of Advent (Chúa nhật thứ tư mùa vọng)',
    christmas: 'Christmas (Giáng sinh)',
    leThanhGia: 'Lễ Thánh Gia',
    chuaKitoVua: 'Lễ Chúa KiTo Vua',
    firstOrdinarySundayAfterPentecostSunday: 'Chua Nhat Thuong Nien sau Le Chua Thanh than hien xuong'
};
export function tinhNamPhungVu(y: number): NamPhungVu {
    const tuanmuaVong = tinh4TuanMuaVong(y);
    const easter = tinhNgayPhucSinh(y);
    const ashWednesday = tinhThuTuLeTro(cloneDate(easter));
    const chuaHienLinh = tinhLeChuaHienLinh(y);
    const leChuaKiToVua = tinhLeChuaKiToVua(tuanmuaVong.week1);
    const pentecostSunday = tinhLeChuaThanhThanHienxuong(cloneDate(easter));
    const chuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong = tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
        leChuaKiToVua,
        pentecostSunday
    );
    return {
        year: y,
        yearABC: tinhNamABC(y),
        oddEven: y % 2 == 0 ? 'Even ( Năm chẵn)' : 'Odd (Năm lẻ)',
        theEpiphanyOfTheLord: chuaHienLinh,
        firstOrdinarySundayAfterPentecostSunday: chuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong,
        leChuaChiuPhepRua: tinhLeChuaChiuPhepRua(y),
        ashWed: ashWednesday,
        firstSundayOfLent: firstSundayOfLent(ashWednesday),
        secondSundayOfLent: secondSundayOfLent(ashWednesday),
        thirdSundayOfLent: thirdSundayOfLent(ashWednesday),
        fourthSundayOfLent: fourthSundayOfLent(ashWednesday),
        fifthSundayOfLent: fifthSundayOfLent(ashWednesday),
        palmSunday: palmSunday(ashWednesday),
        easterSunday: easter,
        secondSundayOfEaster: addDate(easter, 7),
        thirdSundayOfEaster: addDate(easter, 14),
        fourthSundayOfEaster: addDate(easter, 21),
        fifthSundayOfEaster: addDate(easter, 28),
        sixthSundayOfEaster: addDate(easter, 35),
        theAscentionOfTheLord: calculateTheAscentionOfTheLord(easter),
        pentecostSunday: pentecostSunday,
        chuaKitoVua: leChuaKiToVua,
        firstSundayOfAdvent: tuanmuaVong.week1,
        secondSundayOfAdvent: tuanmuaVong.week2,
        thirdSundayOfAdvent: tuanmuaVong.week3,
        fourthSundayOfAdvent: tuanmuaVong.week4,
        christmas: getChristmasDay(y),
        leThanhGia: tinhLeThanhGia(y)
    }
}
// const namphungVuIns = tinhNamPhungVu(2025);
// console.log(namphungVuIns);
// for( let key in namphungVuIns) 
// {
//     const val = namphungVuIns[key] instanceof Date ? namphungVuIns[key].toDateString() : namphungVuIns[key];
//     console.log(`${nameOfDays[key]}: ${val}`);
// }