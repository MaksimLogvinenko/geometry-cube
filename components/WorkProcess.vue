<template>
  <section class="section-work-process">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
        <p class="page-subtitle">
          We can help you to change lives and truly make an impact on others
        </p>
      </div>
      <div class="process">
        <div
          class="process__item"
          v-for="processItem in processItems"
          :key="processItem.title"
        >
          <img
            :src="require(`@/static/images/svg/process/${processItem.img}.svg`)"
            :alt="processItem.alt"
            class="process__icon"
          />
          <h5 class="process__title">{{ processItem.title }}</h5>
          <p class="process__description">{{ processItem.description }}</p>
          <img
            class="process__next-icon"
            src="@/static/images/svg/process/right-drawn-arrow.svg"
            alt="asd"
          />
          <img
            class="process__next-icon-down"
            src="@/static/images/svg/process/down.svg"
            alt="Proc"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    processItems: [
      {
        arrow: "right-drawn-arrow",
        img: "call",
        title: "Choose a Fundraiser 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididuntut labore et dolore m",
        alt: "Процесс 1",
      },
      {
        arrow: "right-drawn-arrow",
        img: "online-question",
        title: "Choose a Fundraiser 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididuntut labore et dolore m",
        alt: "Процесс 1",
      },
      {
        arrow: "right-drawn-arrow",
        img: "write-letter",
        title: "Choose a Fundraiser 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididuntut labore et dolore m",
        alt: "Процесс 1",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.section-work-process {
  background-color: $color-dark-gray;
}
.process {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 40rem;
  z-index: 99;
  @include respond(phone) {
    height: 100%;
    padding: 1rem;
  }
}
.process__item {
  flex: 0 1 30%;
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  position: relative;
  @include respond(tab-port) {
    flex: 0 1 28%;
  }
  @include respond(phone) {
    flex: 0 1 80%;
    margin: 0 0 2.5rem 0;
  }
  &:nth-child(1) {
    align-self: flex-end;
  }
  &:nth-child(2) {
    align-self: center;
  }
  &:nth-child(3) {
    align-self: flex-start;
    .process__next-icon {
      display: none;
    }
    .process__next-icon-down {
        display: none;
    }
  }
}
.process__icon {
  padding: 1rem;
  background-color: $color-white;
  border-radius: $border-radius-default;
  box-shadow: $shadow-default;
  margin-bottom: 3rem;
  width: 7rem;
}
.process__title {
  font-size: 2.4rem;
  font-weight: $font-bold;
  margin-bottom: 1.5rem;
}
.process__description {
  font-weight: $font-regular;
  font-size: 1.8rem;
}
.process__next-icon {
  width: 5rem;
  position: absolute;
  top: 0;
  right: 0;
  @include respond(phone) {
    display: none;
  }
}
.process__next-icon-down {
    display: none;
    width: 5rem;
    margin-top: 1rem;
    @include respond (phone) {
        display: block;
    }
}
</style>