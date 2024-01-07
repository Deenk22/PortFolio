import { useTranslation } from 'react-i18next';
import { CiGlobe } from 'react-icons/ci';

export default function TranslationButton() {
  const { i18n } = useTranslation();

  function handleLanguage() {
    i18n.language === 'es'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('es');
  }

  return (
    <CiGlobe
      onClick={handleLanguage}
      className="relative bottom-6 right-[14px] md:bottom-0 md:right-0 text-[24px] text-white-section1 mt-[1.4px] cursor-pointer mr-2 duration-200"
    />
  );
}
