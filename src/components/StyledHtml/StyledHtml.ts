import styled from "@emotion/styled";
import { COLORS, MAX_CONTENT_WIDTH } from "consts";

//TODO replace all font sizes with REM to configure responsivness easyly

type ButtonProps = {
    /**
     *  @default "contained"
     */
    variant?: "contained" | "outlined";
    /**
     *  @default "100%"
     */
    width?: string;
    maxWidth?: string;
    padding?: string;
    /**
     * @default "27px"
     */
    fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${props => props.width || "100%"};
    max-width: ${props => props.maxWidth};
    padding: ${props => props.padding || "15px 0"};
    background-color: ${props => props.variant === "outlined" ? COLORS.white : COLORS.gold};
    border: ${props => props.variant === "outlined" ? `${COLORS.black} solid 1px` : "none"};
    border-radius: 10px;
    box-shadow: ${props => props.variant !== "outlined" && `4px 4px 18px ${COLORS.gold}`};
    color: ${COLORS.black};
    font-size: ${props => props.fontSize || "27px"};
    font-weight: 600;
    cursor: pointer;
`;

type SectionProps = {
    padding?: string;
    backgroundColor?: string;
};

export const Section = styled.section<SectionProps>`
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    display: flex;
    justify-content: center;
`;

type WrapperProps = {
    flexDirection?: "row" | "column";
}

export const ContentWrapper = styled.div<WrapperProps>`
    max-width: ${MAX_CONTENT_WIDTH};
    width: 100%;
    display: flex;
    flex-direction: ${props => props.flexDirection || "column"};
    align-items: center;
`;

type HeadingProps = {
    /**
     * @default "white"
     */
    color?: string;
    marginBottom?: string;
    /**
     * @default "center"
     */
    textAlign?: "center" | "left" | "right";
};

export const H2 = styled.h2<HeadingProps>`
    color: ${props => props.color || COLORS.white};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "center"};
    font-size: 60px;
`;

export const H3 = styled.h3<HeadingProps>`
    color: ${props => props.color || COLORS.white};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "center"};
    font-size: 48px;
`;
export const H4 = styled.h4<HeadingProps>`
    color: ${props => props.color || "white"};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "center"};
    font-size: 35px;
`;

type ParagraphProps = {
    /**
     * @default "black"
     */
    color?: string;
    /**
     * @default "22px"
     */
    fontSize?: string;
    marginBottom?: string;
    textDecoration?: "underline" | "line-through";
}

export const Text = styled.p<ParagraphProps>`
    color: ${props => props.color || COLORS.black};
    font-size: ${props => props.fontSize || "22px"};
    margin-bottom: ${props => props.marginBottom};
    text-decoration: ${props => props.textDecoration};
`;
