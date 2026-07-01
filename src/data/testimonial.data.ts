export interface ITestimonial {
    id:number,
    nama:string,
    role:string,
    asal:string,
    testimoni:string
}

export type TTestimonial=ITestimonial[];


const TestimonialData:ITestimonial[] = [
    {
        id:1,
        nama:'Budi Santoso',
        role:'Juara Galatama',
        asal:'Bekasi',
        testimoni:'Pakai Mas Juara di lomba, sekali lempar langsung dapet sambaran. Tiga kali juara berturut-turut, umpan ini beneran nggak ada lawan.'
    },
    {
        id:2,
        nama:'Rian Pratama',
        role:'Pemancing Harian',
        asal:'Bogor',
        testimoni:'Nila Strike bikin ember penuh tiap weekend. Pelet apungnya stabil dan aromanya kerasa banget. Recommended buat pemula sekalipun.'
    },
    {
        id:3,
        nama:'Pak Hendra',
        role:'Pemilik Pemancingan',
        asal:'Tegal',
        testimoni:'Pelanggan kolam saya selalu nyari Lele Monster. Strike rate-nya tinggi, jadi orang betah mancing lebih lama. Stok selalu habis duluan.'
    },
    {
        id:4,
        nama:'Agus Salim',
        role:'Pemancing Pro',
        asal:'Lampung',
        testimoni:'Laut Pro tahan banget kena arus. Umpan lain hancur, ini masih utuh. Kakap merah ukuran jumbo berhasil naik. Mantap!'
    }
]

export default TestimonialData;