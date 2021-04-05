<template>
  <section class="section-question">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
        <p class="page-subtitle">
          We can help you to change lives and truly make an impact on others
        </p>
      </div>
      <div
        class="question__item"
        v-for="(question, questionIndex) of questions"
        :key="'question' + questionIndex"
        @click="question.open = !question.open"
      >
        <h4 class="question__title">{{ question.title }}</h4>
        <i class="fas fa-chevron-circle-right"
        :class="{'open': question.open}"></i>
        <question-item :questions="question" />
      </div>
    </div>
  </section>
</template>

<script>
import QuestionItem from "@/components/QuestionItem";
export default {
  components: { QuestionItem },
  data: () => ({
    questions: [
      {
        title: "Как я могу оплатить товар?",
        open: false,
        subtitle: ["Оплата происходит при помощи Robokassa любым из удобных способов: Visa, Mastercard, МИР, Сбербанк, QIWI, WebMoney и др."],
      },
      {
        title: "Я оплатил, что дальше?",
        open: false,
        subtitle: ["subtitle-2"],
      },
      {
        title: "Я не из России, как мне оплатить товар?",
        open: false,
        subtitle: ["Напиши в сообщения группы ВКонтакте и мы попробуем найти решение альтернативами вроде DonationAlerts :)"],
      },
      {
        title: "Я оплатил, что дальше?",
        open: false,
        subtitle: ["subtitle-2"],
      },
      {
        title: "Я не из России, как мне оплатить товар?",
        open: false,
        subtitle: ["Напиши в сообщения группы ВКонтакте и мы попробуем найти решение альтернативами вроде DonationAlerts :)"],
      },
    ],
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url("https://pro.fontawesome.com/releases/v5.10.0/css/all.css");
.section-question {
  position: relative;
  background-color: $color-dark-gray;
}
.question__item {
  position: relative;
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  width: 70%;
  margin: 0 auto;
  text-decoration: none;
  color: $color-dark-blue;
  border-bottom: 3px solid $color-dark-gray;
  cursor: pointer;
  @include respond(tab-port) {
    width: 80%;
  }
  @include respond(phone) {
    width: 100%;
  }
}
i {
  position: absolute;
  font-size: 1.8rem;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  transition: transform 0.3s ease-in-out;
  &.open {
    transform: rotateZ(90deg);
  }
}
.question__title {
  font-size: 2.2rem;
  font-weight: $font-bold;
}
</style>