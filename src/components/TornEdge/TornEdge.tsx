import styled from "@emotion/styled";
import { PAPER_TEXTURE, TORN_EDGE_HEIGHT } from "consts";

/** length of one repeat along the seam */
const TILE_RUN = 460;
/** how deep the teeth bite into the neighbouring colour */
const TILE_DEPTH = TORN_EDGE_HEIGHT;
/** where the tear sits inside the tile — both ends must match so tiles line up */
const SEAM = TILE_DEPTH * 0.55;

/**
 * Draws one tile of a torn paper edge. The tile repeats along the seam at a
 * fixed length, so the tear keeps the same scale on a phone and on a wide
 * monitor — stretching one path across the viewport turns it into smooth hills.
 *
 * `vertical` swaps the axes so the same tear can run down a column boundary.
 */
const buildTornTile = (vertical: boolean) => {
    let state = 20240830;
    const random = () => {
        state = (state * 1103515245 + 12345) % 2147483648;
        return state / 2147483648;
    };

    const steps = 46;
    const points: Array<[number, number]> = [];

    for (let step = 0; step <= steps; step += 1) {
        const along = (TILE_RUN / steps) * step;
        // ends are pinned so neighbouring tiles meet without a step
        if (step === 0 || step === steps) {
            points.push(vertical ? [SEAM, along] : [along, SEAM]);
            continue;
        }
        const progress = step / steps;
        // a slow wander carries the eye, the jitter gives it torn fibres
        const wander = Math.sin(progress * Math.PI * 2) * (TILE_DEPTH * 0.1);
        const jitter = (random() - 0.5) * (TILE_DEPTH * 0.55);
        const depth = Math.min(TILE_DEPTH - 2, Math.max(2, SEAM + wander + jitter));
        points.push(vertical ? [depth, along] : [along, depth]);
    }

    const tear = points
        .reverse()
        .map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`)
        .join("");

    // the filled half is the sheet that tears over its neighbour
    return vertical
        ? `M0,0 L0,${TILE_RUN} ${tear} Z`
        : `M0,0 L${TILE_RUN},0 ${tear} Z`;
};

const buildMask = (vertical: boolean) => {
    const width = vertical ? TILE_DEPTH : TILE_RUN;
    const height = vertical ? TILE_RUN : TILE_DEPTH;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><path d="${buildTornTile(vertical)}" fill="#fff"/></svg>`,
    )}")`;
};

const MASK_HORIZONTAL = buildMask(false);
const MASK_VERTICAL = buildMask(true);

type Position = "top" | "bottom" | "left" | "right";

type TornEdgeProps = {
    /** colour of the sheet tearing over the neighbour — normally the page paper */
    color: string;
    /** which side of the parent the seam sits on */
    position: Position;
};

const isVertical = (position: Position) => position === "left" || position === "right";

/**
 * Ragged seam between two differently coloured areas. It paints the paper
 * colour *and* the shared grain, so the seam is indistinguishable from the
 * neighbouring surface instead of reading as a flat light band.
 */
const TornEdge = ({ color, position }: TornEdgeProps) => (
    <Edge position={position} color={color} aria-hidden="true" />
);

export default TornEdge;

const Edge = styled.div<TornEdgeProps>`
    position: absolute;
    z-index: 2;
    pointer-events: none;
    background-color: ${props => props.color};
    background-image: ${PAPER_TEXTURE};
    background-size: 220px 220px;

    ${props => (isVertical(props.position)
        ? `
    top: 0;
    bottom: 0;
    width: ${TILE_DEPTH}px;
    left: ${props.position === "left" ? "-1px" : "auto"};
    right: ${props.position === "right" ? `-${TILE_DEPTH - 1}px` : "auto"};
    transform: ${props.position === "left" ? "scaleX(-1)" : "none"};
    -webkit-mask-image: ${MASK_VERTICAL};
    mask-image: ${MASK_VERTICAL};
    -webkit-mask-repeat: repeat-y;
    mask-repeat: repeat-y;
    -webkit-mask-size: 100% ${TILE_RUN}px;
    mask-size: 100% ${TILE_RUN}px;
`
        : `
    left: 0;
    right: 0;
    height: ${TILE_DEPTH}px;
    top: ${props.position === "top" ? "-1px" : "auto"};
    bottom: ${props.position === "bottom" ? "-1px" : "auto"};
    transform: ${props.position === "bottom" ? "scaleY(-1)" : "none"};
    -webkit-mask-image: ${MASK_HORIZONTAL};
    mask-image: ${MASK_HORIZONTAL};
    -webkit-mask-repeat: repeat-x;
    mask-repeat: repeat-x;
    -webkit-mask-size: ${TILE_RUN}px 100%;
    mask-size: ${TILE_RUN}px 100%;
`)}
`;
