<template>
  <div>
    <footer class="section-footer">
      <div class="container">
        <div class="footer">
          <div class="footer-info">
            <h6>Адрес: <br />{{ address }}</h6>
            <h6>
              Телефон: <br /><a href="tel:380953078885">{{ phone }}</a>
            </h6>
            <h6>
              Email: <br /><a href="mailto:info@brainlab.com.ua">{{ email }}</a>
            </h6>
          </div>
          <div class="footer-menu">
            <h5 class="footer-menu__title">Главное меню</h5>
            <ul class="footer-menu__group">
              <nuxt-link
                tag="li"
                :to="link.url"
                v-for="(link, linkIndex) in links"
                :key="linkIndex"
                class="footer-menu__link"
              >
                <a class="footer-menu__item">
                  {{ $t("navbar.menu." + link.title) }}
                </a>
              </nuxt-link>
            </ul>
          </div>
          <div class="footer-menu">
            <h5 class="footer-menu__title">Галерея</h5>
            <ul class="footer-menu__group">
              <nuxt-link
                tag="li"
                :to="gallery.url"
                v-for="(gallery, galleryIndex) in gallerys"
                :key="galleryIndex"
                class="footer-menu__link"
              >
                <a class="footer-menu__item">
                  {{ $t("navbar.menu." + gallery.title) }}
                </a>
              </nuxt-link>
            </ul>
          </div>
          <div class="footer-menu">
            <h5 class="footer-menu__title">Соц. сети</h5>
            <ul class="footer-menu__group">
              <nuxt-link
                tag="li"
                :to="soclial.url"
                v-for="(soclial, soclialIndex) in soclials"
                :key="soclialIndex"
                class="footer-menu__link"
              >
                <a class="footer-menu__item">
                  {{ soclial.title }}
                </a>
              </nuxt-link>
            </ul>
          </div>
          <nuxt-link to="/" tag="a" class="footer-menu__logo"
            ><img
              src="@/static/images/svg/logo.svg"
              alt=""
            />QubeFeatures</nuxt-link
          >
        </div>
      </div>
    </footer>
    <div class="licence">
      <div class="container">
        <p class="licence__text">© 2021 QubeFeatures | Все права защищены</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    address: "Украина, г. Киев, ул. Евгения Сверстюка, 19",
    phone: "38 (095) 307 888 5",
    email: "info@brainlab.com.ua",
    links: [
      { title: "link-1", url: "/" },
      { title: "link-2", url: "/about" },
      { title: "link-3", url: "/gallery" },
      { title: "link-4", url: "/contact" },
    ],
    gallerys: [
      { title: "link-1", url: "/" },
      { title: "link-2", url: "/" },
      { title: "link-3", url: "/" },
      { title: "link-4", url: "/" },
    ],
    soclials: [
      { icon: "", title: "Facebook", url: "/" },
      { icon: "", title: "Viber", url: "/" },
      { icon: "", title: "Telegram", url: "/" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.section-footer {
  background-color: $color-secondary;
  padding: 9rem 0;
}
.footer {
  display: flex;
  justify-content: space-between;
  @include respond(phone) {
    flex-wrap: wrap;
  }
}
.footer-info {
  h6 {
    font-size: 1.4rem;
    font-weight: $font-regular;
    color: $color-white;
    margin: 1rem 0;
    a {
      color: $color-white;
      text-decoration: none;
    }
  }
  @include respond(phone) {
    width: 100%;
    text-align: center;
  }
}
.footer-menu {
  padding: 1.5rem;
  &__title {
    font-size: 1.8rem;
    color: $color-white;
    font-weight: $font-bold;
    margin-bottom: 1rem;
  }
  &__link {
    list-style: none;
    margin-bottom: 0.5rem;
  }
  &__item {
    color: $color-gray;
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: $font-medium;
    transition: color 0.3s;
    &:hover {
      color: lighten($color-gray, 20%);
    }
  }
  &__logo {
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    color: $color-white;
    text-decoration: none;
    padding: 2rem 0;
    font-weight: $font-bold;
    @include respond(tab-port) {
      display: none;
    }
    @include respond(phone) {
      margin: 0 auto;
      display: flex;
    }
  }
  @include respond(phone) {
    width: 100%;
    text-align: center;
  }
}
.licence {
  padding: 1rem;
  background-color: $color-dark-blue;
  &__text {
    color: $color-gray;
    font-size: 1.6rem;
    font-weight: $font-light;
  }
}
</style>