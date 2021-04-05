<template>
  <div>
    <div class="modal-question-bg">
      <div class="modal-question">
        <i class="fas fa-times" @click="closeModalQuestion"></i>
        <h3 class="modal-question__title">Задать вопрос</h3>
        <ValidationObserver v-slot="{ invalid }">
          <form class="modal-question__form" @submit.prevent="onSubmin">
            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|alpha_spaces|min:2"
            >
              <input
                class="modal-question__input"
                type="text"
                v-model="name"
                placeholder="Ваше имя"
              />
              <p class="form__error">{{ errors[0] }}</p>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <input
                type="email"
                placeholder="Ваш email"
                v-model="email"
                class="modal-question__input"
              />
              <p class="form__error">{{ errors[0] }}</p>
            </ValidationProvider>
            <textarea
              class="modal-question__input"
              cols="30"
              rows="5"
              placeholder="Задайте нам вопрос"
              required
            ></textarea>
            <button
              type="submit"
              class="btn btn--secondary btn--big"
              :disabled="invalid"
            >
              Отправить
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required, email, alpha_spaces, min } from "vee-validate/dist/rules";
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
extend("min", {
  ...min,
  message: "Введите больше 2 символов",
});

export default {
  data: () => ({
    name: "",
    email: "",
    value: null,
    errors: null,
  }),
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    closeModalQuestion() {
      this.$emit("closeModalQuestion");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-question-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(48, 79, 90, 0.7);
}
.modal-question {
  position: absolute;
  padding: 6rem;
  width: 30%;
  border-radius: $border-radius-default;
  box-shadow: $shadow-default;
  background-color: $color-white;
  font-family: $font-roboto;
  top: 10%;
  z-index: 9999;
  @include respond (tab-land) {
    width: 60%;
  }
  @include respond (phone) {
    width: 80%;
    top: 15%;
  }
  .modal-question__form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      border: none;

      padding: 3rem 0;
      outline: none;
      margin-top: 1rem;
      font-size: 2.4rem;
      width: 100%;
      font-family: $font-roboto;
    }
    .modal-question__input {
      border-bottom: 2px solid $color-dark-blue;
    }
    ::placeholder {
      font-size: 2.4rem;
    }
    textarea {
      padding: 1.5rem 0;
      margin-bottom: 1rem;
      position: relative;
      ::placeholder {
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  i {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2.4rem;
    cursor: pointer;
    padding: 2rem;
  }
}
.modal-question__title {
  font-size: 4.2rem;
  font-weight: $font-black;
  text-align: center;
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