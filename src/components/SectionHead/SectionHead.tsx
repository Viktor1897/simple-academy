import styled from "@emotion/styled";
import { H2, Mark, SectionLabel, Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";
import { ReactNode } from "react";
import { withHighlight } from "utils/highlight";

type SectionHeadProps = {
    /** coral strap above the heading */
    label?: string;
    /** heading copy; wrap a phrase in [brackets] to paint a highlight behind it */
    title: string;
    description?: string;
    /**
     * @default "light"
     */
    tone?: "light" | "blue" | "dark";
    /**
     * @default "center"
     */
    align?: "center" | "left";
    children?: ReactNode;
};

const BlueMark = ({ children }: { children: ReactNode }) => <Mark tone="coral">{children}</Mark>;
const LightMark = ({ children }: { children: ReactNode }) => <Mark tone="blue">{children}</Mark>;

const SectionHead = ({ label, title, description, tone = "light", align = "center", children }: SectionHeadProps) => {
    const onColour = tone !== "light";

    return (
        <Head align={align}>
            {label && <SectionLabel>{label}</SectionLabel>}
            <H2
                textAlign={align}
                color={onColour ? COLORS.paper : COLORS.ink}
                maxWidth="88rem"
            >
                {withHighlight(title, onColour ? BlueMark : LightMark)}
            </H2>
            {description && (
                <Text
                    fontSize="1.8rem"
                    textAlign={align}
                    maxWidth="60rem"
                    color={onColour ? "rgba(245,245,244,.78)" : COLORS.textGray}
                >
                    {description}
                </Text>
            )}
            {children}
        </Head>
    );
};

export default SectionHead;

const Head = styled.div<{ align: "center" | "left" }>`
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.align === "center" ? "center" : "flex-start")};
    gap: 2.2rem;
    width: 100%;
    /* keeps the centred stack optically centred, headings included */
    & > h2, & > p {
        margin-left: ${props => (props.align === "center" ? "auto" : "0")};
        margin-right: ${props => (props.align === "center" ? "auto" : "0")};
    }
`;
