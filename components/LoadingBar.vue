<template>
  <transition name="fade">
    <div v-if="loading" class="preloader">
      <div class="preloader-container">
        <span class="animated-preloader"></span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: true,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: white;
  text-align: center;
  .preloader-container {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: auto;
    position: absolute;
    top: 44%;
    left: 0;
    position: relative;
    .animated-preloader {
      display: inline-block;
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      background: $color-dark-blue;
      @include round(50em);
      &:after {
        content: "";
        display: inline-block;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        @include round(50em);
        background: white;
        animation: preloader-inside-white 1s ease-in-out infinite;
      }
      &:before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        @include round(50em);
        background: $color-dark-blue;
        animation: preloader-inside-red 1s ease-in-out infinite;
      }
    }
  }
}
</style>