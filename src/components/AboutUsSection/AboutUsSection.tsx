import aboutUs from "assets/simple_forest.jpg";
import { ContentWrapperResponsive, FlexItem, H3, Section, Text } from "components/StyledHtml/StyledHtml";
import { LINKS } from "consts";
import { useTranslation } from "react-i18next";

const AboutUsSection = () => {
    const { t } = useTranslation();

    return (
        <Section id={LINKS.ABOUT_US} padding="6rem 0 10rem 0">
            <H3 marginBottom="4.5rem">{t("aboutUs.title")}</H3>
            <ContentWrapperResponsive flexDirection="row" alignItems="stretch">
                <FlexItem>
                    <Text>{t("aboutUs.text.par1")}</Text>
                    <br/>
                    <Text>{t("aboutUs.text.par2")}</Text>
                    <br/>
                    <Text>{t("aboutUs.text.par3")}</Text>
                </FlexItem>
                <FlexItem style={{ background: `80% 0 url(${aboutUs})`, borderRadius: "2rem", backgroundSize: "130%", minHeight: "300px" }} />
            </ContentWrapperResponsive>
        </Section>
    );
};

export default AboutUsSection;
