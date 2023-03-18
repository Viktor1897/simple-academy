import styled from "@emotion/styled";
import { Box, Grid, Paper, styled as MuiStyled,Typography } from "@mui/material";
import { MAX_CONTENT_WIDTH } from "consts";


const Section = styled.section`
    padding: 60px 0 100px 0;
    background-color: #EBEBEB;
`;

const Ul = styled.ul`
    margin-bottom: 95px;
`;

const Li = styled.li`
`;


const PaperWithTriangle = MuiStyled(Paper)({
    padding: "20px",
    borderRadius: "20px",
    position: "relative",
    "&::before": {
        content:"''",
        position: "absolute",
        borderTop: "18px solid transparent",
        borderBottom: "18px solid transparent",
        borderRight: "18px solid #FFFFFF",
        left: "-18px",
        bottom: "40px",
    },
});

const TutorsSection = () => {
    return (
        <Section>
            <Typography variant="h3" mb={5} textAlign="center">SZKOLIENIOWCY</Typography>
            <Box maxWidth={MAX_CONTENT_WIDTH} width="100%" margin="0 auto">
                <Typography variant="h4" mb={1.5} textAlign="left">ANTON ISAKOU</Typography>
                <Grid container direction="row" gap={3.75}>
                    <Grid xs={5} item sx={{ backgroundColor: "#FFFFFF", borderRadius: 3.5, height: "667px"}}>
                Здесь будет картинка
                    </Grid>
                    <Grid xs>
                        <Typography variant="h5" mb={4}>
                            Mam imię Anton, jestem jednym z pierwszych barberów w mieście Mińsk (Białoruś). Barber i szkolieniwiec od 2016 roku.
                        </Typography>
                        <Ul>
                            <Li>Obciąłem więcej niż 15 000 mężczyzn</Li>
                            <Li>Mam 6 lat doświadczenia w branży</Li>
                            <Li>Stworzyłem effektywną technologję szkolienia barberskiego “Barber od Zera”</Li>
                            <Li>Właściciel sieci  salonów SIMPLE Barbershop i SIMPLE Academy</Li>
                            <Li>Wszyscy moji studenci pracują w branży i zarabiają od 5000 zł</Li>
                        </Ul>
                        <PaperWithTriangle elevation={0}>
                            Zależy mi na tym, aby moje kursy były skuteczne w każdym formacie i dla każdego: 
                            początkujących i doświadczonych studentów. Podczas kursów analizujemy nie tylko 
                            teoretyczne i praktyczne podstawy strzyżenia, golenia i brody, ale także psychologię 
                            mężczyzny i usługi. Dużo mówię o psychologii barberów i zasadach rozwoju barbera.
                        </PaperWithTriangle>
                    </Grid>
                </Grid>
            </Box>
        </Section>
    );
};

export default TutorsSection;