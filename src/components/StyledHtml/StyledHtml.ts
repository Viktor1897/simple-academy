import styled from "@emotion/styled";
import { COLORS, MAX_CONTENT_WIDTH } from "consts";

export const SiteShell = styled.main`
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 14%, rgba(0, 0, 0, 0.035) 0 1px, transparent 1.5px),
    radial-gradient(circle at 76% 68%, rgba(0, 0, 0, 0.025) 0 1px, transparent 1.5px),
    var(--paper, #f4f2ed);
  background-size: 17px 17px, 23px 23px;
`;

type SectionVariantProps = {
  paperTop?: boolean;
  paperBottom?: boolean;
};

const SectionBase = styled.section<SectionVariantProps>`
  position: relative;
  padding: 130px max(28px, calc((100vw - var(--content, 1180px)) / 2));

  ${props => props.paperTop && `
    &::before {
      content: "";
      position: absolute;
      z-index: 4;
      left: -2%;
      width: 104%;
      height: 42px;
      background: var(--paper, #f4f2ed);
      clip-path: polygon(0 50%, 4% 25%, 8% 59%, 13% 18%, 18% 56%, 24% 29%, 29% 70%, 36% 24%, 42% 57%, 49% 19%, 56% 64%, 62% 28%, 68% 72%, 74% 21%, 80% 58%, 87% 26%, 94% 67%, 100% 36%, 100% 100%, 0 100%);
      top: -1px;
      transform: rotate(180deg);
    }
  `}

  ${props => props.paperBottom && `
    &::after {
      content: "";
      position: absolute;
      z-index: 4;
      left: -2%;
      width: 104%;
      height: 42px;
      background: var(--paper, #f4f2ed);
      clip-path: polygon(0 50%, 4% 25%, 8% 59%, 13% 18%, 18% 56%, 24% 29%, 29% 70%, 36% 24%, 42% 57%, 49% 19%, 56% 64%, 62% 28%, 68% 72%, 74% 21%, 80% 58%, 87% 26%, 94% 67%, 100% 36%, 100% 100%, 0 100%);
      bottom: -1px;
    }
  `}
`;

export const PaperSection = styled(SectionBase)`
  background:
    linear-gradient(104deg, transparent 0 48%, rgba(0, 0, 0, 0.018) 49%, transparent 51%),
    var(--paper, #f4f2ed);
`;

export const BlueSection = styled(SectionBase)`
  color: #fff;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%) 0 0 / 22px 22px,
    var(--blue, #167bd5);
`;

export const DarkSection = styled(SectionBase)`
  color: #fff;
  background: var(--ink, #161616);
`;

export const CoralSection = styled(SectionBase)`
  color: #fff;
  background: var(--coral, #ff5b4d);
`;

export const Eyebrow = styled.p`
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const ScribbleLabel = styled.p`
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  width: max-content;
  margin-bottom: 24px;
  color: var(--coral, #ff5b4d);
  transform: rotate(-1.5deg);
  &::after {
    content: "";
    display: block;
    height: 4px;
    margin-top: 4px;
    background: currentColor;
    clip-path: polygon(0 35%, 18% 0, 45% 35%, 68% 10%, 100% 50%, 82% 72%, 48% 55%, 15% 100%);
  }
`;

type SectionHeadingProps = {
  light?: boolean;
  split?: boolean;
};

export const SectionHeading = styled.div<SectionHeadingProps>`
  max-width: ${props => props.split ? "var(--content, 1180px)" : "900px"};
  margin: 0 auto 70px;
  text-align: ${props => props.split ? "left" : "center"};

  ${props => props.split && `
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(260px, 0.55fr);
    align-items: end;
    gap: 80px;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  `}

  & h2 {
    margin-bottom: ${props => props.split ? "0" : "30px"};
    font-size: clamp(38px, 5vw, 72px);
    font-weight: 900;
    letter-spacing: -0.065em;
    line-height: 0.94;
    text-transform: uppercase;

    & span {
      color: #fff;
      background: var(--blue, #167bd5);
      box-shadow: 8px 0 0 var(--blue, #167bd5), -8px 0 0 var(--blue, #167bd5);
    }

    & mark {
      color: #fff;
      background: var(--coral, #ff5b4d);
      box-shadow: 8px 0 0 var(--coral, #ff5b4d), -8px 0 0 var(--coral, #ff5b4d);
    }
  }

  & > p:last-child {
    max-width: 620px;
    margin: ${props => props.split ? "0 0 5px" : "0 auto"};
    color: ${props => props.light ? "rgba(255, 255, 255, 0.75)" : "var(--muted, #716f6b)"};
    font-size: 16px;
  }
`;

type MarkerButtonProps = {
  variant?: "default" | "dark" | "coral";
};

export const MarkerButton = styled.button<MarkerButtonProps>`
  position: relative;
  z-index: 1;
  display: inline-flex;
  min-width: 230px;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  color: ${props => props.variant === "dark" || props.variant === "coral" ? "#fff" : "var(--ink, #161616)"};
  background: ${props => {
        if (props.variant === "dark") return "var(--ink, #161616)";
        if (props.variant === "coral") return "var(--coral, #ff5b4d)";
        return "#fff";
    }};
  border: 0;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    pointer-events: none;
  }

  &::before {
    inset: -8px -13px;
    border: 3px solid ${props => props.variant === "coral" ? "var(--blue, #167bd5)" : "var(--coral, #ff5b4d)"};
    clip-path: polygon(0 13%, 92% 0, 100% 83%, 8% 100%);
  }

  &::after {
    right: -18px;
    bottom: -12px;
    width: 50px;
    height: 18px;
    border-right: 3px solid ${props => props.variant === "coral" ? "var(--blue, #167bd5)" : "var(--coral, #ff5b4d)"};
    border-bottom: 3px solid ${props => props.variant === "coral" ? "var(--blue, #167bd5)" : "var(--coral, #ff5b4d)"};
    transform: skewX(-22deg);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 7px 0 rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const MarkerLink = MarkerButton.withComponent("a");

// Legacy components maintained for backwards compatibility if needed
type ButtonProps = {
    width?: string;
    maxWidth?: string;
    padding?: string;
    fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${props => props.width || "100%"};
    max-width: ${props => props.maxWidth};
    padding: ${props => props.padding || "1.5rem 0"};
    background-color: ${COLORS.gold};
    border: none;
    border-radius: 1rem;
    color: ${COLORS.black};
    font-size: ${props => props.fontSize || "2.7rem"};
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .5s;
     &:hover {
        opacity: 0.8;
        background-color: ${COLORS.gold2};
     }
     &:disabled {
        background-color: ${COLORS.textGray};
     }
`;

type LinkButtonProps = {
    variant?: "contained" | "outlined";
};

export const LinkButton = styled.a<LinkButtonProps>`
    background-color: ${props => props.variant === "outlined" ? "transparent" : COLORS.black};
    color: ${props => props.variant === "outlined" ? COLORS.black : COLORS.white};
    box-shadow: ${props => props.variant !== "outlined" && `0.4rem 0.4rem 1.8rem ${COLORS.black}`};
    border: ${COLORS.black} solid 1px;
    border-radius: 1rem;
    font-size: 2.7rem;
    padding: 2.6rem 3rem;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .5s;
    &:hover {
       background-color: ${props => props.variant === "outlined" ? COLORS.black : "transparent"};
       color: ${props => props.variant === "outlined" ? COLORS.white : COLORS.black};
       box-shadow: ${props => props.variant !== "outlined" && "none"};
    }
`;

export const CallUsBtn = styled.a`
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 4rem;
    left: 4rem;
    background: ${COLORS.gold2};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index: 2;
    &:before,:after {
        content: " ";
        display: block;
        position: absolute;
        border: 1px solid ${COLORS.gold2};
        border-radius: 50%;
        left: -15px;
        right: -15px;
        top: -15px;
        bottom: -15px;
        animation: animate 1.5s linear infinite;
    };
    &:after {
        animation-delay: .5s;
    }
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

type VerticalFlexContainerProps = {
  alignItems?: "center" | "start" | "end" | "stretch";
  textAlign?: "center" | "left" | "right";
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
    color?: string;
    marginBottom?: string;
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
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    marginBottom?: string;
    textDecoration?: "underline" | "line-through";
}

export const Text = styled.p<TextProps>`
    color: ${props => props.color || COLORS.black};
    font-size: ${props => props.fontSize || "2.2rem"};
    font-weight: ${props => props.fontWeight};
    margin-bottom: ${props => props.marginBottom};
    text-decoration: ${props => props.textDecoration};
`;
