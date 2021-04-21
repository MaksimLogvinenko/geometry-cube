<template>
  <section class="section-contact-form">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
      </div>
      <div class="contact-form">
        <ValidationObserver v-slot="{ invalid }">
          <form class="contact-form__wrapper">
            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|alpha_spaces"
              class="contact-form__group"
            >
              <p class="form__error">{{ errors[0] }}</p>
              <input type="text" v-model="name" placeholder="Введите имя" />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|email"
              class="contact-form__group"
            >
              <p class="form__error">{{ errors[0] }}</p>
              <input type="email" v-model="email" placeholder="Введите Email" />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|email"
              class="contact-form__group"
            >
              <p class="form__error">{{ errors[0] }}</p>
              <input type="email" v-model="email" placeholder="Введите Email" />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|digits:12"
              class="contact-form__group"
            >
              <p class="form__error">{{ errors[0] }}</p>
              <input type="text" v-model="numbers" />
            </ValidationProvider>

            <div class="contact-form__group contact-form__textarea">
              <textarea required name="" id="" cols="30" rows="7"></textarea>
            </div>
          <button
            :disabled="invalid"
            type="submit"
            class="btn btn--big btn--secondary btn--full"
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
import {
  required,
  email,
  alpha_spaces,
  digits,
} from "vee-validate/dist/rules";
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