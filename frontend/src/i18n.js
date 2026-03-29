import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Our Love Logs": "Our Love Logs",
      "Our story, our journey": "Our story, our journey",
      "Welcome.title": "The story of two hearts that grow together",
      "Home": "Home",
      "Our Story": "Our Story",
      "Travel": "Travel",
      "Photos": "Photos",
      "Read Our Story": "Read Our Story",
      "View Photos": "View Photos",
      "Change Language": "Change Language",
      "Language": "Language"
    }
  },
  id: {
    translation: {
      "Our Love Logs": "Catatan Kita",
      "Our story, our journey": "Cerita kita, perjalanan kita",
      "Welcome.title": "Kisah dua hati yang tumbuh bersama",
      "Home": "Beranda",
      "Our Story": "Cerita Kita",
      "Travel": "Perjalanan",
      "Photos": "Foto",
      "Read Our Story": "Baca Cerita Kita",
      "View Photos": "Lihat Foto",
      "Change Language": "Ganti Bahasa",
      "Language": "Bahasa"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;