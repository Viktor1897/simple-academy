import styled from "@emotion/styled";
import barber from "assets/barber.png";
import handshake from "assets/handshake.png";
import razor from "assets/razor.png";
import recruitment from "assets/recruitment.png";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import { Grid, Section } from "components/StyledHtml/StyledHtml";
import TornEdge from "components/TornEdge/TornEdge";
import { COLORS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";

const FEATURES = [
    { icon: barber, title: "feature.tutors.title", text: "infoIcon.experience" },
    { icon: razor, title: "feature.equipment.title", text: "infoIcon.equipment" },
    { icon: handshake, title: "feature.payments.title", text: "infoIcon.payments" },
    { icon: recruitment, title: "feature.job.title", text: "infoIcon.recruitment" },
];

const InfoIconsSection = () => {
    const { t } = useTranslation();

    return (
        <BlueSection padding="12rem 0 12rem">
            <TornEdge color={COLORS.paper} position="top" />

            <Inner>
                <Reveal>
                    <SectionHead
                        tone="blue"
                        label={t("features.eyebrow")}
                        title={t("features.title")}
                    />
                </Reveal>

                <Grid columns={4} gap="3.5rem">
                    {FEATURES.map((feature, index) => (
                        <Reveal key={feature.title} delay={index * 90}>
                            {/* content sits straight on the colour block, no card around it */}
                            <Feature>
                                <IconTile>
                                    <IconImage src={feature.icon} alt="" />
                                </IconTile>
                                <FeatureTitle>{t(feature.title)}</FeatureTitle>
                                <FeatureText>{t(feature.text)}</FeatureText>
                            </Feature>
                        </Reveal>
                    ))}
                </Grid>
            </Inner>

            <TornEdge color={COLORS.paper} position="bottom" />
        </BlueSection>
    );
};

export default InfoIconsSection;

const BlueSection = styled(Section)`
    background-color: ${COLORS.blue};
`;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Feature = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 2.4rem;
    border-top: 2px solid rgba(245, 245, 244, .45);
`;

const IconTile = styled.div`
    width: 6.4rem;
    height: 6.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.4rem;
    background: ${COLORS.paper};
`;

const IconImage = styled.img`
    width: 3.4rem;
    height: 3.4rem;
    object-fit: contain;
`;

const FeatureTitle = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    color: ${COLORS.paper};
    margin-bottom: 1.2rem;
`;

const FeatureText = styled.p`
    font-size: 1.6rem;
    line-height: 1.5;
    color: rgba(245, 245, 244, .78);
`;
