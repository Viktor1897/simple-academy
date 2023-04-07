import styled from "@emotion/styled";
import { Button, H3, Section } from "components/StyledHtml/StyledHtml";
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
                    <Contacts>Contacts</Contacts>
                    <MapContainer>Map</MapContainer>
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
`;

const FeedbackFormContainer = styled.div`
`;

const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Contacts = styled.div`
`;

const MapContainer = styled.div`
    background-color: red;
    grid-column: 1/3;
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