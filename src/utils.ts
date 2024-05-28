export function cloneDate(d: Date): Date {
	return new Date(d.getTime());
}
export function addDate(currentDate: Date, numOfDate: number) {
    const newDate = cloneDate(currentDate);
    newDate.setDate(newDate.getDate() + numOfDate);
    return newDate;
};
export function getChristmasDay(year: number) {
    return new Date(year + '-12-25');
}
export function timNgayTrongTuanSauNgay(d: Date, dayOfWeek: number): Date {
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
        console.log('invalid date');
    }    
    return resultDay!;    
}
export const timChuaNhatGanNhatTuNgay = (d: Date): Date => {
    // chua nhat gan nhat sau ngay d, có thể là ngày d => do do subDay 1
    // let sundayFound = false;
    d.setDate(d.getDate() - 1);
    return timNgayTrongTuanSauNgay(d, 0);
}