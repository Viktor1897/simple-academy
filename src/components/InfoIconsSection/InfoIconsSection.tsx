//TODO сделать нормальные svg или взять картинки нормального качества 
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
                    <img src={barber} alt="barber"/>
                    <Text>Szkoleniowcy - barberzy z 6+ letnim doświadczeniem</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer>
                    <img src={razor} alt="razor"/>
                    <Text>Narzędzie, modele, kosmetyka - wszystko jest wliczone w koszt szkolenia</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer>
                    <img src={handshake} alt="handshake"/>
                    <Text>Elastyczne warunki płatności. Możliwość rozłożenia ceny szkolenia na raty</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer>
                    <img src={recruitment} alt="recruitment"/>
                    <Text>Wszysci studenci mają szansę dolączyć się do ekipy SIMPLE Barbershop</Text>
                </VerticalFlexContainer>
            </ContentWrapper>
        </Section>
    );
};

export default InfoIconsSection;