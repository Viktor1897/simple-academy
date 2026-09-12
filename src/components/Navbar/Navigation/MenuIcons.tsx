import { ReactNode, SVGProps } from "react";

/*
 * The mobile sheet's row marks. Same drawing rules as the icons in
 * InfoIconsSection: one stroke weight, square caps, mitred corners and no
 * curves the paper look wouldn't allow. They paint in currentColor.
 */
const Icon = ({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
        focusable="false"
        {...props}
    >
        {children}
    </svg>
);

/** a sheet with a folded corner — the story about the academy */
export const AboutIcon = () => (
    <Icon>
        <path d="M9 4 H30 L39 13 V44 H9 Z" />
        <path d="M30 4 V13 H39" />
        <path d="M16 25 H32 M16 34 H32" />
    </Icon>
);

/** scissors — the craft the courses teach */
export const CoursesIcon = () => (
    <Icon>
        <circle cx="13" cy="38" r="5.5" />
        <circle cx="35" cy="38" r="5.5" />
        <path d="M16.5 34 L37 5" />
        <path d="M31.5 34 L11 5" />
    </Icon>
);

/** a polaroid frame — the graduates' work */
export const WorksIcon = () => (
    <Icon>
        <rect x="6" y="4" width="36" height="40" />
        <rect x="12" y="10" width="24" height="21" />
    </Icon>
);

/** head and shoulders — the people who teach */
export const TutorsIcon = () => (
    <Icon>
        <circle cx="24" cy="15" r="7.5" />
        <path d="M8 43 V36 L17 27 H31 L40 36 V43" />
    </Icon>
);

/** barber pole — the shop the academy grew out of */
export const BarbershopIcon = () => (
    <Icon>
        <path d="M24 1 V5" />
        <rect x="14" y="5" width="20" height="6" />
        <rect x="17" y="11" width="14" height="26" />
        <path d="M17 19 L31 11 M17 27 L31 19 M17 35 L31 27" />
        <rect x="14" y="37" width="20" height="6" />
    </Icon>
);

/** envelope — write to us */
export const ContactIcon = () => (
    <Icon>
        <rect x="5" y="11" width="38" height="26" />
        <path d="M5 11 L24 27 L43 11" />
    </Icon>
);
