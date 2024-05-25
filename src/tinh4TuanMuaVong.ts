import { MuaphungSinh } from './commonData';
import { getChristmasDay } from './utils';

export function tinhNamABC(y: number): string {
    let yearStr = y.toString();
    let yearNums = Array.from(yearStr);
    let countNum = 0;
    let year: string;
    yearNums.forEach((element) => {
        countNum += parseInt(<string>element);
    });
    switch (countNum % 3) {
        case 1:
            year = 'A';
            break;
        case 2:
            year = 'B';
            break;
        default:
            year = 'C';
    }
    return year;
}
export function tinh4TuanMuaVong(y: number): MuaphungSinh {
    let chrismastDate = getChristmasDay(y);
    // console.log(`vong giang sinh: %s`, chrismastDate.toDateString());
    // tuan thu 4 mua vong5
    let sundayFound = false;
    let count = 0;
    let finalResult: MuaphungSinh;
    do {
        let closestSunday_1 = chrismastDate;
        closestSunday_1.setDate(chrismastDate.getDate() - 1);
        if (closestSunday_1.getDay() === 0) { //sunday
            let sunday4 = new Date(closestSunday_1.getTime());
            let sunday3 = new Date(sunday4.getTime());
            sunday3.setDate(sunday3.getDate() - (7));
            let sunday2 = new Date(sunday3.getTime());
            sunday2.setDate(sunday2.getDate() - (7));
            let sunday1 = new Date(sunday2.getTime());
            sunday1.setDate(sunday2.getDate() - (7));
            sundayFound = true;
            finalResult = {
                week1: sunday1,
                week2: sunday2,
                week3: sunday3,
                week4: sunday4
            };
            break;
        }
        count++;
    } while (!sundayFound);
    return finalResult!;
};
