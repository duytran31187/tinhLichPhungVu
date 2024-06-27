export function cloneDate(d: Date): Date {
	return new Date(d);
}
export function printDate(d: Date): string {
    let day: string | number;
    let month: string | number;
    day = d.getDate();
    month = d.getMonth() + 1;
    let year = d.getFullYear();
    
    day = day < 10 ? '0'+day : day;
    month = month < 10 ? '0' + month : month;
    return `${day}-${month}-${year}`;
}
export function newDate(year: number, month: number, day:number): Date {
    month--; // Javascript counts months from 0 to 11
    // if use string new Date('2025-03-25') => must follow exactly (dddd-mm-dd), unless it will throw error on mobile
    const d = new Date(year, month, day);
    d.setHours(1);
    d.setMinutes(0);
    d.setSeconds(0);
    return d;
}
export function addDate(currentDate: Date, numOfDate: number) {
    const newDate = cloneDate(currentDate);
    newDate.setDate(newDate.getDate() + numOfDate);
    return newDate;
};
export function getChristmasDay(year: number) {
    return newDate(year, 12, 25);
}
export function timNgayTrongTuanSauNgay(d: Date, dayOfWeek: number): Date | null | undefined {
    // dayOfWeek: 0: sun, 6: Saturday
    let count = 1;
    let resultDay: Date;
    let breakTheLoop = false;
    do {
        const testDate = addDate(d, count);
        if (testDate.getDay() == dayOfWeek) {
            breakTheLoop = true;
            resultDay = cloneDate(testDate);
        }
        count++;
        if (count > 7) {
            breakTheLoop = true
        }
    } while(!breakTheLoop)
    if(!resultDay!) {
        console.log(`cant find timNgayTrongTuanSauNgay for d ${d.toDateString()} for ${dayOfWeek}`);
        return null;
    }    
    return resultDay;    
}
export const timChuaNhatGanNhatTuNgay = (d: Date): Date | false => {
    // chua nhat gan nhat sau ngay d, có thể là ngày d => do do subDay 1
    // let sundayFound = false;
    d.setDate(d.getDate() - 1);
    const foundDate = timNgayTrongTuanSauNgay(d, 0);
    if (foundDate instanceof Date) {
        return foundDate;
    }
    // istanbul ignore next
    return false;
}
/**
 * @param date 
 * @returns 
 */
export const buildKeyInNumberFromDate = (date: Date): number => {
    const clonedD = cloneDate(date);
    clonedD.setHours(0);
    clonedD.setMinutes(0);
    clonedD.setSeconds(0);
    return clonedD.getTime();
}
export const tenChuaNhatThuongNienThu = (n: number): string => {
    return `CN ${n} mua thuong nien`;
}