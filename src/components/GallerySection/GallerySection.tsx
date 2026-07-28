import styled from "@emotion/styled";
import IMG_1 from "assets/gallery/IMG_1.jpg";
import IMG_2 from "assets/gallery/IMG_2.jpg";
import IMG_3 from "assets/gallery/IMG_3.jpg";
import IMG_4 from "assets/gallery/IMG_4.jpg";
import IMG_5 from "assets/gallery/IMG_5.jpg";
import IMG_6 from "assets/gallery/IMG_6.jpg";
import { PaperSection, ScribbleLabel, SectionHeading } from "components/StyledHtml/StyledHtml";
import { useTranslation } from "react-i18next";

const gallery = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6];

const GallerySection = () => {
    const { t } = useTranslation();

    return (
        <GalleryContainer id="gallery">
            <SectionHeading split>
                <div>
                    <ScribbleLabel>02 / {t("labels.practice")}</ScribbleLabel>
                    <h2>{t("gallery.title")} <span>{t("gallery.highlight")}</span></h2>
                </div>
                <p>{t("gallery.description")}</p>
            </SectionHeading>
            <GalleryGrid>
                {gallery.map((image, index) => (
                    <GalleryItem key={image} index={index + 1}>
                        <img src={image} alt={`${t("gallery.alt")} ${index + 1}`} />
                        <figcaption>0{index + 1}</figcaption>
                    </GalleryItem>
                ))}
            </GalleryGrid>
            <TextLink href="https://www.instagram.com/simple_academy_poznan/" target="_blank" rel="noreferrer">
                {t("gallery.link")} ↗
            </TextLink>
        </GalleryContainer>
    );
};

export default GallerySection;

const GalleryContainer = styled(PaperSection)`
  padding-top: 160px;
  padding-bottom: 160px;
`;

const GalleryGrid = styled.div`
  max-width: var(--content, 1180px);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 110px;
  gap: 18px;
  margin: 0 auto 38px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
`;

type GalleryItemProps = {
  index: number;
};

const GalleryItem = styled.figure<GalleryItemProps>`
  position: relative;
  overflow: hidden;
  background: #ddd;

  ${props => props.index === 1 && "grid-column: 1 / 5; grid-row: 1 / 5;"}
  ${props => props.index === 2 && "grid-column: 5 / 9; grid-row: 1 / 3;"}
  ${props => props.index === 3 && "grid-column: 9 / 13; grid-row: 1 / 5;"}
  ${props => props.index === 4 && "grid-column: 5 / 9; grid-row: 3 / 6;"}
  ${props => props.index === 5 && "grid-column: 1 / 5; grid-row: 5 / 7;"}
  ${props => props.index === 6 && "grid-column: 9 / 13; grid-row: 5 / 7;"}

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: grayscale(1) contrast(1.04);
    transition: filter 250ms ease, transform 450ms ease;
  }

  &:hover img {
    filter: grayscale(0);
    transform: scale(1.035);
  }

  & figcaption {
    position: absolute;
    right: 10px;
    bottom: 8px;
    padding: 3px 7px;
    color: #fff;
    background: var(--blue, #167bd5);
    font-size: 11px;
    font-weight: 800;
  }

  @media (max-width: 860px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const TextLink = styled.a`
  display: block;
  width: max-content;
  margin: 0 auto;
  padding-bottom: 3px;
  color: var(--ink, #161616);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid var(--coral, #ff5b4d);
`;
