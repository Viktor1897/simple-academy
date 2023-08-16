//TODO сделать нормальные svg или взять картинки нормального качества 
import styled from "@emotion/styled";
import barber from "assets/barber.png";
import handshake from "assets/handshake.png";
import razor from "assets/razor.png";
import recruitment from "assets/recruitment.png";
import { ContentWrapper, Section, Text, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";
import { useTranslation } from "react-i18next";


const InfoIconsSection = () => {
    const { t } = useTranslation();
    return (
        <Section backgroundColor={COLORS.bgGray} padding="6.5rem 0">
            <ContentWrapper flexWrap="wrap" flexDirection="row" alignItems="start">
                <VerticalFlexContainer style={{ minWidth: "17rem" }}>
                    <InfoIcon src={barber} alt="barber"/>
                    <Text>{t("infoIcon.experience")}</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer style={{ minWidth: "17rem" }}>
                    <InfoIcon src={razor} alt="razor"/>
                    <Text>{t("infoIcon.equipment")}</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer style={{ minWidth: "17rem" }}>
                    <InfoIcon src={handshake} alt="handshake"/>
                    <Text>{t("infoIcon.payments")}</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer style={{ minWidth: "17rem" }}>
                    <InfoIcon src={recruitment} alt="recruitment"/>
                    <Text>{t("infoIcon.recruitment")}</Text>
                </VerticalFlexContainer>
            </ContentWrapper>
        </Section>
    );
};

export default InfoIconsSection;

const InfoIcon = styled.img`
    width: 8rem;
    heigh: 8rem;
`;