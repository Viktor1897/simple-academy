import styled from "@emotion/styled";
import { PaperSection, ScribbleLabel, SectionHeading } from "components/StyledHtml/StyledHtml";
import { useTranslation } from "react-i18next";

const MethodSection = () => {
    const { t } = useTranslation();

    return (
        <MethodContainer>
            <SectionHeading>
                <ScribbleLabel>{t("labels.method")}</ScribbleLabel>
                <h2>{t("method.title")} <span>{t("method.highlight")}</span></h2>
            </SectionHeading>
            <MethodGrid>
                {[0, 1, 2, 3].map((item) => (
                    <article key={item}>
                        <span>0{item + 1}</span>
                        <h3>{t(`method.items.${item}.title`)}</h3>
                        <p>{t(`method.items.${item}.text`)}</p>
                    </article>
                ))}
            </MethodGrid>
        </MethodContainer>
    );
};

export default MethodSection;

const MethodContainer = styled(PaperSection)`
  padding-top: 150px;
  padding-bottom: 160px;
`;

const MethodGrid = styled.div`
  max-width: var(--content, 1180px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 0 auto;

  & article {
    display: flex;
    flex-direction: column;
    padding: 34px 28px;
    background: var(--paper-bright, #fbfaf7);
    border: 1px solid rgba(22, 22, 22, 0.12);
    box-shadow: 8px 10px 0 rgba(22, 22, 22, 0.08);
  }

  & span {
    margin-bottom: 24px;
    color: var(--blue, #167bd5);
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.12em;
  }

  & h3 {
    margin-bottom: 14px;
    font-size: 24px;
    font-weight: 900;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  & p {
    color: var(--muted, #716f6b);
    font-size: 15px;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;
