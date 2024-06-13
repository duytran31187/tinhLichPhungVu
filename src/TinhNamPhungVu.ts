import { tinh4TuanMuaVong, tinhNgayPhucSinh, tinhThuTuLeTro, tinhLeChuaHienLinh, tinhLeChuaKiToVua, tinhLeChuaThanhThanHienxuong, tinhLeChuaBaNgoi, tinhLeMinhMauThanhChua, tinhLeThanhTamChuaGieSu, tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong, tinhLeChuaChiuPhepRua, tinhNamABC, firstSundayOfLent, secondSundayOfLent, thirdSundayOfLent, fourthSundayOfLent, fifthSundayOfLent, palmSunday, calculateTheAscentionOfTheLord, tinhLeThanhGia } from "./cacNgayLeNamPhungVu";
import { LE_KINH, LE_NHO, LE_TRONG, MuaphungSinh, NamPhungVu, NgayLeData, SingleDateData, danhSachNgayLeCoDinh, nameOfDays } from "./commonData";
import { newDate, addDate, cloneDate, buildKeyInNumberFromDate, tenChuaNhatThuongNienThu } from "./utils";

export class TinhNamPhungVu {
    private year: number;
    private pLePhucSinh: Date | undefined; // start with p => mean property
    private pThuTuLeTro: Date | undefined;
    private pNgayLeChuaHienLinh: Date | undefined;
    private pLeThanhGia: Date | undefined;
    private p4TuanMuaVong: MuaphungSinh | undefined;
    private namPhungVu: NamPhungVu | undefined; // cac ngay le tinh theo cong thu
    private fullYear: SingleDateData[] = []; // full 365 ngay
    private firstSundayOfYear: Date | undefined = undefined; // CN tuan dau tien de tinh mua thuong nien


    constructor(year: number) {
        this.year = +year; //make sure is number
        /// init danh sach
        let date = newDate(this.year, 1, 1);
        const endDate = newDate(this.year + 1, 1, 1);
        while (date < endDate) {
            if (!this.firstSundayOfYear && date.getDay() == 0) {
                this.firstSundayOfYear = cloneDate(date);
            }
            this.addNgayLeVoDanhSach(date, '', '', true);
            date.setDate(date.getDate() + 1);
        };
    }

    private getFullYearKeyFromDate(date: Date): number {// index of this.fullYear
        return buildKeyInNumberFromDate(date);
    }
    private addNgayLeVoDanhSach(date: Date, ngayLe: string, loaiNgayLe: string | undefined, fixed = false): void {
        let indexStr = this.getFullYearKeyFromDate(date);
        const singleDateData: NgayLeData = {
            name: ngayLe,
            type: loaiNgayLe ? loaiNgayLe : '',
            fixed: fixed
        };
        if (!this.fullYear[indexStr]) { // init data by date
            let ngayLeData: SingleDateData = {
                date: newDate(this.year, date.getMonth() + 1, date.getDate()),
                cacNgayLe: [],
            };
            this.fullYear[indexStr] = ngayLeData;
        }

        if (ngayLe != '') { // only add if ngayLe valid
            this.fullYear[indexStr].cacNgayLe.push(singleDateData);
        }
    }


    private tinhNgayPhucSinh(): Date {
        return tinhNgayPhucSinh(this.year) as Date;
    }
    private tinhThuTuLeTro(): Date {
        return tinhThuTuLeTro(this.ngayLePhucSinh)
    }

    private get ngayLePhucSinh(): Date {
        if (!this.pLePhucSinh) {
            this.pLePhucSinh = this.tinhNgayPhucSinh() as Date;
        }
        return this.pLePhucSinh;
    }
    private get ngayLeTro(): Date {
        if (!this.pThuTuLeTro) {
            this.pThuTuLeTro = this.tinhThuTuLeTro();
        }
        return this.pThuTuLeTro;
    }
    private get ngayLeChuaHienLinh(): Date {
        if (!this.pNgayLeChuaHienLinh) {
            this.pNgayLeChuaHienLinh = tinhLeChuaHienLinh(this.year);
        }
        return this.pNgayLeChuaHienLinh;
    }
    private get ngayLeThanhGia(): Date {
        if (!this.pLeThanhGia) {
            this.pLeThanhGia = tinhLeThanhGia(this.year);
        }
        return this.pLeThanhGia;
    }

    private get bonTuanMuaVong(): MuaphungSinh {
        if (!this.p4TuanMuaVong) {
            this.p4TuanMuaVong = tinh4TuanMuaVong(this.year);
        }
        return this.p4TuanMuaVong!;
    }

    private tinhLichPhungVu() {
        const tuanMuaVong = this.bonTuanMuaVong;
        const leChuaKiToVua = tinhLeChuaKiToVua(tuanMuaVong.week1);
        const pentecostSunday = tinhLeChuaThanhThanHienxuong(this.ngayLePhucSinh);
        const leChuaBaNgoi = tinhLeChuaBaNgoi(pentecostSunday);
        const leMinhMauThanhChua = tinhLeMinhMauThanhChua(leChuaBaNgoi);
        const leThanhTamChuaGieSu = tinhLeThanhTamChuaGieSu(leMinhMauThanhChua);
        const chuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong = tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong(
            leChuaKiToVua,
            pentecostSunday
        );
        const leChuaChiuPhepRua = tinhLeChuaChiuPhepRua(this.year);
        if (!(leChuaChiuPhepRua instanceof Date)) { /* istanbul ignore next */
            return false;
        }

        this.namPhungVu = {
            year: this.year,
            yearABC: tinhNamABC(this.year),
            oddEven: this.year % 2 == 0 ? 'Even ( Năm chẵn)' : 'Odd (Năm lẻ)',
            theEpiphanyOfTheLord: this.ngayLeChuaHienLinh,
            firstOrdinarySundayAfterPentecostSunday: chuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong,
            leChuaChiuPhepRua: leChuaChiuPhepRua,
            ashWed: this.ngayLeTro,
            firstSundayOfLent: firstSundayOfLent(this.ngayLeTro),
            secondSundayOfLent: secondSundayOfLent(this.ngayLeTro),
            thirdSundayOfLent: thirdSundayOfLent(this.ngayLeTro),
            fourthSundayOfLent: fourthSundayOfLent(this.ngayLeTro),
            fifthSundayOfLent: fifthSundayOfLent(this.ngayLeTro),
            palmSunday: palmSunday(this.ngayLeTro),
            easterSunday: this.ngayLePhucSinh,
            secondSundayOfEaster: addDate(this.ngayLePhucSinh, 7),
            thirdSundayOfEaster: addDate(this.ngayLePhucSinh, 14),
            fourthSundayOfEaster: addDate(this.ngayLePhucSinh, 21),
            fifthSundayOfEaster: addDate(this.ngayLePhucSinh, 28),
            sixthSundayOfEaster: addDate(this.ngayLePhucSinh, 35),
            theAscentionOfTheLord: calculateTheAscentionOfTheLord(this.ngayLePhucSinh),
            pentecostSunday: pentecostSunday,
            leChuaBaNgoi: leChuaBaNgoi,
            leMinhMauThanhChua: leMinhMauThanhChua,
            leThanhTamChuaGieSu: leThanhTamChuaGieSu,
            chuaKitoVua: leChuaKiToVua,
            firstSundayOfAdvent: tuanMuaVong.week1,
            secondSundayOfAdvent: tuanMuaVong.week2,
            thirdSundayOfAdvent: tuanMuaVong.week3,
            fourthSundayOfAdvent: tuanMuaVong.week4,
            leThanhGia: this.ngayLeThanhGia,
        }
    }

    public getNamPhungVu() {
        if (!this.namPhungVu) {
            this.tinhLichPhungVu();
        }
        return this.namPhungVu;
    }

    private populateCalculatedDaysToCalender(): void {
        const namphungVuIns = this.getNamPhungVu()!;
        const LeTrong = [
            'theEpiphanyOfTheLord', // Le Chua Hien Linh
            'theAscentionOfTheLord', // Le Chua Len Troi
            'pentecostSunday', //: 'Lễ Chúa Thánh Thần hiện xuống'
            'leChuaBaNgoi', //: leChuaBaNgoi
            'leMinhMauThanhChua',
            'leThanhTamChuaGieSu'
        ];
        const LeKinh = [
            'leChuaChiuPhepRua'
        ];
        for (let key in namphungVuIns) {
            if (namphungVuIns.hasOwnProperty(key)) {
                const val = namphungVuIns[key as keyof NamPhungVu];
                const nameOfDate = nameOfDays[key as keyof NamPhungVu];
                if (val instanceof Date) {
                    if (nameOfDays.hasOwnProperty(key)) {
                        let loaiNgayLe = '';
                        if (LeTrong.includes(key)) {
                            loaiNgayLe = LE_TRONG;
                        } else if (LeKinh.includes(key)) {
                            loaiNgayLe = LE_KINH
                        }
                        this.addNgayLeVoDanhSach(val, nameOfDate, loaiNgayLe, false);
                    } else { /* istanbul ignore next */
                        throw new Error('khong the tim thay ten ngay le');
                    }
                }
            }
        }
    }
    private setSameTimeOfDate(date: Date): Date {
        const d = cloneDate(date);
        d.setHours(1);
        d.setMinutes(0);
        d.setSeconds(0);
        return d;
    }
    private populateCacNgayLeCoDinh(): void {
        const LeCoDinh = danhSachNgayLeCoDinh(this.year);
        let d: NgayLeData;
        for (d of LeCoDinh) {
            this.addNgayLeVoDanhSach(d.date!, d.name, d.type, d.fixed);
        }
    }
    private nameChuaNhaMuaThuongNienThu(n: number): string {
       return tenChuaNhatThuongNienThu(n);
    }
    /**
     * goi sau khi da populate het cac ngay le co dinh, theo cong thu
     */
    private tinhchuaNhatMuaThuongNien(): void {
        // mua thuong nien lan 1: Sau Lễ Chúa chịu phép rửa tới trươc thu 4 le tro
        // CN đau tien cua nam
        const namPhungVu = this.namPhungVu!;
        const leChuaHienLinh = namPhungVu.theEpiphanyOfTheLord;
        let d = cloneDate(leChuaHienLinh);
        d.setDate(d.getDate() + 7); // CN dau tien sau le hien linh
        if(d.toDateString() == namPhungVu.leChuaChiuPhepRua.toDateString()) {
            d.setDate(d.getDate() + 7); 
        }
        const thu4LeTro = namPhungVu.ashWed;
        let muaThuongNienThu = 2;
        while (d.getTime() < thu4LeTro.getTime()) {
            this.addNgayLeVoDanhSach(
                d,
                this.nameChuaNhaMuaThuongNienThu(muaThuongNienThu),
                '',
                false
            );
            d.setDate(d.getDate() + 7);
            muaThuongNienThu++;
        }
        // CN thu 1 cua nam là 
        // mua thuong nien lan 2: sau le minh mau thanh chua va truoc le Ki To Vua
        muaThuongNienThu = namPhungVu.firstOrdinarySundayAfterPentecostSunday;
        d = cloneDate(namPhungVu.pentecostSunday);
        d = this.setSameTimeOfDate(d);
        d.setDate(d.getDate() + 7);
        const leKitoVua = this.setSameTimeOfDate(namPhungVu.chuaKitoVua);
        while (
            d.getTime() > namPhungVu.pentecostSunday.getTime() // tuan sau le chua thanh than hien xuong
            && d.getTime() < leKitoVua.getTime() // truoc le ki to vua
        ) {// truoc le kia to vua
            // console.log(`${d.toDateString()} la ${this.nameChuaNhaMuaThuongNienThu(muaThuongNienThu)}`);
            if(
                d.toDateString() !== namPhungVu.leChuaBaNgoi.toDateString()
                && d.toDateString() !== namPhungVu.leMinhMauThanhChua.toDateString()
                &&  d.toDateString() !== newDate(this.year, 6,29).toDateString() // le thanh phao lo, phe ro 
            ) { 
                this.addNgayLeVoDanhSach(
                    d,
                    this.nameChuaNhaMuaThuongNienThu(muaThuongNienThu),
                    '',
                    false
                );
            }
            d.setDate(d.getDate() + 7);
            muaThuongNienThu++;
        }
    }
    private populateTuanBatNhat() {
        // t2 - t7 sau ngay phung sinh
        const namPhungVu = this.namPhungVu!;
        const d = cloneDate(namPhungVu.easterSunday);
        // t2 tuan bat nhat
        let batNhaThu = 1;
        do {
            d.setDate(d.getDate()+1);
            batNhaThu++;
            this.addNgayLeVoDanhSach(
                d,
                `Thu ${batNhaThu} trong Tuần Bát Nhật Lễ Phục Sinh`,
                LE_TRONG,
                false
            );
        } while (batNhaThu < 8);
        
    }
    public getFullLichPhungVuTheoNam() {
        this.populateCacNgayLeCoDinh(); // ngay le co dinh
        this.populateCalculatedDaysToCalender(); //  ngay le theo cong thuc
        this.tinhchuaNhatMuaThuongNien();
        this.populateTuanBatNhat();
        return this.fullYear;
    }

}