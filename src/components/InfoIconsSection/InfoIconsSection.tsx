//TODO сделать нормальные svg или взять картинки нормального качества 
import styled from "@emotion/styled";
import barber from "assets/barber.png";
import handshake from "assets/handshake.png";
import razor from "assets/razor.png";
import recruitment from "assets/recruitment.png";
import { ContentWrapper, Section, Text, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";


const InfoIconsSection = () => {
    return (
        <Section backgroundColor={COLORS.bgGray} padding="6.5rem 0">
            <ContentWrapper flexDirection="row" alignItems="start">
                <VerticalFlexContainer>
                    <InfoIcon src={barber} alt="barber"/>
                    <Text>Szkoleniowcy - barberzy z 6+ letnim doświadczeniem</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer>
                    <InfoIcon src={razor} alt="razor"/>
                    <Text>Narzędzie, modele, kosmetyka - wszystko jest wliczone w koszt szkolenia</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer>
                    <InfoIcon src={handshake} alt="handshake"/>
                    <Text>Elastyczne warunki płatności. Możliwość rozłożenia ceny szkolenia na raty</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer>
                    <InfoIcon src={recruitment} alt="recruitment"/>
                    <Text>Wszysci studenci mają szansę dolączyć się do ekipy SIMPLE Barbershop</Text>
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