<template>
  <section class="section-reviews">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
      </div>
      <div class="reviews-wrapper">
        <swiper class="swiper reviews" :options="swiperComments">
          <swiper-slide
            v-for="(comment, commentIndex) of comments"
            :key="commentIndex"
          >
            <div class="reviews-col">
              <div class="reviews-col-up">
                <img
                  :src="require(`@/static/images/users/${comment.img}.jpg`)"
                  alt=""
                  class="reviews__photo"
                />
                <div class="reviews-info">
                  <h4 class="reviews__name">{{ comment.name }}</h4>
                  <span class="reviews__city">{{ comment.city }}</span>
                </div>
              </div>
              <div class="reviews-col-up">
                <h5 class="reviews__mark">
                  <span>{{ comment.mark }}</span
                  >/ 10
                </h5>
              </div>
            </div>
            <p class="reviews__comment">
              {{ comment.text }}
            </p>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
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
    swiperComments: {
      spaceBetween: 100,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    },
    comments: [
      {
        name: "John Petuk",
        city: "Ukraine, Kyiv",
        mark: "10",
        img: "user-1",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenas",
      },
      {
        name: "Victor Korzh",
        city: "Ukraine, Fastiv",
        mark: "9",
        img: "user-2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      },
      {
        name: "Vladislav Kvasha",
        city: "England, London",
        mark: "8",
        img: "user-3",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing i nam sadaw qdasd q a",
      },
      {
        name: "Oleg Miami",
        city: "Ukraine, Mexico",
        mark: "9",
        img: "user-4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.reviews-wrapper {
  background-image: url("~/static/images/reviews-bg.jpg");
  height: 47rem;
  background-repeat: no-repeat;
}
.reviews {
  padding: 6rem;
  width: 77rem;
  overflow: hidden;
  background-color: $color-white;
  box-shadow: $shadow-default;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: $border-radius-default;
  @include respond(phone) {
    width: 100%;
    padding: 4rem;
  }
}
.reviews-col {
  display: flex;
  justify-content: space-between;
}
.reviews-col-up {
  display: flex;
  align-items: center;
}
.reviews__photo {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  object-fit: cover;
}
.reviews-info {
  margin-left: 1rem;
}
.reviews__name {
  font-size: 1.8rem;
  font-weight: $font-bold;
}
.reviews__city {
  font-size: 1.4rem;
  font-weight: $font-regular;
  color: $color-light-blue;
}
.reviews__mark {
  font-weight: $font-regular;
  font-size: 1.8rem;
  span {
    font-weight: $font-bold;
    font-size: 2.2rem;
  }
}
.reviews__comment {
  margin-top: 5rem;
  font-size: 1.8rem;
  font-weight: $font-light;
  @include respond(phone) {
    margin-top: 3rem;
  }
}
</style>