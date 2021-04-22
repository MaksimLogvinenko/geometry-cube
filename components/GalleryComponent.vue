<template>
  <div class="container">
    <div class="gallery">
      <nuxt-link
        :to="`/gallery${galleryLink.url}`"
        tag="a"
        class="gallery__link"
        v-for="galleryLink in galleryLinks"
        :key="galleryLink.title"
        v-lazy:background-image="galleryLink.img"
      >
        <span class="gallery__number"></span>
        <h3 class="gallery__title">{{ galleryLink.title }}</h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    galleryLinks: [
      {
        img: require("@/static/images/gallery/1.jpeg"),
        url: "/kitchen",
        title: "Кухни",
      },
      {
        img: require("@/static/images/gallery/2.jpeg"),
        url: "/kitchen",
        title: "Мебель для комнат",
      },
      {
        img: require("@/static/images/gallery/3.jpeg"),
        url: "/kitchen",
        title: "Мебель для не комнат",
      },
      {
        img: require("@/static/images/gallery/4.jpeg"),
        url: "/kitchen",
        title: "Антон",
      },
    ],
  }),
  components: {},
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.6rem;
  @include respond(tab-port) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include respond(phone) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.gallery__link {
  position: relative;
  height: 40rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: $border-radius-default;
  padding: 2rem;
  overflow: hidden;
  @include respond(phone) {
    height: 25rem;
  }
  &:nth-child(1) {
    grid-column: 1 / 3;
    @include respond(tab-port) {
      grid-column: 1 / 2;
    }
    @include respond(phone) {
      grid-column: 1 / 1;
    }
  }
  &:nth-child(4) {
    grid-column: 2 / 4;
    @include respond(tab-port) {
      grid-column: 2 / 3;
    }
    @include respond(phone) {
      grid-column: 1 / 1;
    }
  }
  &:nth-child(2) {
    @include respond(tab-port) {
      grid-column: 2 / 3;
    }
    @include respond(phone) {
      grid-column: 1 / 1;
    }
  }
  &:nth-child(3) {
    @include respond(tab-port) {
      grid-column: 1 / 2;
    }
    @include respond(phone) {
      grid-column: 1 / 1;
    }
  }
}
.gallery__title {
  text-decoration: none;
  position: relative;
  z-index: 9;
  color: $color-white;
  background-color: $color-dark-blue;
  border-radius: $border-radius-default;
  padding: 1rem;
  font-size: 2.4rem;
  font-weight: $font-bold;
  display: inline-block;
}
</style>