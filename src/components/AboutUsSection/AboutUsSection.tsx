import styled from "@emotion/styled";
import aboutUs from "assets/simple_forest.jpg";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import { Polaroid, Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";

const AboutUsSection = () => {
    const { t } = useTranslation();

    return (
        <Section id={LINKS.ABOUT_US} padding="11rem 0 11rem">
            <Inner>
                <Reveal>
                    <SectionHead
                        label={t("aboutUs.eyebrow")}
                        title={t("aboutUs.title")}
                    />
                </Reveal>

                <Reveal delay={120}>
                    <Body>
                        <Paragraphs>
                            <Text fontSize="1.8rem" color={COLORS.textGray}>{t("aboutUs.text.par1")}</Text>
                            <Text fontSize="1.8rem" color={COLORS.textGray}>{t("aboutUs.text.par2")}</Text>
                            <Text fontSize="1.8rem" color={COLORS.textGray}>{t("aboutUs.text.par3")}</Text>
                            <Quote>{t("aboutUs.quote")}</Quote>
                        </Paragraphs>

                        <PhotoFrame rotate="2deg">
                            <Photo role="img" aria-label={t("aboutUs.title")} />
                        </PhotoFrame>
                    </Body>
                </Reveal>
            </Inner>
        </Section>
    );
};

export default AboutUsSection;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

const Body = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
    gap: 5rem;
    align-items: center;
    @media (max-width: 950px) {
        grid-template-columns: minmax(0, 1fr);
        gap: 4rem;
    }
`;

const Paragraphs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
`;

const Quote = styled.p`
    margin-top: 1rem;
    padding-left: 2.4rem;
    border-left: 4px solid ${COLORS.coral};
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${COLORS.ink};
`;

const PhotoFrame = styled(Polaroid)`
    width: 100%;
    justify-self: center;
    max-width: 44rem;
`;

const Photo = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    background: 78% 10% / 150% no-repeat url(${aboutUs});
    @media (max-width: 950px) {
        aspect-ratio: 16 / 11;
        background-size: cover;
        background-position: center;
    }
`;
