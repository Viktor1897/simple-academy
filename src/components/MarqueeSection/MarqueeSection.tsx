import styled from "@emotion/styled";
import { COLORS } from "consts";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ITEMS = ["marquee.item1", "marquee.item2", "marquee.item3", "marquee.item4"];

/** how fast the strip travels, in CSS pixels per second */
const SPEED = 70;

const MarqueeSection = () => {
    const { t } = useTranslation();
    const line = ITEMS.map(item => t(item));

    const stripRef = useRef<HTMLDivElement>(null);
    const groupRef = useRef<HTMLDivElement>(null);
    /** how many times the item list is repeated inside one half of the track */
    const [repeats, setRepeats] = useState(1);
    const [groupWidth, setGroupWidth] = useState(0);
    /** bumped when something outside our control (webfonts) changes the widths */
    const [revision, setRevision] = useState(0);

    // The track holds two identical halves and slides by exactly one of them, so
    // the loop is seamless — but only while a half is wider than the strip.
    // Otherwise a gap opens up on wide screens, so repeat the list until it fills.
    useLayoutEffect(() => {
        const measure = () => {
            const strip = stripRef.current;
            const group = groupRef.current;
            if (!strip || !group) return;

            const unit = group.offsetWidth / repeats;
            if (!unit) return;

            const needed = Math.max(1, Math.ceil(strip.offsetWidth / unit));
            const total = unit * needed;
            // only touch state on a real change: a re-render mid-flight would
            // rewrite animation-duration and make the strip jump
            setRepeats(previous => (previous === needed ? previous : needed));
            setGroupWidth(previous => (previous === total ? previous : total));
        };

        measure();

        if (typeof ResizeObserver === "undefined") {
            window.addEventListener("resize", measure);
            return () => window.removeEventListener("resize", measure);
        }

        const observer = new ResizeObserver(measure);
        if (stripRef.current) observer.observe(stripRef.current);
        return () => observer.disconnect();
    }, [repeats, revision, line.join("|")]);

    // webfonts land after the first paint and change how wide the items are
    useEffect(() => {
        const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
        if (!fonts) return;
        fonts.ready.then(() => setRevision(previous => previous + 1));
    }, []);

    const half = Array.from({ length: repeats }).flatMap(() => line);
    const isMeasured = groupWidth > 0;
    const duration = isMeasured ? groupWidth / SPEED : 0;

    return (
        <Strip ref={stripRef}>
            {/* held still until measured, otherwise the first frames run at a
                placeholder speed and visibly snap once the real width lands */}
            <Track isMeasured={isMeasured} style={{ animationDuration: `${duration}s` }}>
                <Group ref={groupRef}>
                    {half.map((item, index) => (
                        <Item key={`a-${index}-${item}`}>
                            {item}
                            <Dot />
                        </Item>
                    ))}
                </Group>
                <Group aria-hidden="true">
                    {half.map((item, index) => (
                        <Item key={`b-${index}-${item}`}>
                            {item}
                            <Dot />
                        </Item>
                    ))}
                </Group>
            </Track>
        </Strip>
    );
};

export default MarqueeSection;

const Strip = styled.div`
    background: ${COLORS.coral};
    color: ${COLORS.paper};
    overflow: hidden;
    padding: 1.8rem 0;
`;

const Track = styled.div<{ isMeasured: boolean }>`
    display: flex;
    width: max-content;
    animation: marquee linear infinite;
    animation-play-state: ${props => (props.isMeasured ? "running" : "paused")};
    /*
     * No will-change here on purpose: Safari re-rasterises a will-change layer
     * this wide and flickers. The 3d transform in the keyframes is enough to
     * promote it, and hiding the back face stops the flash on repaint.
     */
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const Group = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`;

const Item = styled.span`
    display: inline-flex;
    align-items: center;
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
`;

const Dot = styled.span`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0;
    background: ${COLORS.paper};
    margin: 0 3rem;
`;
