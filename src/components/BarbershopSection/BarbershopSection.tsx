import styled from "@emotion/styled";
import barbershop from "assets/barbershop.png";
import Reveal from "components/Reveal/Reveal";
import { H2, LinkButton, Section, SectionLabel, Text } from "components/StyledHtml/StyledHtml";
import TornEdge from "components/TornEdge/TornEdge";
import { COLORS, CONTACTS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";

const BarbershopSection = () => {
    const { t } = useTranslation();

    return (
        <BlueSection id={LINKS.BARBERSHOP} padding="12rem 0 12rem">
            <TornEdge color={COLORS.paper} position="top" />

            <Inner>
                <Reveal>
                    {/* a full-width colour block, not a rounded banner sitting on the page */}
                    <Layout>
                        <Copy>
                            <SectionLabel>{t("barbershop.eyebrow")}</SectionLabel>
                            <H2 color={COLORS.paper} maxWidth="60rem">{t("barbershop.title")}</H2>
                            <Text
                                fontSize="1.9rem"
                                color="rgba(245,245,244,.78)"
                                maxWidth="52rem"
                                marginBottom="1rem"
                            >
                                {t("barbershop.description")}
                            </Text>
                            <LinkButton
                                variant="black"
                                target="_blank"
                                rel="noreferrer"
                                href={CONTACTS.barbershop}
                            >
                                {t("barbershop.link")}
                            </LinkButton>
                        </Copy>
                        <Visual aria-hidden="true" />
                    </Layout>
                </Reveal>
            </Inner>

            <TornEdge color={COLORS.paper} position="bottom" />
        </BlueSection>
    );
};

export default BarbershopSection;

const BlueSection = styled(Section)`
    background-color: ${COLORS.blue};
`;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: 4rem;
    align-items: center;
    @media (max-width: 850px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

const Copy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
`;

const Visual = styled.div`
    height: 26rem;
    background: center / contain no-repeat url(${barbershop});
    filter: invert(1) brightness(2) contrast(0.9);
    opacity: 0.9;
    @media (max-width: 850px) {
        height: 14rem;
    }
`;
