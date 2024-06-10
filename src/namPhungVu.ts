import { tinh4TuanMuaVong, tinhNgayPhucSinh, tinhThuTuLeTro, tinhLeChuaHienLinh, tinhLeChuaKiToVua, tinhLeChuaThanhThanHienxuong, tinhLeChuaBaNgoi, tinhLeMinhMauThanhChua, tinhLeThanhTamChuaGieSu, tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong, tinhLeChuaChiuPhepRua, tinhNamABC, firstSundayOfLent, secondSundayOfLent, thirdSundayOfLent, fourthSundayOfLent, fifthSundayOfLent, palmSunday, calculateTheAscentionOfTheLord, tinhLeThanhGia } from "./cacNgayLeNamPhungVu";
import { MuaphungSinh, NamPhungVu, NgayLeData, SingleDateData, nameOfDays } from "./commonData";
import { newDate, addDate, getChristmasDay } from "./utils";

export class tinhNamPhungVu
{
    private year: number;
    private pLePhucSinh: Date | undefined; // start with p => mean property
    private pThuTuLeTro: Date | undefined;
    private pNgayLeChuaHienLinh: Date | undefined;
    private pLeThanhGia: Date | undefined;
    private pNgayLeGiangSinh: Date | undefined;
    private p4TuanMuaVong: MuaphungSinh | undefined;
    private namPhungVu: NamPhungVu | undefined;
    private fullYear: SingleDateData[];


    constructor(year: number) {
        this.year = year;
        this.fullYear = []
    }
    private getFullYearKeyFromDate(date: Date): number {
        return parseInt(this.year  + '' + (date.getMonth()+1) + '' + date.getDate());
    }
    private addNgayLeVoDanhSach(date: Date, ngayLe: string, loaiNgayLe: string, fixed = false): void {
        let indexStr = this.getFullYearKeyFromDate(date);
        const singleDateData: NgayLeData = {
            name: ngayLe,
            type: loaiNgayLe,
            fixed: fixed
        };
        if (!this.fullYear[indexStr]) { // init data by date
            let ngayLeData: SingleDateData = {
                date: newDate(this.year, date.getMonth()+ 1, date.getDate()),
                cacNgayLe: [],
            };
            this.fullYear[indexStr] = ngayLeData;
        }

        if (ngayLe != '') { // only add if ngayLe valid
            this.fullYear[indexStr].cacNgayLe.push(singleDateData);
        }
    }
    private populateCacNgayLeCoDinh(): void {
        // let arrFullYears: any[string] = [];
        let date  = new Date(this.year, 0, 1);
        const endDate = new Date(this.year+1, 0, 1);
        while(date < endDate) {
            const searchDatestr = date.toDateString();
            let ngayLe = '';
            let loaiNgayLe = '';
            switch(searchDatestr) {
                case newDate(this.year, 1, 1).toDateString():
                    ngayLe = 'Thánh Ma-ri-a, Ðức Mẹ Chúa Trời';
                    loaiNgayLe = 'T'; // le trong
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;
                case newDate(this.year, 1, 2).toDateString():
                    ngayLe = 'Thánh Ba-xi-li-ô Cả và thánh Ghê-gô-ri-ô Na-di-en, giám mục, tiến sĩ Hội Thánh';
                    loaiNgayLe = 'N';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;
                case newDate(this.year, 1, 3).toDateString():
                    ngayLe = 'Kính Danh rất thánh Chúa Giê-su';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;            
                case newDate(this.year, 1, 7).toDateString():
                    ngayLe = 'Thánh Rây-mun-đô Pê-nha-pho, linh mục';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;            
                case newDate(this.year, 1, 13).toDateString():
                    ngayLe = 'Thánh Hi-la-ri-ô, giám mục, tiến sĩ Hội Thánh';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;
                case newDate(this.year, 1, 17).toDateString():
                    ngayLe = 'Thánh An-tôn, viện phụ';
                    loaiNgayLe = 'N';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;             
                case newDate(this.year, 1, 20).toDateString():
                    ngayLe = 'Thánh Pha-bi-a-nô, giáo hoàng, tử đạo';
                    loaiNgayLe = 'N';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    ngayLe = 'Thánh Xê-bát-ti-a-nô, tử đạo';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;
                case newDate(this.year, 1, 21).toDateString():
                    ngayLe = 'Thánh A-nê, trinh nữ, tử đạo';
                    loaiNgayLe = 'N';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;                 
                case newDate(this.year, 1, 22).toDateString():
                    ngayLe = 'Thánh Vinh-sơn, phó tế, tử đạo';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;
                case newDate(this.year, 1, 24).toDateString():
                    ngayLe = 'Thánh Phan-xi-cô đơ Xan, giám mục, tiến sĩ Hội Thánh';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;                   
                case newDate(this.year, 1, 27).toDateString():
                    ngayLe = 'Thánh An-giê-la Mê-ri-si, trinh nữ';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;                   
                case newDate(this.year, 1, 28).toDateString():
                    ngayLe = 'Thánh Tô-ma A-qui-nô, linh mục, tiến sĩ Hội Thánh';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;                   
                case newDate(this.year, 1, 31).toDateString():
                    ngayLe = 'Thánh Gio-an Bốt-cô, linh mục';
                    loaiNgayLe = '';
                    this.addNgayLeVoDanhSach(date, ngayLe, loaiNgayLe, true);
                    break;                   
                default:
                    this.addNgayLeVoDanhSach(date, '', '', true); // add empty day
            }
            date.setDate(date.getDate() + 1);
        };
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
    private get ngayLeGiangSinh(): Date {
        if (!this.pNgayLeGiangSinh) {
            this.pNgayLeGiangSinh = getChristmasDay(this.year);
        }
        return this.pNgayLeGiangSinh;
    }

    private get bonTuanMuaVong(): MuaphungSinh {
        if (!this.p4TuanMuaVong) {
            this.p4TuanMuaVong = tinh4TuanMuaVong(this.year);
        }
        return this.p4TuanMuaVong!;
    }

    private tinhLichPhungVu()
    {
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
        if (!(leChuaChiuPhepRua instanceof Date)) { // istanbul ignore next
            return false;
        }

        this.namPhungVu = {
            year: this.year,
            yearABC: tinhNamABC(this.year),
            oddEven: this.year % 2 == 0 ? 'Even ( Năm chẵn)' : 'Odd (Năm lẻ)',
            // leDucMeChuaTroi: newDate(this.year, 1,1),
            dangchuaGiesuTrongDenThanh: newDate(this.year,2,2),
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
            christmas: this.ngayLeGiangSinh,
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
        for (let key in namphungVuIns) {
            if (namphungVuIns.hasOwnProperty(key)) {
                const val =  namphungVuIns[key as keyof NamPhungVu];
                const nameOfDate = nameOfDays[key as keyof NamPhungVu];
                if (val instanceof Date) {
                    if (nameOfDays.hasOwnProperty(key)) {
                        this.addNgayLeVoDanhSach(val, nameOfDate, '', false);
                    } else {
                        throw new Error('khong the tim thay ten ngay le');
                    }
                }
            }
        }
    }
    public getFullLichPhungVuTheoNam() {
        this.populateCacNgayLeCoDinh(); // populate
        this.populateCalculatedDaysToCalender();
        return this.fullYear;
        // console.log(this.fullYear);
    }

}