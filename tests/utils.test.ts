import { addDate, cloneDate, getChristmasDay, newDate, printDate, timNgayTrongTuanSauNgay } from "../src/utils";

test('cloneDate', () => {
    const date1 = new Date('2025-12-01');
    const clonedDate = cloneDate(date1);
    expect(clonedDate.getTime()).toEqual(date1.getTime());
});
test('getChristmasDay', () => {
    const chirstmas2024 = new Date('2024-12-25');
    const chirstmas2025 = new Date('2025-12-25');
    expect(getChristmasDay(2024).getTime()).toEqual(chirstmas2024.getTime());
    expect(getChristmasDay(2025).getTime()).toEqual(chirstmas2025.getTime());
});
test('addDate', () => {
    const chirstmas2024 = new Date('2024-12-25');
    expect(addDate(chirstmas2024, 4).getTime()).toEqual(new Date('2024-12-29').getTime());
    expect(addDate(chirstmas2024, 5).getTime()).toEqual(new Date('2024-12-30').getTime());
    expect(addDate(chirstmas2024, 6).getTime()).toEqual(new Date('2024-12-31').getTime());
    expect(addDate(chirstmas2024, 7).getTime()).toEqual(new Date('2025-01-01').getTime());
});
describe('timNgayTrongTuanSauNgay', () => {
    it('tim ngay chu nhat', () => {
        const d = timNgayTrongTuanSauNgay(
            new Date('2024-05-27'),
            0
        )!;
        expect(d.toDateString()).toStrictEqual(new Date('2024-06-02').toDateString()); 
    });

    it('tim ngay t2', () => {
        const d = timNgayTrongTuanSauNgay(
            new Date('2024-05-27'),
            1
        )!;
        expect(d.toDateString()).toStrictEqual(new Date('2024-06-03').toDateString()); 
    });
    it('throw error', () => {
        const d = timNgayTrongTuanSauNgay(
            new Date('2024-05-27'),
            10
        );
        expect(d).toBe(null);
    });
});
describe('cloneDate', () => {
    it('clone date', () => {
        const d1 = new Date('2025-12-25');
        const d2 = cloneDate(d1);
        d2.setDate(d2.getDate() + 1);
        expect(d1.toDateString()).toStrictEqual('Thu Dec 25 2025');
        expect(d2.toDateString()).toStrictEqual('Fri Dec 26 2025');
    });
});
describe('clonnewDateeDate', () => {
    it('new date', () => {
        const d1 = newDate(2025, 12, 25);
        expect(d1.toDateString()).toStrictEqual('Thu Dec 25 2025');
    });
});
describe('printDate', () => {
    it('printDate', () => {
        const d1 = newDate(2025, 12, 25);
        expect(printDate(d1)).toStrictEqual('25-12-2025');
        const d2 = newDate(2025, 2, 5);
        expect(printDate(d2)).toStrictEqual('05-02-2025');
    });
});