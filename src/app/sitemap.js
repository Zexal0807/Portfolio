export default async function sitemap() {

    const lastModified = new Date().toISOString();

    return [
        {
            url: process.env.HOST,
            lastModified,
        },
    ]
}