import { ReactNode, SVGProps } from "react";

/*
 * Line icons drawn for this page: one stroke weight, square caps and mitred
 * corners, so they match the site's sharp-cornered look instead of reading as
 * clip-art pulled from a stock set. They paint in currentColor.
 */
const Icon = ({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
        focusable="false"
        {...props}
    >
        {children}
    </svg>
);

/** scissors — the tutors' trade */
export const ScissorsIcon = () => (
    <Icon>
        <circle cx="14" cy="36" r="6" />
        <circle cx="34" cy="36" r="6" />
        <path d="M18 31 L36 6" />
        <path d="M30 31 L12 6" />
        <circle cx="24" cy="22.7" r="1.4" fill="currentColor" stroke="none" />
    </Icon>
);

/** hair clipper — tools come with the course */
export const ClipperIcon = () => (
    <Icon>
        <rect x="13" y="9" width="22" height="6" />
        <path d="M16 9 V5 M20 9 V5 M24 9 V5 M28 9 V5 M32 9 V5" />
        <rect x="15" y="15" width="18" height="25" />
        <rect x="21" y="21" width="6" height="8" />
        <path d="M24 40 V46" />
    </Icon>
);

/** calendar with the first row paid — installments */
export const InstallmentsIcon = () => (
    <Icon>
        <rect x="7" y="10" width="34" height="32" />
        <path d="M7 18 H41" />
        <path d="M16 6 V13 M32 6 V13" />
        <rect x="12" y="24" width="6" height="6" fill="currentColor" />
        <rect x="21" y="24" width="6" height="6" fill="currentColor" />
        <rect x="30" y="24" width="6" height="6" />
        <rect x="12" y="33" width="6" height="5" />
        <rect x="21" y="33" width="6" height="5" />
        <rect x="30" y="33" width="6" height="5" />
    </Icon>
);

/** barber pole — a place in the SIMPLE Barbershop team */
export const BarberPoleIcon = () => (
    <Icon>
        <path d="M24 1 V4" />
        <rect x="17" y="4" width="14" height="5" />
        <rect x="19" y="9" width="10" height="30" />
        <path d="M19 14 L29 9 M19 20 L29 15 M19 26 L29 21 M19 32 L29 27 M19 38 L29 33" />
        <rect x="17" y="39" width="14" height="5" />
    </Icon>
);
