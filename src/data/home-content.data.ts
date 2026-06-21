interface IHomeContent {
    title:string,
    text:string,
    summary:string
}

const HomeContentData:IHomeContent[] = [
    {
        title:'tentang kami',
        text:'lahir dari obsesi memancing',
        summary: 'Berawal dari dapur kecil seorang peracik umpan pada 2009, GBR tumbuh menjadi produsen pelet pancing tepercaya di Indonesia. Kami memadukan ilmu nutrisi pangan dengan naluri pemancing sejati untuk menciptakan umpan yang benar-benar bekerja.'
    },
    {
        title:'produk unggulan',
        text:'satu umpan untuk setiap target',
        summary: 'diformulasi spesifik berdasarkan jenis ikan dan medan memancingnya.'
    },
    {
        title:'kata pemancing',
        text:'dipercaya para pemancing juara',
        summary: 'dari kolam galatama sampai laut lepas, inilah pengalaman mereka yang sudah membuktikan keampuhan GBR.'
    },
    {
        title:'artikel & tips',
        text:'tingkatkan skill memancingmu',
        summary: 'Wawasan, teknik, dan rahasia racikan dari para ahli memancing.'
    }
    
]

export default HomeContentData;