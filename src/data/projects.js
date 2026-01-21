export const projects = {
    birolixcostruire: {
        title: "BiroliXCostruire",
        tags: []
    }
};

export async function getProgetto(slug) {

    return projects[slug] || null;

    // return null;
    return { ok: 1 };
}