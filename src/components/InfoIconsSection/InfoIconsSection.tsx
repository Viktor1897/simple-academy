import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
//TODO сделать нормальные svg или взять картинки нормального качества 
import barber from "assets/barber.png";
import handshake from "assets/handshake.png";
import razor from "assets/razor.png";
import recruitment from "assets/recruitment.png";
import { MAX_CONTENT_WIDTH } from "consts";

const Section = styled.section`
    background-color: #F2F2F2;
`;


const InfoIconsSection = () => {
    return (
        <Section>
            <Grid container maxWidth={MAX_CONTENT_WIDTH} width="100%" py={8} margin="0 auto">
                <Grid container xs={3} justifyContent="center" textAlign="center" gap={2}>
                    <img src={barber} alt="barber"/>
                    <Typography>Szkoleniowcy - barberzy z 6+ letnim doświadczeniem</Typography>
                </Grid>
                <Grid container xs={3} justifyContent="center" textAlign="center" gap={2}>
                    <img src={razor} alt="razor"/>
                    <Typography>Narzędzie, modele, kosmetyka - wszystko jest wliczone w koszt szkolenia</Typography>
                </Grid>
                <Grid container xs={3} justifyContent="center" textAlign="center" gap={2}>
                    <img src={handshake} alt="handshake"/>
                    <Typography>Elastyczne warunki płatności. Możliwość rozłożenia ceny szkolenia na raty</Typography>
                </Grid>
                <Grid container xs={3} justifyContent="center" textAlign="center" gap={2}>
                    <img src={recruitment} alt="recruitment"/>
                    <Typography>Wszysci studenci mają szansę dolączyć się do ekipy SIMPLE Barbershop</Typography>
                </Grid>
            </Grid>
        </Section>
    );
};

export default InfoIconsSection;