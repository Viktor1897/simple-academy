import styled from "@emotion/styled";
import storefront from "assets/IMG_2849.jpg";
import InstagramReel from "components/InstagramReel/InstagramReel";
import Reveal from "components/Reveal/Reveal";
import { H2, LinkButton, Polaroid, Section, SectionLabel, Text } from "components/StyledHtml/StyledHtml";
import TornEdge from "components/TornEdge/TornEdge";
import { COLORS, CONTACTS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";

const BarbershopSection = () => {
    const { t } = useTranslation();

    return (
        <BlueSection id={LINKS.BARBERSHOP} padding="12rem 0 12rem">
            <TornEdge color={COLORS.paper} position="top" />

            <Inner>
                <Reveal>
                    <Layout>
                        <Copy>
                            <SectionLabel>{t("barbershop.eyebrow")}</SectionLabel>
                            <H2 color={COLORS.paper} maxWidth="60rem">{t("barbershop.title")}</H2>
                            <Text
                                fontSize="1.9rem"
                                color="rgba(245,245,244,.78)"
                                maxWidth="52rem"
                                marginBottom="1rem"
                            >
                                {t("barbershop.description")}
                            </Text>
                            <LinkButton
                                variant="black"
                                target="_blank"
                                rel="noreferrer"
                                href={CONTACTS.barbershop}
                            >
                                {t("barbershop.link")}
                            </LinkButton>
                        </Copy>
                        <PhotoFrame rotate="2.4deg">
                            <Photo src={storefront} alt={t("barbershop.title")} loading="lazy" />
                        </PhotoFrame>
                    </Layout>
                </Reveal>

                {/* demo of the Instagram embed route — drop this block to remove it */}
                <Reveal>
                    <ReelBlock>
                        <ReelLabel>{t("barbershop.reelTitle")}</ReelLabel>
                        <ReelFrame rotate="-1.8deg">
                            <InstagramReel
                                shortcode="DdEjIUYCVM8"
                                title={t("barbershop.reelTitle")}
                                linkLabel={t("barbershop.reelLink")}
                            />
                        </ReelFrame>
                    </ReelBlock>
                </Reveal>
            </Inner>

            <TornEdge color={COLORS.paper} position="bottom" />
        </BlueSection>
    );
};

export default BarbershopSection;

const BlueSection = styled(Section)`
    background-color: ${COLORS.blue};
`;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 5rem;
    align-items: center;
    @media (max-width: 850px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

const Copy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
`;

const PhotoFrame = styled(Polaroid)`
    width: 100%;
    max-width: 52rem;
    justify-self: end;
    @media (max-width: 850px) {
        justify-self: center;
        max-width: 46rem;
    }
`;

const ReelBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.6rem;
    margin-top: 8rem;
    color: ${COLORS.paper};
`;

const ReelLabel = styled(SectionLabel)`
    margin: 0;
`;

const ReelFrame = styled(Polaroid)`
    width: 100%;
    max-width: 44rem;
    /* the frame is white, so the reel's fallback link can't stay paper-coloured */
    color: ${COLORS.ink};
`;

const Photo = styled.img`
    display: block;
    width: 100%;
    aspect-ratio: 5 / 4;
    object-fit: cover;
    object-position: center 30%;
`;
