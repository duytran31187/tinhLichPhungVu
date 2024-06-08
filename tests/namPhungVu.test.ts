import { NamPhungVu } from "../src/commonData";
import { tinhNamPhungVu } from "../src/namPhungVu";
import { newDate } from "../src/utils";

describe('test Full nam phung vu', () => {
    const compareResult = (resultNamPhungVu: NamPhungVu, expectedNamPhungVu: NamPhungVu) => {
        Object.entries(expectedNamPhungVu).forEach((item) => {
            let key = item[0];
            let val: any = item[1];
            if (val instanceof Date) {
                let d = resultNamPhungVu![key as keyof(NamPhungVu)] as Date;
                expect(d.toDateString()).toBe(val.toDateString());
            } else {
                expect(resultNamPhungVu![key as keyof(NamPhungVu)]).toBe(val);
            }
        });
    }
    it('2024', () => {
        const year = 2024;
        const ins = new tinhNamPhungVu(2024);
        const resultNamPhungVu = ins.getNamPhungVu()!;
        const expectedNamPhungVu = {
            year: year,
            yearABC: 'B',
            oddEven: 'Even ( Năm chẵn)',
            leDucMeChuaTroi: newDate(year,1,1),
            dangchuaGiesuTrongDenThanh: newDate(year,2,2),
            theEpiphanyOfTheLord: newDate(year, 1 , 7), //lechuahienlinh
            firstOrdinarySundayAfterPentecostSunday: 8,
            leChuaChiuPhepRua: newDate(year, 1, 8),
            ashWed: newDate(year, 2, 14),
            firstSundayOfLent: newDate(year, 2, 18),
            secondSundayOfLent: newDate(year, 2, 25),
            thirdSundayOfLent: newDate(year, 3, 3),
            fourthSundayOfLent: newDate(year, 3, 10),
            fifthSundayOfLent: newDate(year, 3, 17),
            palmSunday: newDate(year, 3, 24),
            easterSunday: newDate(year, 3, 31),
            secondSundayOfEaster: newDate(year, 4, 7), 
            thirdSundayOfEaster: newDate(year, 4, 14), 
            fourthSundayOfEaster: newDate(year, 4, 21), 
            fifthSundayOfEaster: newDate(year, 4, 28), 
            sixthSundayOfEaster: newDate(year, 5, 5), 
            theAscentionOfTheLord: newDate(year, 5, 12), 
            pentecostSunday: newDate(year, 5, 19), 
            leChuaBaNgoi: newDate(year, 5, 26), 
            leMinhMauThanhChua: newDate(year, 6, 2), 
            leThanhTamChuaGieSu: newDate(year, 6, 7), 
            chuaKitoVua: newDate(year, 11, 24), 
            firstSundayOfAdvent: newDate(year, 12, 1), 
            secondSundayOfAdvent: newDate(year, 12, 8), 
            thirdSundayOfAdvent: newDate(year, 12, 15), 
            fourthSundayOfAdvent: newDate(year, 12, 22), 
            christmas: newDate(year, 12, 25),
            leThanhGia: newDate(year, 12, 29),
        };
       compareResult(resultNamPhungVu, expectedNamPhungVu);
    });
    it('2025', () => {
        const year = 2025;
        const ins = new tinhNamPhungVu(2025);
        const resultNamPhungVu = ins.getNamPhungVu()!;
        const expectedNamPhungVu = {
            year: year,
            yearABC: 'C',
            oddEven: 'Odd (Năm lẻ)',
            leDucMeChuaTroi: newDate(year,1,1),
            dangchuaGiesuTrongDenThanh: newDate(year,2,2),
            theEpiphanyOfTheLord: newDate(year, 1 , 5), //lechuahienlinh
            firstOrdinarySundayAfterPentecostSunday: 11,
            leChuaChiuPhepRua: newDate(year, 1, 12),
            ashWed: newDate(year, 3, 5),
            firstSundayOfLent: newDate(year, 3, 9),
            secondSundayOfLent: newDate(year, 3, 16),
            thirdSundayOfLent: newDate(year, 3, 23),
            fourthSundayOfLent: newDate(year, 3, 30),
            fifthSundayOfLent: newDate(year, 4, 6),
            palmSunday: newDate(year, 4, 13),
            easterSunday: newDate(year, 4, 20),
            secondSundayOfEaster: newDate(year, 4, 27), 
            thirdSundayOfEaster: newDate(year, 5, 4), 
            fourthSundayOfEaster: newDate(year, 5, 11), 
            fifthSundayOfEaster: newDate(year, 5, 18), 
            sixthSundayOfEaster: newDate(year, 5, 25), 
            theAscentionOfTheLord: newDate(year, 6, 1), 
            pentecostSunday: newDate(year, 6, 8), 
            leChuaBaNgoi: newDate(year, 6, 15), 
            leMinhMauThanhChua: newDate(year, 6, 22), 
            leThanhTamChuaGieSu: newDate(year, 6, 27), 
            chuaKitoVua: newDate(year, 11, 23), 
            firstSundayOfAdvent: newDate(year, 11, 30), 
            secondSundayOfAdvent: newDate(year, 12, 7), 
            thirdSundayOfAdvent: newDate(year, 12, 14), 
            fourthSundayOfAdvent: newDate(year, 12, 21), 
            christmas: newDate(year, 12, 25),
            leThanhGia: newDate(year, 12, 28),
        };
       compareResult(resultNamPhungVu, expectedNamPhungVu);
    });
});