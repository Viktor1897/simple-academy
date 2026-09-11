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
    /*
     * Tablet keeps the split instead of stacking the photo under the copy —
     * the stacked version read as a separate block. The copy just gets more
     * of the width.
     */
    @media (max-width: 1000px) {
        grid-template-columns: minmax(0, 40fr) minmax(0, 60fr);
        min-height: 64rem;
    }
    /* phones: the photo goes, the hero is just the blue block with the copy */
    @media (max-width: 700px) {
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
    @media (max-width: 700px) {
        display: none;
    }
`;

/*
 * Sized off the pane's height and pinned to the seam. When the pane gets narrow
 * the figure keeps its full height and the far shoulder simply runs off the
 * left edge of the screen — sizing it off the pane's width instead made it
 * shrink and float with empty paper above it.
 */
const Figure = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: auto;
    max-width: none;
    z-index: 3;
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
        padding: 14rem 3rem 11rem 4.5rem;
    }
    @media (max-width: 700px) {
        max-width: none;
        /* bottom room so the buttons don't sit on the torn edge */
        padding: 12rem 2rem 10rem;
    }
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
`;
