import styled from "@emotion/styled";
import Reveal from "components/Reveal/Reveal";
import SectionHead from "components/SectionHead/SectionHead";
import Slider from "components/Slider/Slider";
import { Button, List, Section, Tag, Text } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS, MAX_CONTENT_WIDTH } from "consts";
import { useTranslation } from "react-i18next";
import { goTo } from "utils/goTo";

type Course = {
    number: string;
    title: string;
    subtitle: string;
    chip: string | null;
    descriptionList: string[];
    price: { old: string | null; current: string };
    featured: boolean;
};

const courses: Course[] = [
    {
        number: "01",
        title: "course1.title",
        subtitle: "course1.subtitle",
        chip: "course1.chip",
        descriptionList: [
            "course1.option1",
            "course1.option2",
            "course1.option3",
            "course1.option4",
            "course1.option5",
        ],
        price: { old: "course1.oldPrice", current: "course1.currentPrice" },
        featured: true,
    },
    {
        number: "02",
        title: "course2.title",
        subtitle: "course2.subtitle",
        chip: null,
        descriptionList: [
            "course2.option1",
            "course2.option2",
            "course2.option3",
            "course2.option4",
        ],
        price: { old: "course2.oldPrice", current: "course2.currentPrice" },
        featured: false,
    },
    {
        // TODO: placeholder course — replace every course3.* string in src/i18n.ts
        // with the real programme, and add course3.oldPrice if it is discounted.
        number: "03",
        title: "course3.title",
        subtitle: "course3.subtitle",
        chip: null,
        descriptionList: [
            "course3.option1",
            "course3.option2",
            "course3.option3",
            "course3.option4",
        ],
        price: { old: null, current: "course3.currentPrice" },
        featured: false,
    },
];

const CoursesSection = () => {
    const { t } = useTranslation();

    return (
        <Section id={LINKS.COURSES} padding="11rem 0 11rem">
            <Inner>
                <Reveal>
                    <SectionHead
                        label={t("courses.eyebrow")}
                        title={t("courses.title")}
                        description={t("courses.description")}
                    />
                </Reveal>

                <Reveal delay={120}>
                    <Slider
                        perView={3}
                        gap="3rem"
                        prevLabel={t("courses.slider.prev")}
                        nextLabel={t("courses.slider.next")}
                    >
                        {courses.map(course => (
                            // no boxes — each course is a column ruled off at the top
                            <Course key={course.title} isFeatured={course.featured}>
                                <CardTop>
                                    <BlockLabel>{`${t("courses.block")} ${course.number}`}</BlockLabel>
                                    {course.chip && (
                                        <Tag background={COLORS.coral} color={COLORS.paper}>
                                            {t(course.chip)}
                                        </Tag>
                                    )}
                                </CardTop>

                                <CourseTitle>{t(course.title)}</CourseTitle>
                                <Text fontSize="1.7rem" marginBottom="3rem" color={COLORS.textGray}>
                                    {t(course.subtitle)}
                                </Text>

                                <List fontSize="1.7rem">
                                    {course.descriptionList.map(listItem => (
                                        <li key={listItem}>{t(listItem)}</li>
                                    ))}
                                </List>

                                <CardBottom>
                                    <PriceRow>
                                        {course.price.old && <OldPrice>{t(course.price.old)}</OldPrice>}
                                        <CurrentPrice>{t(course.price.current)}</CurrentPrice>
                                    </PriceRow>
                                    <Button
                                        variant={course.featured ? "blue" : "black"}
                                        width="100%"
                                        onClick={() => goTo(LINKS.CONTACT)}
                                    >
                                        {t("courses.signUpButton")}
                                    </Button>
                                </CardBottom>
                            </Course>
                        ))}
                    </Slider>
                </Reveal>
            </Inner>
        </Section>
    );
};

export default CoursesSection;

const Inner = styled.div`
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Course = styled.div<{ isFeatured: boolean }>`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 2.6rem;
    border-top: 4px solid ${props => (props.isFeatured ? COLORS.coral : COLORS.ink)};
`;

const BlockLabel = styled.span`
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${COLORS.textGray};
`;

const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 2rem;
    min-height: 3.4rem;
`;

const CourseTitle = styled.h3`
    font-size: clamp(2.4rem, 2.6vw, 3.2rem);
    font-weight: 700;
    line-height: 1.12;
    text-transform: uppercase;
    margin-bottom: 1.4rem;
`;

const CardBottom = styled.div`
    margin-top: auto;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

const PriceRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 1.6rem;
    flex-wrap: wrap;
`;

const OldPrice = styled.span`
    font-size: 2.2rem;
    font-weight: 500;
    text-decoration: line-through;
    color: ${COLORS.textMuted};
`;

const CurrentPrice = styled.span`
    font-size: 3.6rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: ${COLORS.blue};
`;
