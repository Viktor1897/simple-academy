import aboutUs from "assets/simple_forest.jpg";
import { ContentWrapperResponsive, FlexItem, H3, Section, Text } from "components/StyledHtml/StyledHtml";
import { LINKS } from "consts";

const AboutUsSection = () => {
    return (
        <Section id={LINKS.ABOUT_US} padding="6rem 0 10rem 0">
            <H3 marginBottom="4.5rem">O NAS</H3>
            <ContentWrapperResponsive flexDirection="row" alignItems="stretch">
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
                <FlexItem style={{ background: `80% 0 url(${aboutUs})`, borderRadius: "2rem", backgroundSize: "130%", minHeight: "300px" }} />
            </ContentWrapperResponsive>
        </Section>
    );
};

export default AboutUsSection;
