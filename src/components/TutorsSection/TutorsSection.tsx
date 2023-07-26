import styled from "@emotion/styled";
import Anastazja from "assets/ANASTAZJA.jpg";
import Anton from "assets/ANTON.jpg";
import { ContentWrapperResponsive, H3, Section, Text, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

const TutorsSection = () => {
    return (
        <Section padding="6rem 0 10rem 0" backgroundColor={COLORS.bgGray}>
            <H3 marginBottom="10rem">WYKŁADOWCY</H3>
            <ContentWrapperResponsive gap="4rem" flexDirection="row" alignItems="center">
                <VerticalFlexContainer gap="initial">
                    <Photo src={Anton} />
                    <Text marginBottom="1.5rem" fontWeight="700">ANTON</Text>
                    <Text fontSize="1.9rem" style={{ maxWidth: "38.9rem" }}>Mam imię Anton, jestem jednym z pierwszych barberów w mieście Mińsk (Białoruś). 
                        Barber i edukator od 2016 roku.</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer gap="initial">
                    <Photo src={Anastazja} />
                    <Text marginBottom="1.5rem" fontWeight="700">ANASTAZJA</Text>
                    <Text fontSize="1.9rem" style={{ maxWidth: "38.9rem" }}>Jako barber oraz edukator jestem częścią zespołu
                            SIMPLE Barbershop.
                        Nieustannie śledzę nowe trendy w branży i rozwijam 
                        swój warsztat.</Text>
                </VerticalFlexContainer>
            </ContentWrapperResponsive>
        </Section>
    );
};

export default TutorsSection;

const Photo = styled.img`
    border-radius: 50%;
    width: 34rem;
    height: 34rem;
    margin-bottom: 4.5rem;
`;
