import styled from "@emotion/styled";
import Instagram from "assets/instagram.svg";
import Loading from "assets/loading.svg";
import Location from "assets/location.svg";
import logo from "assets/logo.svg";
import Phone from "assets/phone.svg";
import { MarkerButton, ScribbleLabel } from "components/StyledHtml/StyledHtml";
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
        <FooterContainer id="contact">
            <FooterIntro>
                <ScribbleLabel>06 / {t("labels.contact")}</ScribbleLabel>
                <h2>{t("footer.contactForm.title")} <mark>{t("footer.contactForm.highlight")}</mark></h2>
                <p>{t("footer.contactForm.lead")}</p>
            </FooterIntro>

            <FooterContent>
                <FeedbackForm ref={form} onSubmit={sendEmail}>
                    <label>
                        <span>01</span>
                        <input required type="text" placeholder={t("footer.contactForm.name")} name="user_name" />
                    </label>
                    <label>
                        <span>02</span>
                        <input required type="tel" placeholder={t("footer.contactForm.phone")} name="user_phone" />
                    </label>
                    <label>
                        <span>03</span>
                        <textarea required placeholder={t("footer.contactForm.message")} rows={3} name="message" />
                    </label>
                    <MarkerButton variant="coral" disabled={pending} type="submit">
                        {pending ? <LoadingImg src={Loading} alt="" /> : t("footer.contactForm.button")}
                    </MarkerButton>
                    {response && <FormStatus isSuccess>{t("footer.contactForm.success")}</FormStatus>}
                    {error && <FormStatus>{t("footer.contactForm.error")}</FormStatus>}
                </FeedbackForm>

                <FooterContacts>
                    <p>{t("footer.contacts.text")}</p>
                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/6S7ZXY7TtGXkbbhk6">
                                <img src={Location} alt="" />
                                <span>{t("footer.contacts.address")}</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+48786677659">
                                <img src={Phone} alt="" />
                                <span>+48 786 677 659</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/simple_academy_poznan/">
                                <img src={Instagram} alt="" />
                                <span>@simple_academy_poznan</span>
                            </a>
                        </li>
                    </ul>
                </FooterContacts>
            </FooterContent>

            <FooterBottom>
                <img src={logo} alt="Simple Academy" />
                <span>© {new Date().getFullYear()} SIMPLE ACADEMY</span>
                <span>{t("copyright.rights")}</span>
            </FooterBottom>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
  position: relative;
  padding: 160px max(28px, calc((100vw - var(--content, 1180px)) / 2)) 80px;
  color: #fff;
  background: var(--ink, #161616);

  &::before {
    content: "";
    position: absolute;
    z-index: 4;
    left: -2%;
    width: 104%;
    height: 42px;
    background: var(--paper, #f4f2ed);
    clip-path: polygon(0 50%, 4% 25%, 8% 59%, 13% 18%, 18% 56%, 24% 29%, 29% 70%, 36% 24%, 42% 57%, 49% 19%, 56% 64%, 62% 28%, 68% 72%, 74% 21%, 80% 58%, 87% 26%, 94% 67%, 100% 36%, 100% 100%, 0 100%);
    top: -1px;
    transform: rotate(180deg);
  }
`;

const FooterIntro = styled.div`
  max-width: 780px;
  margin-bottom: 70px;

  & h2 {
    margin-bottom: 24px;
    font-size: clamp(38px, 5vw, 72px);
    font-weight: 900;
    letter-spacing: -0.065em;
    line-height: 0.94;
    text-transform: uppercase;

    & mark {
      color: #fff;
      background: var(--coral, #ff5b4d);
      box-shadow: 8px 0 0 var(--coral, #ff5b4d), -8px 0 0 var(--coral, #ff5b4d);
    }
  }

  & p {
    color: rgba(255, 255, 255, 0.75);
    font-size: 17px;
  }
`;

const FooterContent = styled.div`
  max-width: var(--content, 1180px);
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 80px;
  margin-bottom: 120px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;

  & label {
    display: grid;
    grid-template-columns: 36px 1fr;
    align-items: center;
    gap: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  }

  & label span {
    color: var(--coral, #ff5b4d);
    font-size: 12px;
    font-weight: 900;
  }

  & input,
  & textarea {
    width: 100%;
    color: #fff;
    background: transparent;
    border: 0;
    font-size: 16px;
  }

  & input::placeholder,
  & textarea::placeholder {
    color: rgba(255, 255, 255, 0.42);
  }

  & textarea {
    resize: vertical;
  }
`;

type FormStatusProps = {
  isSuccess?: boolean;
};

const FormStatus = styled.p<FormStatusProps>`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.isSuccess ? "#5edb93" : "var(--coral, #ff5b4d)"};
`;

const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > p {
    color: rgba(255, 255, 255, 0.75);
    font-size: 16px;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 22px;
    list-style: none;
  }

  & a {
    display: flex;
    align-items: center;
    gap: 16px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
  }

  & img {
    width: 24px;
    height: 24px;
  }
`;

const FooterBottom = styled.div`
  max-width: var(--content, 1180px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  color: rgba(255, 255, 255, 0.45);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  & img {
    width: 140px;
  }

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LoadingImg = styled.img`
  width: 24px;
  height: 24px;
  animation: rotating 1.5s linear infinite;
`;
