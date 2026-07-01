import { ROUTES } from "../routes/routePaths";

export interface INavMenu {
    label:string,
    path:typeof ROUTES[keyof typeof ROUTES]; 
}
export const navItems:INavMenu[] = [
    { label: 'Beranda', path:ROUTES.HOME},
    { label: 'Tentang Kami', path:ROUTES.ABOUT},
    { label: 'Produk', path:ROUTES.PRODUCTS},
    { label: 'Artikel', path:ROUTES.ARTICLES}
]