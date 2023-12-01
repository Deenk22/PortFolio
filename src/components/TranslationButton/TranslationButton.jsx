import {useTranslation} from "react-i18next";
import {CiGlobe} from "react-icons/ci";

export default function TranslationButton() {
  const {i18n} = useTranslation();

  const handleChangeLanguage = () => {
    i18n.language === "es"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("es");
  };

  return (
    <CiGlobe
      onClick={handleChangeLanguage}
      className="relative bottom-6 right-[14px] md:bottom-0 md:right-0 text-[25px] text-white-section1 mt-[1.4px] cursor-pointer mr-2 duration-200 hover:text-hover-font"
    />
  );
}
