import { MuaphungSinh } from './commonData';

export function tinh4TuanMuaVong(y: number): MuaphungSinh {
    /////////////////////////////////////A|B|C///
    let yearStr = y.toString();
    let yearNums = Array.from(yearStr);
    let countNum = 0;
    yearNums.forEach((element) => {
        countNum += parseInt(<string>element);
    });
    let year;
    let finalResult: MuaphungSinh;
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
    ///////////
    let chrismastDate = new Date(y + '-12-25');
    // console.log(`vong giang sinh: %s`, chrismastDate.toDateString());
    // tuan thu 4 mua vong5
    let sundayFound = false;
    let count = 0;
    do {
        var closestSunday_1 = chrismastDate;
        closestSunday_1.setDate(chrismastDate.getDate() - 1);
        if (closestSunday_1.getDay() === 0) { //sunday
            var sunday4 = new Date(closestSunday_1.getTime());
            var sunday3 = new Date(sunday4.getTime());
            sunday3.setDate(sunday3.getDate() - (7));
            var sunday2 = new Date(sunday3.getTime());
            sunday2.setDate(sunday2.getDate() - (7));
            var sunday1 = new Date(sunday2.getTime());
            sunday1.setDate(sunday2.getDate() - (7));
            sundayFound = true;
            finalResult = {
                week1: sunday1,
                week2: sunday2,
                week3: sunday3,
                week4: sunday4,
                yearABC: year
            };
            break;
            // console.log(`${year}    | ${sunday1.toDateString()} | ${sunday2.toDateString()} | ${sunday3.toDateString()} | ${sunday4.toDateString()} | ${chrismastDate.toDateString()}`)
        }
        count++;
    } while (!sundayFound);
    return finalResult!;
};
