import styled from "@emotion/styled";
import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
    children: ReactNode;
    /** delay in ms before the element fades in once it enters the viewport */
    delay?: number;
    className?: string;
};

/**
 * Fades and lifts its children into place the first time they scroll into view.
 */
const Reveal = ({ children, delay = 0, className }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Wrapper ref={ref} className={className} isVisible={isVisible} delay={delay}>
            {children}
        </Wrapper>
    );
};

export default Reveal;

const Wrapper = styled.div<{ isVisible: boolean; delay: number }>`
    width: 100%;
    opacity: ${props => (props.isVisible ? 1 : 0)};
    transform: translateY(${props => (props.isVisible ? "0" : "2.8rem")});
    transition: opacity .7s cubic-bezier(.16,.84,.44,1) ${props => props.delay}ms,
                transform .7s cubic-bezier(.16,.84,.44,1) ${props => props.delay}ms;
`;
