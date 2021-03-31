<template>
  <div>
    <div class="navbar-mobile">
      <div class="nav-mobile">
        <a href="#" class="nav__logo-mobile"
          ><img src="../static/images/svg/logo.svg" alt=""
        /></a>
        <h4 class="nav-logo__title">QubeFeatures</h4>
        <a @click.prevent="showNav = !showNav" href="#"><img src="@/static/images/svg/bar.svg" alt="" /></a>
      </div>
        <ul class="menu__group-mobile" :class="{'open': showNav}">
        <nuxt-link
          v-for="link of links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          class="menu__link menu__link-mobile"
          :exact="link.exact"
        >
          <a class="menu__item menu__item-mobile">{{ link.title }}</a>
        </nuxt-link>
      </ul>
    </div>

    <div class="navbar">
      <div class="container">
        <div class="nav">
          <a href="#" class="nav__logo"
            ><img src="@/static/images/svg/logo.svg" alt="" />QubeFeatures</a
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
                <a class="menu__item">{{ link.title }}</a>
              </nuxt-link>
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
      { title: "Home", url: "/", exact: true },
      { title: "About Us", url: "/about" },
      { title: "Portfolio", url: "/portfolio" },
      { title: "Contact", url: "/contact" },
    ],
    showNav: false
  }),
  methods: {},
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
  z-index: 999;
}
.nav-logo__title {
  font-size: 1.8rem;
  color: $color-white;
  text-transform: uppercase;
}
.menu__group-mobile {
  border-top: 2px solid $color-white;
  background-color: $color-secondary;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: .3s;
  transform: translateY(-100%);
  
}
.open {
  transform: translateY(0);
}
.menu__link-mobile {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
}
.menu__item-mobile {
  font-size: 2.4rem;
}
</style>