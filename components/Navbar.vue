<template>
  <div class="navbar">
    <div class="container">
      <div class="nav">
        <a href="#" class="nav__logo"
          ><img src="../static/images/svg/logo.svg" alt="" />QubeFeatures</a
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
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Home", url: "/", exact: true},
      { title: "About Us", url: "/about" },
      { title: "Portfolio", url: "/portfolio" },
      { title: "Contact", url: "/contact" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: $color-secondary;
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
    color: $color-primary!important;
  }
}
</style>