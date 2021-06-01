<template>
  <div>
    <div class="navbar-mobile">
      <div class="nav-mobile">
        <nuxt-link tag="a" to="/" class="nav__logo-mobile"
          ><img src="../static/images/svg/logo.svg" alt=""
        /></nuxt-link>
        <h4 class="nav-logo__title">QubeFeatures</h4>
        <a @click.prevent="showNav = !showNav" href="#"
          ><img src="@/static/images/svg/bar.svg" alt=""
        /></a>
      </div>
      <ul class="menu__group-mobile" :class="{ open: showNav }">
        <nuxt-link
          v-for="link of links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          class="menu__link menu__link-mobile"
          :exact="link.exact"
        >
          <a class="menu__item menu__item-mobile">{{
            $t("navbar.menu." + link.title)
          }}</a>
        </nuxt-link>
        <div class="language-mobile">
          <button class="btn-language btn-language__mobile" @click="changeLanguage('ua')">UA</button>
          <button class="btn-language btn-language__mobile" @click="changeLanguage('ru')">RU</button>
        </div>
      </ul>
    </div>

    <div class="navbar">
      <div class="container">
        <div class="nav">
          <nuxt-link to="/" tag="a" class="nav__logo"
            ><img
              src="@/static/images/svg/logo.svg"
              alt=""
            />QubeFeatures</nuxt-link
          >
          <div class="nav__menu">
            <ul class="menu__group">
              <nuxt-link
                v-for="link of links"
                :key="link.url"
                tag="li"
                active-class="active"
                :to="link.url"
                class="menu__link"
                :exact="link.exact"
              >
                <a class="menu__item">{{ $t("navbar.menu." + link.title) }}</a>
              </nuxt-link>
              <div class="language">
                <button class="btn-language" @click="changeLanguage('ua')">
                  UA
                </button>
                <button class="btn-language" @click="changeLanguage('ru')">
                  RU
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "link-1", url: "/", exact: true },
      { title: "link-2", url: "/about" },
      { title: "link-3", url: "/gallery" },
      { title: "link-4", url: "/contact" },
    ],
    showNav: false,
  }),
  watch: {
    $route() {
      setTimeout(() => {
        this.showNav = false;
      }, 100);
    },
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $color-secondary;
  @include respond(tab-port) {
    display: none;
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    font-size: 3.6rem;
    display: flex;
    align-items: center;
    color: $color-white;
    text-decoration: none;
    padding: 2rem 0;
    font-weight: $font-bold;
  }
}

.menu {
  &__group {
    list-style: none;
    display: flex;
    align-items: center;
  }

  &__link {
    margin-left: 2rem;
  }

  &__item {
    color: $color-white;
    font-size: 1.8rem;
    font-weight: $font-bold;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: $color-primary;
    }
  }
}
.active {
  .menu__item {
    color: $color-primary !important;
  }
}
.navbar-mobile {
  display: none;
  position: relative;
  @include respond(tab-port) {
    display: block;
  }
}
.nav-mobile {
  background-color: $color-secondary;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 9999;
}
.nav-logo__title {
  font-size: 1.8rem;
  color: $color-white;
  text-transform: uppercase;
}
.language {
  margin-left: 4rem;
}
.btn-language {
  background-color: transparent;
  color: $color-secondary;
  font-weight: $font-bold;
  border: none;
  background-color: $color-primary;
  padding: 0.5rem;
  cursor: pointer;
  &__mobile {
    margin: 0 1rem;
  }
}
.menu__group-mobile {
  border-top: 2px solid $color-white;
  background: linear-gradient(180deg, #212445 40%, #262d7f 100%);
  position: absolute;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  padding: 6rem 0;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;
  transform: translateY(-100%);
}
.open {
  transform: translateY(0);
}
.menu__group-mobile {
  list-style: none;
}
.menu__link-mobile {
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
}
.menu__item-mobile {
  font-size: 2.4rem;
}
.language-mobile {
  display: flex;
}
</style>