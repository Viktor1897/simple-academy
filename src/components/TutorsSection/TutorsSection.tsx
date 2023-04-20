import styled from "@emotion/styled";
import { ContentWrapper, H3, H4, List, Paper,Section,Text, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

const TutorsSection = () => {
    return (
        <Section padding="6rem 0 10rem 0" backgroundColor={COLORS.bgGray}>
            <H3 marginBottom="4rem">SZKOLIENIOWCY</H3>
            <ContentWrapper gap="0" flexDirection="column">
                <H4 marginBottom="1.2rem" textAlign="left">ANTON ISAKOU</H4>
                <HorizontalFlexContainer>
                    <DummyImage/>
                    <VerticalFlexContainer alignItems="start" textAlign="left">
                        <AlignmentWrapper>
                            <Text fontSize="2.7rem" marginBottom="2.4rem">
                            Mam imię Anton, jestem jednym z pierwszych barberów w mieście Mińsk (Białoruś). Barber i szkolieniwiec od 2016 roku.
                            </Text>
                            <List>
                                <li>Obciąłem więcej niż 15 000 mężczyzn</li>
                                <li>Mam 6 lat doświadczenia w branży</li>
                                <li>Stworzyłem effektywną technologję szkolienia barberskiego “Barber od Zera”</li>
                                <li>Właściciel sieci  salonów SIMPLE Barbershop i SIMPLE Academy</li>
                                <li>Wszyscy moji studenci pracują w branży i zarabiają od 5000 zł</li>
                            </List>
                        </AlignmentWrapper>
                        <PaperWithTriangle>
                            <Text fontSize="2rem">
                                Zależy mi na tym, aby moje kursy były skuteczne w każdym formacie i dla każdego: 
                                początkujących i doświadczonych studentów. Podczas kursów analizujemy nie tylko 
                                teoretyczne i praktyczne podstawy strzyżenia, golenia i brody, ale także psychologię 
                                mężczyzny i usługi. Dużo mówię o psychologii barberów i zasadach rozwoju barbera.
                            </Text>
                        </PaperWithTriangle>
                    </VerticalFlexContainer>
                </HorizontalFlexContainer>
            </ContentWrapper>
        </Section>
    );
};

export default TutorsSection;

const DummyImage = styled.div`
    background-color: ${COLORS.white};
    border-radius: 2rem;
    width: 47rem;
    height: 66.7rem;
`;

const HorizontalFlexContainer = styled.div`
    display: flex;
    gap: 3rem;
`;

const AlignmentWrapper = styled.div`
    flex-grow: 1;
`;

const PaperWithTriangle = styled(Paper)`
    padding: 2rem;
    border-radius: 2rem;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        border-top: 1.8rem solid transparent;
        border-bottom: 1.8rem solid transparent;
        border-right: 1.8rem solid #FFFFFF;
        left: -1.8rem;
        bottom: 4rem;
    },
`;