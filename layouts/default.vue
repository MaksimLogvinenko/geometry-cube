<template>
  <div>
    <navbar />
    <Nuxt />
    <footer-section />
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>


