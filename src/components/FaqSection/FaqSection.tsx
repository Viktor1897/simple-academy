import styled from "@emotion/styled";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import { Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const QUESTIONS = [
    { question: "faq.q1", answer: "faq.a1" },
    { question: "faq.q2", answer: "faq.a2" },
    { question: "faq.q3", answer: "faq.a3" },
    { question: "faq.q4", answer: "faq.a4" },
];

const FaqSection = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section id={LINKS.FAQ} padding="4rem 0 10rem">
            <Inner>
                <Reveal>
                    <SectionHead label={t("faq.eyebrow")} title={t("faq.title")} />
                </Reveal>

                <Reveal delay={100}>
                    <Items>
                        {QUESTIONS.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <Item key={item.question} isOpen={isOpen}>
                                    <Question
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                    >
                                        <QuestionText>{t(item.question)}</QuestionText>
                                        <Toggle isOpen={isOpen} aria-hidden="true" />
                                    </Question>
                                    <AnswerBox isOpen={isOpen}>
                                        <Text fontSize="1.8rem" color={COLORS.textGray} maxWidth="80rem">
                                            {t(item.answer)}
                                        </Text>
                                    </AnswerBox>
                                </Item>
                            );
                        })}
                    </Items>
                </Reveal>
            </Inner>
        </Section>
    );
};

export default FaqSection;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    /* plain ruled rows rather than boxes */
    border-top: 1px solid ${COLORS.line};
`;

const Item = styled.div<{ isOpen: boolean }>`
    border-bottom: 1px solid ${COLORS.line};
`;

const Question = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 3rem 0;
`;

const QuestionText = styled.span`
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 1.25;
    color: ${COLORS.ink};
`;

const Toggle = styled.span<{ isOpen: boolean }>`
    position: relative;
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 0;
    background: ${props => (props.isOpen ? COLORS.blue : "transparent")};
    border: 1px solid ${props => (props.isOpen ? COLORS.blue : COLORS.line)};
    transition: background-color .3s ease, border-color .3s ease;
    /* the box stays square — only the plus turns into a cross */
    &::before, &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.5rem;
        height: 2px;
        background: ${props => (props.isOpen ? COLORS.paper : COLORS.ink)};
        transition: transform .3s ease, background-color .3s ease;
        transform: translate(-50%, -50%) rotate(${props => (props.isOpen ? "45deg" : "0deg")});
    }
    &::after {
        transform: translate(-50%, -50%) rotate(${props => (props.isOpen ? "-45deg" : "90deg")});
    }
`;

const AnswerBox = styled.div<{ isOpen: boolean }>`
    display: grid;
    grid-template-rows: ${props => (props.isOpen ? "1fr" : "0fr")};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    padding-bottom: ${props => (props.isOpen ? "3rem" : "0")};
    transition: grid-template-rows .35s ease, opacity .35s ease, padding-bottom .35s ease;
    & > * {
        overflow: hidden;
    }
`;
