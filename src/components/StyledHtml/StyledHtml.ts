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
    padding: ${props => props.padding || "1.5rem 0"};
    background-color: ${props => props.variant === "outlined" ? "transparent" : COLORS.gold};
    border: ${props => props.variant === "outlined" ? `${props.color || COLORS.black} solid 1px` : "none"};
    border-radius: 1rem;
    box-shadow: ${props => props.variant !== "outlined" && `0.4rem 0.4rem 1.8rem ${COLORS.gold}`};
    color: ${props => props.color || COLORS.black};
    font-size: ${props => props.fontSize || "2.7rem"};
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
    padding-right:7%;
    padding-left: 7%;
    background-color: ${props => props.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type WrapperProps = {
    flexDirection?: "row" | "column";
    alignItems?: "center" | "start" | "end" | "stretch";
    flexWrap?: "wrap" | "nowrap"
    gap?: string;
}

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
    @media (max-width: 800px) {
        flex-direction: column;
    };
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
    gap: 1.6rem;
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
    padding: 5rem 4.5rem;
    position: relative;
    border-radius: 2.4rem;
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
    padding-left: 3.5rem;
    & li {
        font-size: ${props => props.fontSize || "2.1rem"};
        margin-bottom: 1.2rem;
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
    font-size: 6rem;
`;

export const H3 = styled.h3<HeadingProps>`
    color: ${props => props.color || COLORS.black};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "center"};
    font-size: 4.8rem;
`;
export const H4 = styled.h4<HeadingProps>`
    color: ${props => props.color || COLORS.black};
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign || "center"};
    font-size: 3.5rem;
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
    font-size: ${props => props.fontSize || "2.2rem"};
    margin-bottom: ${props => props.marginBottom};
    text-decoration: ${props => props.textDecoration};
`;
