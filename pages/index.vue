<template>
  <div>
    <div class="header">
      <navbar />
      <div class="header-content">
        <div class="container">
          <h2 class="header-subtitle">Make A Difference</h2>
          <h1 class="header-title">
            Let’s Create A <br />
            Better Tomorrow
          </h1>
          <a href="#" class="btn btn--primary btn--big">Download Now </a>
        </div>
      </div>
    </div>
    <advantages />
    <gallery-card />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Advantages from "@/components/Advantages";
import GalleryCard from "@/components/GalleryCard";
export default {
  components: { Navbar, Advantages, GalleryCard },
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
</style>
