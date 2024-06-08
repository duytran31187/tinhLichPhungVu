import { NamPhungVu } from "../src/commonData";
import { tinhNamPhungVu } from "../src/namPhungVu";
import { newDate } from "../src/utils";

describe('test Full nam phung vu', () => {
    it('2024', () => {
        const year = 2024;
        const ins = new tinhNamPhungVu(2024);
        const resultNamPhungVu = ins.getNamPhungVu();
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
        }
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
    });
});