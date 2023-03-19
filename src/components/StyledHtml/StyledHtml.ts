import styled from "@emotion/styled";
import { COLORS } from "consts";

type ButtonProps = {
    /**
     *  @default "contained"
     */
    variant?: "contained" | "outlined";
    /**
     *  @default "100%"
     */
    width?: string;
    padding?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${props => props.width || "100%"};
    padding: ${props => props.padding};
    background-color: ${props => props.variant === "outlined" ? COLORS.white : COLORS.gold};
    border: ${props => props.variant === "outlined" && `${COLORS.black} solid 1px`};
    border-radius: 10px;
    box-shadow: ${props => props.variant !== "outlined" && `4px 4px 18px ${COLORS.gold}`};
    color: ${COLORS.black};
    padding: 15px 0;
    font-size: 18px;
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
