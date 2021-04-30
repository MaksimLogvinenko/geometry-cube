import Vue from "vue";
import VueLazyload from "vue-lazyload";

export default async (context, inject) => {
  Vue.use(VueLazyload, {
    preLoad: 0,
    // error: "/images/error-img.svg",
    loading: "/images/loader.svg",
    attempt: 3,
    lazyComponent: true,
    observer: true,
    throttleWait: 500
  });
};