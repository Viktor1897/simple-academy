import { Grid, Typography } from "@mui/material";
import { ReactComponent as InfoIcon1 } from "assets/infoIcon1.svg";
import { ReactComponent as InfoIcon2 } from "assets/infoIcon2.svg";
import { ReactComponent as InfoIcon3 } from "assets/infoIcon3.svg";
import { ReactComponent as InfoIcon4 } from "assets/infoIcon4.svg";
import { MAX_CONTENT_WIDTH } from "consts";


const InfoIconsSection = () => {
    return (
        <Grid container maxWidth={MAX_CONTENT_WIDTH} width="100%" py={8} margin="0 auto">
            <Grid container xs={3} justifyContent="center" textAlign="center" gap={2}>
                <InfoIcon1 />
                <Typography>Szkoleniowcy - barberzy z 6+ letnim doświadczeniem</Typography>
            </Grid>
            <Grid container xs={3} justifyContent="center" textAlign="center" gap={2}>
                <InfoIcon2 />
                <Typography>Narzędzie, modele, kosmetyka - wszystko jest wliczone w koszt szkolenia</Typography>
            </Grid>
            <Grid container xs={3} justifyContent="center" textAlign="center" gap={2}>
                <InfoIcon3 />
                <Typography>Elastyczne warunki płatności. Możliwość rozłożenia ceny szkolenia na raty</Typography>
            </Grid>
            <Grid container xs={3} justifyContent="center" textAlign="center" gap={2}>
                <InfoIcon4 />
                <Typography>Wszysci studenci mają szansę dolączyć się do ekipy SIMPLE Barbershop</Typography>
            </Grid>
        </Grid>
    );
};

export default InfoIconsSection;