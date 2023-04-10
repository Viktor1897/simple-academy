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
        <FooterElement backgroundColor={COLORS.bgDark} padding="80px 0">
            <ContentWrapper flexDirection="column">
                <H3 color={COLORS.white}>Masz pytania? Zapytaj!</H3>
                <GridLayout>
                    <FeedbackFormContainer>
                        <FeedbackForm>
                            <Input type="text" placeholder="Imię" />
                            <Input type="text" placeholder="Telefon" />
                            <Textarea placeholder="Wiadomość" rows={3} />
                            <Button type="submit">WYSŁAĆ</Button>
                        </FeedbackForm>
                    </FeedbackFormContainer>
                    <ContactsContainer>
                        <Text marginBottom="20px" fontSize="15px" color={COLORS.textGray}>
                            Jeśli masz jakieś pytania, chcesz o coś porozmawiać lub o coś 
                            zapytać, zapraszamy.
                            Wypełnij formularz, a my skontaktujemy się z tobą w ciągu 
                            godziny. Jesteśmy zawsze
                            chętni odpowiedzieć na wszystkie pytania.
                        </Text>
                        <Text marginBottom="20px" fontSize="15px" color={COLORS.textGray}>
                            Możesz również skontaktować się z nami przez telefon.
                        </Text>
                        <Contacts>
                            <li><ContactsIcon src={Location} />Mieścimy się pod adresem: Poznań, ul. Swierzawska 4</li>
                            <li><ContactsIcon src={Phone} />+48 786 677 659</li>
                            <li><ContactsIcon src={Instagram} />@simple_academy_poznan</li>
                        </Contacts>
                        <img width="285px" src={AcademyLogo} alt="simple academy logo" style={{ opacity: 0.6 }}/>
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
    row-gap: 100px;
    column-gap: 230px;
`;

const FeedbackFormContainer = styled.div`
`;

const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    margin-bottom: 55px;
        & li {
            display: flex;
            align-items: center;
        }
        & img {
            margin-right: 10px;
        }
`;

const ContactsIcon = styled.img`
    width: 32px;
`;

const MapContainer = styled.div`
    grid-column: 1/3;
`;

const MapIframe = styled.iframe`
    width: 100%;
    height: 465px;
    border-radius: 4px;
    border: none;
`;

const Input = styled.input`
    font-size: 22px;
    color: ${COLORS.white};
    border: 1px solid ${COLORS.textGray};
    border-radius: 10px;
    padding: 11px 32px;
    background-color: transparent;
        &::placeholder {
            color: ${COLORS.textGray};
        }
`;

const Textarea = Input.withComponent("textarea");