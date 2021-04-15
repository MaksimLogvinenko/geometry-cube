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
          :key="imageIndex"
          :src="image"
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
        require("@/static/images/gallery/kitchen/1.jpg"),
        require("@/static/images/gallery/kitchen/2.jpg"),
        require("@/static/images/gallery/kitchen/1.jpg"),
        require("@/static/images/gallery/kitchen/3.jpg"),
        require("@/static/images/gallery/kitchen/1.jpg"),
        require("@/static/images/gallery/kitchen/3.jpg"),
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
  margin-bottom: 3.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  align-items: stretch;
  cursor: pointer;
  object-fit: cover;
  object-position: center;
  height: 30rem;
  @include respond(tab-port) {
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 1.6rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
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
</style>