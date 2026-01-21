export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [],
        },
        sitemap: process.env.HOST + '/sitemap.xml',
        host: process.env.HOST,
    }
}