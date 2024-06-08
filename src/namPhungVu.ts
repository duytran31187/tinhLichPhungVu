import { tinh4TuanMuaVong, tinhNgayPhucSinh, tinhThuTuLeTro, tinhLeChuaHienLinh, tinhLeChuaKiToVua, tinhLeChuaThanhThanHienxuong, tinhLeChuaBaNgoi, tinhLeMinhMauThanhChua, tinhLeThanhTamChuaGieSu, tinhChuaNhatThuongNienDauTienSauLeChuaThanhThanHienXuong, tinhLeChuaChiuPhepRua, tinhNamABC, firstSundayOfLent, secondSundayOfLent, thirdSundayOfLent, fourthSundayOfLent, fifthSundayOfLent, palmSunday, calculateTheAscentionOfTheLord, tinhLeThanhGia } from "./cacNgayLeNamPhungVu";
import { MuaphungSinh, NamPhungVu } from "./commonData";
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

    constructor(year: number) {
        this.year = year;
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
            this.pThuTuLeTro = tinhThuTuLeTro(this.ngayLePhucSinh);
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
            leDucMeChuaTroi: newDate(this.year, 1,1),
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
}