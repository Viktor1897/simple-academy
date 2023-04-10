import { Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

const CopyrightSection = () => {
    return (
        <Section backgroundColor={COLORS.black} padding="47px 0">
            <Text fontSize="16px" color={COLORS.white}>© 2023 SIMPLE ACADEMY</Text>
            <Text fontSize="16px" color={COLORS.white}>ALL RIGHTS RESERVED.</Text>
        </Section>
    );
};

export default CopyrightSection;