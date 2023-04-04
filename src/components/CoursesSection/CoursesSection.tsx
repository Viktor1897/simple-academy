import styled from "@emotion/styled";
import { Button, ContentWrapper, H3, H4, List, Section, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

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
        <Section padding="60px 0 80px 0" backgroundColor={COLORS.bgDark}>
            <H3 marginBottom="40px">SZKOLIENIA</H3>
            <ContentWrapper alignItems="stretch">
                {courses.map((course) => <VerticalFlexContainer textAlign="left" key={course.title}>
                    <Paper>
                        {course.chip && <Chip>{course.chip}</Chip>}
                        <H4 color={COLORS.black} textAlign="left" marginBottom="30px">{course.title}</H4>
                        <List fontSize="28px">
                            {course.descriptionList.map((listItem) => <li key={listItem}>{listItem}</li>)}
                        </List>
                        <PriceContainer>
                            { course.price.old && <OldPrice>{course.price.old}</OldPrice>}
                            <CurrentPrice>{course.price.current}</CurrentPrice>
                        </PriceContainer>
                        <Button variant="contained">ZAPISAĆ SIĘ</Button>
                    </Paper>
                </VerticalFlexContainer>)}
            </ContentWrapper>
        </Section>
    );
};

export default CoursesSection;

const Chip = styled.div`
    border: 1px solid ${COLORS.green};
    border-radius: 40px;
    position: absolute;
    top: 16px;
    right: 24px;
    padding: 7px 17px;
    font-size: 15px;
    text-transform: uppercase;
    color: ${COLORS.green};
`;

const Paper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 50px 45px;
    position: relative;
    border-radius: 24px;
    background-color: ${COLORS.white};
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0 25px;
`;

const OldPrice = styled.span`
    font-size: 50px;
    font-weight: 500;
    text-decoration: line-through;
`;

const CurrentPrice = styled.span`
    font-size: 50px;
    font-weight: 500;
    color: ${COLORS.green};
`;