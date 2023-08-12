import barbershop from "assets/barbershop.png";
import { Button, ContentWrapperResponsive, H3, Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS } from "consts";

const BarbershopSection = () => {
    return (
        <Section id={LINKS.BARBERSHOP} backgroundColor={COLORS.bgGray} style={{ background: `${COLORS.bgGray} bottom no-repeat url(${barbershop})`, backgroundSize: "35rem" }} padding="6rem 0 18rem 0">
            <H3 marginBottom="15rem">SIMPLE BARBERSHOP</H3>
            <ContentWrapperResponsive alignItems="center" flexDirection="column">
                <Text fontWeight="600" style={{ maxWidth: "80rem", width: "100%", textAlign: "center" }} >CHCESZ UMÓWIĆ SIĘ NA WIZYTĘ DO NASZYCH BARBERÓW? ZRÓB TO NA STRONIE SIMPLE BARBERSHOP!</Text>
                <Button maxWidth="41rem" color={COLORS.white} backgroundColor={COLORS.black}>SIMPLE BARBERSHOP</Button>
            </ContentWrapperResponsive>
        </Section>
    );
};

export default BarbershopSection;
