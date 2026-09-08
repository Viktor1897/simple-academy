import styled from "@emotion/styled";
import { PAPER_TEXTURE, TORN_EDGE_HEIGHT } from "consts";

const TILE_WIDTH = 460;
const TILE_HEIGHT = TORN_EDGE_HEIGHT;
/** where the tear sits inside the tile — both ends must match so tiles line up */
const SEAM_Y = TILE_HEIGHT * 0.55;

/**
 * Draws one tile of a torn paper edge. The tile repeats horizontally at a fixed
 * width, so the tear keeps the same scale on a phone and on a wide monitor —
 * stretching one path across the viewport turns the tear into smooth hills.
 */
const buildTornTile = () => {
    let state = 20240830;
    const random = () => {
        state = (state * 1103515245 + 12345) % 2147483648;
        return state / 2147483648;
    };

    const steps = 46;
    const points: Array<[number, number]> = [];

    for (let step = 0; step <= steps; step += 1) {
        const x = (TILE_WIDTH / steps) * step;
        // ends are pinned so neighbouring tiles meet without a step
        if (step === 0 || step === steps) {
            points.push([x, SEAM_Y]);
            continue;
        }
        const progress = step / steps;
        // a slow wander carries the eye, the jitter gives it torn fibres
        const wander = Math.sin(progress * Math.PI * 2) * (TILE_HEIGHT * 0.1);
        const jitter = (random() - 0.5) * (TILE_HEIGHT * 0.55);
        const y = SEAM_Y + wander + jitter;
        points.push([x, Math.min(TILE_HEIGHT - 2, Math.max(2, y))]);
    }

    const tear = points
        .reverse()
        .map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`)
        .join("");

    return `M0,0 L${TILE_WIDTH},0 ${tear} Z`;
};

const MASK = `url("data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${TILE_WIDTH}" height="${TILE_HEIGHT}" viewBox="0 0 ${TILE_WIDTH} ${TILE_HEIGHT}"><path d="${buildTornTile()}" fill="#fff"/></svg>`,
)}")`;

type TornEdgeProps = {
    /** colour of the sheet tearing over the section — normally the page paper */
    color: string;
    /** which side of the section the seam sits on */
    position: "top" | "bottom";
};

/**
 * Ragged seam between two differently coloured sections. It paints the paper
 * colour *and* the shared grain, so the seam is indistinguishable from the
 * neighbouring section instead of reading as a flat light band.
 */
const TornEdge = ({ color, position }: TornEdgeProps) => (
    <Edge position={position} color={color} aria-hidden="true" />
);

export default TornEdge;

const Edge = styled.div<TornEdgeProps>`
    position: absolute;
    left: 0;
    right: 0;
    height: ${TILE_HEIGHT}px;
    z-index: 2;
    pointer-events: none;
    background-color: ${props => props.color};
    background-image: ${PAPER_TEXTURE};
    background-size: 220px 220px;
    top: ${props => (props.position === "top" ? "-1px" : "auto")};
    bottom: ${props => (props.position === "bottom" ? "-1px" : "auto")};
    transform: ${props => (props.position === "bottom" ? "scaleY(-1)" : "none")};
    -webkit-mask-image: ${MASK};
    mask-image: ${MASK};
    -webkit-mask-repeat: repeat-x;
    mask-repeat: repeat-x;
    -webkit-mask-size: ${TILE_WIDTH}px 100%;
    mask-size: ${TILE_WIDTH}px 100%;
`;
