import styled from "@emotion/styled";
import { Button, ContentWrapperResponsive, H3, H4, List, Paper, Section, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS } from "consts";
import { useTranslation } from "react-i18next";
import { goTo } from "utils/goTo";

const courses = [
    //если вдруг firebase будет не будет создавать айдишники, то добавить uuid и генерить их самому чтобы было понятно на какой курс откликнулись.
    {
        title: "course1.title",
        chip: "course1.chip",
        descriptionList: ["course1.option1", "course1.option2", 
            "course1.option3", "course1.option4", 
            "course1.option5"],
        price: { old: "course1.oldPrice", current: "course1.currentPrice" }
    },
    {
        title: "course2.title",
        chip: null,
        descriptionList: ["course2.option1", "course2.option2",
            "course2.option3", "course2.option4"],
        price: { old: "course2.oldPrice", current: "course2.currentPrice" }
    }
];

const CoursesSection = () => {
    const { t } = useTranslation();

    return (
        <Section id={LINKS.COURSES} padding="6rem 0 8rem 0" backgroundColor={COLORS.bgDark}>
            <H3 marginBottom="4rem" color={COLORS.white}>{t("courses.title")}</H3>
            <ContentWrapperResponsive alignItems="stretch">
                {courses.map((course) => <VerticalFlexContainer textAlign="left" key={course.title}>
                    <Paper>
                        {course.chip && <Chip>{t(course.chip)}</Chip>}
                        <H4 textAlign="left" marginBottom="3rem">{t(course.title)}</H4>
                        <List fontSize="2.8rem">
                            {course.descriptionList.map((listItem) => <li key={listItem}>{t(listItem)}</li>)}
                        </List>
                        <PriceContainer>
                            { course.price.old && <OldPrice>{t(course.price.old)}</OldPrice>}
                            <CurrentPrice>{t(course.price.current)}</CurrentPrice>
                        </PriceContainer>
                        <Button onClick={() => goTo(LINKS.CONTACT)}>{t("courses.signUpButton")}</Button>
                    </Paper>
                </VerticalFlexContainer>)}
            </ContentWrapperResponsive>
        </Section>
    );
};

export default CoursesSection;

const Chip = styled.div`
    border: 1px solid ${COLORS.green};
    border-radius: 4rem;
    position: absolute;
    top: 1.6rem;
    right: 2.4rem;
    padding: 0.7rem 1.7rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${COLORS.green};
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0 2.5rem;
`;

const OldPrice = styled.span`
    font-size: 5rem;
    font-weight: 500;
    text-decoration: line-through;
`;

const CurrentPrice = styled.span`
    font-size: 5rem;
    font-weight: 500;
    color: ${COLORS.green};
`;