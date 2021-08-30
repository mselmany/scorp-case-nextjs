import { action, computed } from 'easy-peasy';

const languageModel = {
  locale: process.browser ? navigator.language.split("-")[0] : "en",
  translations: computed((state) => translations[state.locale]),
  changeLanguage: action((state, lang) => {
    if (translations[lang]) {
      state.locale = lang;
    } else {
      console.error("Unsupported language!");
    }
  }),
};

export default languageModel;

export const translations = {
  tr: {
    LOGIN: "Giriş yap",
    LOGOUT: "Çıkış yap",
    DEVELOPED_BY: "Geliştiren: ",
    CONTACT_US: "Bize Ulaşın",
    HOMEPAGE: "Ana Sayfa",
    HOMEPAGE_TEXT: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
    MENU: "Menü",
    NAME: "İsim",
    EMAIL: "Eposta",
    PASSWORD: "Şifre",
    PHONE: "Telefon",
    TEXTAREA: "Metin",
    SUBMIT: "Gönder",
    SEARCH: "Ara",
    "COUNTRY.TR": "Türkiye",
    "COUNTRY.US": "Amerika Birleşik Devletleri",
    "COUNTRY.GB": "Birleşik Krallık",
    "COUNTRY.DE": "Almanya",
    "COUNTRY.SE": "İsveç",
    "COUNTRY.KE": "Kenya",
    "COUNTRY.BR": "Brezilya",
    "COUNTRY.ZW": "Zimbabwe",
  },
  en: {
    LOGIN: "Login",
    LOGOUT: "Logout",
    DEVELOPED_BY: "Developed by",
    CONTACT_US: "Contact Us",
    HOMEPAGE: "Home Page",
    HOMEPAGE_TEXT: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    MENU: "Menu",
    NAME: "Name",
    EMAIL: "Email",
    PASSWORD: "Password",
    PHONE: "Phone",
    TEXTAREA: "Text",
    SUBMIT: "Submit",
    SEARCH: "Search",
    "COUNTRY.TR": "Turkey",
    "COUNTRY.US": "United States of America",
    "COUNTRY.GB": "United Kingdom",
    "COUNTRY.DE": "Germany",
    "COUNTRY.SE": "Sweden",
    "COUNTRY.KE": "Kenya",
    "COUNTRY.BR": "Brazil",
    "COUNTRY.ZW": "Zimbabwe",
  }
};
