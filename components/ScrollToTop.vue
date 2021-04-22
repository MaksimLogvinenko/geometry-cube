<template>
  <div>
    <transition name="fade">
      <div v-show="scrollBtn">
        <i class="fas fa-arrow-up" @click="scrollToTop"></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    scrollBtn: false,
  }),
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollListener: function () {
      this.scrollBtn = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
i {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-size: 2.4rem;
  z-index: 999;
  background-color: $color-primary;
  color: $color-white;
  padding: 1rem;
  border-radius: $border-radius-default;
  box-shadow: $shadow-default;
  cursor: pointer;
}
</style>