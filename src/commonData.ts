import { newDate } from "./utils";

export type MuaphungSinh = {
    week1: Date,
    week2: Date,
    week3: Date,
    week4: Date
}
export type simpleDate  = {
    year: number,
    month: number,
    day: number
};
export type NamPhungVu = {
    year: number,
    yearABC: string,
    oddEven: string,
    leDucMeChuaTroi?: Date,
    dangchuaGiesuTrongDenThanh: Date
    theEpiphanyOfTheLord: Date,
    leChuaChiuPhepRua: Date,
    ashWed: Date,
    firstSundayOfLent: Date,
    secondSundayOfLent: Date,
    thirdSundayOfLent: Date,
    fourthSundayOfLent: Date,
    fifthSundayOfLent: Date,
    palmSunday: Date,
    easterSunday: Date,
    secondSundayOfEaster: Date,
    thirdSundayOfEaster: Date,
    fourthSundayOfEaster: Date,
    fifthSundayOfEaster: Date,
    sixthSundayOfEaster: Date,
    theAscentionOfTheLord: Date,
    pentecostSunday: Date,
    leChuaBaNgoi: Date,
    leMinhMauThanhChua: Date,
    leThanhTamChuaGieSu: Date,
    chuaKitoVua: Date,
    firstSundayOfAdvent: Date,
    secondSundayOfAdvent: Date,
    thirdSundayOfAdvent: Date,
    fourthSundayOfAdvent: Date,
    christmas: Date,
    leThanhGia: Date,
    firstOrdinarySundayAfterPentecostSunday: number, // chua nhat dau tien sau le chua thanh than hien xuong la chua nhat thuong nien thu may ?
}
export const nameOfDays = {
    year: 'year( Năm)',
    yearABC: 'A|B|C (năm A|B|C)',
    oddEven: 'Odd|Even (Năm chẵn lẻ)',
    theEpiphanyOfTheLord: 'The Epiphany of the Lord (Lễ Chúa Hiển Linh)',
    leChuaChiuPhepRua: 'Lễ Chúa chịu phép rửa',
    ashWed: 'Ash Wednesday (Thứ tư lễ tro)',
    firstSundayOfLent: 'First Sunday of Lent (Chúa nhật thứ nhất mùa chay)',
    secondSundayOfLent: 'Second Sunday of Lent (Chúa nhật thứ 2 mùa chay)',
    thirdSundayOfLent: 'Third Sunday of Lent (Chúa nhật thứ 3 mùa chay)',
    fourthSundayOfLent: 'Fourth Sunday of Lent (Chúa nhật thứ 4 mùa chay)',
    fifthSundayOfLent: 'Fifth Sunday of Lent (Chúa nhật thứ 5 mùa chay)',
    palmSunday: 'Palm Sunday (Lễ Lá)',
    easterSunday: 'Easter Sunda (Phục sinh)',
    secondSundayOfEaster: 'Second Sunday of Easter (Chúa nhật thứ 2 phục sinh)',
    thirdSundayOfEaster: 'Third Sunday of Easter (Chúa nhật thứ 3 phục sinh)',
    fourthSundayOfEaster: 'Fourth Sunday of Easter (Chúa nhật thứ 4 phục sinh)',
    fifthSundayOfEaster: 'Fifth Sunday of Easter (Chúa nhật thứ 5 phục sinh)',
    sixthSundayOfEaster: 'Sixth Sunday of Easter (Chúa nhật thứ 6 phục sinh)',
    theAscentionOfTheLord: 'The Ascention of the Lord (Lễ Chúa Lên Trời)',
    pentecostSunday: 'Pentecost Sunday (Lễ Chúa Thánh Thần hiện xuống)',
    firstSundayOfAdvent: 'First Sunday of Advent (Chúa nhật thứ nhất mùa vọng)',
    secondSundayOfAdvent: 'Second Sunday of Advent (Chúa nhật thứ 2 mùa vọng)',
    thirdSundayOfAdvent: 'Third Sunday of Advent (Chúa nhật thứ 3 mùa vọng)',
    fourthSundayOfAdvent: 'Fourth Sunday of Advent (Chúa nhật thứ tư mùa vọng)',
    christmas: 'Christmas (Giáng sinh)',
    leThanhGia: 'Lễ Thánh Gia',
    chuaKitoVua: 'Lễ Chúa KiTo Vua',
    firstOrdinarySundayAfterPentecostSunday: 'Chua Nhat Thuong Nien sau Le Chua Thanh than hien xuong',
    leDucMeChuaTroi: 'Thánh Ma-ri-a, Ðức Mẹ Chúa Trời',
    dangchuaGiesuTrongDenThanh: 'Dâng Chúa Giê-su Trong Đền Thánh',
    leChuaBaNgoi: 'Lễ Chúa Ba Ngôi',
    leMinhMauThanhChua: 'Lễ Mình Máu Thánh Chúa',
    leThanhTamChuaGieSu: 'Lễ Thánh Tâm Chúa Giê Su',
};
export type NgayLeData = {
    name: string,
    type?: string, //
    fixed?: boolean,
    date?: Date,
}
export type SingleDateData = {
    date: Date, // full date
    cacNgayLe: NgayLeData[]
}
export const danhSachNgayLeCoDinh =(year: number): NgayLeData[] => {
    return [
        {
            name: 'Thánh Ma-ri-a, Ðức Mẹ Chúa Trời	Lê Trọng',
            date: newDate(year, 1,1),
            fixed: true,
        },
        {
            name: 'Thánh Ba-xi-li-ô Cả và thánh Ghê-gô-ri-ô Na-di-en, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 1,2),
            type: 'N',
            fixed: true,
        },
        {
            name: 'Kính Danh rất thánh Chúa Giê-su',
            date: newDate(year, 1,3),
            fixed: true,
        },
        {
            name: 'Thánh Rây-mun-đô Pê-nha-pho, linh mục',
            date: newDate(year, 1,7),
            fixed: true,
        },
        {
            name: 'Thánh Hi-la-ri-ô, giám mục, tiến sĩ Hội Thánh',
            date: newDate(year, 1,13),
            fixed: true,
        },
        {
            name: 'Thánh An-tôn, viện phụ',
            date: newDate(year, 1,17),
            type: 'N',
            fixed: true,
        },
        {
            name: 'Thánh Pha-bi-a-nô, giáo hoàng, tử đạo',
            date: newDate(year, 1,20),
            fixed: true,
        },
        {
            name: 'Thánh Xê-bát-ti-a-nô, tử đạo',
            date: newDate(year, 1,20),
            fixed: true,
        },
        {
            name: 'Thánh A-nê, trinh nữ, tử đạo',
            date: newDate(year, 1,21),
            type: 'N',
            fixed: true,
        },
    ]
}
// 1-1	Thánh Ma-ri-a, Ðức Mẹ Chúa Trời	Lê Trọng
// 2-1	Thánh Ba-xi-li-ô Cả và thánh Ghê-gô-ri-ô Na-di-en, giám mục, tiến sĩ Hội Thánh	Lễ Nhớ
// 3-1	Kính Danh rất thánh Chúa Giê-su	
// 7-1	Thánh Rây-mun-đô Pê-nha-pho, linh mục	
// 13-1	Thánh Hi-la-ri-ô, giám mục, tiến sĩ Hội Thánh	
// 17-1	Thánh An-tôn, viện phụ	Lễ Nhớ
// 20-1	Thánh Pha-bi-a-nô, giáo hoàng, tử đạo	
// 20-1	Thánh Xê-bát-ti-a-nô, tử đạo	
// 21-1	Thánh A-nê, trinh nữ, tử đạo	Lễ Nhớ
// 22-1	Thánh Vinh-sơn, phó tế, tử đạo	
// 24-1	Thánh Phan-xi-cô đơ Xan, giám mục, tiến sĩ Hội Thánh	
// 27-1	Thánh An-giê-la Mê-ri-si, trinh nữ	
// 28-1	Thánh Tô-ma A-qui-nô, linh mục, tiến sĩ Hội Thánh	
// 31-1	Thánh Gio-an Bốt-cô, linh mục	
// 2-2	Dâng Chúa Giê-su Trong Đền Thánh	Lễ Kính
// 3-2	Thánh An-ga-ri-ô, giám mục	
// 3-2	Thánh Bơ-la-xi-ô, giám mục, tử đạo	
// 5-2	Thánh A-ga-ta, trinh nữ, tử đạo	
// 6-2	Thánh Phao-lô Mi-ki và các bạn, tử đạo	
// 10-2	Thánh Cô-lát-ti-ca, trinh nữ	Lễ Nhớ
// 11-2	Đức Mẹ Lộ-đức	
// 14-2	Thánh Sy-ri-lô, đan sĩ và thánh Mê-tô-đi-ô, giám mục	Lễ Nhớ
// 17-2	Bảy thánh lập dòng Tôi Tớ Đức Mẹ	
// 21-2	Thánh Phê-rô Đa-mi-a-nô, giám mục, tiến sĩ Hội Thánh	
// 27-2	Thánh Ghê-gô-ri-ô thành Narek, viện phụ, tiến sĩ Hội Thánh	
		
// 4-3	Thánh Ca-xi-mia	
// 7-3	Thánh nữ Pe-pê-tu-a và thánh nữ Phê-li-xi-ta, tử đạo	
// 17-3	Thánh Pát-tric, giám mục	
// 18-3	Thánh Sy-ri-lô, giám mục Giê-ru-sa-lem, tiến sĩ Hội Thánh	
// 19-3	Thánh Giu-se, Bạn trăm năm Đức Trinh nữ Maria	Lê Trọng
// 25-3	Lễ Truyền Tin	Lê Trọng
// 4-3	Thánh Ca-xi-mia	
// 7-3	Thánh nữ Pe-pê-tu-a và thánh nữ Phê-li-xi-ta, tử đạo	
// 17-3	Thánh Pát-tric, giám mục	
// 18-3	Thánh Sy-ri-lô, giám mục Giê-ru-sa-lem, tiến sĩ Hội Thánh	
// 19-3	Thánh Giu-se, Bạn trăm năm Đức Trinh nữ Maria	Lê Trọng
// 25-3	Lễ Truyền Tin	Lê Trọng
// 28-4	Thánh Lu-i đơ Mông-pho, linh mục	
// 28-4	Thánh Phê-rô Sa-nen, linh mục, tử đạo	
// 29-4	Thánh Ca-ta-ri-na Si-ê-na, trinh nữ, tiến sĩ Hội Thánh	
// 30-4	Thánh Pi-ô V, giáo hoàng	
// 1-5	Thánh Giu-se thợ	
// 2-5	Thánh A-tha-na-xi-ô, giám mục, tiến sĩ Hội Thánh	Lễ Nhớ
// 3-5	Thánh Phi-lip-phê và thánh Gia-cô-bê, tông đồ	Lễ Kính
// 12-5	Thánh Nê-rê-ô và thánh A-ki-lê-ô, tử đạo	
// 12-5	Thánh Păng-ra-xi-ô, tử đạo	
// 13-5	Đức Mẹ Fa-ti-ma	
// 20-5	Thánh Bê-na-đi-nô Xi-ê-na, linh mục	
// 21-5	Thánh Christôphê de Magallanes, linh mục, và các bạn, tử đạo	
// 22-5	Thánh Ri-ta thành Ca-xi-a, Nữ tu	
// 26-5	Thánh Phi-lip-phê Nê-ri, linh mục	Lễ Nhớ
// 27-5	Thánh Au-tinh thành Can-tơ-bơ-ri, giám mục	
// 2-6	Thánh Mác-sê-li-nô và thánh Phê-rô, tử đạo	
// 3-6	Thánh Ca-rô-lô Loan-ga và các bạn, tử đạo	Lễ Nhớ
// 5-6	Thánh Bô-ni-phát, giám mục, tử đạo	Lễ Nhớ
// 6-6	Thánh Nô-bec-tô, giám mục	
// 11-6	Thánh Ba-na-ba, tông đồ	Lễ Nhớ
// 13-6	Thánh An-tôn thành Pa-đô-va, linh mục, tiến sĩ Hội Thánh	Lễ Nhớ
// 19-6	Thánh Rô-moan-đô, viện phụ	
// 24-6	Sinh nhật thánh Gio-an Tẩy Giả	Lê Trọng
// 29-6	Thánh Phê-rô và thánh Phao-lô, tông đồ	Lê Trọng
// 30-6	Các thánh tử đạo tiên khởi của giáo đoàn Rô-ma	
// 3-7	Thánh Tô-ma, tông đồ	Lễ Kính
// 4-7	Thánh nữ Ê-li-sa-bét Bồ-đào-nha	
// 9-7	Thánh Augustinô Triệu Vinh, linh mục và các bạn, tử đạo	
// 11-7	Thánh Biển-đức, viện phụ	Lễ Nhớ
// 14-7	Thánh Ca-mi-lô Len-li, linh mục	
// 15-7	Thánh Bô-na-ven-tu-ra, giám mục, tiến sĩ Hội Thánh	Lễ Nhớ
// 16-7	Đức Mẹ núi Cat-minh	
// 21-7	Thánh Lô-ren-xô Bơ-rin-đi-xi, linh mục, tiến sĩ Hội Thánh	
// 22-7	Thánh Ma-ri-a Ma-đa-lê-na	Lễ Kính
// 23-7	Thánh Bi-ghit-ta, nữ tu	
// 24-7	Thánh Sa-ben Mac-lup, linh mục	
// 25-7	Thánh Gia-cô-bê, tông đồ	Lễ Kính
// 29-7	Thánh nữ Mác-ta, thánh nữ Ma-ri-a và thánh La-xa-rơ	Lễ Nhớ
// 30-7	Thánh Phê-rô Kim Ngôn, giám mục, tiến sĩ Hội Thánh	
// 31-7	Thánh I-nha-xi-ô Lôi-ô-la, linh mục	Lễ Nhớ
// 1-8	Thánh An-phong Ma-ri-a Li-gô-ri, giám mục, tiến sĩ Hội Thánh	Lễ Nhớ
// 4-8	Thánh Gio-an Ma-ri-a Vi-a-nê, linh mục	Lễ Nhớ
// 5-8	Cung hiến thánh đường Đức Ma-ri-a	
// 6-8	Chúa Hiển Dung	Lễ Kính
// 7-8	Thánh Ga-ê-ta-nô, linh mục	
// 7-8	Thánh Xit-tô II, giáo hoàng và các bạn, tử đạo	
// 8-8	Thánh Đa-minh, linh mục	Lễ Nhớ
// 11-8	Thánh Cờ-la-ra, trinh nữ	Lễ Nhớ
// 12-8	Thánh Gio-an-na Phan-xi-ca Săng-tan, nữ tu	
// 13-8	Thánh Pôn-xi-a-nô, giáo hoàng, và thánh Hip-pô-li-tô, linh mục, tử đạo	
// 14-8	Thánh Mác-xi-mi-li-a-nô Kôn-bê, linh mục, tử đạo	Lễ Nhớ
// 15-8	Đức Ma-ri-a Lên Trời	Lê Trọng
// 19-8	Thánh Gio-an Ơ-đơ, linh mục	
// 20-8	Thánh Bê-na-đô, viện phụ, tiến sĩ Hội Thánh	Lễ Nhớ
// 21-8	Thánh Piô X, giáo hoàng	Lễ Nhớ
// 22-8	Đức Ma-ri-a Nữ vương	Lễ Nhớ
// 25-8	Thánh Giu-se Ca-la-xan, linh mục	
// 25-8	Thánh Lu-y	
// 27-8	Thánh nữ Mô-ni-ca	Lễ Nhớ
// 28-8	Thánh Âu-tinh, giám mục, tiến sĩ Hội Thánh	Lễ Nhớ
// 29-8	Thánh Gio-an Tẩy Giả bị trảm quyết	Lễ Nhớ
// 2-9	Ngày Quốc Khánh	
// 3-9	Thánh Grê-gô-ri-ô Cả, giáo hoàng, tiến sĩ Hội Thánh	Lễ Nhớ
// 5-9	Thánh Tê-rê-xa Cal-cut-ta, nữ tu	
// 8-9	Sinh nhật Đức trinh nữ Maria	Lễ Kính
// 9-9	Thánh Phê-rô Cơ-la-ve, linh mục	
// 12-9	Danh Rất Thánh trinh nữ Ma-ri-a	
// 14-9	Suy tôn Thánh giá	Lễ Kính
// 15-9	Đức Mẹ sầu bi	Lễ Nhớ
// 16-9	Thánh Co-nê-li-ô, giáo hoàng và thánh Sip-ri-a-nô, giám mục, tử đạo	Lễ Nhớ
// 17-9	Thánh Rô-be-tô Be-la-mi-nô, giám mục, tiến sĩ Hội Thánh	
// 17-9	Thánh nữ Hildegard thành Bingen, trinh nữ, tiến sĩ Hội Thánh	
// 19-9	Thánh Gia-nu-a-ri-ô, giám mục, tử đạo	
// 23-9	Thánh Pi-ô thành Pi-e-tren-ci-na, linh mục	Lễ Nhớ
// 26-9	Thánh Cót-ma và thánh Đa-mi-a-nô, tử đạo	
// 29-9	Các Tổng lãnh thiên thần Mi-ca-en, Gáp-ri-en và Ra-pha-en	Lễ Kính
// 30-9	Thánh Giê-rô-ni-mô, linh mục, tiến sĩ Hội Thánh	Lễ Nhớ
// 1-10	Thánh Tê-rê-xa Hài Đồng Giê-su, trinh nữ, tiến sĩ Hội Thánh	Lễ Kính
// 2-10	Các thiên thần hộ thủ	Lễ Nhớ
// 6-10	Thánh Bơ-ru-nô, linh mục	
// 9-10	Thánh Gio-an Lê-ô-nác-đi, linh mục	
// 9-10	Thánh Đi-ô-ni-xi-ô, giám mục và các bạn, tử đạo	
// 14-10	Thánh Ca-lít-tô I, giáo hoàng, tử đạo	
// 15-10	Thánh Tê-rê-xa Giê-su, trinh nữ, tiến sĩ Hội Thánh	Lễ Nhớ
// 16-10	Thánh Hét-vích, nữ tu	
// 16-10	Thánh Ma-ga-ri-ta Ma-ri-a A-la-cốc, trinh nữ	
// 17-10	Thánh I-nha-xi-ô thành An-ti-ô-khi-a, giám mục, tử đạo	Lễ Nhớ
// 22-10	Thánh Gio-an Phao-lô II, giáo hoàng	
// 23-10	Thánh Gio-an thành Ca-pét-ra-nô, linh mục	
// 24-10	Thánh An-tôn Ma-ri-a Cơ-la-rét, giám mục	
// 28-10	Thánh Si-mon và thánh Giu-đa, tông đồ	Lễ Kính
// 1-11	Các Thánh Nam Nữ	Lê Trọng
// 2-11	Cầu Cho Các Tín Hữu Đã Qua Đời	
// 3-11	Thánh Mác-ti-nô Po-rét, tu sĩ	
// 4-11	Thánh Ca-rô-lô Bô-rô-mê-ô, giám mục	Lễ Nhớ
// 9-11	Cung hiến thánh đường La-tê-ra-nô	Lễ Kính
// 10-11	Thánh Lê-ô Cả, giáo hoàng, tiến sĩ Hội Thánh	Lễ Nhớ
// 11-11	Thánh Mác-ti-nô thành Tua, giám mục	Lễ Nhớ
// 12-11	Thánh Giô-sa-phát, giám mục, tử đạo	Lễ Nhớ
// 17-11	Thánh nữ Ê-li-sa-bet nước Hung-ga-ri	Lễ Nhớ
// 18-11	Cung hiến thánh đường thánh Phê-rô và thánh đường thánh Phao-lô	
// 21-11	Đức Mẹ dâng mình trong đền thờ	Lễ Nhớ
// 25-11	Thánh Ca-ta-ri-na A-lê-xan-ri-a, trinh nữ, tử đạo	
// 3-12	Thánh Phan-xi-cô Xa-vi-e, linh mục	Lễ Kính
// 4-12	Thánh Gioan Đa-mát, linh mục, tiến sĩ Hội Thánh	
// 8-12	Đức Maria vô nhiễm nguyên tội	Lê Trọng
// 9-12	Thánh Gio-an Đi-ê-gô	
// 10-12	Đức trinh nữ Ma-ri-a Lô-rê-tô	
// 11-12	Thánh Đa-ma-xô I, giáo hoàng	
// 12-12	Đức trinh nữ Ma-ri-a Goa-đa-lu-pê	
// 23-12	Thánh Gio-an thành Kê-ty, linh mục	
// 24-12	24 tháng 12 Mùa Vọng	
// 25-12	Chúa Giáng Sinh	Lê Trọng
// 26-12	Thánh Tê-pha-nô, tử đạo tiên khởi	Lễ Kính
// 29-12	Thánh Tô-ma Béc-két, giám mục, tử đạo	
// 31-12	Thánh Xin-vet-tê I, giáo hoàng	