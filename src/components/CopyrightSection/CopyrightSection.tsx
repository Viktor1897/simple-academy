import { Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";
import { useTranslation } from "react-i18next";

const CopyrightSection = () => {
    const { t } = useTranslation();
    return (
        <Section backgroundColor={COLORS.black} padding="4.7rem 0">
            <Text fontSize="1.6rem" color={COLORS.white}>{`© ${new Date().getFullYear()} SIMPLE ACADEMY`}</Text>
            <Text fontSize="1.6rem" color={COLORS.white}>{t("copyright.rights")}</Text>
        </Section>
    );
};

export default CopyrightSection;