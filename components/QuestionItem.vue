<template>
  <transition name="expand"
  @enter="enter"
  @after-enter="afterEnter"
  @leave="leave"
  >
    <div v-show="questions.open">
      <p
        class="question__subtitle"
        v-for="(question, questionIndex) of questions.subtitle"
        :key="questionIndex"
      >
        {{ question }}
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["questions"],
  methods: {
      enter(el) {
          el.style.height = 'auto';
          const height = getComputedStyle(el).height;
          el.style.height = 0;

          getComputedStyle(el);

          setTimeout(() => {
              el.style.height = height;
          });
      },
      afterEnter(el) {
          el.style.height = 'auto';
      },
      leave(el) {
          el.style.height = getComputedStyle(el).height;
          getComputedStyle(el);
          setTimeout(() => {
              el.style.height = 0;
          });
      }
  }
};
</script>

<style lang="scss" scoped>
.question__subtitle {
  font-weight: $font-light;
  font-size: 1.4rem;
  margin-top: 2rem;
  padding-right: 2rem;
}
.expand-enter-active, .expand-leave-active {
    transition: height 0.3s ease-in-out;
    overflow: hidden;
}
</style>