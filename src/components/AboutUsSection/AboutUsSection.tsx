import styled from "@emotion/styled";
import aboutUs from "assets/IMG_2844.jpg";
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
                            <Photo src={aboutUs} alt="" loading="lazy" />
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

/* the shot is square, so the 1:1 frame needs no hand-tuned crop */
const Photo = styled.img`
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    @media (max-width: 950px) {
        aspect-ratio: 16 / 11;
        /* the landscape crop sits high, to keep the heads and the clipper in */
        object-position: center 35%;
    }
`;
