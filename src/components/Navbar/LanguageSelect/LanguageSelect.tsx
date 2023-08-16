// import styled from "@emotion/styled";
import { LANGUAGES } from "consts";
import { useTranslation } from "react-i18next";

function LanguageSelect() {

    const { i18n } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <select defaultValue={LANGUAGES[0].code} onChange={onChangeLang}>
            {LANGUAGES.map(({code, label}) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    );
}

export default LanguageSelect;