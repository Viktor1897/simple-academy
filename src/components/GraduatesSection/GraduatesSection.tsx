import "react-photo-view/dist/react-photo-view.css";

import styled from "@emotion/styled";
import IMG_1 from "assets/gallery/IMG_1.jpg";
import IMG_2 from "assets/gallery/IMG_2.jpg";
import IMG_3 from "assets/gallery/IMG_3.jpg";
import IMG_4 from "assets/gallery/IMG_4.jpg";
import IMG_5 from "assets/gallery/IMG_5.jpg";
import IMG_6 from "assets/gallery/IMG_6.jpg";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import { LinkButton, Polaroid, Section } from "components/StyledHtml/StyledHtml";
import { CONTACTS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PHOTOS = [
    { src: IMG_1, position: "80% 85%", rotate: "-2deg" },
    { src: IMG_2, position: "70% 20%", rotate: "1.6deg" },
    { src: IMG_3, position: "80% 15%", rotate: "-1.2deg" },
    { src: IMG_4, position: "80% 45%", rotate: "2deg" },
    { src: IMG_5, position: "80% 45%", rotate: "-1.8deg" },
    { src: IMG_6, position: "80% 15%", rotate: "1.2deg" },
];

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

                    <Gallery>
                        {PHOTOS.map((photo, index) => (
                            <Reveal key={photo.src} delay={(index % 3) * 100}>
                                <PhotoView src={photo.src}>
                                    <Frame rotate={photo.rotate}>
                                        <Tile
                                            style={{
                                                backgroundImage: `url(${photo.src})`,
                                                backgroundPosition: photo.position,
                                            }}
                                        />
                                    </Frame>
                                </PhotoView>
                            </Reveal>
                        ))}
                    </Gallery>

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

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3rem;
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 560px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

const Frame = styled(Polaroid)`
    cursor: zoom-in;
`;

const Tile = styled.div`
    width: 100%;
    aspect-ratio: 4 / 4.6;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
`;
