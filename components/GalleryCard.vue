<template>
  <section class="section-gallery">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
      </div>
      <swiper class="swiper gallery-card" :options="swiperOption">
        <swiper-slide
          class="gallery-card__item"
          v-for="(galleryCard, galleryCardIndex) in galleryCards"
          :key="galleryCardIndex"
        >
          <img
            :src="require(`@/static/images/gallery/${galleryCard.img}`)"
            :alt="galleryCard.alt"
            class="gallery-card__image"
          />
          <div class="gallery-card__content">
            <h3 class="gallery-card__title">
              {{ galleryCard.title }}
            </h3>
            <div class="gallery-card__buttons">
              <router-link
                tag="a"
                :to="`/gallery${galleryCard.link}`"
                class="btn btn--primary btn--small"
                >Open Gallery</router-link
              >
              <a href="#" class="btn btn--message"
                ><img src="@/static/images/svg/message.svg" alt=""
              /></a>
            </div>
            <p class="gallery-card__tags">{{ galleryCard.tags }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    swiperOption: {
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
      },
    },
    galleryCards: [
      {
        title: "Plant Trees For A Greener Future",
        tags: "#cool #pool #kitchen",
        img: "1.jpeg",
        alt: "Hello",
        link: "/kitchen",
      },
      {
        title: "Plant Trees For A Stubelu Stru Ori",
        tags: "#cool #pool #kitchen",
        img: "2.jpeg",
        alt: "Hello",
        link: "/kitchen",
      },
      {
        title: "Plant Trees For A Greener Future",
        tags: "#cool #pool #kitchen",
        img: "3.jpeg",
        alt: "Hello",
        link: "/kitchen",
      },
      {
        title: "Plant Trees For A Stubelu Stru Ori",
        tags: "#cool #pool #kitchen",
        img: "4.jpeg",
        alt: "Hello",
        link: "/kitchen",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.gallery-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.gallery-card__item {
  background-color: $color-white;
  margin-bottom: 2rem;
  border-radius: $border-radius-default;
  box-shadow: $shadow-default;
  transition: transform 0.3s ease;
}
.gallery-card__image {
  height: 18rem;
  border-radius: 10px 10px 0 0;
  width: 100%;
  object-fit: cover;
  @include respond(phone) {
    height: 30rem;
  }
}
.gallery-card__title {
  font-size: 1.8rem;
  font-weight: $font-bold;
  margin-bottom: 1.5rem;
}
.gallery-card__content {
  padding: 1.5rem;
}
.gallery-card__buttons {
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  a {
    margin-right: 1.5rem;
  }
}
.gallery-card__tags {
  font-size: 1.4rem;
  color: $color-light-blue;
  font-weight: $font-regular;
}
</style>