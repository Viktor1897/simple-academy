import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { H3 } from "components/StyledHtml/StyledHtml";
import { COLORS, MAX_CONTENT_WIDTH } from "consts";

const Section = styled.section`
    padding: 60px 0 100px 0;
`;

const AboutUsSection = () => {
    return (
        <Section>
            <H3 color={COLORS.black} marginBottom="45px">O NAS</H3>
            <Grid container direction="row" maxWidth={MAX_CONTENT_WIDTH} width="100%" margin="0 auto">
                <Grid xs={6}>
                    <Typography>
                    SIMPLE Academy — to specjalistyczna akademia barberska w Poznaniu z autorską metodyką nauczania. My, pierwsze pokolenie barberów, jesteśmy w branży od 2016 roku, kiedy wszystko dopiero się zaczynało. 
                    </Typography>
                    <br/>
                    <Typography>Do 2019 roku mieliśmy już doświadczenie w nauczaniu, ponieważ w tym czasie ludzie często prosili o ich nauczanie, dlatego postanowiliśmy stworzyć centrum edukacyjne, w którym każdy może w krótkim czasie nauczyć się nowego zawodu i zacząć zarabiać w rozwijającej się branży. </Typography>
                    <br/>
                    <Typography>                    Jedni chcą spełnić stare marzenie, inni chcą zdobyć nowy zawód, ale co najważniejsze — każdy przychodzi po wynik!
                    Dlatego nasi studenci uczą się pod ścisłym okiem profesjonalistów i otrzymują należytą uwagę na każdym etapie, aby doprowadzić sprawę do końca — zostać barberem!</Typography>
                </Grid>
                <Grid xs={6} item sx={{ backgroundColor: "#D9D9D9", borderRadius: 2.5, width: "570px", height: "442px"}}>
                    Здесь будет картинка
                </Grid>
            </Grid>
        </Section>
    );
};

export default AboutUsSection;