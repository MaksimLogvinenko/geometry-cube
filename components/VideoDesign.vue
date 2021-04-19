<template>
  <section class="section-video">
    <div class="container">
      <div class="video">
        <div class="video-text">
          <h2 class="video__title">Bring Joy To</h2>
          <p class="video__description">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров
          </p>
        </div>
        <div class="video__link">
          <LazyYoutube :src="youtubeVideoLink" max-width="720px" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { LazyYoutube, LazyVimeo } from "vue-lazytube";
export default {
  data: () => ({
    youtubeVideoLink: "https://youtu.be/dYJIqzihDqQ",
  }),
  components: {
    LazyYoutube,
    LazyVimeo,
  },
};
</script>

<style lang="scss" scoped>
.video {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include respond (tab-port) {
    flex-direction: column;
  }
}
.video-text,
.video__link {
  flex: 0 1 50%;
  padding: 1rem;
  @include respond (tab-port) {
    width: 100%;
  }
}
.video__title {
  font-size: 3.6rem;
  font-weight: $font-bold;
  margin-bottom: 1rem;
}
.video__description {
  font-size: 1.6rem;
  font-weight: $font-light;
}
</style>