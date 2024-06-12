import { LE_KINH, LE_NHO, LE_TRONG, nameOfDays, NamPhungVu, SingleDateData } from "../src/commonData";
import { TinhNamPhungVu } from "../src/TinhNamPhungVu";
import { buildKeyInNumberFromDate, newDate, tenChuaNhatThuongNienThu } from "../src/utils";

const strNamChan = 'Even ( Năm chẵn)';
const strNamLe = "Odd (Năm lẻ)";

const keyForDate = (date: Date): number => {
    return buildKeyInNumberFromDate(date);
}
describe('init', () => {
    it('init with year is number', () => {
        const ins = new TinhNamPhungVu(2024);
    });
});

describe('test Full nam phung vu', () => {
    const compareNamPhungVu = (resultNamPhungVu: NamPhungVu, expectedNamPhungVu: NamPhungVu) => {
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
    const compareFullYear = (fullYear: SingleDateData[], expectedFullYear: SingleDateData[]) => {
        for (let i in expectedFullYear) {
            const actualDataByDay = fullYear[i];
            const expectedDataByDay = expectedFullYear[i];
            
            try {
                // check date
                expect(actualDataByDay.date.toDateString()).toBe(actualDataByDay.date.toDateString());
                // number of ngay le are same
                expect(actualDataByDay.cacNgayLe.length).toBe(expectedDataByDay.cacNgayLe.length);
                // check each ngay le
            } catch(e) {
                console.log(`expected ngay le ${JSON.stringify(expectedDataByDay)}`);
                console.log(`actualNgayLe ngay le ${JSON.stringify(actualDataByDay)}`);
                break;
                // expect(matchExpect).toBeTruthy();
            }
            expectedDataByDay.cacNgayLe.forEach(expectedNgayLe => {
                let matchExpect = false;
                //console.log(`expected ngay le ${JSON.stringify(expectedNgayLe)}`);
                actualDataByDay.cacNgayLe.forEach(actualNgayLe => {
                    //console.log(`actualNgayLe ngay le ${JSON.stringify(actualNgayLe)}`);
                    if (
                        actualNgayLe.name == expectedNgayLe.name //same name
                        && actualNgayLe.fixed == expectedNgayLe.fixed //same name
                        && actualNgayLe.type == expectedNgayLe.type //same name
                    ) { 
                        matchExpect = true;
                    }
                });
                try {
                    expect(matchExpect).toBeTruthy();
                } catch(e) {
                    console.log(`expected ngay le ${JSON.stringify(expectedNgayLe)}`);
                    console.log(`actualNgayLe ngay le ${JSON.stringify(actualDataByDay)}`);
                    // expect(matchExpect).toBeTruthy();
                }
            });
        }
    }
    const addExpectedDayToExpectedFullYear = (fullYear: SingleDateData[], date: Date, name: string, type: string, fixed: boolean): SingleDateData[] => {
        if (!fullYear[keyForDate(date)]) {
            fullYear[keyForDate(date)] = {
                date: date,
                cacNgayLe: []
            }
        }
        fullYear[keyForDate(date)].cacNgayLe.push(
            {
                date: date,
                name: name,
                type: type,
                fixed: fixed
            }
        )
        return fullYear;
    }
    it('2024', () => {
        const year = 2024;
        const ins = new TinhNamPhungVu(year);
        const resultNamPhungVu = ins.getNamPhungVu()!;
        let fullYear: SingleDateData[] = [];

        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 1),
            `Thánh Ma-ri-a, Ðức Mẹ Chúa Trời`,
            LE_TRONG,
            true
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 7),
            `Thánh Rây-mun-đô Pê-nha-pho, linh mục`,
            LE_NHO,
            true
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 7),
            nameOfDays['theEpiphanyOfTheLord'], // le chua hien linh
            LE_TRONG,
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 14),
            tenChuaNhatThuongNienThu(2),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 2, 11),
            tenChuaNhatThuongNienThu(6),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 2, 11),
            `Đức Mẹ Lộ-đức`,
            '',
            true
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 6, 9),
            tenChuaNhatThuongNienThu(10),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 6, 16),
            tenChuaNhatThuongNienThu(11),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 11, 17),
            tenChuaNhatThuongNienThu(33),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 11, 17),
            `Thánh nữ Ê-li-sa-bet nước Hung-ga-ri`,
            LE_NHO,
            true
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 11, 24),
            nameOfDays.chuaKitoVua,
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 11, 24),
            `Thánh An-rê Dũng Lạc và các bạn, tử đạo`,
            LE_NHO,
            true
        );

        const expectedNamPhungVu = {
            year: year,
            yearABC: 'B',
            oddEven: strNamChan,
            // leDucMeChuaTroi: newDate(year,1,1),
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
            leThanhGia: newDate(year, 12, 29),
        };
       compareNamPhungVu(resultNamPhungVu, expectedNamPhungVu);
       compareFullYear(ins.getFullLichPhungVuTheoNam(), fullYear);
    });
    it('2025', () => {
        const year = 2025;
        const ins = new TinhNamPhungVu(year);
        const resultNamPhungVu = ins.getNamPhungVu()!;
        let fullYear: SingleDateData[] = [];

        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 1),
            `Thánh Ma-ri-a, Ðức Mẹ Chúa Trời`,
            LE_TRONG,
            true
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 7),
            `Thánh Rây-mun-đô Pê-nha-pho, linh mục`,
            LE_NHO,
            true
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 5),
            nameOfDays['theEpiphanyOfTheLord'], // le chua hien linh
            LE_TRONG,
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 12),
            nameOfDays['leChuaChiuPhepRua'], // le chua hien linh
            LE_KINH,
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 1, 19),
            tenChuaNhatThuongNienThu(2),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 2, 16),
            tenChuaNhatThuongNienThu(6),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 3, 2),
            tenChuaNhatThuongNienThu(8),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 2, 11),
            `Đức Mẹ Lộ-đức`,
            '',
            true
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 6, 15),
            nameOfDays.leChuaBaNgoi,
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 6, 22),
            nameOfDays.leMinhMauThanhChua,
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 6, 29),
            'Thánh Phê-rô và thánh Phao-lô, tông đồ',
            LE_TRONG,
            true
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 7, 6),
            tenChuaNhatThuongNienThu(14),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 8, 3),
            tenChuaNhatThuongNienThu(18),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 10, 26),
            tenChuaNhatThuongNienThu(30),
            '',
            false
        );
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 11, 17),
            `Thánh nữ Ê-li-sa-bet nước Hung-ga-ri`,
            LE_NHO,
            true
        );
        
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 11, 23),
            nameOfDays.chuaKitoVua,
            '',
            false
        );
        
        fullYear = addExpectedDayToExpectedFullYear(
            fullYear,
            newDate(year, 11, 24),
            `Thánh An-rê Dũng Lạc và các bạn, tử đạo`,
            LE_NHO,
            true
        );
        const expectedNamPhungVu = {
            year: year,
            yearABC: 'C',
            oddEven: strNamLe,
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
            leThanhGia: newDate(year, 12, 28),
        };
       compareNamPhungVu(resultNamPhungVu, expectedNamPhungVu);
       compareFullYear(ins.getFullLichPhungVuTheoNam(), fullYear);
    });
    it('2026', () => {
        const year = 2026;
        const ins = new TinhNamPhungVu(year);
        const resultNamPhungVu = ins.getNamPhungVu()!;
        const expectedNamPhungVu = {
            year: year,
            yearABC: 'A',
            oddEven: strNamChan,
            theEpiphanyOfTheLord: newDate(year, 1 , 4), //lechuahienlinh
            firstOrdinarySundayAfterPentecostSunday: 9,
            leChuaChiuPhepRua: newDate(year, 1, 11),
            ashWed: newDate(year, 2, 18),
            firstSundayOfLent: newDate(year,2, 22),
            secondSundayOfLent: newDate(year, 3, 1),
            thirdSundayOfLent: newDate(year, 3, 8),
            fourthSundayOfLent: newDate(year, 3, 15),
            fifthSundayOfLent: newDate(year, 3, 22),
            palmSunday: newDate(year, 3, 29),
            easterSunday: newDate(year, 4, 5),
            secondSundayOfEaster: newDate(year, 4, 12), 
            thirdSundayOfEaster: newDate(year, 4, 19), 
            fourthSundayOfEaster: newDate(year, 4, 26), 
            fifthSundayOfEaster: newDate(year, 5, 3), 
            sixthSundayOfEaster: newDate(year, 5, 10), 
            theAscentionOfTheLord: newDate(year, 5, 17),
            pentecostSunday: newDate(year, 5, 24), 
            leChuaBaNgoi: newDate(year, 5, 31), 
            leMinhMauThanhChua: newDate(year, 6, 7), 
            leThanhTamChuaGieSu: newDate(year, 6, 12),
            chuaKitoVua: newDate(year, 11, 22), 
            firstSundayOfAdvent: newDate(year, 11, 29), 
            secondSundayOfAdvent: newDate(year, 12, 6), 
            thirdSundayOfAdvent: newDate(year, 12, 13), 
            fourthSundayOfAdvent: newDate(year, 12, 20), 
            leThanhGia: newDate(year, 12, 27),
        };
       compareNamPhungVu(resultNamPhungVu, expectedNamPhungVu);
    });
});