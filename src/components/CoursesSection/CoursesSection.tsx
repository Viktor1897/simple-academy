import styled from "@emotion/styled";
import { Button, ContentWrapperResponsive, H3, H4, List, Paper, Section, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS } from "consts";

const courses = [
    //если вдруг firebase будет не будет создавать айдишники, то добавить uuid и генерить их самому чтобы было понятно на какой курс откликнулись.
    {
        title: "BARBER OD ZERA",
        chip: "Popularne",
        descriptionList: ["30 dni szkolienia", "Modele i narzędzia od nas", 
            "Grupy do 4 osób", "Międzynarodowe świadectwo ukończenia szkolienia", 
            "Możliwość dołoczyć się do ekipy SIMPLE Barbershop"],
        price: { old: "5000 zl", current: "4000 zl" }
    },
    {
        title: "BARBER OD ZERA (INDYWIDUALNIE)",
        chip: null,
        descriptionList: ["Harmonogram zajęć piersonalnie dla ciebie", "Modele i narzędzia od nas",
            "Międzynarodowe świadectwo ukończenia szkolienia", "Możliwość dołoczyć się do ekipy SIMPLE Barbershop"],
        price: { old: "7000 zl", current: "6000 zl" }
    }
];

const CoursesSection = () => {
    return (
        <Section id={LINKS.COURSES} padding="6rem 0 8rem 0" backgroundColor={COLORS.bgDark}>
            <H3 marginBottom="4rem" color={COLORS.white}>SZKOLIENIA</H3>
            <ContentWrapperResponsive alignItems="stretch">
                {courses.map((course) => <VerticalFlexContainer textAlign="left" key={course.title}>
                    <Paper>
                        {course.chip && <Chip>{course.chip}</Chip>}
                        <H4 textAlign="left" marginBottom="3rem">{course.title}</H4>
                        <List fontSize="2.8rem">
                            {course.descriptionList.map((listItem) => <li key={listItem}>{listItem}</li>)}
                        </List>
                        <PriceContainer>
                            { course.price.old && <OldPrice>{course.price.old}</OldPrice>}
                            <CurrentPrice>{course.price.current}</CurrentPrice>
                        </PriceContainer>
                        <Button variant="contained">ZAPISAĆ SIĘ</Button>
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