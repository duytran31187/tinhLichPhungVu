import { 
	tinhNgayPhucSinh, 
	tinhLeThanhGia,
	tinhLeChuaHienLinh,
	tinhLeChuaChiuPhepRua,
	tinhThuTuLeTro,
	tinh4TuanMuaVong,
	tinhLeChuaKiToVua,
	tinhNamABC,
	tinhLeChuaThanhThanHienxuong,
	tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong,
	calculateTheAscentionOfTheLord,
	palmSunday,
	fifthSundayOfLent,
	fourthSundayOfLent,
	thirdSundayOfLent,
	secondSundayOfLent,
	firstSundayOfLent,
	tinhLeChuaBaNgoi,
	tinhLeMinhMauThanhChua,
	tinhLeThanhTamChuaGieSu
} from "../src/cacNgayLeNamPhungVu";
test('tinhNgayPhucSinh', () => {
    const correctDates = [];
	correctDates[2022] = 'April 17, 2022';
	correctDates[2023] = 'April 9, 2023';
	correctDates[2024] = 'March 31, 2024';
	correctDates[2025] = 'April 20, 2025';
	correctDates[2026] = 'April 5, 2026';
	correctDates[2027] = 'March 28, 2027';
	correctDates[2028] = 'April 16, 2028';
	correctDates[2029] = 'April 1, 2029';
	correctDates[2030] = 'April 21, 2030';
	correctDates[2031] = 'April 13, 2031';
	correctDates[2032] = 'March 28, 2032';
	correctDates[2033] = 'April 17, 2033';
	correctDates[2034] = 'April 9, 2034';
    correctDates.forEach((expectedDateStr, year) => {
        const expectedDate = new Date(expectedDateStr);
		const actual = tinhNgayPhucSinh(year) as Date;
        expect(actual.toDateString()).toEqual(expectedDate.toDateString());
    })
    
});

test('tinhLeThanhGia', () => {
	const correctDates = [];
	correctDates[2020] = 'December 27, 2020';
	correctDates[2021] = 'December 26, 2021';
	correctDates[2022] = 'December 30, 2022';
	correctDates[2023] = 'December 31, 2023';
	correctDates[2024] = 'December 29, 2024';
	correctDates[2025] = 'December 28, 2025';
	correctDates.forEach((expectedDateStr, year) => {
        const expectedDate = new Date(expectedDateStr);
		const actual = tinhLeThanhGia(year);
        expect(actual.toDateString()).toEqual(expectedDate.toDateString());
    })
});

test('tinhLeChuaHienLinh', () => {
	const correctDates = [];
	correctDates[2020] = 'January 05, 2020';
	correctDates[2021] = 'January 03, 2021';
	correctDates[2022] = 'January 02, 2022';
	correctDates[2023] = 'January 08, 2023';
	correctDates[2024] = 'January 07, 2024';
	correctDates[2025] = 'January 05, 2025';
	correctDates[2026] = 'January 04, 2026';
	correctDates[2027] = 'January 03, 2027';
	correctDates[2028] = 'January 02, 2028';
	correctDates.forEach((expectedDateStr, year) => {
        const expectedDate = new Date(expectedDateStr);
		const actual = tinhLeChuaHienLinh(year);
        expect(actual.toDateString()).toStrictEqual(expectedDate.toDateString());
    })
});

test('tinhLeChuaChiuPhepRua', () => {
	const correctDates = [];
	correctDates[2022] = 'January 09, 2022';
	correctDates[2023] = 'January 09, 2023';
	correctDates[2024] = 'January 08, 2024';
	correctDates[2025] = 'January 12, 2025';
	correctDates[2026] = 'January 11, 2026';
	correctDates[2027] = 'January 10, 2027';
	correctDates[2028] = 'January 9, 2028';
	correctDates.forEach((expectedDateStr, year) => {
        const expectedDate = new Date(expectedDateStr);
		const actual = tinhLeChuaChiuPhepRua(year);
		expect(actual instanceof Date).toBeTruthy();
		if (actual instanceof Date) {
			expect(actual.toDateString()).toStrictEqual(expectedDate.toDateString());		
		}
    })
});

describe('tinhThuTuLeTro', () => {
	it('kiem tra cac nam', () => {
		const correctDates = [];
		correctDates[2022] = 'March 2, 2022';
		correctDates[2023] = 'February 22, 2023';
		correctDates[2024] = 'February 14, 2024';
		correctDates[2025] = 'March 5, 2025';
		correctDates[2026] = 'February 18, 2026';
		correctDates[2027] = 'February 10, 2027';
		correctDates[2028] = 'March 1, 2028';
		correctDates.forEach((expectedDateStr, year) => {
			const expectedDate = new Date(expectedDateStr);
			const actual = tinhThuTuLeTro(tinhNgayPhucSinh(year) as Date);
			expect(actual.toDateString()).toStrictEqual(expectedDate.toDateString());
		})
	});
	it('test multiple calls', () => {
		const easter = tinhNgayPhucSinh(2024) as Date;
		expect(tinhThuTuLeTro(easter).toDateString()).toStrictEqual((new Date('February 14, 2024')).toDateString());
		expect(tinhThuTuLeTro(easter).toDateString()).toStrictEqual((new Date('February 14, 2024')).toDateString());
		expect(tinhThuTuLeTro(easter).toDateString()).toStrictEqual((new Date('February 14, 2024')).toDateString());
	});
});
describe('tinh4TuanMuaVong', () => {
	it('2024', () => {
		const tuanmuaVong = tinh4TuanMuaVong(2024);
		let sunday1 = new Date('2024-12-01');
		expect(tuanmuaVong.week1.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week2.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week3.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week4.toDateString()).toStrictEqual(sunday1.toDateString());
	});
	it('2025', () => {
		const tuanmuaVong = tinh4TuanMuaVong(2025);
		let sunday1 = new Date('2025-11-30');
		expect(tuanmuaVong.week1.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week2.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week3.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week4.toDateString()).toStrictEqual(sunday1.toDateString());
	});
	it('2026', () => {
		const tuanmuaVong = tinh4TuanMuaVong(2026);
		let sunday1 = new Date('2026-11-29');
		expect(tuanmuaVong.week1.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week2.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week3.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week4.toDateString()).toStrictEqual(sunday1.toDateString());
	});
	it('2027', () => {
		const tuanmuaVong = tinh4TuanMuaVong(2027);
		let sunday1 = new Date('2027-11-28');
		expect(tuanmuaVong.week1.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week2.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week3.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week4.toDateString()).toStrictEqual(sunday1.toDateString());
	});
	it('2028', () => {
		const tuanmuaVong = tinh4TuanMuaVong(2028);
		let sunday1 = new Date('2028-12-03');
		expect(tuanmuaVong.week1.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week2.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week3.toDateString()).toStrictEqual(sunday1.toDateString());
		sunday1.setDate(sunday1.getDate()+7);
		expect(tuanmuaVong.week4.toDateString()).toStrictEqual(sunday1.toDateString());
	});
});

test('tinhLeChuaKiToVua', () => {
	const correctDates = [];
	correctDates[2024] = 'November 24, 2024';
	correctDates[2025] = 'November 23, 2025';
	correctDates[2026] = 'November 22, 2026';
	correctDates[2027] = 'November 21, 2027';
	correctDates[2028] = 'November 26, 2028';
	correctDates.forEach((expectedDateStr, year) => {
		const tuanmuaVong = tinh4TuanMuaVong(year);
        const expectedDate = new Date(expectedDateStr);
		const chuanhatthunhatmuavong = tuanmuaVong.week1;
		const actual = tinhLeChuaKiToVua(chuanhatthunhatmuavong);
        expect(actual.toDateString()).toStrictEqual(expectedDate.toDateString());
    })
});
test('tinhNamABC', () => {
	expect(tinhNamABC(2024)).toBe('B');
	expect(tinhNamABC(2025)).toBe('C');
	expect(tinhNamABC(2026)).toBe('A');
});
describe('tinhLeChuaThanhThanHienxuong- tinhLeChuaBaNgoi - tinhLeMinhMauThanhChua - tinhLeThanhTamChuaGieSu', () => {
	it('2024', () => {
		const easter = tinhNgayPhucSinh(2024) as Date;
		const expectedDate = new Date('2024-05-19');
		const leChuaThanhThanHienXuong = tinhLeChuaThanhThanHienxuong(easter);
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		// le Chua Ba Ngoi
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2024-05-26').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2024-05-26').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2024-05-26').toDateString());
		
		const leChua3Ngoi = tinhLeChuaBaNgoi(leChuaThanhThanHienXuong);
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2024-06-02').toDateString());
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2024-06-02').toDateString());

		const inputDate = tinhLeMinhMauThanhChua(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong));
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2024-06-07').toDateString());
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2024-06-07').toDateString());
	});
	it('2025', () => {
		const easter = tinhNgayPhucSinh(2025) as Date;
		const expectedDate = new Date('2025-06-08');
		const leChuaThanhThanHienXuong = tinhLeChuaThanhThanHienxuong(easter);
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		// le Chua Ba Ngoi
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2025-06-15').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2025-06-15').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2025-06-15').toDateString());
		
		const leChua3Ngoi = tinhLeChuaBaNgoi(leChuaThanhThanHienXuong);
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2025-06-22').toDateString());
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2025-06-22').toDateString());

		const inputDate = tinhLeMinhMauThanhChua(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong));
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2025-06-27').toDateString());
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2025-06-27').toDateString());
	});
	it('2026', () => {
		const easter = tinhNgayPhucSinh(2026) as Date;
		const expectedDate = new Date('2026-05-24');
		const leChuaThanhThanHienXuong = tinhLeChuaThanhThanHienxuong(easter);
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		// le Chua Ba Ngoi
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2026-05-31').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2026-05-31').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2026-05-31').toDateString());
		
		const leChua3Ngoi = tinhLeChuaBaNgoi(leChuaThanhThanHienXuong);
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2026-06-07').toDateString());
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2026-06-07').toDateString());

		const inputDate = tinhLeMinhMauThanhChua(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong));
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2026-06-12').toDateString());
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2026-06-12').toDateString());
	});
	it('2027', () => {
		const easter = tinhNgayPhucSinh(2027) as Date;
		const expectedDate = new Date('2027-05-16');
		const leChuaThanhThanHienXuong = tinhLeChuaThanhThanHienxuong(easter);
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		// le Chua Ba Ngoi
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2027-05-23').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2027-05-23').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2027-05-23').toDateString());
		
		const leChua3Ngoi = tinhLeChuaBaNgoi(leChuaThanhThanHienXuong);
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2027-05-30').toDateString());
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2027-05-30').toDateString());

		const inputDate = tinhLeMinhMauThanhChua(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong));
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2027-06-04').toDateString());
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2027-06-04').toDateString());
	});
	it('2028', () => {
		const easter = tinhNgayPhucSinh(2028) as Date;
		const expectedDate = new Date('2028-06-04');
		const leChuaThanhThanHienXuong = tinhLeChuaThanhThanHienxuong(easter);
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		expect((tinhLeChuaThanhThanHienxuong(easter)).toDateString()).toStrictEqual(expectedDate.toDateString());
		// le Chua Ba Ngoi
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2028-06-11').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2028-06-11').toDateString());
		expect(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong).toDateString()).toStrictEqual(new Date('2028-06-11').toDateString());
		
		const leChua3Ngoi = tinhLeChuaBaNgoi(leChuaThanhThanHienXuong);
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2028-06-18').toDateString());
		expect(tinhLeMinhMauThanhChua(leChua3Ngoi).toDateString()).toStrictEqual(new Date('2028-06-18').toDateString());

		const inputDate = tinhLeMinhMauThanhChua(tinhLeChuaBaNgoi(leChuaThanhThanHienXuong));
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2028-06-23').toDateString());
		expect(tinhLeThanhTamChuaGieSu(inputDate).toDateString()).toStrictEqual(new Date('2028-06-23').toDateString());
	});
});
describe('tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong', () => {
	it('2024', () => {
		const year = 2024;
		const tuanmuaVong = tinh4TuanMuaVong(year);
		expect(tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
			tinhLeChuaKiToVua(tuanmuaVong.week1),
			tinhLeChuaThanhThanHienxuong(tinhNgayPhucSinh(year) as Date)
		)).toBe(8);
	});
	it('2025', () => {
		const year = 2025;
		const tuanmuaVong = tinh4TuanMuaVong(year);
		expect(tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
			tinhLeChuaKiToVua(tuanmuaVong.week1),
			tinhLeChuaThanhThanHienxuong(tinhNgayPhucSinh(year) as Date)
		)).toBe(11);
	});
	it('2026', () => {
		const year = 2026;
		const tuanmuaVong = tinh4TuanMuaVong(year);
		expect(tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
			tinhLeChuaKiToVua(tuanmuaVong.week1),
			tinhLeChuaThanhThanHienxuong(tinhNgayPhucSinh(year) as Date)
		)).toBe(9);
	});
	it('2027', () => {
		const year = 2027;
		const tuanmuaVong = tinh4TuanMuaVong(year);
		expect(tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
			tinhLeChuaKiToVua(tuanmuaVong.week1),
			tinhLeChuaThanhThanHienxuong(tinhNgayPhucSinh(year)  as Date)
		)).toBe(8);
	});
	it('2028', () => {
		const year = 2028;
		const tuanmuaVong = tinh4TuanMuaVong(year);
		expect(tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
			tinhLeChuaKiToVua(tuanmuaVong.week1),
			tinhLeChuaThanhThanHienxuong(tinhNgayPhucSinh(year)  as Date)
		)).toBe(10);
	});
	it('eror if invalid date', () => {
		expect(tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
			new Date('2024-05-29'),
			new Date('2024-05-29')
		)).toBe(100);
	});
});
describe('calculateTheAscentionOfTheLord', () => {
	it('2024', () => {
		const easter = tinhNgayPhucSinh(2024)  as Date;
		expect((calculateTheAscentionOfTheLord(easter) as Date).toDateString()).toStrictEqual((new Date('2024-05-12')).toDateString());
	});
})
describe('firstSundayOfLent', () => {
	it('2024', () => {
		const easter = tinhNgayPhucSinh(2024) as Date;
		const ashWed = tinhThuTuLeTro(easter) as Date;
		expect(firstSundayOfLent(ashWed).toDateString()).toStrictEqual((new Date('2024-02-18')).toDateString());
	});
})
describe('secondSundayOfLent', () => {
	it('2024', () => {
		const easter = tinhNgayPhucSinh(2024) as Date;
		const ashWed = tinhThuTuLeTro(easter);
		expect(secondSundayOfLent(ashWed).toDateString()).toStrictEqual((new Date('2024-02-25')).toDateString());
	});
})
describe('thirdSundayOfLent', () => {
	it('2024', () => {
		const easter = tinhNgayPhucSinh(2024) as Date;
		const ashWed = tinhThuTuLeTro(easter);
		expect(thirdSundayOfLent(ashWed).toDateString()).toStrictEqual((new Date('2024-03-03')).toDateString());
	});
})
describe('fourthSundayOfLent', () => {
	it('2024', () => {
		const easter = tinhNgayPhucSinh(2024) as Date;
		const ashWed = tinhThuTuLeTro(easter);
		expect(fourthSundayOfLent(ashWed).toDateString()).toStrictEqual((new Date('2024-03-10')).toDateString());
	});
})
describe('fifthSundayOfLent', () => {
	it('2024', () => {
		const easter = tinhNgayPhucSinh(2024) as Date;
		const ashWed = tinhThuTuLeTro(easter);
		expect(fifthSundayOfLent(ashWed).toDateString()).toStrictEqual((new Date('2024-03-17')).toDateString());
	});
})
describe('palmSunday', () => {
	it('2024', () => {
		const easter = tinhNgayPhucSinh(2024) as Date;
		const ashWed = tinhThuTuLeTro(easter);
		expect(palmSunday(ashWed).toDateString()).toStrictEqual((new Date('2024-03-24')).toDateString());
	});
})