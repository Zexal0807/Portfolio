export const projects = [
    {
        slug: "birolixcostruire",
        title: "BiroliXCostruire",
        tags: []
    }
];

export async function getProgetto(slug) {
    return projects.find(p => p.slug == slug)
}