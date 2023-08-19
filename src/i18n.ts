import { LANGUAGES } from "consts";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: LANGUAGES[0].code,
    interpolation: {
        escapeValue: false,
    },
    resources: {
        ru: {
            translation: {
                "menu.about": "О НАС",
                "menu.courses": "КУРСЫ",
                "menu.barbershop": "БАРБЕРШОП",
                "menu.contacts": "КОНТАКТЫ",

                "header.title": "СТАНЬ БАРБЕРОМ ЗА 30 ДНЕЙ И ЗАРАБАТЫВАЙ ОТ 6000 ZŁ/MEС",
                "header.contactBtn": "СВЯЖИСЬ С НАМИ",

                "infoIcon.experience": "Преподаватели - барберы с 6+ летним опытом работы",
                "infoIcon.equipment": "Инструменты, модели, косметика - все включено в стоимость обучения",
                "infoIcon.payments": "Гибкие условия оплаты. Возможность оплаты в рассрочку",
                "infoIcon.recruitment": "Все студенты имеют возможность стать частью команды SIMPLE BARBERSHOP",
                                
                "aboutUs.title": "О НАС",
                "aboutUs.text.par1": "SIMPLE Academy — это профильная академия барберинга в Познани с авторской методикой обучения. Мы, первое поколение барберов, в индустрии с 2016 года, когда еще все только начиналось.",
                "aboutUs.text.par2": "К 2019 году у нас уже был опыт в преподавании, так как за это время не редко люди обращались с просьбой их обучить, и мы решили создать образовательный центр, где каждый может изучить новую профессию в короткий срок и начать зарабатывать в развивающийся индустрии.",
                "aboutUs.text.par3": "Одни хотят осуществить давнюю мечту, другие получить новую профессию, но самое главное — все приходят за результатом! Поэтому наши студенты учатся под чутким руководством профессионалов и получают должное внимание на каждом этапе, чтобы довести дело до конца — стать барбером!",
                
                "courses.title": "КУРСЫ",
                "courses.signUpButton": "ЗАПИСАТЬСЯ",
                "course1.title": "БАРБЕР С НУЛЯ",
                "course1.chip": "Популярно",
                "course1.option1": "30 дней обучения",
                "course1.option2": "Предоставляем моделей и инструменты",
                "course1.option3": "Группы до 4 человек",
                "course1.option4": "Международный сертификат после успешного окончания обучения",
                "course1.option5": "Возможность стать частью команды SIMPLE Barbershop",
                "course1.oldPrice": "5 000 zł",
                "course1.currentPrice": "4 000 zł",
                "course2.title": "БАРБЕР С НУЛЯ (ИНДИВИДУАЛЬНО)",
                "course2.option1": "График обучения составляем под вас",
                "course2.option2": "Предоставляем моделей и инструменты",
                "course2.option3": "Международный сертификат после успешного окончания обучения",
                "course2.option4": "Возможность стать частью команды SIMPLE Barbershop",
                "course2.oldPrice": "7 000 zł",
                "course2.currentPrice": "6 000 zł",
                
                "tutors.title": "ПРЕПОДАВАТЕЛИ",
                "tutor1.name": "АНТОН",
                "tutor1.description": "Меня зовут Антон. Я являюсь одним из первых барберов в городе Минск (Беларусь). Барбер и преподаватель с 2016 года.",
                "tutor2.name": "АНАСТАСИЯ",
                "tutor2.description": "Являюсь частью коллектива SIMPLE Barbershop в качестве барбера и преподавателя. Постоянно слежу за новыми тенденциями в индустрии и развиваю свои навыки.",

                "graduates.title": "ВЫПУСКНИКИ",
                "graduates.link": "БОЛЬШЕ ФОТО В ИНСТАГРАММ",

                "barbershop.title": "SIMPLE BARBERSHOP",
                "barbershop.description": "Хочешь записаться на визит к нашим барберам? Сделай это на странице SIMPLE BARBERSHOP!",
                "barbershop.link": "SIMPLE BARBERSHOP",

                "footer.contactForm.title": "ЕСТЬ ВОПРОСЫ? СПРАШИВАЙ!",
                "footer.contactForm.name": "Имя",
                "footer.contactForm.phone": "Телефон",
                "footer.contactForm.message": "Сообщение",
                "footer.contactForm.button": "Отправить",
                "footer.contacts.text1": "Если у тебя есть какие-либо вопросы, ты хочешь о чём-то поговорить или что-то спросить, добро пожаловать. Заполни форму и мы свяжемся с тобой в течении одного часа. Мы всегда рады ответить на все ваши вопросы.",
                "footer.contacts.text2": "Вы также можете связаться с нами самостоятельно, позвонить по номеру телефона указанному ниже.",
                "footer.contacts.address": "Мы расположены по адресу: Poznań, ul. Swierzawska 4",
                "copyright.rights": "ВСЕ ПРАВА ЗАЩИЩЕНЫ.",
            }
        },
        pl: {
            translation: {
                "menu.about": "O NAS",
                "menu.courses": "SZKOLIENIA",
                "menu.barbershop": "BARBERSHOP",
                "menu.contacts": "KONTAKT",
                
                "header.title": "ZOSTAŃ BARBEREM ZA 30 DNI I ZARABIAJ OD 6000 ZŁ/MES",
                "header.contactBtn": "SKONTAKTUJ SIĘ",
                
                "infoIcon.experience": "Szkoleniowcy - barberzy z 6+ letnim doświadczeniem",
                "infoIcon.equipment": "Narzędzie, modele, kosmetyka - wszystko jest wliczone w koszt szkolenia",
                "infoIcon.payments": "Elastyczne warunki płatności. Możliwość rozłożenia ceny szkolenia na raty",
                "infoIcon.recruitment": "Wszysci studenci mają szansę dolączyć się do ekipy SIMPLE Barbershop",
                
                "aboutUs.title": "O NAS",
                "aboutUs.text.par1": "SIMPLE Academy — to specjalistyczna akademia barberska w Poznaniu z autorską metodyką nauczania. My, pierwsze pokolenie barberów, jesteśmy w branży od 2016 roku, kiedy wszystko dopiero się zaczynało.",
                "aboutUs.text.par2": "Do 2019 roku mieliśmy już doświadczenie w nauczaniu, ponieważ w tym czasie ludzie często prosili o ich nauczanie, dlatego postanowiliśmy stworzyć centrum edukacyjne, w którym każdy może w krótkim czasie nauczyć się nowego zawodu i zacząć zarabiać w rozwijającej się branży.",
                "aboutUs.text.par3": "Jedni chcą spełnić stare marzenie, inni chcą zdobyć nowy zawód, ale co najważniejsze — każdy przychodzi po wynik! Dlatego nasi studenci uczą się pod ścisłym okiem profesjonalistów i otrzymują należytą uwagę na każdym etapie, aby doprowadzić sprawę do końca — zostać barberem!",
                
                "courses.title": "SZKOLIENIA",
                "courses.signUpButton": "ZAPISAĆ SIĘ",
                "course1.title": "BARBER OD ZERA",
                "course1.chip": "Popularne",
                "course1.option1": "30 dni szkolienia",
                "course1.option2": "Modele i narzędzia od nas",
                "course1.option3": "Grupy do 4 osób",
                "course1.option4": "Międzynarodowe świadectwo ukończenia szkolienia",
                "course1.option5": "Możliwość dołoczyć się do ekipy SIMPLE Barbershop",
                "course1.oldPrice": "5 000 zł",
                "course1.currentPrice": "4 000 zł",
                "course2.title": "BARBER OD ZERA (INDYWIDUALNIE)",
                "course2.option1": "Harmonogram zajęć piersonalnie dla ciebie",
                "course2.option2": "Modele i narzędzia od nas",
                "course2.option3": "Międzynarodowe świadectwo ukończenia szkolienia",
                "course2.option4": "Możliwość dołoczyć się do ekipy SIMPLE Barbershop",
                "course2.oldPrice": "7 000 zł",
                "course2.currentPrice": "6 000 zł",
                
                "tutors.title": "WYKŁADOWCY",
                "tutor1.name": "ANTON",
                "tutor1.description": "Mam imię Anton, jestem jednym z pierwszych barberów w mieście Mińsk (Białoruś). Barber i edukator od 2016 roku.",
                "tutor2.name": "ANASTAZJA",
                "tutor2.description": "Jako barber oraz edukator jestem częścią zespołu SIMPLE Barbershop. Nieustannie śledzę nowe trendy w branży i rozwijam swój warsztat.",

                "graduates.title": "ABSOLWENCI",
                "graduates.link": "więcej zdjęć na instagramie",

                "barbershop.title": "SIMPLE BARBERSHOP",
                "barbershop.description": "CHCESZ UMÓWIĆ SIĘ NA WIZYTĘ DO NASZYCH BARBERÓW? ZRÓB TO NA STRONIE SIMPLE BARBERSHOP!",
                "barbershop.link": "SIMPLE BARBERSHOP",

                "footer.contactForm.title": "Masz pytania? Zapytaj!",
                "footer.contactForm.name": "Imię",
                "footer.contactForm.phone": "Telefon",
                "footer.contactForm.message": "Wiadomość",
                "footer.contactForm.button": "WYSŁAĆ",
                "footer.contacts.text1": "Jeśli masz jakieś pytania, chcesz o coś porozmawiać lub o coś zapytać, zapraszamy. Wypełnij formularz, a my skontaktujemy się z tobą w ciągu godziny. Jesteśmy zawsze chętni odpowiedzieć na wszystkie pytania.",
                "footer.contacts.text2": "Możesz również skontaktować się z nami przez telefon.",
                "footer.contacts.address": "Mieścimy się pod adresem: Poznań, ul. Swierzawska 4",
                "copyright.rights": "ALL RIGHTS RESERVED.",
            }
        }
    }
});
  
export default i18n;