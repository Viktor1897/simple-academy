import styled from "@emotion/styled";
import { MarkerLink, PaperSection, ScribbleLabel } from "components/StyledHtml/StyledHtml";
import { useTranslation } from "react-i18next";

const BarbershopSection = () => {
    const { t } = useTranslation();

    return (
        <BarbershopContainer>
            <BarbershopBanner>
                <BannerScribble>SIMPLE BARBERSHOP</BannerScribble>
                <h2>{t("barbershop.title")} <span>{t("barbershop.highlight")}</span></h2>
                <p>{t("barbershop.description")}</p>
                <MarkerLink variant="dark" href="https://simplebarber.pl/" target="_blank" rel="noreferrer">
                    {t("barbershop.button")} ↗
                </MarkerLink>
            </BarbershopBanner>
        </BarbershopContainer>
    );
};

export default BarbershopSection;

const BarbershopContainer = styled(PaperSection)`
  padding-top: 150px;
  padding-bottom: 150px;
`;

const BarbershopBanner = styled.div`
  max-width: var(--content, 1180px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 80px 32px;
  color: #fff;
  background: var(--blue, #167bd5);
  box-shadow: 14px 16px 0 var(--ink, #161616);
  text-align: center;

  & h2 {
    max-width: 820px;
    margin-bottom: 24px;
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
  }

  & p {
    max-width: 580px;
    margin-bottom: 38px;
    font-size: 17px;
  }
`;

const BannerScribble = styled(ScribbleLabel)`
  color: #fff;
`;
