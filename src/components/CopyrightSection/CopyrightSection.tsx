import styled from "@emotion/styled";
import { Section } from "components/StyledHtml/StyledHtml";
import { COLORS, CONTACTS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";

const CopyrightSection = () => {
    const { t } = useTranslation();

    return (
        <Section backgroundColor={COLORS.ink} color={COLORS.paper} padding="0 0 4rem">
            <Inner>
                <Line>{`© ${new Date().getFullYear()} SIMPLE ACADEMY — ${t("copyright.rights")}`}</Line>
                <Links>
                    <FooterLink target="_blank" rel="noreferrer" href={CONTACTS.instagram}>
                        Instagram
                    </FooterLink>
                    <FooterLink target="_blank" rel="noreferrer" href={CONTACTS.barbershop}>
                        SIMPLE Barbershop
                    </FooterLink>
                </Links>
            </Inner>
        </Section>
    );
};

export default CopyrightSection;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    padding-top: 3rem;
    border-top: 1px solid rgba(255, 255, 255, .14);
`;

const Line = styled.span`
    font-size: 1.4rem;
    color: ${COLORS.textMuted};
    letter-spacing: 0.02em;
`;

const Links = styled.div`
    display: flex;
    gap: 2.4rem;
`;

const FooterLink = styled.a`
    font-size: 1.4rem;
    color: ${COLORS.textMuted};
    text-decoration: none;
    letter-spacing: 0.02em;
    &:hover {
        color: ${COLORS.paper};
    }
`;
