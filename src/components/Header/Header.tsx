import styled from "@emotion/styled";
import portrait from "assets/IMG_2362.png";
import { Button, Display, LinkButton, Mark, Text } from "components/StyledHtml/StyledHtml";
import TornEdge from "components/TornEdge/TornEdge";
import { COLORS, CONTACTS, GRAIN_ANIMATION, LINKS, PAPER_TEXTURE } from "consts";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { goTo } from "utils/goTo";
import { withHighlight } from "utils/highlight";

const HeroMark = ({ children }: { children: ReactNode }) => <Mark tone="coral">{children}</Mark>;

const Header = () => {
    const { t } = useTranslation();

    return (
        <HeroSection>
            {/* heading first for reading order; the grid puts the pane on the left */}
            <Copy>
                <Display color={COLORS.paper} marginBottom="3rem">
                    {withHighlight(t("hero.title"), HeroMark)}
                </Display>
                <Text fontSize="1.9rem" color="rgba(245,245,244,.84)" maxWidth="46rem" marginBottom="4rem">
                    {t("hero.subtitle")}
                </Text>
                <Actions>
                    <Button variant="black" onClick={() => goTo(LINKS.COURSES)}>{t("hero.primaryBtn")}</Button>
                    <LinkButton variant="outlinedLight" href={CONTACTS.phoneHref}>{CONTACTS.phone}</LinkButton>
                </Actions>
            </Copy>

            <LeftPane>
                {/* the cut-out stands across the seam, over both colours */}
                <Figure src={portrait} alt="" />
                <TornEdge color={COLORS.paper} position="right" />
            </LeftPane>

            <TornEdge color={COLORS.paper} position="bottom" />
        </HeroSection>
    );
};

export default Header;

const HeroSection = styled.header`
    position: relative;
    isolation: isolate;
    overflow: hidden;
    display: grid;
    /* the section splits vertically: paper on the left, blue on the right */
    grid-template-columns: minmax(0, 45fr) minmax(0, 55fr);
    /* taller pane lets the cut-out grow, so it fills the left half on wide screens */
    min-height: 84rem;
    background-color: ${COLORS.blue};
    background-image: ${PAPER_TEXTURE};
    background-size: 220px 220px;
    animation: ${GRAIN_ANIMATION};
    @media (max-width: 1000px) {
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
    }
`;

const LeftPane = styled.div`
    position: relative;
    order: 1;
    background-color: ${COLORS.paper};
    background-image: ${PAPER_TEXTURE};
    background-size: 220px 220px;
    animation: ${GRAIN_ANIMATION};
    @media (max-width: 1000px) {
        order: 2;
        min-height: 40rem;
    }
    @media (max-width: 600px) {
        min-height: 34rem;
    }
`;

/*
 * Sized off the pane's width so it keeps filling the left half on wide screens —
 * driving it off height alone left a large empty margin there. max-height keeps
 * the whole bust visible when the pane is tall and narrow instead.
 */
const Figure = styled.img`
    position: absolute;
    bottom: 0;
    right: -4%;
    width: 88%;
    height: auto;
    max-width: none;
    max-height: 104%;
    object-fit: contain;
    object-position: bottom center;
    z-index: 3;
    @media (max-width: 1000px) {
        right: auto;
        left: 50%;
        transform: translateX(-50%);
        width: auto;
        height: 100%;
        max-height: 100%;
    }
`;

const Copy = styled.div`
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    /* keeps the headline off the right edge of a wide monitor */
    max-width: 72rem;
    padding: 17rem 5rem 13rem 7rem;
    @media (max-width: 1000px) {
        order: 1;
        padding: 13rem 2rem 8rem;
    }
    @media (max-width: 600px) {
        padding: 12rem 2rem 7rem;
    }
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
`;
