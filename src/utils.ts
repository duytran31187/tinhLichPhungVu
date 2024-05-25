export function cloneDate(d: Date): Date {
	return new Date(d.getTime());
}
export function addDate(currentDate: Date, numOfDate: number) {
    const newDate = cloneDate(currentDate);
    newDate.setDate(newDate.getDate() + numOfDate);
    return newDate;
};
export function getChristmasDay(year: number) {
    return new Date(year, 12, 25);
}