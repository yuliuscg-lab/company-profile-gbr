import MasJuara from "../assets/product-image/resized/mas-juara.png"
import NilaStrike from "../assets/product-image/resized/nila-strike.png"
import LeleMonster from "../assets/product-image/resized/lele-monster.png"
import LautPro from "../assets/product-image/resized/laut-pro.png"

export interface IProduct {
    id:number,
    productImg:string,
    productTag:string,
    productName:string,
    productBrief:string,
    productDesc:string,
    productStrength:string[],
    productPrice:string,
    productUom:string
}

export type TProduct=IProduct[];

const ProductData:IProduct[] = [
    {
        productImg: MasJuara,
        productTag: 'Ikan Mas',
        productName: "Mas Juara",
        productBrief: "Aroma tape & susu yang bikin mas tak tahan",
        productDesc: "Formula essen fermentasi premium dengan kombinasi tape singkong dan susu murni. Teksturnya lengket sempurna, mudah dikepal, dan tahan lama di dasar kolam. Andalan para jawara lomba galatama ikan mas.",
        productStrength: ['Aroma fermentasi tape & susu', 'Daya pikat jarak jauh', 'Anti hancur 45 menit'],
        productPrice: 'Rp. 38.000',
        productUom: "per 500 gram",
        id: 1
    },
    {
        productImg: NilaStrike,
        productTag: 'Ikan Nila',
        productName: "Nila Strike",
        productBrief: "Umpan apung dengan sensasi tarikan beruntun.",
        productDesc: "Pelet apung ringan diperkaya spirulina dan udang giling. Dirancang untuk memancing nila di permukaan dan tengah air. Warna cerah yang merangsang nafsu makan, cocok untuk pemancing harian maupun lomba.",
        productStrength: ['Pelet apung kaya spirulina', 'Warna kontras pemikat', 'Cocok air keruh dan jernih'],
        productPrice: 'Rp. 32.000',
        productUom: "per 500 gram",
        id: 2
    },
    {
        productImg: LeleMonster,
        productTag: 'Ikan Lele & Patin',
        productName: "Lele Monster",
        productBrief: "Aroma amis pekat untuk predator dasar",
        productDesc: "Pelet tenggelam beraroma ikan dan ati ayam yang sangat pekat. Menyebar di dasar kolam dan memancing lele babon keluar dari persembunyian. Protein tinggi membuat ikan agresif menyambar.",
        productStrength: ['Aroma amis pekat', 'Protein tinggi 42%', 'Tenggelam cepat ke dasar'],
        productPrice: 'Rp. 29.000',
        productUom: "per 500 gram",
        id: 3
    },
    {
        productImg: LautPro,
        productTag: 'Ikan Laut',
        productName: "Laut Pro",
        productBrief: "Tahan arus, aroma menembus air asin",
        productDesc: "Umpan khusus pinggiran dan tengah laut dengan binder tahan arus dan garam. Diformulasi dengan ekstrak cumi dan krill untuk menarik kakap, kerapu, hingga baronang. Tetap utuh meski terhantam ombak.",
        productStrength: ['Tahan arus & air asin', 'Ekstrak cumi & krill', 'Untuk ikan laut besar'],
        productPrice: 'Rp. 45.000',
        productUom: "per 500 gram",
        id: 4
    }
    
]

export default ProductData;