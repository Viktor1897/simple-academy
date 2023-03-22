import { ContentWrapper, FlexItem, H3, Section, Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

const AboutUsSection = () => {
    return (
        <Section padding="60px 0 100px 0">
            <H3 color={COLORS.black} marginBottom="45px">O NAS</H3>
            <ContentWrapper flexDirection="row" alignItems="stretch">
                <FlexItem>
                    <Text>
                    SIMPLE Academy — to specjalistyczna akademia barberska w Poznaniu z autorską metodyką nauczania. My, pierwsze pokolenie barberów, jesteśmy w branży od 2016 roku, kiedy wszystko dopiero się zaczynało. 
                    </Text>
                    <br/>
                    <Text>Do 2019 roku mieliśmy już doświadczenie w nauczaniu, ponieważ w tym czasie ludzie często prosili o ich nauczanie, dlatego postanowiliśmy stworzyć centrum edukacyjne, w którym każdy może w krótkim czasie nauczyć się nowego zawodu i zacząć zarabiać w rozwijającej się branży. </Text>
                    <br/>
                    <Text>                    Jedni chcą spełnić stare marzenie, inni chcą zdobyć nowy zawód, ale co najważniejsze — każdy przychodzi po wynik!
                    Dlatego nasi studenci uczą się pod ścisłym okiem profesjonalistów i otrzymują należytą uwagę na każdym etapie, aby doprowadzić sprawę do końca — zostać barberem!</Text>
                </FlexItem>
                <FlexItem style={{ backgroundColor: "#D9D9D9", borderRadius: "20px", width: "570px"}}></FlexItem>
            </ContentWrapper>
        </Section>
    );
};

export default AboutUsSection;