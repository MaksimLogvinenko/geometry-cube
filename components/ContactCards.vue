<template>
  <section class="section-contact-card">
    <div class="container">
      <div class="contact-card">
        <div
          class="contact-card__item"
          v-for="(contactCard, contactCardIndex) of contactCards"
          :key="contactCardIndex"
        >
          <img
            :src="require(`@/static/images/svg/${contactCard.image}.svg`)"
            :alt="contactCard.alt"
            class="contact-card__img"
          />
          <div class="contact-card__info">
            <h3 class="contact-card__title">{{ contactCard.title }}</h3>
            <a href="#" class="contact-card__link">{{
              contactCard.firstLink
            }}</a>
            <a href="#" class="contact-card__link">{{
              contactCard.secondLink
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    contactCards: [
      {
        image: "contact-card-1",
        title: "Social",
        firstLink: "WhatsUp - @oasdmca",
        secondLink: "Viber - @llcazsq",
        alt: "Yes",
      },
      {
        image: "contact-card-2",
        title: "Social-2",
        firstLink: "WhatsUp - @oasdmca",
        secondLink: "Viber - @llcazsq",
        alt: "Yes",
      },
      {
        image: "contact-card-1",
        title: "Social-3",
        firstLink: "WhatsUp - @oasdmca",
        secondLink: "Viber - @llcazsq",
        alt: "Yes",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.contact-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__item {
    display: flex;
    width: 30%;
    background-color: $color-white;
    box-shadow: $shadow-default;
    padding: 4rem 2rem;
    margin: 1rem 2rem;
    border-radius: $border-radius-default;
    align-items: center;
    transition: transform 0.3s;
    @include respond(tab-port) {
      width: 40%;
    }
    @include respond(phone) {
      width: 70%;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__img {
    margin-right: 1rem;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: $font-bold;
    margin-bottom: 1rem;
  }
  &__link {
    font-size: 1.4rem;
    font-weight: $font-regular;
    text-decoration: none;
    color: $color-dark-blue;
    margin-bottom: 0.5rem;
  }
}
</style>