import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const FloatingCallBtn = () => {
    const { t } = useTranslation();

    return (
        <FloatingCallLink href="tel:+48786677659" aria-label={t("contact.call")}>
      ☎
        </FloatingCallLink>
    );
};

export default FloatingCallBtn;

const FloatingCallLink = styled.a`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 15;
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  color: #fff;
  background: var(--coral, #ff5b4d);
  border-radius: 50%;
  box-shadow: 0 10px 24px rgba(255, 91, 77, 0.42);
  font-size: 22px;
  text-decoration: none;
`;
