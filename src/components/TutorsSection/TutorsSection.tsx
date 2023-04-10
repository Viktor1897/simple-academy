import styled from "@emotion/styled";
import { ContentWrapper, H3, H4, List, Paper,Section,Text, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

const TutorsSection = () => {
    return (
        <Section padding="60px 0 100px 0" backgroundColor={COLORS.bgGray}>
            <H3 marginBottom="40px">SZKOLIENIOWCY</H3>
            <ContentWrapper gap="0" flexDirection="column">
                <H4 marginBottom="12px" textAlign="left">ANTON ISAKOU</H4>
                <HorizontalFlexContainer>
                    <DummyImage/>
                    <VerticalFlexContainer alignItems="start" textAlign="left">
                        <AlignmentWrapper>
                            <Text fontSize="27px" marginBottom="24px">
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
                            <Text fontSize="20px">
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
    border-radius: 20px;
    width: 470px;
    height: 667px;
`;

const HorizontalFlexContainer = styled.div`
    display: flex;
    gap: 30px;
`;

const AlignmentWrapper = styled.div`
    flex-grow: 1;
`;

const PaperWithTriangle = styled(Paper)`
    padding: 20px;
    border-radius: 20px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        border-top: 18px solid transparent;
        border-bottom: 18px solid transparent;
        border-right: 18px solid #FFFFFF;
        left: -18px;
        bottom: 40px;
    },
`;