import "react-photo-view/dist/react-photo-view.css";

import styled from "@emotion/styled";
import Gallery_ICON from "assets/gallery.svg";
import IMG_1 from "assets/gallery/IMG_1.jpg";
import IMG_2 from "assets/gallery/IMG_2.jpg";
import IMG_3 from "assets/gallery/IMG_3.jpg";
import IMG_4 from "assets/gallery/IMG_4.jpg";
import IMG_5 from "assets/gallery/IMG_5.jpg";
import IMG_6 from "assets/gallery/IMG_6.jpg";
import { ContentWrapper, H3, LinkButton, Section, Text, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS } from "consts";
import { useTranslation } from "react-i18next";
import { PhotoProvider, PhotoView } from "react-photo-view";

const GraduatesSection = () => {
    const { t } = useTranslation();
    
    return (
        <PhotoProvider>
            <Section id={LINKS.GRADUATES} padding="6rem 0 7.5rem 0">
                <ContentWrapper flexDirection="column" alignItems="center">
                    <H3 color={COLORS.black}>{t("graduates.title")}</H3>
                    <FlexContainer>
                        <VerticalFlexContainer gap="2.5rem">
                            <PhotoView src={IMG_1}>
                                <PhotoSm style={{ background: `80% 85% url(${IMG_1})`,  backgroundSize: "cover" }}/>
                            </PhotoView>
                            <PhotoView src={IMG_2}>
                                <PhotoLg style={{ background: `70% 0 url(${IMG_2})`,  backgroundSize: "cover" }}>
                                    <MorePhotosIcon src={Gallery_ICON} alt="more photos"/>
                                    <Text color={COLORS.white} fontSize="3rem" fontWeight="600">{t("graduates.morePhotos")}</Text>
                                </PhotoLg>
                            </PhotoView>
                        </VerticalFlexContainer>
                        <VerticalFlexContainer gap="2.5rem">
                            <PhotoView src={IMG_3}>
                                <PhotoLg style={{ background: `80% 0 url(${IMG_3})`, backgroundSize: "cover" }} />
                            </PhotoView>
                            <PhotoView src={IMG_4}>
                                <PhotoSm style={{ background: `80% 45% url(${IMG_4})`, backgroundSize: "cover" }} />
                            </PhotoView>
                        </VerticalFlexContainer>
                        <VerticalFlexContainer gap="2.5rem">
                            <PhotoView src={IMG_5}>
                                <PhotoSm style={{ background: `80% 45% url(${IMG_5})`, backgroundSize: "cover" }} />
                            </PhotoView>
                            <PhotoView src={IMG_6}>
                                <PhotoLg style={{ background: `80% 0 url(${IMG_6})`, backgroundSize: "cover" }} />
                            </PhotoView>
                        </VerticalFlexContainer>
                    </FlexContainer>
                    <LinkButton variant="outlined" target="_blank" href="https://www.instagram.com/simple_academy_poznan/">{t("graduates.link")}</LinkButton>
                </ContentWrapper>
            </Section>
        </PhotoProvider>
    );
};

export default GraduatesSection;

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80rem;
    gap: 3.5rem;
    @media (max-width: 1000px) {
        flex-wrap: wrap;
        height: 120rem;
        & > div:last-of-type {
            display: none;
        }
    };
    @media (max-width: 660px) {
        height: 100vw;
        max-height: 440px;
        max-width: 340px;
        & > div:not(:first-of-type) {
            display: none;
        }
    };
`;

const PhotoSm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    width: 100%;
    height: 30%;
    min-width: 260px;
    cursor: pointer;
    @media (max-width: 1000px) {
        height: 70%;
        background-position: center;
    };
    @media (max-width: 660px) {
        display: none;
    };
`;

const PhotoLg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    width: 100%;
    height: 70%;
    min-width: 260px;
    cursor: pointer;
    &:hover > * {
        opacity: 0.8;
    }
    & > * {
        transition: .3s;
        display: none;
        opacity: 0.7;
        filter: drop-shadow(0 0 0.75rem ${COLORS.black});
    }
    @media (max-width: 1000px) {
        height: 100%;
        background-position: center;
    };
    @media (max-width: 660px) {
        & > * {
            display: block;
        }
    };
`;

const MorePhotosIcon = styled.img`
    width: 20rem;
`;