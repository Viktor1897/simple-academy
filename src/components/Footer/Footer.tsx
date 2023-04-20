import styled from "@emotion/styled";
import Instagram from "assets/instagram.svg";
import Location from "assets/location.svg";
import AcademyLogo from "assets/logo.svg";
import Phone from "assets/phone.svg";
import { Button, H3, Section, Text } from "components/StyledHtml/StyledHtml";
import { ContentWrapper } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

export const Footer = () => {
    return (
        <FooterElement backgroundColor={COLORS.bgDark} padding="8rem 0">
            <ContentWrapper flexDirection="column">
                <H3 color={COLORS.white}>Masz pytania? Zapytaj!</H3>
                <GridLayout>
                    <FeedbackForm>
                        <Input type="text" placeholder="Imię" />
                        <Input type="text" placeholder="Telefon" />
                        <Textarea placeholder="Wiadomość" rows={3} />
                        <Button type="submit">WYSŁAĆ</Button>
                    </FeedbackForm>
                    <ContactsContainer>
                        <Text marginBottom="2rem" fontSize="1.5rem" color={COLORS.textGray}>
                            Jeśli masz jakieś pytania, chcesz o coś porozmawiać lub o coś 
                            zapytać, zapraszamy.
                            Wypełnij formularz, a my skontaktujemy się z tobą w ciągu 
                            godziny. Jesteśmy zawsze
                            chętni odpowiedzieć na wszystkie pytania.
                        </Text>
                        <Text marginBottom="2rem" fontSize="1.5rem" color={COLORS.textGray}>
                            Możesz również skontaktować się z nami przez telefon.
                        </Text>
                        <Contacts>
                            <li><ContactsIcon src={Location} /><Text fontSize="1.3rem" color={COLORS.white}>Mieścimy się pod adresem: Poznań, ul. Swierzawska 4</Text></li>
                            <li><ContactsIcon src={Phone} /><Text fontSize="1.3rem" color={COLORS.white}>+48 786 677 659</Text></li>
                            <li><ContactsIcon src={Instagram} /><Text fontSize="1.3rem" color={COLORS.white}>@simple_academy_poznan</Text></li>
                        </Contacts>
                        <LogoImage src={AcademyLogo} alt="simple academy logo" />
                    </ContactsContainer>
                    <MapContainer>
                        <MapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.8439710850994!2d16.88505231580336!3d52.40950397979346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704452d7295cfaf%3A0x433fc023d049866d!2sSIMPLE%20Barbershop!5e0!3m2!1sru!2spl!4v1645479330364!5m2!1sru!2spl" loading="lazy"/>
                    </MapContainer>
                </GridLayout>
            </ContentWrapper>
        </FooterElement>
    );
};

const FooterElement = Section.withComponent("footer");

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10rem;
    column-gap: 23rem;
`;

const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Contacts = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    color: ${COLORS.white};
    margin-bottom: 2.5rem;
        & li {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        & img {
            margin-right: 1rem;
        }
`;

const ContactsIcon = styled.img`
    width: 3.2rem;
`;

const LogoImage = styled.img`
    width: 28.5rem;
    opacity: 0.6
`;

const MapContainer = styled.div`
    grid-column: 1/3;
`;

const MapIframe = styled.iframe`
    width: 100%;
    height: 46.5rem;
    border-radius: 0.4rem;
    border: none;
`;

const Input = styled.input`
    font-size: 2.2rem;
    color: ${COLORS.white};
    border: 1px solid ${COLORS.textGray};
    border-radius: 1rem;
    padding: 1.1rem 3.2rem;
    background-color: transparent;
        &::placeholder {
            color: ${COLORS.textGray};
        }
`;

const Textarea = Input.withComponent("textarea");