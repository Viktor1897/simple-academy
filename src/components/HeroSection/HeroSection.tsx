import styled from "@emotion/styled";
import headerBg from "assets/header_bg.jpg";
import { Eyebrow, MarkerButton } from "components/StyledHtml/StyledHtml";
import { useTranslation } from "react-i18next";

type HeroSectionProps = {
  onNavigate: (id: string) => void;
};

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
    const { t } = useTranslation();

    return (
        <HeroContainer id="home">
            <HeroPhoto style={{ backgroundImage: `url(${headerBg})` }}>
                <HeroDoodle aria-hidden="true">✦</HeroDoodle>
                <HeroSticker aria-hidden="true">
                    <span>Simple</span>
                    <strong>Academy</strong>
                </HeroSticker>
            </HeroPhoto>
            <HeroCopy>
                <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
                <HeroTitle>
                    {t("hero.line1")}<br />
                    <span>{t("hero.line2")}</span><br />
                    <mark>{t("hero.line3")}</mark>
                </HeroTitle>
                <HeroLead>{t("hero.description")}</HeroLead>
                <MarkerButton variant="dark" onClick={() => onNavigate("courses")}>
                    {t("hero.button")}
                </MarkerButton>
            </HeroCopy>
        </HeroContainer>
    );
};

export default HeroSection;

const HeroContainer = styled.section`
  position: relative;
  min-height: 780px;
  display: grid;
  grid-template-columns: 49% 51%;
  color: #fff;
  background: var(--blue, #167bd5);
  margin-bottom: 0;

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

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`;

const HeroPhoto = styled.div`
  position: relative;
  min-height: 780px;
  background-position: 47% center;
  background-size: cover;
  filter: grayscale(1) contrast(1.08);

  &::after {
    content: "";
    position: absolute;
    inset: 0 -1px 0 auto;
    width: 34px;
    background: var(--blue, #167bd5);
    clip-path: polygon(70% 0, 92% 5%, 50% 10%, 100% 17%, 62% 23%, 89% 31%, 53% 39%, 98% 47%, 57% 55%, 92% 64%, 48% 73%, 100% 82%, 60% 91%, 80% 100%, 100% 100%, 100% 0);
  }

  @media (max-width: 1040px) {
    min-height: 480px;
    &::after {
      display: none;
    }
  }
`;

const HeroDoodle = styled.span`
  position: absolute;
  top: 145px;
  left: 12%;
  color: var(--blue, #167bd5);
  font-size: 92px;
  font-weight: 900;
  line-height: 1;
  filter: none;
  transform: rotate(-18deg);
  text-shadow: 3px 3px 0 var(--ink, #161616);
`;

const HeroSticker = styled.div`
  position: absolute;
  right: 8%;
  bottom: 90px;
  display: flex;
  flex-direction: column;
  width: 170px;
  padding: 18px 20px;
  color: var(--ink, #161616);
  background: #fff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
  text-align: center;
  text-transform: uppercase;
  transform: rotate(6deg);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -12px;
    width: 50px;
    height: 24px;
    background: rgba(226, 195, 127, 0.88);
    transform: rotate(-12deg);
  }

  &::before {
    left: -16px;
  }

  &::after {
    right: -16px;
    transform: rotate(13deg);
  }

  & span {
    font-size: 12px;
    letter-spacing: 0.2em;
  }

  & strong {
    color: var(--coral, #ff5b4d);
    font-size: 24px;
  }
`;

const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 150px clamp(36px, 7vw, 120px) 110px clamp(52px, 7vw, 120px);

  @media (max-width: 1040px) {
    padding: 60px 24px 100px;
  }
`;

const HeroTitle = styled.h1`
  max-width: 720px;
  font-size: clamp(46px, 5.7vw, 88px);
  font-weight: 900;
  letter-spacing: -0.065em;
  line-height: 0.94;
  text-transform: uppercase;

  & span {
    color: var(--blue, #167bd5);
    background: #fff;
    box-shadow: 8px 0 0 #fff, -8px 0 0 #fff;
  }

  & mark {
    color: #fff;
    background: var(--coral, #ff5b4d);
    box-shadow: 8px 0 0 var(--coral, #ff5b4d), -8px 0 0 var(--coral, #ff5b4d);
  }
`;

const HeroLead = styled.p`
  max-width: 540px;
  margin: 34px 0 40px;
  font-size: 17px;
`;
