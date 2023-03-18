import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import { MAX_CONTENT_WIDTH } from "consts";

const Section = styled.section`
    padding: 60px 0 75px 0;
`;


const GraduatesSection = () => {
    return (
        <Section>
            <Box maxWidth={MAX_CONTENT_WIDTH} width="100%" margin="0 auto">
                <Typography variant="h3" mb={5} textAlign="center">ABSOLWENCI</Typography>
                <Grid container gap={3.75} direction="row" mb={8.75} >
                    <Grid container gap={2.5} xs>
                        <Box width="100%" height="184px" sx={{ backgroundColor:"#979797", borderRadius: 3.5 }}></Box>
                        <Box width="100%" height="476px" sx={{ backgroundColor:"#979797", borderRadius: 3.5 }}></Box>
                    </Grid>
                    <Grid container gap={2.5} xs>
                        <Box width="100%" height="476px" sx={{ backgroundColor:"#979797", borderRadius: 3.5 }}></Box>
                        <Box width="100%" height="184px" sx={{ backgroundColor:"#979797", borderRadius: 3.5 }}></Box>
                    </Grid>
                    <Grid container gap={2.5} xs>
                        <Box width="100%" height="184px" sx={{ backgroundColor:"#979797", borderRadius: 3.5 }}></Box>
                        <Box width="100%" height="476px" sx={{ backgroundColor:"#979797", borderRadius: 3.5 }}></Box>
                    </Grid>
                </Grid>
                <Button variant="outlined" sx={{ display: "block", margin: "0 auto" }}>Więcej zdjęć na instagramie</Button>
            </Box>
        </Section>
    );
};

export default GraduatesSection;