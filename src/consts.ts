export const MAX_CONTENT_WIDTH = "1280px";

export const COLORS = {
    white: "#FFFFFF",
    /** body copy */
    black: "#000000",
    /** warm near-black used for dark surfaces and headings */
    ink: "#2B2A28",
    /** main page background */
    paper: "#F5F5F4",
    paperAlt: "#EBEAE7",
    /** primary accent */
    blue: "#1270CF",
    blueDark: "#0E5AA8",
    /** pale blue used for quiet fills */
    blueTint: "#C7D2E9",
    /** secondary accent */
    coral: "#FF5E4C",
    line: "#DCDBD8",
    textGray: "#5C5B58",
    textMuted: "#9A9995",

    /** legacy aliases, kept so the admin/login pages keep compiling */
    gold: "#1270CF",
    gold2: "#0E5AA8",
    green: "#1CA944",
    bgDark: "#2B2A28",
    bgGray: "#F5F5F4",
};

/**
 * The reference design has no rounded corners at all — its only rounded values
 * are invisible hover areas behind the nav links. Everything here stays square.
 */
export const RADIUS = {
    card: "0",
    control: "0",
};

/**
 * Paper grain, painted on top of every coloured surface AND on the torn seams
 * between them. One shared texture is what keeps a seam from showing up as a
 * flat lighter band, so use this instead of a per-section overlay.
 */
export const PAPER_TEXTURE = "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23t)' opacity='0.06'/%3E%3C/svg%3E\")";

/** height of the torn seam between two sections */
export const TORN_EDGE_HEIGHT = 34;

export const LINKS = {
    ABOUT_US: "about-us",
    COURSES: "courses",
    CONTACT: "contact",
    TUTORS: "tutors",
    GRADUATES: "graduates",
    BARBERSHOP: "barbershop",
    FAQ: "faq",
};

export const LANGUAGES = [
    { label: "PL", code: "pl" },
    { label: "RU", code: "ru" },
];

export const CONTACTS = {
    phone: "+48 786 677 659",
    phoneHref: "tel:+48786677659",
    instagram: "https://www.instagram.com/simple_academy_poznan/",
    instagramLabel: "@simple_academy_poznan",
    mapLink: "https://goo.gl/maps/6S7ZXY7TtGXkbbhk6",
    barbershop: "https://simplebarber.pl/",
};
