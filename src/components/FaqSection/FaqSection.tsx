import styled from "@emotion/styled";
import { PaperSection, ScribbleLabel, SectionHeading } from "components/StyledHtml/StyledHtml";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
    const { t } = useTranslation();

    return (
        <FaqContainer id="faq">
            <SectionHeading split>
                <div>
                    <ScribbleLabel>05 / FAQ</ScribbleLabel>
                    <h2>{t("faq.title")} <span>{t("faq.highlight")}</span></h2>
                </div>
                <p>{t("faq.description")}</p>
            </SectionHeading>
            <FaqList>
                {[0, 1, 2, 3].map((item) => (
                    <details key={item}>
                        <summary>
                            <span>0{item + 1}</span>
                            {t(`faq.items.${item}.question`)}
                            <i aria-hidden="true">+</i>
                        </summary>
                        <p>{t(`faq.items.${item}.answer`)}</p>
                    </details>
                ))}
            </FaqList>
        </FaqContainer>
    );
};

export default FaqSection;

const FaqContainer = styled(PaperSection)`
  padding-top: 150px;
  padding-bottom: 160px;
`;

const FaqList = styled.div`
  max-width: var(--content, 1180px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;

  & details {
    background: var(--paper-bright, #fbfaf7);
    border: 1px solid rgba(22, 22, 22, 0.12);
  }

  & details[open] {
    box-shadow: 6px 8px 0 rgba(22, 22, 22, 0.08);
  }

  & summary {
    display: grid;
    grid-template-columns: 50px 1fr auto;
    align-items: center;
    gap: 20px;
    padding: 24px 28px;
    color: var(--ink, #161616);
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    & span {
      color: var(--coral, #ff5b4d);
      font-size: 14px;
    }

    & i {
      color: var(--blue, #167bd5);
      font-style: normal;
      font-size: 28px;
      transition: transform 200ms ease;
    }
  }

  & details[open] summary i {
    transform: rotate(45deg);
  }

  & p {
    padding: 0 28px 28px 98px;
    color: var(--muted, #716f6b);
    font-size: 16px;
  }

  @media (max-width: 680px) {
    & summary {
      grid-template-columns: 36px 1fr auto;
      font-size: 16px;
      padding: 18px 20px;
    }
    & p {
      padding: 0 20px 20px 76px;
    }
  }
`;
