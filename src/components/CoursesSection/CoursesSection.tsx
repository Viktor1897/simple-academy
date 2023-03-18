import styled from "@emotion/styled";
import { Button, Chip, Grid, Paper, Typography } from "@mui/material";
import { MAX_CONTENT_WIDTH } from "consts";


const Section = styled.section`
    padding: 60px 0 80px 0;
    background-color: #262626;
`;

const courses = [
    //если вдруг firebase будет не будет создавать айдишники, то добавить uuid и генерить их самому чтобы было понятно на какой курс откликнулись.
    {
        title: "BARBER OD ZERA",
        chip: "Popularne",
        descriptionList: ["30 dni szkolienia", "Modele i narzędzia od nas", 
            "Grupy do 4 osób", "Międzynarodowe świadectwo ukończenia szkolienia", 
            "Możliwość dołoczyć się do ekipy SIMPLE Barbershop"],
        price: { old: "5000zl", current: "4000zl" }
    },
    {
        title: "BARBER OD ZERA (INDYWIDUALNIE)",
        chip: null,
        descriptionList: ["Harmonogram zajęć piersonalnie dla ciebie", "Modele i narzędzia od nas",
            "Międzynarodowe świadectwo ukończenia szkolienia", "Możliwość dołoczyć się do ekipy SIMPLE Barbershop"],
        price: { old: "7000zl", current: "6000zl" }
    }
];

const CoursesSection = () => {
    return (
        <Section>
            <Typography color="#FFFFFF" variant="h3" mb={5} textAlign="center">SZKOLIENIA</Typography>
            <Grid container direction="row" gap={4} maxWidth={MAX_CONTENT_WIDTH} width="100%" margin="0 auto">
                {courses.map((course) => <Grid item xs key={course.title}>
                    <Paper sx={{ p:"50px 45px", position: "relative", borderRadius: 3 }}>
                        {/* TODO: цвет success для этого компонента переопределить на соответсвующий дизайну. Или может быть для всего проекта. */}
                        {course.chip && <Chip label={course.chip} color="success" variant="outlined" sx={{ position: "absolute", top: "16px", right: "24px" }} />}
                        <Typography variant="h4">{course.title}</Typography>
                        <ul>
                            {course.descriptionList.map((listItem) => <li key={listItem}>{listItem}</li>)}
                        </ul>
                        <Grid container direction="column" alignItems="center">
                            { course.price.old && <Grid item>
                                <Typography sx={{ textDecoration: "line-through" }}>{course.price.old}</Typography>
                            </Grid>}
                            <Grid item>
                                <Typography color="#1CA944">{course.price.current}</Typography>
                            </Grid>
                            <Button variant="contained">ZAPISAĆ SIĘ</Button>
                        </Grid>
                    </Paper>
                </Grid>)}
            </Grid>
        </Section>
    );
};

export default CoursesSection;