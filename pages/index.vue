<template>
  <div>
    <transition name="show-modal">
      <modal-question
        v-if="modalQuestionOpen"
        @closeModalQuestion="closeModalQuestion"
      />
    </transition>
    <div class="header">
      <div class="header-content">
        <div class="container">
          <h2 class="header-subtitle">{{ $t('header.subtitle') }}</h2>
          <h1 class="header-title" v-html="$t('header.title')">
          </h1>
          <a
            href="#"
            @click.prevent="openModalQuestion"
            class="btn btn--primary btn--big"
            >{{ $t('header.button') }}
          </a>
        </div>
      </div>
    </div>
    <advantages />
    <gallery-card />
    <work-process />
    <video-design />
    <question />
    <reviews />
  </div>
</template>

<script>
import Advantages from "@/components/Advantages";
import GalleryCard from "@/components/GalleryCard";
import Question from "@/components/Question";
import Reviews from "@/components/Reviews";
import ModalQuestion from "@/components/ModalQuestion";
import WorkProcess from "~/components/WorkProcess";
import VideoDesign from "~/components/VideoDesign";
export default {
  data: () => ({
    modalQuestionOpen: false,
  }),
  components: {
    Advantages,
    GalleryCard,
    Question,
    Reviews,
    ModalQuestion,
    WorkProcess,
    VideoDesign,
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
