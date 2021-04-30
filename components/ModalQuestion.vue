<template>
  <div>
    <transition name="fade">
      <div class="modal-question-bg" @click="closeModalQuestion"></div>
    </transition>
    <transition name="fade">
      <div class="modal-question">
        <i class="fas fa-times" @click="closeModalQuestion"></i>
        <h3 class="modal-question__title">Задать вопрос</h3>

        <form action="" @submit.prevent="checkForm">
          <div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.form.name.$error }"
            >
              <input
                class="form__input"
                v-model.trim="$v.form.name.$model"
                placeholder="Введите имя"
              />
            </div>
            <div class="form__error" v-if="$v.form.name.$dirty && !$v.form.name.required">
              Это поле обязательное
            </div>
          </div>

          <div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.form.email.$error }"
            >
              <input
                class="form__input"
                v-model.trim="$v.form.email.$model"
                placeholder="Введите Email"
              />
            </div>
            <div class="form__error" v-if="$v.form.email.$dirty && !$v.form.email.required">
              Это поле обязательное
            </div>
            <div class="form__error" v-if="$v.form.email.$dirty && !$v.form.email.email">
              Введите коректный Email
            </div>
          </div>

          <div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.form.phone.$error }"
            >
              <input
                class="form__input"
                v-model.trim="$v.form.phone.$model"
                placeholder="Введите Email"
              />
            </div>
            <div class="form__error" v-if="$v.form.phone.$dirty && !$v.form.phone.required">
              Это поле обязательное
            </div>
            <div class="form__error" v-if="$v.form.phone.$dirty && !$v.form.phone.numeric">
              Введите коректный номер
            </div>
            <div class="form__error" v-if="$v.form.phone.$dirty && !$v.form.phone.minLength">
              Введите полный номер
            </div>
            <div class="form__error" v-if="!$v.form.phone.maxLength">
              Не больше 12 символов
            </div>
          </div>

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.phone.$error }"
          >
            <textarea
              class="form__input"
              v-model.trim="form.text"
              required
              placeholder="Введите Email"
              rows="5"
            />
          </div>
          <button type="submit" class="btn btn--secondary btn--big btn--full">
            Отправить
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  email,
  numeric,
} from "vuelidate/lib/validators";
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      phone: 380,
      text: "",
    },
  }),
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        maxLength: maxLength(12),
        minLength: minLength(12),
        numeric,
      },
    },
  },
  methods: {
    closeModalQuestion() {
      this.$emit("closeModalQuestion");
    },
    checkForm() {
      this.$v.form.$touch()
      if(!this.$v.form.$error) {
        console.log("Валидация усп");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-question-bg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: rgba(48, 79, 90, 0.7);
}
.modal-question {
  position: absolute;
  padding: 6rem;
  left: 50%;
  width: 40%;
  transform: translate(-50%, -50%);
  border-radius: $border-radius-default;
  box-shadow: $shadow-default;
  background-color: $color-white;
  font-family: $font-roboto;
  top: 50%;
  z-index: 9999;
  @include respond(tab-land) {
    width: 60%;
  }
  @include respond(phone) {
    width: 90%;
    top: 50%;
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
.form__input {
  outline: none;
  padding: 2rem 2rem 2rem 0;
  border: none;
  margin-bottom: 1rem;
  border-bottom: 1px solid $color-dark-blue;
  width: 100%;
  font-family: $font-roboto;
  font-size: 1.8rem;
}
.modal-question__title {
  font-size: 4.2rem;
  font-weight: $font-black;
  text-align: center;
  margin-bottom: 2rem;
}
.form__error {
  color: red;
  font-size: 1.4rem;
}
textarea {
  margin-bottom: 1rem;
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