<template>
  <div>
    <tabs-cards />
    <contact-form />
  </div>
</template>

<script>
import TabsCards from "~/components/TabsCards";
import ContactForm from '~/components/ContactForm';
export default {
  components: { TabsCards, ContactForm,},
};
</script>