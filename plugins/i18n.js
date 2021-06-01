import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

export default ({ app }) => {
  app.i18n = new VueI18n({

    locale: "ua",
    fallbackLocale: "ua",

    messages: {
        ru: require("~/locales/ru.json"),
        ua: require("~/locales/ua.json")
    }
  });
};