import { tinhNgayPhucSinh, tinhLeThanhGia, tinhLeChuaHienLinh, tinhLeChuaChiuPhepRua} from "../src/tinhlephucsinh";
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
		const actual = tinhNgayPhucSinh(year);
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
        expect(actual.toDateString()).toStrictEqual(expectedDate.toDateString());
    })
});
