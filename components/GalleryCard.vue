<template>
  <section class="section-gallery">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
      </div>
      <div class="gallery-card">
        <div class="gallery-card__item"
        v-for="(galleryCard, galleryCardIndex) of galleryCards"
        :key="galleryCardIndex"
        >
          <img
            src="@/static/images/gallery-card.jpg"
            alt=""
            class="gallery-card__image"
          />
          <div class="gallery-card__content">
            <h3 class="gallery-card__title">
              {{ galleryCard.title }}
            </h3>
            <div class="gallery-card__buttons">
              <a href="#" class="btn btn--primary btn--small">Open Gallery</a>
              <a href="#" class="btn btn--message"
                ><img src="@/static/images/svg/message.svg" alt=""
              /></a>
            </div>
            <p class="gallery-card__tags">{{ galleryCard.tags }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data: () => ({
        galleryCards: [
            {title: "Plant Trees For A Greener Future", tags: "#cool #pool #kitchen"},
            {title: "Plant Trees For Holla Amigo", tags: "#cool #pool #kitchen"},
            {title: "Plant Trees For A Stubelu Stru Ori", tags: "#cool #pool #kitchen"},
            {title: "Plant Trees For A Greener Future", tags: "#cool #pool #kitchen"},
        ]
    })
}
</script>

<style lang="scss" scoped>
.gallery-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.gallery-card__item {
  height: 38rem;
  max-width: 23%;
  background-color: $color-white;
  margin: 0 1rem;
  margin-bottom: 2rem;
  border-radius: $border-radius-default;
  box-shadow: $shadow-default;
  transition: transform 0.3s ease;
}
.gallery-card__image {
  border-radius: 10px 10px 0 0;
  width: 100%;
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