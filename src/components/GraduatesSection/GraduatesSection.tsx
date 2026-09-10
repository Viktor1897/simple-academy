import "react-photo-view/dist/react-photo-view.css";

import styled from "@emotion/styled";
import { GRADUATE_PHOTOS } from "assets/galleryImages";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import Slider from "components/Slider/Slider";
import { LinkButton, Polaroid, Section } from "components/StyledHtml/StyledHtml";
import { CONTACTS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";
import { PhotoProvider, PhotoView } from "react-photo-view";

/** a fixed tilt per position, so the row looks hand-laid instead of random */
const TILTS = ["-2.4deg", "1.6deg", "-1.2deg", "2.2deg", "-1.8deg", "1.2deg"];

const GraduatesSection = () => {
    const { t } = useTranslation();

    return (
        <PhotoProvider>
            <Section id={LINKS.GRADUATES} padding="11rem 0 11rem">
                <Inner>
                    <Reveal>
                        <SectionHead
                            label={t("graduates.eyebrow")}
                            title={t("graduates.title")}
                            description={t("graduates.description")}
                        />
                    </Reveal>

                    <Reveal delay={120}>
                        <Slider
                            perView={3}
                            gap="3rem"
                            prevLabel={t("graduates.slider.prev")}
                            nextLabel={t("graduates.slider.next")}
                        >
                            {GRADUATE_PHOTOS.map((photo, index) => (
                                <PhotoView key={photo} src={photo}>
                                    <Frame rotate={TILTS[index % TILTS.length]}>
                                        <Photo src={photo} alt="" loading="lazy" />
                                    </Frame>
                                </PhotoView>
                            ))}
                        </Slider>
                    </Reveal>

                    <Footer>
                        <LinkButton
                            variant="black"
                            target="_blank"
                            rel="noreferrer"
                            href={CONTACTS.instagram}
                        >
                            {t("graduates.link")}
                        </LinkButton>
                    </Footer>
                </Inner>
            </Section>
        </PhotoProvider>
    );
};

export default GraduatesSection;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

const Frame = styled(Polaroid)`
    cursor: zoom-in;
`;

const Photo = styled.img`
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
`;
