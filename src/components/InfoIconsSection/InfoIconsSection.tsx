import styled from "@emotion/styled";
//TODO сделать нормальные svg или взять картинки нормального качества 
import barber from "assets/barber.png";
import handshake from "assets/handshake.png";
import razor from "assets/razor.png";
import recruitment from "assets/recruitment.png";
import { ContentWrapper, Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";


const InfoIconsSection = () => {
    return (
        <Section backgroundColor={COLORS.bgGray} padding="65px 0">
            <ContentWrapper flexDirection="row" alignItems="start">
                <VerticalFlexItem>
                    <img src={barber} alt="barber"/>
                    <Text>Szkoleniowcy - barberzy z 6+ letnim doświadczeniem</Text>
                </VerticalFlexItem>
                <VerticalFlexItem>
                    <img src={razor} alt="razor"/>
                    <Text>Narzędzie, modele, kosmetyka - wszystko jest wliczone w koszt szkolenia</Text>
                </VerticalFlexItem>
                <VerticalFlexItem>
                    <img src={handshake} alt="handshake"/>
                    <Text>Elastyczne warunki płatności. Możliwość rozłożenia ceny szkolenia na raty</Text>
                </VerticalFlexItem>
                <VerticalFlexItem>
                    <img src={recruitment} alt="recruitment"/>
                    <Text>Wszysci studenci mają szansę dolączyć się do ekipy SIMPLE Barbershop</Text>
                </VerticalFlexItem>
            </ContentWrapper>
        </Section>
    );
};

export default InfoIconsSection;

const VerticalFlexItem = styled.div`
    max-width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
`;