import styled from "@emotion/styled";
import { COLORS } from "consts";

type InstagramReelProps = {
    /** the code between /reel/ and the next slash in the share link */
    shortcode: string;
    /** accessible name for the frame */
    title: string;
    /** shown under the frame for anyone whose browser blocks the embed */
    linkLabel: string;
    className?: string;
};

/*
 * Instagram's own embed endpoint: a plain iframe, no script and no token, but
 * it only serves public posts and it brings Instagram's white card along with
 * it. Without their embed.js the frame cannot report its height back, so the
 * box is sized for a 400px-wide reel; a narrower screen loses a few pixels of
 * the card's footer rather than growing a scrollbar.
 */
const InstagramReel = ({ shortcode, title, linkLabel, className }: InstagramReelProps) => {
    const permalink = `https://www.instagram.com/reel/${shortcode}/`;

    return (
        <Wrapper className={className}>
            <Shell>
                <Frame
                    title={title}
                    src={`${permalink}embed/`}
                    loading="lazy"
                    scrolling="no"
                    allow="encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                />
            </Shell>
            <Fallback target="_blank" rel="noreferrer" href={permalink}>
                {linkLabel}
            </Fallback>
        </Wrapper>
    );
};

export default InstagramReel;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
`;

/*
 * The card's height is a ratio plus a constant, not a plain ratio: Instagram
 * fits the reel into a 4:5 box that scales with the width, but the chrome
 * around it keeps the same pixel height at any size. So the media gets the
 * aspect box, the header gets fixed padding, and everything below the video —
 * the action bar and the comment row, both inert inside an embed — is cropped.
 */
const Shell = styled.div`
    position: relative;
    width: min(100%, 375px);
    aspect-ratio: 375 / 520;
    box-sizing: content-box;
    padding-top: 58px;
    overflow: hidden;
`;

const Frame = styled.iframe`
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    /* deliberately taller than the shell — the overflow is the cropped chrome */
    height: calc(100% + 200px);
    border: none;
    background: ${COLORS.white};
`;

const Fallback = styled.a`
    color: inherit;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid currentColor;
    opacity: 0.55;
    transition: opacity .25s ease;
    &:hover {
        opacity: 1;
    }
`;
