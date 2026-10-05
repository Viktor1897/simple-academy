import { ComponentType, Fragment, ReactNode } from "react";

/**
 * Splits a translation string on [square brackets] and wraps those fragments in
 * the given component, so copy can carry its own highlight:
 * "Szkolenia dla tych, którzy [zaczynają od zera]".
 */
export const withHighlight = (
    text: string,
    Highlight: ComponentType<{ children: ReactNode }>,
): ReactNode => text
    .split(/(\[[^\]]*\])/)
    .filter(part => part !== "")
    .map((part, index) => (part.startsWith("[") && part.endsWith("]")
        ? <Highlight key={index}>{part.slice(1, -1)}</Highlight>
        : <Fragment key={index}>{part}</Fragment>));
