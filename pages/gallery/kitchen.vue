<template>
  <section class="gallery-kitchen">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
        <p class="page-subtitle">
          We can help you to change lives and truly make an impact on others
        </p>
      </div>
      <div class="gallery__back">
        <nuxt-link to="/gallery" tag="a">
          <i class="fas fa-chevron-left"></i> Назад
        </nuxt-link>
      </div>
      <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="gallery-kitchen">
          <img
            class="gallery-kitchen-container"
            v-for="(image, imageIndex) in images"
            :key="image.imageIndex"
            v-lazy="image"
            @click="index = imageIndex"
            :alt="image.alt"
          />
        </div>
    </div>
  </section>
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  data: function () {
    return {
      images: [
        require("@/static/images/gallery/kitchen/3.jpeg"),
        require("@/static/images/gallery/kitchen/2.jpeg"),
        require("@/static/images/gallery/kitchen/3.jpeg"),
        require("@/static/images/gallery/kitchen/4.jpeg"),
        require("@/static/images/gallery/kitchen/5.jpeg"),
        require("@/static/images/gallery/kitchen/6.jpeg"),
        require("@/static/images/gallery/kitchen/12.jpg"),
        require("@/static/images/gallery/kitchen/9.jpg"),
        require("@/static/images/gallery/kitchen/10.jpg"),
        require("@/static/images/gallery/kitchen/11.jpg"),
        require("@/static/images/gallery/kitchen/12.jpg"),
        require("@/static/images/gallery/kitchen/13.jpg"),
        require("@/static/images/gallery/kitchen/14.jpg"),
        require("@/static/images/gallery/kitchen/15.jpg"),
        require("@/static/images/gallery/kitchen/2.jpeg"),
        require("@/static/images/gallery/kitchen/5.jpeg"),
      ],
      index: null,
    };
  },
  components: {
    gallery: VueGallery,
  },
};
</script> 
 
<style lang="scss" scoped>
.gallery-kitchen {
  display: flex;
  flex-wrap: wrap;
}
.gallery-kitchen-container {
  flex: 0 0 32.4%;
  max-width: 32.4%;
  margin: 0 0.5rem 2rem 0.5rem;
  position: relative;
  cursor: pointer;
  object-fit: cover;
  object-position: center;
  height: 30rem;
  box-shadow: $shadow-default;
  border-radius: $border-radius-default;
  &:hover {
    transition: 0.3s;
    opacity: 0.4;
    position: relative;
  }
  @include respond(tab-port) {
    flex: 0 0 48.5%;
    max-width: 48.5%;
  }
  @include respond(phone) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  img {
    border-radius: $border-radius-default;
    width: 100%;
    height: 100%;
  }
}
.gallery__back {
  padding: 0 2rem 2rem 2rem;
  margin: 3rem 0;
  a {
    text-decoration: none;
    font-size: 2.4rem;
    color: $color-dark-blue;
  }
}
.fa-search {
  position: relative;
  z-index: 99;
}
</style>