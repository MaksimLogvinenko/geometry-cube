<template>
  <section class="section-contact-form">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
      </div>
      <div class="contact-form">
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
  }),
  components: {
  },
};
</script>

<style lang="scss" scoped>
.section-contact-form {
  position: relative;
  background-color: $color-dark-gray;
}
.contact-form__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.contact-form__group {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 48%;
  margin: 0 1rem 1.2rem 0;
  @include respond (phone) {
    width: 100%;
  }
  span {
    color: red;
  }
  input,
  textarea,
  select {
    padding: 2rem;
    font-size: 1.8rem;
    outline: none;
    border: none;
    border-radius: $border-radius-default;
    box-shadow: $shadow-default;
    margin-bottom: 1.4rem;
  }
}
.form__error {
  position: absolute;
  color: red;
  font-size: 1.4rem;
  top: -2rem;
  left: 0;
}
button:disabled {
  opacity: 0.5;
  transform: scale(1);
  &:hover {
    background-color: lighten($color-light-blue, 0%);
    cursor: not-allowed;
  }
}
.contact-form__textarea {
  width: 100%;
}
::placeholder {
  font-weight: $font-semibold;
  color: $color-secondary;
  opacity: 0.4;
}
</style>