import styled from "@emotion/styled";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import { Grid, Section } from "components/StyledHtml/StyledHtml";
import TornEdge from "components/TornEdge/TornEdge";
import { COLORS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";

import { BarberPoleIcon, ClipperIcon, InstallmentsIcon, ScissorsIcon } from "./FeatureIcons";

const FEATURES = [
    { Icon: ScissorsIcon, title: "feature.tutors.title", text: "infoIcon.experience" },
    { Icon: ClipperIcon, title: "feature.equipment.title", text: "infoIcon.equipment" },
    { Icon: InstallmentsIcon, title: "feature.payments.title", text: "infoIcon.payments" },
    { Icon: BarberPoleIcon, title: "feature.job.title", text: "infoIcon.recruitment" },
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
                    {FEATURES.map(({ Icon, title, text }, index) => (
                        <Reveal key={title} delay={index * 90}>
                            {/* content sits straight on the colour block, no card around it */}
                            <Feature>
                                <Rule>
                                    <Index>{String(index + 1).padStart(2, "0")}</Index>
                                </Rule>
                                <IconSlot>
                                    <Icon />
                                </IconSlot>
                                <FeatureTitle>{t(title)}</FeatureTitle>
                                <FeatureText>{t(text)}</FeatureText>
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
    &:hover svg {
        transform: translateY(-0.4rem) rotate(-4deg);
    }
`;

/* the coral number leads the hairline, like a label pinned to the rule */
const Rule = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin-bottom: 3.2rem;
    &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: rgba(245, 245, 244, .45);
    }
`;

const Index = styled.span`
    background: ${COLORS.coral};
    color: ${COLORS.paper};
    padding: 0.7rem 1.1rem;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1;
`;

const IconSlot = styled.div`
    width: 5.6rem;
    height: 5.6rem;
    margin-bottom: 2.6rem;
    color: ${COLORS.paper};
    & > svg {
        display: block;
        width: 100%;
        height: 100%;
        transition: transform .3s cubic-bezier(.16,.84,.44,1);
    }
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
