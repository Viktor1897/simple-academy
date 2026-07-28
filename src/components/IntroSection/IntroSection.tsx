import styled from "@emotion/styled";
import IMG_3 from "assets/gallery/IMG_3.jpg";
import { PaperSection, ScribbleLabel, SectionHeading } from "components/StyledHtml/StyledHtml";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
    const { t } = useTranslation();

    return (
        <IntroContainer>
            <SectionHeading>
                <ScribbleLabel>01 / {t("labels.education")}</ScribbleLabel>
                <h2>
                    {t("intro.line1")} <span>{t("intro.line2")}</span><br />
                    {t("intro.line3")} <span>{t("intro.line4")}</span>
                </h2>
                <p>{t("intro.description")}</p>
            </SectionHeading>
            <IntroCollage aria-hidden="true">
                <ToolWord position="left">CLIPPER</ToolWord>
                <CollageImage src={IMG_3} alt="" />
                <ToolWord position="right">SCISSORS</ToolWord>
            </IntroCollage>
        </IntroContainer>
    );
};

export default IntroSection;

const IntroContainer = styled(PaperSection)`
  padding-top: 150px;
  padding-bottom: 0;
`;

const IntroCollage = styled.div`
  position: relative;
  max-width: 1100px;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    width: 34%;
    height: 70px;
    border: 16px solid #222;
    filter: grayscale(1);
  }

  &::before {
    left: 0;
    bottom: 37%;
    border-width: 0 0 18px 18px;
    transform: rotate(-11deg);
  }

  &::after {
    right: 0;
    bottom: 42%;
    border-width: 0 18px 18px 0;
    transform: rotate(12deg);
  }

  @media (max-width: 760px) {
    height: 380px;
  }
`;

const CollageImage = styled.img`
  position: relative;
  z-index: 1;
  width: min(410px, 48vw);
  align-self: flex-end;
  filter: grayscale(1) contrast(1.08);
  clip-path: polygon(8% 1%, 94% 0, 100% 92%, 84% 100%, 12% 98%, 0 84%);
`;

type ToolWordProps = {
  position: "left" | "right";
};

const ToolWord = styled.div<ToolWordProps>`
  position: absolute;
  top: 32%;
  color: rgba(22, 22, 22, 0.08);
  font-size: clamp(62px, 10vw, 150px);
  font-weight: 900;
  letter-spacing: -0.08em;
  left: ${props => props.position === "left" ? "-3%" : "auto"};
  right: ${props => props.position === "right" ? "-5%" : "auto"};
  transform: ${props => props.position === "left" ? "rotate(-7deg)" : "rotate(6deg)"};

  @media (max-width: 760px) {
    font-size: 56px;
  }
`;
