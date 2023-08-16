import barbershop from "assets/barbershop.png";
import { Button, ContentWrapperResponsive, H3, Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS } from "consts";
import { useTranslation } from "react-i18next";

const BarbershopSection = () => {
    const { t } = useTranslation();
    
    return (
        <Section id={LINKS.BARBERSHOP} backgroundColor={COLORS.bgGray} style={{ background: `${COLORS.bgGray} bottom no-repeat url(${barbershop})`, backgroundSize: "35rem" }} padding="6rem 0 18rem 0">
            <H3 marginBottom="15rem">{t("barbershop.title")}</H3>
            <ContentWrapperResponsive alignItems="center" flexDirection="column">
                <Text fontWeight="600" style={{ maxWidth: "75rem", width: "100%", textAlign: "center" }} >{t("barbershop.description")}</Text>
                <Button maxWidth="41rem" color={COLORS.white} backgroundColor={COLORS.black}>{t("barbershop.link")}</Button>
            </ContentWrapperResponsive>
        </Section>
    );
};

export default BarbershopSection;
