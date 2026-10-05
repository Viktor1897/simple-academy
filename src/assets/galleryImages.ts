/*
 * Web-ready copies of the shoot live in ./gallery/web (the originals next to
 * them are iPhone HEIC/full-size JPEG, which browsers either cannot show at all
 * or would download at several MB each).
 */
const files = import.meta.glob("./gallery/web/*.jpg", { eager: true, as: "url" }) as Record<string, string>;

const pick = (names: string[]) => names
    .map(name => files[`./gallery/web/${name}.jpg`])
    .filter(Boolean);

/** graduates holding their certificates */
export const GRADUATE_PHOTOS = pick([
    "img_2377",
    "img_2378",
    "img_2379",
    "img_2380",
    "img_2381",
    "img_2382",
    "img_2383",
    "img_2385",
    "img_2386",
    "img_2387",
    "img_2388",
    "img_2389",
    "img_2390",
    "img_2391",
    "img_2392",
]);

/** the room, the tools and finished cuts */
export const STUDIO_PHOTOS = pick([
    "img_2369",
    "img_2376",
    "img_2374",
    "img_2375",
    "img_2372",
]);
