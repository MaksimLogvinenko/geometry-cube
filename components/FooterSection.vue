<template>
  <footer class="section-footer">
    <div class="container">
      <div class="footer">
        <div class="footer-info">
          <h6>Адрес: <br />{{ address }}</h6>
          <h6>
            Телефон: <br /><a href="tel:380953078885">{{ phone }}</a>
          </h6>
          <h6>
            Email: <br /><a href="mailto:info@brainlab.com.ua">{{ email }}</a>
          </h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    address: "Украина, г. Киев, ул. Евгения Сверстюка, 19",
    phone: "38 (095) 307 888 5",
    email: "info@brainlab.com.ua",
  }),
};
</script>

<style lang="scss" scoped>
.section-footer {
  background-color: $color-secondary;
  padding: 9rem 0;
}
.footer-info {
    h6 {
        font-size: 1.4rem;
        font-weight: $font-regular;
        color: $color-white;
        padding: 1rem 0;
        a {
            color: $color-white;
            text-decoration: none;
        }
    }
}
</style>