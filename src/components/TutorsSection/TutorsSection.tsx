import styled from "@emotion/styled";
import Anton from "assets/ANTON.jpg";
import Wladek from "assets/WLADEK.jpg";
import Zenia from "assets/ZENIA.jpg";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import { Grid, Polaroid, Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";

const TUTORS = [
    { photo: Anton, name: "tutor1.name", role: "tutor1.role", description: "tutor1.description", rotate: "-2deg" },
    { photo: Wladek, name: "tutor2.name", role: "tutor2.role", description: "tutor2.description", rotate: "1.4deg" },
    { photo: Zenia, name: "tutor3.name", role: "tutor3.role", description: "tutor3.description", rotate: "-1.2deg" },
];

const TutorsSection = () => {
    const { t } = useTranslation();

    return (
        <Section id={LINKS.TUTORS} padding="11rem 0 11rem">
            <Inner>
                <Reveal>
                    <SectionHead
                        label={t("tutors.eyebrow")}
                        title={t("tutors.title")}
                        description={t("tutors.description")}
                    />
                </Reveal>

                <Grid columns={3} gap="3rem">
                    {TUTORS.map((tutor, index) => (
                        <Reveal key={tutor.name} delay={index * 110}>
                            <TutorCard>
                                <Frame rotate={tutor.rotate}>
                                    <Photo src={tutor.photo} alt={t(tutor.name)} loading="lazy" />
                                </Frame>
                                <TutorName>{t(tutor.name)}</TutorName>
                                <Role>{t(tutor.role)}</Role>
                                <Text fontSize="1.6rem" color={COLORS.textGray}>
                                    {t(tutor.description)}
                                </Text>
                            </TutorCard>
                        </Reveal>
                    ))}
                </Grid>
            </Inner>
        </Section>
    );
};

export default TutorsSection;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

const TutorCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Frame = styled(Polaroid)`
    margin-bottom: 2.6rem;
`;

const Photo = styled.img`
    width: 100%;
    aspect-ratio: 4 / 4.6;
    object-fit: cover;
    display: block;
`;

const TutorName = styled.h3`
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 1.15;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
`;

const Role = styled.span`
    display: block;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${COLORS.blue};
    margin-bottom: 1.6rem;
`;
