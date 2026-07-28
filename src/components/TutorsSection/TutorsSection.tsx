import styled from "@emotion/styled";
import ALEX from "assets/ALEX.jpg";
import ANTON from "assets/ANTON.jpg";
import ZENIA from "assets/ZENIA.jpg";
import { CoralSection, ScribbleLabel, SectionHeading } from "components/StyledHtml/StyledHtml";
import { useTranslation } from "react-i18next";

const tutors = [
    { image: ANTON, name: "tutors.anton.name", role: "tutors.anton.role" },
    { image: ALEX, name: "tutors.alex.name", role: "tutors.alex.role" },
    { image: ZENIA, name: "tutors.zenia.name", role: "tutors.zenia.role" },
];

const TutorsSection = () => {
    const { t } = useTranslation();

    return (
        <TutorsContainer id="tutors" paperTop paperBottom>
            <SectionHeading light split>
                <div>
                    <ScribbleLabel>04 / {t("labels.team")}</ScribbleLabel>
                    <h2>{t("tutors.title")} <mark>{t("tutors.highlight")}</mark></h2>
                </div>
                <p>{t("tutors.description")}</p>
            </SectionHeading>
            <TutorsGrid>
                {tutors.map((tutor, index) => (
                    <TutorCard key={tutor.name} isLifted={index === 1}>
                        <img src={tutor.image} alt={t(tutor.name)} />
                        <div>
                            <span>0{index + 1}</span>
                            <h3>{t(tutor.name)}</h3>
                            <p>{t(tutor.role)}</p>
                        </div>
                    </TutorCard>
                ))}
            </TutorsGrid>
        </TutorsContainer>
    );
};

export default TutorsSection;

const TutorsContainer = styled(CoralSection)`
  padding-top: 150px;
  padding-bottom: 160px;
`;

const TutorsGrid = styled.div`
  max-width: var(--content, 1180px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 0 auto;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

type TutorCardProps = {
  isLifted?: boolean;
};

const TutorCard = styled.article<TutorCardProps>`
  display: flex;
  flex-direction: column;
  color: var(--ink, #161616);
  background: var(--paper-bright, #fbfaf7);
  box-shadow: 12px 14px 0 rgba(22, 22, 22, 0.28);

  ${props => props.isLifted && `
    transform: translateY(-24px);
  `}

  & img {
    width: 100%;
    height: 360px;
    display: block;
    object-fit: cover;
    filter: grayscale(1) contrast(1.05);
  }

  & div {
    display: flex;
    flex-direction: column;
    padding: 30px 28px 36px;
  }

  & span {
    margin-bottom: 8px;
    color: var(--coral, #ff5b4d);
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.12em;
  }

  & h3 {
    margin-bottom: 12px;
    font-size: 32px;
    font-weight: 900;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  }

  & p {
    color: var(--muted, #716f6b);
    font-size: 15px;
  }

  @media (max-width: 980px) {
    ${props => props.isLifted && `
      transform: none;
    `}
  }
`;
