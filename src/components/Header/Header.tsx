import styled from "@emotion/styled";
import headerBg from "assets/header_bg.jpg";
import { Button, Display, LinkButton, Mark, Polaroid, Text } from "components/StyledHtml/StyledHtml";
import TornEdge from "components/TornEdge/TornEdge";
import { COLORS, CONTACTS, LINKS, MAX_CONTENT_WIDTH, PAPER_TEXTURE } from "consts";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { goTo } from "utils/goTo";
import { withHighlight } from "utils/highlight";

const STATS = [
    { value: "2016", label: "hero.stat.since" },
    { value: "30", label: "hero.stat.days" },
    { value: "4", label: "hero.stat.group" },
];

const HeroMark = ({ children }: { children: ReactNode }) => <Mark tone="coral">{children}</Mark>;

const Header = () => {
    const { t } = useTranslation();

    return (
        <HeroSection>
            <Inner>
                <Copy>
                    <Display color={COLORS.paper} marginBottom="3rem">
                        {withHighlight(t("hero.title"), HeroMark)}
                    </Display>
                    <Text fontSize="1.9rem" color="rgba(245,245,244,.82)" maxWidth="52rem" marginBottom="4rem">
                        {t("hero.subtitle")}
                    </Text>
                    <Actions>
                        <Button variant="black" onClick={() => goTo(LINKS.COURSES)}>{t("hero.primaryBtn")}</Button>
                        <LinkButton variant="outlinedLight" href={CONTACTS.phoneHref}>{CONTACTS.phone}</LinkButton>
                    </Actions>
                    <Stats>
                        {STATS.map(({ value, label }) => (
                            <Stat key={label}>
                                <StatValue>{value}</StatValue>
                                <StatLabel>{t(label)}</StatLabel>
                            </Stat>
                        ))}
                    </Stats>
                </Copy>

                <Visual>
                    <PhotoFrame rotate="-2deg">
                        <Photo role="img" aria-label={t("hero.subtitle")} />
                        <Caption>{t("hero.badge")}</Caption>
                    </PhotoFrame>
                </Visual>
            </Inner>
            <TornEdge color={COLORS.paper} position="bottom" />
        </HeroSection>
    );
};

export default Header;

const HeroSection = styled.header`
    position: relative;
    isolation: isolate;
    display: flex;
    justify-content: center;
    background-color: ${COLORS.blue};
    background-image: ${PAPER_TEXTURE};
    background-size: 220px 220px;
    padding: 17rem 4rem 12rem;
    @media (max-width: 600px) {
        padding: 13rem 2rem 10rem;
    }
`;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 6rem;
    align-items: center;
    @media (max-width: 950px) {
        grid-template-columns: minmax(0, 1fr);
        gap: 5rem;
    }
`;

const Copy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
    margin-bottom: 5rem;
`;

const Stats = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4.5rem;
    padding-top: 3.5rem;
    border-top: 1px solid rgba(245, 245, 244, .3);
    width: 100%;
`;

const Stat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

const StatValue = styled.span`
    font-size: 4.2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1;
    color: ${COLORS.paper};
`;

const StatLabel = styled.span`
    font-size: 1.5rem;
    color: rgba(245, 245, 244, .72);
    max-width: 18rem;
    line-height: 1.3;
`;

const Visual = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const PhotoFrame = styled(Polaroid)`
    width: 100%;
    max-width: 46rem;
`;

const Photo = styled.div`
    width: 100%;
    aspect-ratio: 4 / 4.2;
    background: center 22% / cover no-repeat url(${headerBg});
    @media (max-width: 950px) {
        aspect-ratio: 16 / 11;
    }
`;

const Caption = styled.p`
    padding: 2rem 1rem 1.2rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${COLORS.ink};
`;
