<template>
  <section class="section-contact-form">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
        <p class="page-subtitle">
          We can help you to change lives and truly make an impact on others
        </p>
      </div>
      <div class="contact-form">
        <div class="contact-form__title">Bring Joy To Those Around You</div>
        <ValidationObserver v-slot="{ invalid }">
          <form class="contact-form__wrapper">
            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|alpha_spaces"
              class="contact-form__group"
            >
              <label for="">Last Name <span>*</span></label>
              <p class="form__error">{{ errors[0] }}</p>
              <input type="text" v-model="name" />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|email"
              class="contact-form__group"
            >
              <label for="">Email <span>*</span></label>
              <p class="form__error">{{ errors[0] }}</p>
              <input type="email" v-model="email" />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|digits:12"
              class="contact-form__group"
            >
              <label for="">Phone <span>*</span></label>
              <p class="form__error">{{ errors[0] }}</p>
              <input type="text" v-model="numbers" />
            </ValidationProvider>

            <div class="contact-form__group">
              <label for="">Name <span>*</span></label>
              <textarea required name="" id="" cols="30" rows="5"></textarea>
            </div>
            <button
              :disabled="invalid"
              type="submit"
              class="btn btn--big btn--secondary"
            >
              Send message
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
import { extend } from "vee-validate";
import { required, email, alpha_spaces, digits } from "vee-validate/dist/rules";
import { ValidationProvider, ValidationObserver } from "vee-validate";

extend("email", {
  ...email,
  message: "Введите коректный email",
});
extend("required", {
  ...required,
  message: "Это поле обязательное",
});
extend("alpha_spaces", {
  ...alpha_spaces,
  message: "Введите коректное имя",
});
extend("digits", {
  ...digits,
  message: "Введите коректный номер телефона",
});

export default {
  data: () => ({
    name: "",
    email: "",
    value: null,
    errors: null,
    numbers: "380",
  }),
  components: {
    ValidationProvider,
    ValidationObserver,
  },
};
</script>

<style lang="scss" scoped>
.section-contact-form {
  position: relative;
  background-color: $color-dark-gray;
}
.contact-form {
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.7) 65%,
      transparent 65%
    ),
    url("@/static/images/form-bg.jpg");
  padding: 4rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: $border-radius-default;
  box-shadow: $shadow-default;
}
.contact-form__title {
  font-size: 3.6rem;
  font-weight: $font-semibold;
  margin-bottom: 1.4rem;
}
.contact-form__group {
  display: flex;
  flex-direction: column;
  label {
    color: $color-light-blue;
    font-size: 1.8rem;
    font-weight: $font-light;
    margin-bottom: 0.7rem;
    span {
        color: red;
    }
  }
  input,
  textarea {
    width: 50rem;
    padding: 2rem;
    font-size: 1.8rem;
    outline: none;
    border: none;
    border-radius: $border-radius-default;
    box-shadow: $shadow-default;
    margin-bottom: 1.4rem;
    @include respond (phone) {
        width: 100%;
    }
  }
}
.form__error {
  color: red;
  font-size: 1.4rem;
}
button:disabled {
  opacity: 0.5;
  transform: scale(1);
  &:hover {
    background-color: lighten($color-light-blue, 0%);
    cursor: not-allowed;
  }
}
</style>