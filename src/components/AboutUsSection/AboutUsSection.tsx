import styled from "@emotion/styled";
import headerBg from "assets/header_bg.jpg";
import { DarkSection, ScribbleLabel } from "components/StyledHtml/StyledHtml";
import { useTranslation } from "react-i18next";

const AboutUsSection = () => {
    const { t } = useTranslation();

    return (
        <AboutContainer id="about" paperTop paperBottom>
            <AboutPhoto style={{ backgroundImage: `url(${headerBg})` }}>
                <span>{t("about.since")}</span>
            </AboutPhoto>
            <AboutCopy>
                <ScribbleLabel>03 / {t("labels.about")}</ScribbleLabel>
                <h2>{t("about.title")} <mark>{t("about.highlight")}</mark></h2>
                <p>{t("about.paragraph1")}</p>
                <p>{t("about.paragraph2")}</p>
                <AboutStats>
                    <div>
                        <strong>6+</strong>
                        <span>{t("about.stats.years")}</span>
                    </div>
                    <div>
                        <strong>4</strong>
                        <span>{t("about.stats.group")}</span>
                    </div>
                    <div>
                        <strong>100%</strong>
                        <span>{t("about.stats.practice")}</span>
                    </div>
                </AboutStats>
            </AboutCopy>
        </AboutContainer>
    );
};

export default AboutUsSection;

const AboutContainer = styled(DarkSection)`
  max-width: none;
  display: grid;
  grid-template-columns: 46% 54%;
  padding: 0;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`;

const AboutPhoto = styled.div`
  position: relative;
  min-height: 640px;
  background-position: center;
  background-size: cover;
  filter: grayscale(1) contrast(1.08);

  & span {
    position: absolute;
    left: 36px;
    bottom: 36px;
    padding: 10px 16px;
    color: var(--ink, #161616);
    background: #fff;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  @media (max-width: 1040px) {
    min-height: 380px;
  }
`;

const AboutCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 110px clamp(32px, 6vw, 110px);

  & h2 {
    margin-bottom: 28px;
    font-size: clamp(38px, 5vw, 72px);
    font-weight: 900;
    letter-spacing: -0.065em;
    line-height: 0.94;
    text-transform: uppercase;

    & mark {
      color: #fff;
      background: var(--coral, #ff5b4d);
      box-shadow: 8px 0 0 var(--coral, #ff5b4d), -8px 0 0 var(--coral, #ff5b4d);
    }
  }

  & p {
    max-width: 540px;
    margin-bottom: 18px;
    color: rgba(255, 255, 255, 0.78);
    font-size: 16px;
  }

  @media (max-width: 1040px) {
    padding: 60px 24px 80px;
  }
`;

const AboutStats = styled.div`
  max-width: 540px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 36px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  & div {
    display: flex;
    flex-direction: column;
  }

  & strong {
    color: var(--coral, #ff5b4d);
    font-size: clamp(32px, 3.8vw, 52px);
    font-weight: 900;
    line-height: 1;
  }

  & span {
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.65);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;
