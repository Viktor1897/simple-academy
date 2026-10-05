import "react-photo-view/dist/react-photo-view.css";

import styled from "@emotion/styled";
import { STUDIO_PHOTOS } from "assets/galleryImages";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import { Polaroid, Section } from "components/StyledHtml/StyledHtml";
import { LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";
import { PhotoProvider, PhotoView } from "react-photo-view";

/**
 * Scattered prints rather than a tidy grid: three across the top, two wider
 * below, each nudged off the baseline so the wall reads as hand-laid.
 */
const LAYOUT = [
    { span: 2, offset: "0", tilt: "-2.2deg", ratio: "3 / 4" },
    { span: 2, offset: "4.5rem", tilt: "1.8deg", ratio: "3 / 4" },
    { span: 2, offset: "-1.5rem", tilt: "-1.4deg", ratio: "3 / 4" },
    { span: 3, offset: "1rem", tilt: "1.4deg", ratio: "4 / 3" },
    { span: 3, offset: "5rem", tilt: "-1.8deg", ratio: "4 / 3" },
];

const GallerySection = () => {
    const { t } = useTranslation();

    return (
        <PhotoProvider>
            <Section id={LINKS.GALLERY} padding="4rem 0 12rem">
                <Inner>
                    <Reveal>
                        <SectionHead
                            label={t("gallery.eyebrow")}
                            title={t("gallery.title")}
                            description={t("gallery.description")}
                        />
                    </Reveal>

                    <Collage>
                        {STUDIO_PHOTOS.map((photo, index) => {
                            const cell = LAYOUT[index % LAYOUT.length];
                            return (
                                <Cell key={photo} span={cell.span} offset={cell.offset}>
                                    <Reveal delay={(index % 3) * 110}>
                                        <PhotoView src={photo}>
                                            <Frame rotate={cell.tilt}>
                                                <Photo src={photo} alt="" ratio={cell.ratio} loading="lazy" />
                                            </Frame>
                                        </PhotoView>
                                    </Reveal>
                                </Cell>
                            );
                        })}
                    </Collage>
                </Inner>
            </Section>
        </PhotoProvider>
    );
};

export default GallerySection;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Collage = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 3rem;
    align-items: start;
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 560px) {
        grid-template-columns: minmax(0, 1fr);
        gap: 2.4rem;
    }
`;

const Cell = styled.div<{ span: number; offset: string }>`
    grid-column: span ${props => props.span};
    margin-top: ${props => props.offset};
    @media (max-width: 900px) {
        grid-column: span 1;
        margin-top: 0;
    }
`;

const Frame = styled(Polaroid)`
    cursor: zoom-in;
`;

const Photo = styled.img<{ ratio: string }>`
    display: block;
    width: 100%;
    aspect-ratio: ${props => props.ratio};
    object-fit: cover;
`;
