<template>
  <div>
    <transition name="show-modal">
      <modal-question
        v-if="modalQuestionOpen"
        @closeModalQuestion="closeModalQuestion"
      />
    </transition>
    <div class="header">
      <navbar />
      <div class="header-content">
        <div class="container">
          <h2 class="header-subtitle">Make A Difference</h2>
          <h1 class="header-title">
            Let’s Create A <br />
            Better Tomorrow
          </h1>
          <a
            href="#"
            @click.prevent="openModalQuestion"
            class="btn btn--primary btn--big"
            >Download Now
          </a>
        </div>
      </div>
    </div>
    <advantages />
    <gallery-card />
    <question />
    <reviews />
    <footer-section />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Advantages from "@/components/Advantages";
import GalleryCard from "@/components/GalleryCard";
import Question from "@/components/Question";
import Reviews from "@/components/Reviews";
import FooterSection from "@/components/FooterSection";
import ModalQuestion from "@/components/ModalQuestion";
export default {
  data: () => ({
    modalQuestionOpen: false,
  }),
  components: {
    Navbar,
    Advantages,
    GalleryCard,
    Question,
    Reviews,
    FooterSection,
    ModalQuestion,
  },
  methods: {
    openModalQuestion() {
      this.modalQuestionOpen = true;
    },
    closeModalQuestion() {
      this.modalQuestionOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-content {
  background-image: url("./static/images/header-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.show-modal-enter-active,
.show-modal-leave-active {
  transition: opacity 0.5s;
}
.show-modal-enter,
.show-modal-leave-to {
  opacity: 0;
}
</style>
