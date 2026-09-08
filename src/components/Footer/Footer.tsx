import styled from "@emotion/styled";
import Instagram from "assets/instagram.svg";
import Loading from "assets/loading.svg";
import Location from "assets/location.svg";
import AcademyLogo from "assets/logo.svg";
import Phone from "assets/phone.svg";
import Reveal from "components/Reveal/Reveal";
import { Button, H2, Section, SectionLabel, Text } from "components/StyledHtml/StyledHtml";
import { COLORS, CONTACTS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { FormEventHandler, useRef } from "react";
import { useTranslation } from "react-i18next";

import { useSendEmail } from "./useSendEmail";

export const Footer = () => {
    const { t } = useTranslation();
    const { putData, response, error, pending } = useSendEmail();

    const form = useRef<HTMLFormElement>(null);

    const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        putData(form);
    };

    return (
        <FooterElement
            id={LINKS.CONTACT}
            backgroundColor={COLORS.ink}
            color={COLORS.paper}
            padding="10rem 0 8rem"
        >
            <Inner>
                <Reveal>
                    <TopGrid>
                        <FormColumn>
                            <FooterLabel>{t("footer.eyebrow")}</FooterLabel>
                            <H2 color={COLORS.paper} maxWidth="52rem" marginBottom="1.5rem">
                                {t("footer.contactForm.title")}
                            </H2>
                            <Text fontSize="1.7rem" color="rgba(245,245,244,.6)" maxWidth="48rem" marginBottom="4rem">
                                {t("footer.contacts.text1")}
                            </Text>

                            <FeedbackForm ref={form} onSubmit={sendEmail}>
                                <Row>
                                    <Field>
                                        <Label htmlFor="user_name">{t("footer.contactForm.name")}</Label>
                                        <Input
                                            id="user_name"
                                            required
                                            type="text"
                                            placeholder={t("footer.contactForm.namePlaceholder")}
                                            name="user_name"
                                        />
                                    </Field>
                                    <Field>
                                        <Label htmlFor="user_phone">{t("footer.contactForm.phone")}</Label>
                                        <Input
                                            id="user_phone"
                                            required
                                            type="tel"
                                            placeholder="+48 000 000 000"
                                            name="user_phone"
                                        />
                                    </Field>
                                </Row>
                                <Field>
                                    <Label htmlFor="message">{t("footer.contactForm.message")}</Label>
                                    <Textarea
                                        id="message"
                                        required
                                        placeholder={t("footer.contactForm.messagePlaceholder")}
                                        rows={4}
                                        name="message"
                                    />
                                </Field>

                                <SubmitRow>
                                    <SubmitButton disabled={pending} type="submit">
                                        {t("footer.contactForm.button")}
                                        {pending && <LoadingIcon src={Loading} alt="" />}
                                    </SubmitButton>
                                    <Note>{t("footer.contactForm.note")}</Note>
                                </SubmitRow>

                                {response && <StatusMessage isError={false}>{t("footer.contactForm.success")}</StatusMessage>}
                                {error && <StatusMessage isError>{t("footer.contactForm.error")}</StatusMessage>}
                            </FeedbackForm>
                        </FormColumn>

                        <ContactsColumn>
                            <Text fontSize="1.7rem" color="rgba(245,245,244,.6)" marginBottom="3rem">
                                {t("footer.contacts.text2")}
                            </Text>

                            <Contacts>
                                <li>
                                    <ContactLink target="_blank" rel="noreferrer" href={CONTACTS.mapLink}>
                                        <ContactsIcon src={Location} alt="" />
                                        <ContactValue>{t("footer.contacts.address")}</ContactValue>
                                    </ContactLink>
                                </li>
                                <li>
                                    <ContactLink href={CONTACTS.phoneHref}>
                                        <ContactsIcon src={Phone} alt="" />
                                        <ContactValue>{CONTACTS.phone}</ContactValue>
                                    </ContactLink>
                                </li>
                                <li>
                                    <ContactLink target="_blank" rel="noreferrer" href={CONTACTS.instagram}>
                                        <ContactsIcon src={Instagram} alt="" />
                                        <ContactValue>{CONTACTS.instagramLabel}</ContactValue>
                                    </ContactLink>
                                </li>
                            </Contacts>

                            <MapIframe
                                title="SIMPLE Academy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.1726717255287!2d16.861291299999998!3d52.4035467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704452762247389%3A0xb2a426a74db81f52!2sSIMPLE%20Barbershop%20-%20Marcelin!5e0!3m2!1sru!2spl!4v1693049030387!5m2!1sru!2spl"
                                loading="lazy"
                            />

                            <LogoImage src={AcademyLogo} alt="SIMPLE ACADEMY" />
                        </ContactsColumn>
                    </TopGrid>
                </Reveal>
            </Inner>
        </FooterElement>
    );
};

const FooterElement = Section.withComponent("footer");

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
`;

const TopGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 6rem;
    @media (max-width: 950px) {
        grid-template-columns: minmax(0, 1fr);
        gap: 5rem;
    }
`;

const FooterLabel = styled(SectionLabel)`
    margin-bottom: 2rem;
`;

const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ContactsColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 2rem;
    @media (max-width: 560px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
`;

const Label = styled.label`
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${COLORS.textMuted};
`;

const Input = styled.input`
    font-size: 1.7rem;
    font-weight: 500;
    color: ${COLORS.paper};
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 0;
    padding: 1.8rem 2.2rem;
    background-color: rgba(255, 255, 255, .04);
    transition: border-color .25s ease, background-color .25s ease;
    &::placeholder {
        color: rgba(255, 255, 255, .32);
    }
    &:focus {
        outline: none;
        border-color: ${COLORS.blue};
        background-color: rgba(255, 255, 255, .07);
    }
`;

const Textarea = Input.withComponent("textarea");

const SubmitRow = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 1rem;
`;

const SubmitButton = styled(Button)`
    position: relative;
    min-width: 22rem;
`;

const Note = styled.span`
    font-size: 1.4rem;
    color: ${COLORS.textMuted};
    max-width: 26rem;
    line-height: 1.35;
`;

const StatusMessage = styled.p<{ isError: boolean }>`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => (props.isError ? COLORS.coral : COLORS.blueTint)};
`;

const Contacts = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    list-style: none;
    margin-bottom: 3.5rem;
`;

const ContactsIcon = styled.img`
    width: 2.6rem;
    height: 2.6rem;
    flex-shrink: 0;
`;

const ContactValue = styled.span`
    font-size: 1.8rem;
    font-weight: 600;
    color: ${COLORS.paper};
`;

const ContactLink = styled.a`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 1.4rem;
    transition: opacity .25s ease;
    &:hover {
        opacity: 0.7;
    }
`;

const MapIframe = styled.iframe`
    width: 100%;
    height: 32rem;
    border-radius: 0;
    border: none;
    filter: grayscale(1) invert(0.92) contrast(0.9);
    margin-bottom: 3.5rem;
`;

const LogoImage = styled.img`
    width: 20rem;
    opacity: 0.45;
    margin-top: auto;
`;

const LoadingIcon = styled.img`
    width: 2.4rem;
    animation: rotating 1.5s linear infinite;
`;
