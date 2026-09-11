import styled from "@emotion/styled";
import { COLORS, MAX_CONTENT_WIDTH, PAPER_TEXTURE, RADIUS } from "consts";

/* ------------------------------------------------------------------ layout */

type SectionProps = {
    padding?: string;
    backgroundColor?: string;
    color?: string;
};

/*
 * Every section paints its own opaque surface plus the shared grain. The torn
 * seams paint the exact same pair, which is what makes them invisible as bands.
 */
export const Section = styled.section<SectionProps>`
    padding: ${props => props.padding || "10rem 0"};
    padding-right: 4rem;
    padding-left: 4rem;
    background-color: ${props => props.backgroundColor || COLORS.paper};
    background-image: ${PAPER_TEXTURE};
    background-size: 220px 220px;
    color: ${props => props.color || COLORS.ink};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @media (max-width: 600px) {
        padding-right: 2rem;
        padding-left: 2rem;
    }
`;

type WrapperProps = {
    flexDirection?: "row" | "column";
    alignItems?: "center" | "start" | "end" | "stretch";
    flexWrap?: "wrap" | "nowrap";
    gap?: string;
};

export const ContentWrapper = styled.div<WrapperProps>`
    max-width: ${MAX_CONTENT_WIDTH};
    width: 100%;
    display: flex;
    flex-direction: ${props => props.flexDirection || "row"};
    align-items: ${props => props.alignItems || "start"};
    flex-wrap: ${props => props.flexWrap};
    gap: ${props => props.gap || "3rem"};
`;

export const ContentWrapperResponsive = styled(ContentWrapper)`
    @media (max-width: 850px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    max-width: ${MAX_CONTENT_WIDTH};
    width: 100%;
`;

type GridProps = {
    /** @default 3 */
    columns?: number;
    gap?: string;
};

export const Grid = styled.div<GridProps>`
    display: grid;
    width: 100%;
    gap: ${props => props.gap || "2rem"};
    grid-template-columns: repeat(${props => props.columns || 3}, minmax(0, 1fr));
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 620px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

export const FlexItem = styled.div`
    flex: 1;
`;

type VerticalFlexContainerProps = {
    alignItems?: "center" | "start" | "end" | "stretch";
    textAlign?: "center" | "left" | "right";
    /** @default "1.6rem" */
    gap?: string;
};

export const VerticalFlexContainer = styled.div<VerticalFlexContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || "center"};
    text-align: ${props => props.textAlign || "center"};
    gap: ${props => props.gap || "1.6rem"};
    flex: 1;
`;

/* ---------------------------------------------------------------- typography */

type HeadingProps = {
    color?: string;
    marginBottom?: string;
    /** @default "left" */
    textAlign?: "center" | "left" | "right";
    maxWidth?: string;
};

/** oversized poster headline — set in caps, the way the reference sets them */
export const Display = styled.h1<HeadingProps>`
    color: ${props => props.color || COLORS.ink};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "left"};
    max-width: ${props => props.maxWidth};
    font-size: clamp(3rem, 4.8vw, 5.8rem);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.01em;
    text-transform: uppercase;
`;

export const H2 = styled.h2<HeadingProps>`
    color: ${props => props.color || COLORS.ink};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "left"};
    max-width: ${props => props.maxWidth};
    font-size: clamp(2.6rem, 3.4vw, 4.2rem);
    font-weight: 700;
    line-height: 1.14;
    letter-spacing: -0.005em;
    text-transform: uppercase;
`;

export const H3 = styled.h3<HeadingProps>`
    color: ${props => props.color || COLORS.ink};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "left"};
    max-width: ${props => props.maxWidth};
    font-size: clamp(2.2rem, 2.4vw, 3rem);
    font-weight: 700;
    line-height: 1.18;
    text-transform: uppercase;
`;

export const H4 = styled.h4<HeadingProps>`
    color: ${props => props.color || COLORS.ink};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "left"};
    max-width: ${props => props.maxWidth};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.2;
`;

type TextProps = {
    color?: string;
    /** @default "1.8rem" */
    fontSize?: string;
    fontWeight?: string;
    marginBottom?: string;
    maxWidth?: string;
    textDecoration?: "underline" | "line-through";
    textAlign?: "center" | "left" | "right";
};

export const Text = styled.p<TextProps>`
    color: ${props => props.color || COLORS.black};
    font-size: ${props => props.fontSize || "1.8rem"};
    font-weight: ${props => props.fontWeight || "400"};
    line-height: 1.5;
    margin-bottom: ${props => props.marginBottom};
    max-width: ${props => props.maxWidth};
    text-decoration: ${props => props.textDecoration};
    text-align: ${props => props.textAlign};
`;

type EyebrowProps = {
    color?: string;
    dotColor?: string;
};

/** small uppercase kicker with a leading dot */
export const Eyebrow = styled.span<EyebrowProps>`
    display: inline-flex;
    align-items: center;
    gap: 0.9rem;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${props => props.color || COLORS.textGray};
    &::before {
        content: "";
        width: 1rem;
        height: 1rem;
        background: ${props => props.dotColor || COLORS.blue};
    }
`;

type ListProps = {
    /** @default "1.8rem" */
    fontSize?: string;
    color?: string;
    markerColor?: string;
};

export const List = styled.ul<ListProps>`
    list-style: none;
    padding-left: 2.6rem;
    & li {
        font-size: ${props => props.fontSize || "1.8rem"};
        color: ${props => props.color || COLORS.black};
        line-height: 1.45;
        margin-bottom: 1.2rem;
        &::before {
            content: "—";
            color: ${props => props.markerColor || COLORS.blue};
            font-weight: 700;
            display: inline-block;
            width: 2.6rem;
            margin-left: -2.6rem;
        }
    }
`;

/* ------------------------------------------------------------------ controls */

type ButtonProps = {
    /** @default "blue" */
    variant?: "blue" | "black" | "white" | "outlined" | "outlinedLight";
    /** @default "auto" */
    width?: string;
    maxWidth?: string;
    padding?: string;
    /** @default "1.7rem" */
    fontSize?: string;
};

const background = (variant: ButtonProps["variant"]) => {
    switch (variant) {
    case "black": return COLORS.ink;
    case "white": return COLORS.paper;
    case "outlined":
    case "outlinedLight": return "transparent";
    default: return COLORS.blue;
    }
};

const foreground = (variant: ButtonProps["variant"]) =>
    (variant === "white" || variant === "outlined" ? COLORS.ink : COLORS.paper);

const borderColor = (variant: ButtonProps["variant"]) => {
    switch (variant) {
    case "outlined": return COLORS.ink;
    case "outlinedLight": return COLORS.paper;
    default: return "transparent";
    }
};

/** square-cornered uppercase control, the way the reference design does buttons */
const control = (props: ButtonProps) => `
    width: ${props.width || "auto"};
    max-width: ${props.maxWidth || "none"};
    padding: ${props.padding || "1.8rem 3rem"};
    background-color: ${background(props.variant)};
    color: ${foreground(props.variant)};
    border: 1px solid ${borderColor(props.variant)};
    border-radius: ${RADIUS.control};
    font-size: ${props.fontSize || "1.5rem"};
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    line-height: 1;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: background-color .25s ease, color .25s ease, border-color .25s ease;
    &:hover {
        background-color: ${props.variant === "outlinedLight" ? COLORS.paper : (props.variant === "blue" ? COLORS.blueDark : COLORS.blue)};
        color: ${props.variant === "outlinedLight" ? COLORS.ink : COLORS.paper};
        border-color: ${props.variant === "outlinedLight" ? COLORS.paper : "transparent"};
    }
    &:disabled {
        background-color: ${COLORS.textMuted};
        color: ${COLORS.paper};
        cursor: not-allowed;
    }
`;

export const Button = styled.button<ButtonProps>`
    ${props => control(props)}
`;

export const LinkButton = styled.a<ButtonProps>`
    ${props => control(props)}
`;

type MarkProps = {
    /** @default "blue" — use "coral" on top of a blue section */
    tone?: "blue" | "coral";
};

/** highlighter box painted behind a phrase inside a heading */
export const Mark = styled.span<MarkProps>`
    background: ${props => (props.tone === "coral" ? COLORS.coral : COLORS.blue)};
    color: ${COLORS.paper};
    padding: 0 0.7rem 0.2rem;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
`;

/** coral strap used to name a section */
export const SectionLabel = styled.span`
    display: inline-block;
    background: ${COLORS.coral};
    color: ${COLORS.paper};
    padding: 1rem 2.4rem;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 1;
`;

type PolaroidProps = {
    /** @default "-1.6deg" */
    rotate?: string;
};

/** white photo frame, tilted a touch, like a print dropped on the page */
export const Polaroid = styled.div<PolaroidProps>`
    background: ${COLORS.white};
    padding: 1.2rem;
    box-shadow: 0 1.4rem 3.2rem rgba(43, 42, 40, .2);
    transform: rotate(${props => props.rotate || "-1.6deg"});
    transition: transform .4s cubic-bezier(.16,.84,.44,1);
    &:hover {
        transform: rotate(0deg);
    }
`;

type TagProps = {
    background?: string;
    color?: string;
};

/** small square label used as a chip */
export const Tag = styled.span<TagProps>`
    display: inline-flex;
    align-items: center;
    padding: 0.9rem 1.5rem;
    border-radius: ${RADIUS.control};
    background: ${props => props.background || COLORS.ink};
    color: ${props => props.color || COLORS.paper};
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1;
`;

type CardProps = {
    background?: string;
    color?: string;
    padding?: string;
};

export const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    background: ${props => props.background || COLORS.white};
    color: ${props => props.color || COLORS.ink};
    border-radius: ${RADIUS.card};
    padding: ${props => props.padding || "3.6rem"};
    position: relative;
    overflow: hidden;
    height: 100%;
`;

export const Paper = Card;

export const CallUsBtn = styled.a`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 2.4rem;
    right: 2.4rem;
    background: ${COLORS.blue};
    border-radius: 50%;
    width: 58px;
    height: 58px;
    cursor: pointer;
    z-index: 20;
    &:before, &:after {
        content: " ";
        display: block;
        position: absolute;
        border: 1px solid ${COLORS.blue};
        border-radius: 50%;
        left: -12px;
        right: -12px;
        top: -12px;
        bottom: -12px;
        animation: animate 1.6s linear infinite;
    }
    &:after {
        animation-delay: .5s;
    }
`;
