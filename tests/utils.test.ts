import { addDate, cloneDate, getChristmasDay } from "../src/utils";

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