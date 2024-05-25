import { tinhNgayPhucSinh } from "../src/tinhlephucsinh";
// const testNgayPhucSinh = () => { // return list correct easter days
	
// 	return correctDates[y];
// }
test('test phuc sinh', () => {
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
        console.log(`${year} ${expectedDateStr}`);
        const expectedDate = new Date(expectedDateStr);
        expect(tinhNgayPhucSinh(year).toDateString()).toEqual(expectedDate.toDateString());
    })
    
});