<template>
  <section class="section-advantages">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
        <p class="page-subtitle">
          We can help you to change lives and truly make an impact on others
        </p>
      </div>
      <div class="advantages-card">
        <div
          class="card__item"
          v-for="(card, cardIndex) of cards"
          :key="cardIndex"
        >
          <img
            src="../static/images/svg/pencil.svg"
            alt=""
            class="card__image"
          />
          <h3 class="card__title">{{ card.title }}</h3>
          <p class="card__text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Help Reduce Food Crisis",
        text: "Feed the poor by donating for hunger relief.",
      },
      {
        title: "Help Reduce Food Crisis",
        text: "Feed the poor by donating for hunger relief.",
      },
      {
        title: "Help Reduce Food Crisis",
        text: "Feed the poor by donating for hunger relief.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.section-advantages {
  position: relative;
  background-color: $color-dark-gray;
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    background-image: url("../static/images/svg/elipse-1.svg");
    background-repeat: no-repeat;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 18.2rem;
    height: 18.2rem;
  }
}
.advantages-card {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &::before {
    content: "";
    position: absolute;
    width: 50%;
    border-bottom: 4px dashed $color-light-blue;
    top: 50%;
    @include respond(tab-port) {
    display: none;
    }
  }
}
.card__item {
  position: relative;
  height: 32rem;
  width: 27rem;
  background-color: $color-white;
  padding: 3rem;
  margin: 0 3rem;
  margin-bottom: 3rem;
  text-align: center;
  border-radius: $border-radius-default;
  box-shadow: $shadow-default;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @include respond(phone) {
    width: 100%;
  }
}
.card__image {
  margin-bottom: 2.5rem;
}
.card__title {
  font-weight: $font-bold;
  font-size: 2.4rem;
  margin-bottom: 2.5rem;
}
.card__text {
  font-weight: $font-regular;
  font-size: 1.4rem;
}
</style>