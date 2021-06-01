<template>
  <section class="section-tabs">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
        <p class="page-subtitle">
          We can help you to change lives and truly make an impact on others
        </p>
      </div>
      <div class="filters">
        <span
          class="filter"
          :class="{ active: currentFilter === 'ALL' }"
          @click="setFilter('ALL')"
          >Все</span
        >
        <span
          class="filter"
          :class="{ active: currentFilter === 'ART' }"
          @click="setFilter('ART')"
          >Кухня</span
        >
        <span
          class="filter"
          :class="{ active: currentFilter === 'WORKSHOPS' }"
          @click="setFilter('WORKSHOPS')"
          >Шкафы</span
        >
        <span
          class="filter"
          :class="{ active: currentFilter === 'DOODLES' }"
          @click="setFilter('DOODLES')"
          >Мебель</span
        >
      </div>

      <transition-group class="projects" name="projects">
        <div
          class="project"
          :key="project.title"
          v-for="project in projects"
          v-show="currentFilter === project.category || currentFilter === 'ALL'"
        >
          <div class="project-image-wrapper">
            <img class="project-image" :src="project.image" />
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    currentFilter: "ART",
    projects: [
      {
        title: "Artwork",
        image: "https://picsum.photos/g/200?image=122",
        category: "ART",
      },
      {
        title: "Charcoal",
        image: "https://picsum.photos/g/200?image=116",
        category: "ART",
      },
      {
        title: "Sketching",
        image: "https://picsum.photos/g/200?image=121",
        category: "DOODLES",
      },
      {
        title: "Acrillic",
        image: "https://picsum.photos/g/200?image=133",
        category: "WORKSHOPS",
      },
      {
        title: "Pencil",
        image: "https://picsum.photos/g/200?image=134",
        category: "DOODLES",
      },
      {
        title: "Pen",
        image: "https://picsum.photos/g/200?image=115",
        category: "ART",
      },
      {
        title: "Inking",
        image: "https://picsum.photos/g/200",
        category: "WORKSHOPS",
      },
    ],
  }),
  methods: {
    setFilter: function (filter) {
      this.currentFilter = filter;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-tabs {
  background-color: #F2F3F6;
}
.filter {
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
  font-size: 2.4rem;
  font-weight: $font-bold;
}
.filters {
  text-align: center;
}

.filter.active {
  background-color: $color-light-blue;
  color: $color-white;
}
.projects {
  margin-bottom: 5rem;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
}

.projects-enter {
  transform: scale(0.5) translateY(-8rem);
  opacity: 0;
}

.projects-leave-to {
  transform: translateY(3rem);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}
.project {
  transition: all 0.3s ease-in-out;
  box-shadow: $shadow-default;
  border-radius: $border-radius-default;
  flex: 0 0 32.4%;
  max-width: 32.4%;
  margin: 0 0.5rem 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30rem;
  @include respond(tab-port) {
    flex: 0 0 48.5%;
    max-width: 48.5%;
  }
  @include respond(phone) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  border-radius: $border-radius-default;
  overflow: hidden;
}
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>