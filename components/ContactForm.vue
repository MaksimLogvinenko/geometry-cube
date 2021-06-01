<template>
  <section class="section-contact-form">
    <div class="container">
      <div class="page-wrap">
        <h1 class="page-title">Bring Joy To Those Around You</h1>
      </div>
      <form class="contact__form" @submit.prevent="checkForm">
        <div class="contact__wrapper">
          <div
            class="contact-group"
            :class="{ 'contact-group--error': $v.contact.name.$error }"
          >
            <input
              class="contact__input"
              v-model.trim="$v.contact.name.$model"
              placeholder="Введите имя"
            />
            <div
              class="contact__error"
              v-if="$v.contact.name.$dirty && !$v.contact.name.required"
            >
              Это поле обязательное
            </div>
          </div>

          <div
            class="contact-group"
            :class="{ 'contact-group--error': $v.contact.email.$error }"
          >
            <input
              class="contact__input"
              v-model.trim="$v.contact.email.$model"
              placeholder="Введите Email"
            />
            <div
              class="contact__error"
              v-if="$v.contact.email.$dirty && !$v.contact.email.required"
            >
              Это поле обязательное
            </div>
            <div
              class="contact__error"
              v-if="$v.contact.email.$dirty && !$v.contact.email.email"
            >
              Введите коректный Email
            </div>
          </div>

          <div
            class="contact-group"
            :class="{ 'contact-group--error': $v.contact.phone.$error }"
          >
            <input
              class="contact__input"
              v-model.trim="$v.contact.phone.$model"
            />
            <div
              class="contact__error"
              v-if="$v.contact.phone.$dirty && !$v.contact.phone.required"
            >
              Это поле обязательное
            </div>
            <div
              class="contact__error-right"
              v-if="$v.contact.phone.$dirty && !$v.contact.phone.numeric"
            >
              Введите коректный номер
            </div>
            <div
              class="contact__error"
              v-if="$v.contact.phone.$dirty && !$v.contact.phone.minLength"
            >
              Введите полный номер
            </div>
            <div class="contact__error" v-if="!$v.contact.phone.maxLength">
              Не больше 12 символов
            </div>
          </div>

          <select
            v-model="contact.material"
            class="contact-group contact-group__select"
          >
            <option
              class="contact__input"
              v-for="(material, index) in contact.materials"
              :key="index"
              :value="material.value"
            >
              {{ material.name }}
            </option>
          </select>

          <div
            class="contact-group contact-group__textarea"
            :class="{ 'contact-group--error': $v.contact.phone.$error }"
          >
            <textarea
              class="contact__input"
              v-model.trim="contact.text"
              required
              placeholder="Введите сообщение"
              rows="5"
            />
          </div>
        </div>
        <button type="submit" class="btn btn--secondary btn--big btn--full">
          Отправить
        </button>
      </form>
    </div>
  </section>
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
    contact: {
      name: "",
      email: "",
      phone: 380,
      text: "",
      material: "Kitchen",
      materials: [
        { name: "Кухня", value: "Kitchen" },
        { name: "Кровать", value: "Bad" },
        { name: "Телевизор", value: "TV" },
      ],
    },
  }),
  validations: {
    contact: {
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
    checkForm() {
      if (this.$v.contact.$invalid) {
        this.$v.contact.$touch();
        return
      }
      const formData = {
        name: this.contact.name,
        email: this.contact.email,
        phone: this.contact.phone,
        material: this.contact.material,
        text: this.contact.text
      }
      console.log(formData);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.section-contact-form {
  position: relative;
  background-color: $color-dark-gray;
}
.contact__wrapper {
  display: flex;
  flex-wrap: wrap;
}
.contact-group {
  width: 48.2%;
  margin: 1rem;
  position: relative;
  @include respond(tab-port) {
    width: 100%;
  }
  &__textarea {
    width: 100%;
  }
  &__select {
    width: 48.2%;
    padding: 2rem;
    outline: none;
    border: 1px solid $color-dark-gray;
    border-radius: $border-radius-default;
    @include respond(tab-port) {
      width: 100%;
    }
  }
}
.contact__input {
  width: 100%;
  padding: 2rem;
  outline: none;
  border: 1px solid $color-dark-gray;
  border-radius: $border-radius-default;
}
.contact__textarea {
  width: 100%;
}
.contact__error {
  color: red;
  font-size: 1.4rem;
  position: absolute;
  bottom: -2rem;
  left: 0.5rem;
  &-right {
    color: red;
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }
}
</style>