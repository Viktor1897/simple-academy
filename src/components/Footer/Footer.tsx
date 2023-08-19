import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";
import Instagram from "assets/instagram.svg";
import Location from "assets/location.svg";
import AcademyLogo from "assets/logo.svg";
import Phone from "assets/phone.svg";
import { Button, H3, Section, Text } from "components/StyledHtml/StyledHtml";
import { ContentWrapper } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS } from "consts";
import { FormEventHandler, useRef } from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {

    const { t } = useTranslation();
    
    const form = useRef<HTMLFormElement>(null);

    const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
  
        form.current && emailjs.sendForm("service_kwj9xcf", "template_03cj5r3", form.current, "d05s9DHz_SqrcB64Z")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <FooterElement id={LINKS.CONTACT} backgroundColor={COLORS.bgDark} padding="8rem 0">
            <ContentWrapper gap="9.5rem" flexDirection="column">
                <H3 color={COLORS.white}>{t("footer.contactForm.title")}</H3>
                <FlexLayout>
                    <FeedbackForm ref={form} onSubmit={sendEmail}>
                        <Input type="text" placeholder={t("footer.contactForm.name")} name="user_name" />
                        <Input type="text" placeholder={t("footer.contactForm.phone")} name="user_phone" />
                        <Textarea placeholder={t("footer.contactForm.message")} rows={3} name="message" />
                        <Button variant="contained" type="submit">{t("footer.contactForm.button")}</Button>
                    </FeedbackForm>
                    <ContactsContainer>
                        <Text marginBottom="2rem" fontSize="1.5rem" color={COLORS.textGray}>{t("footer.contacts.text1")}</Text>
                        <Text marginBottom="2rem" fontSize="1.5rem" color={COLORS.textGray}>
                            {t("footer.contacts.text2")}
                        </Text>
                        <Contacts>
                            <li>
                                <ContactLink target="_blank" href="https://goo.gl/maps/6S7ZXY7TtGXkbbhk6">
                                    <ContactsIcon src={Location} />
                                    <Text fontSize="1.3rem" color={COLORS.white}>
                                        {t("footer.contacts.address")}
                                    </Text>
                                </ContactLink>
                            </li>
                            <li>
                                <ContactLink href="tel: +48 786-677-659">
                                    <ContactsIcon src={Phone} />
                                    <Text fontSize="1.3rem" color={COLORS.white}>
                                    +48 786 677 659
                                    </Text>
                                </ContactLink>
                            </li>
                            <li>
                                <ContactLink target="_blank" href="https://www.instagram.com/simple_academy_poznan/">
                                    <ContactsIcon src={Instagram} />
                                    <Text fontSize="1.3rem" color={COLORS.white}>
                                    @simple_academy_poznan
                                    </Text>
                                </ContactLink>
                            </li>
                        </Contacts>
                        <LogoImage src={AcademyLogo} alt="simple academy logo" />
                    </ContactsContainer>
                </FlexLayout>
                
                <MapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.17249269416!2d16.85871637640363!3d52.403549944844976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444e48993ac09%3A0x56de424c74035d6b!2s%C5%9Awierzawska%204%2C%2060-321%20Pozna%C5%84!5e0!3m2!1sen!2spl!4v1692459198823!5m2!1sen!2spl" loading="lazy"/>
            </ContentWrapper>
        </FooterElement>
    );
};

const FooterElement = Section.withComponent("footer");

const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 47rem;
    @media (max-width: 670px) {
        max-width: none;
    }
`;

const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 47rem;
    @media (max-width: 670px) {
        max-width: none;
    }
`;

const FlexLayout = styled.div`
    width: 100%;
    display: flex;
    column-gap: 8rem;
    justify-content: space-between;
    @media (max-width: 670px) {
        flex-wrap: wrap;
        row-gap: 8rem;
    }
`;

const Contacts = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    color: ${COLORS.white};
    margin-bottom: 2.5rem;
        & img {
            margin-right: 1rem;
        }
`;

const ContactsIcon = styled.img`
    width: 3.2rem;
`;

const ContactLink = styled.a`
    text-decoration: none;
    color: ${COLORS.white};
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;

const LogoImage = styled.img`
    width: 28.5rem;
    opacity: 0.6;
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