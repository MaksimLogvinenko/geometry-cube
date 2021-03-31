<template>
  <section class="section-question">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
        <p class="page-subtitle">
          We can help you to change lives and truly make an impact on others
        </p>
      </div>
      <a href="#" class="question__item"
      v-for="(question, questionIndex) of questions"
      :key="questionIndex"
      >
        <div class="question__text">
          <h4 class="question__title">
            {{ question.title }}
          </h4>
          <a href="#" class="question__icon"
            ><img src="~/static/images/svg/plus.svg" alt=""
          /></a>
        </div>
        <p class="question__subtitle">
          {{ question.subtitle }}
        </p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
    data: () => ({
        questions: [
            {title: 'Hello petrushko olex', subtitle: 'We can help you to change lives and truly make an impact on others'},
            {title: 'Hello petrushko Viktor', subtitle: 'We can help you to change lives and truly make an impact on others'},
            {title: 'Hello petrushko Andrii', subtitle: 'We can help you to change lives and truly make an impact on others'},
        ]
    })
};
</script>

<style lang="scss" scoped>
.section-question {
  position: relative;
  background-color: $color-dark-gray;
}
.question__item {
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  width: 60%;
  margin: 0 auto;
  text-decoration: none;
  color: $color-dark-blue;
  border-bottom: 2px solid $color-dark-blue;
}
.question__text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question__title {
  font-size: 1.8rem;
  font-weight: $font-bold;
}
.question__subtitle {
  font-weight: $font-light;
  font-size: 1.4rem;
  margin-top: 2rem;
}
.question__icon {
  position: relative;
  z-index: 99;
  transition: 0.3s;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      background-color: $color-dark-gray;
      top: 50%;
      left: 50%;
      padding: 2rem;
      border-radius: 50%;
      transform: translateX(-50%) translateY(-50%);
      border-radius: 50%;
      z-index: -99;
    }
  }
  &--active {
      transform: rotate(45deg);
      transition: transform 0.3s;
  }
}
</style>