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
    color?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${props => props.width || "100%"};
    max-width: ${props => props.maxWidth};
    padding: ${props => props.padding || "15px 0"};
    background-color: ${props => props.variant === "outlined" ? "transparent" : COLORS.gold};
    border: ${props => props.variant === "outlined" ? `${props.color || COLORS.black} solid 1px` : "none"};
    border-radius: 10px;
    box-shadow: ${props => props.variant !== "outlined" && `4px 4px 18px ${COLORS.gold}`};
    color: ${props => props.color || COLORS.black};
    font-size: ${props => props.fontSize || "27px"};
    font-weight: 500;
    text-transform: uppercase;
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
    flex-direction: column;
    align-items: center;
`;

type WrapperProps = {
    flexDirection?: "row" | "column";
    alignItems?: "center" | "start" | "end" | "stretch";
    gap?: string;
}

export const ContentWrapper = styled.div<WrapperProps>`
    max-width: ${MAX_CONTENT_WIDTH};
    width: 100%;
    display: flex;
    flex-direction: ${props => props.flexDirection || "row"};
    align-items: ${props => props.alignItems || "start"};
    gap: ${props => props.gap || "30px"};
`;

type VerticalFlexContainer = {
  alignItems?: "center" | "start" | "end" | "stretch";
  textAlign?: "center" | "left" | "right";
};

export const VerticalFlexContainer = styled.div<VerticalFlexContainer>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || "center"};
    text-align: ${props => props.textAlign || "center"};
    gap: 16px;
    flex: 1;
`;

export const FlexItem = styled.div`
    flex: 1;
`;

export const Paper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 50px 45px;
    position: relative;
    border-radius: 24px;
    background-color: ${COLORS.white};
`;

type ListProps = {
    /**
     * @default "21px"
     */
    fontSize?: string;
}

export const List = styled.ul<ListProps>`
    list-style: none;
    padding-left: 35px;
    & li {
        font-size: ${props => props.fontSize || "21px"};
        margin-bottom: 12px;
        &::before {
            content: "•";  
            color: ${COLORS.gold}; 
            font-weight: bold; 
            display: inline-block; 
            width: 1.3em; 
            margin-left: -1.3em;
        };
    }
`;

type HeadingProps = {
    /**
     * @default "black"
     */
    color?: string;
    marginBottom?: string;
    /**
     * @default "center"
     */
    textAlign?: "center" | "left" | "right";
};

export const H2 = styled.h2<HeadingProps>`
    color: ${props => props.color || COLORS.black};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "center"};
    font-size: 60px;
`;

export const H3 = styled.h3<HeadingProps>`
    color: ${props => props.color || COLORS.black};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "center"};
    font-size: 48px;
`;
export const H4 = styled.h4<HeadingProps>`
    color: ${props => props.color || COLORS.black};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "center"};
    font-size: 35px;
`;

type TextProps = {
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

export const Text = styled.p<TextProps>`
    color: ${props => props.color || COLORS.black};
    font-size: ${props => props.fontSize || "22px"};
    margin-bottom: ${props => props.marginBottom};
    text-decoration: ${props => props.textDecoration};
`;
