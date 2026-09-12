import styled from "@emotion/styled";
import { COLORS } from "consts";
import { Children, ReactNode, useCallback, useEffect, useRef, useState } from "react";

type SliderProps = {
    children: ReactNode;
    /** accessible labels for the arrows */
    prevLabel: string;
    nextLabel: string;
    /** slides shown side by side on a wide screen @default 3 */
    perView?: number;
    gap?: string;
};

/**
 * Scroll-snap slider: native touch swiping and keyboard scrolling come for
 * free, the arrows and dots just drive scrollLeft. Controls hide themselves
 * when every slide already fits, so a short list never gets dead arrows.
 */
const Slider = ({ children, prevLabel, nextLabel, perView = 3, gap = "3rem" }: SliderProps) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const slides = Children.toArray(children);

    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollBack, setCanScrollBack] = useState(false);
    const [canScrollOn, setCanScrollOn] = useState(false);

    const sync = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        setCanScrollBack(track.scrollLeft > 4);
        setCanScrollOn(track.scrollLeft < maxScroll - 4);

        const slide = track.firstElementChild as HTMLElement | null;
        if (!slide) return;
        const step = slide.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
        setActiveIndex(step ? Math.round(track.scrollLeft / step) : 0);
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        sync();
        track.addEventListener("scroll", sync, { passive: true });

        // webfonts reflow the slides and change scrollWidth without resizing the
        // track, which would otherwise leave the arrows stuck on a stale state
        const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
        fonts?.ready.then(sync);

        if (typeof ResizeObserver === "undefined") {
            window.addEventListener("resize", sync);
            return () => {
                track.removeEventListener("scroll", sync);
                window.removeEventListener("resize", sync);
            };
        }

        // watch the slides too — the track keeps its size while content reflows
        const observer = new ResizeObserver(sync);
        observer.observe(track);
        Array.from(track.children).forEach(slide => observer.observe(slide));
        return () => {
            track.removeEventListener("scroll", sync);
            observer.disconnect();
        };
    }, [sync, slides.length]);

    const scrollToIndex = (index: number) => {
        const track = trackRef.current;
        const slide = track?.firstElementChild as HTMLElement | null;
        if (!track || !slide) return;
        const step = slide.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
        track.scrollTo({ left: step * index, behavior: "smooth" });
    };

    const nudge = (direction: -1 | 1) => scrollToIndex(Math.max(0, activeIndex + direction));

    const hasControls = canScrollBack || canScrollOn;

    return (
        <Wrapper>
            <Track ref={trackRef} gap={gap}>
                {slides.map((slide, index) => (
                    <Slide key={index} perView={perView} gap={gap}>
                        {slide}
                    </Slide>
                ))}
            </Track>

            {hasControls && (
                <Controls>
                    <Dots>
                        {slides.map((_, index) => (
                            <Dot
                                key={index}
                                type="button"
                                isActive={index === activeIndex}
                                aria-label={`${index + 1}`}
                                aria-current={index === activeIndex}
                                onClick={() => scrollToIndex(index)}
                            />
                        ))}
                    </Dots>

                    <Arrows>
                        <Arrow
                            type="button"
                            aria-label={prevLabel}
                            disabled={!canScrollBack}
                            onClick={() => nudge(-1)}
                        >
                            <Chevron direction="left" />
                        </Arrow>
                        <Arrow
                            type="button"
                            aria-label={nextLabel}
                            disabled={!canScrollOn}
                            onClick={() => nudge(1)}
                        >
                            <Chevron direction="right" />
                        </Arrow>
                    </Arrows>
                </Controls>
            )}
        </Wrapper>
    );
};

export default Slider;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* the track carries its own vertical padding now, so this can be tighter */
    gap: 1.5rem;
`;

const Track = styled.div<{ gap: string }>`
    display: flex;
    column-gap: ${props => props.gap};
    overflow-x: auto;
    /*
     * Explicitly hidden: with only overflow-x set, the other axis computes to
     * auto, so the tilted frames' few pixels of overflow turned the track into
     * a vertical scroller that swallowed the page's wheel scroll.
     */
    overflow-y: hidden;
    /* ...which means the tilt and the frame shadow need room inside the box */
    padding: 2rem 0 3rem;
    /* don't chain a horizontal overscroll to the page either */
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Slide = styled.div<{ perView: number; gap: string }>`
    scroll-snap-align: start;
    flex: 0 0 calc((100% - (${props => props.perView - 1} * ${props => props.gap})) / ${props => props.perView});
    @media (max-width: 1100px) {
        flex-basis: calc((100% - ${props => props.gap}) / 2);
    }
    @media (max-width: 760px) {
        flex-basis: 100%;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    /* a long dot row must wrap instead of widening the page */
    flex-wrap: wrap;
    @media (max-width: 760px) {
        gap: 1.5rem;
    }
`;

const Dots = styled.div`
    display: flex;
    gap: 0.8rem;
    /* one dot per slide, so this row has to give way on a phone */
    flex: 1 1 auto;
    flex-wrap: wrap;
    min-width: 0;
`;

const Dot = styled.button<{ isActive: boolean }>`
    width: ${props => (props.isActive ? "3.2rem" : "1.2rem")};
    height: 1.2rem;
    padding: 0;
    border: none;
    cursor: pointer;
    background: ${props => (props.isActive ? COLORS.blue : COLORS.line)};
    transition: width .3s ease, background-color .3s ease;
    &:hover {
        background: ${props => (props.isActive ? COLORS.blue : COLORS.textMuted)};
    }
`;

const Arrows = styled.div`
    display: flex;
    gap: 1rem;
`;

const Arrow = styled.button`
    width: 5.2rem;
    height: 5.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: 1px solid ${COLORS.ink};
    color: ${COLORS.ink};
    transition: background-color .25s ease, color .25s ease, border-color .25s ease, opacity .25s ease;
    &:hover:not(:disabled) {
        background: ${COLORS.ink};
        color: ${COLORS.paper};
    }
    &:disabled {
        opacity: 0.25;
        cursor: not-allowed;
    }
`;

const Chevron = styled.span<{ direction: "left" | "right" }>`
    width: 1.1rem;
    height: 1.1rem;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(${props => (props.direction === "right" ? "45deg" : "-135deg")});
    margin-left: ${props => (props.direction === "right" ? "-0.3rem" : "0.3rem")};
`;
