export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    PRODUCTS: '/products',
    ARTICLES: '/articles',
    CMS: '/cms',
    CMSARTICLES: 'articles',
    CMSUSERS: 'users',
    CMSANALYTICS: 'analytics',
    ARTICLE_READ: '/articles/:id'
} as const;

export const CMS_PATHS = {
    ARTICLES: `${ROUTES.CMS}/${ROUTES.CMSARTICLES}`,
    USERS: `${ROUTES.CMS}/${ROUTES.CMSUSERS}`,  
    ANALYTICS: `${ROUTES.CMS}/${ROUTES.CMSANALYTICS}`,
} as const;