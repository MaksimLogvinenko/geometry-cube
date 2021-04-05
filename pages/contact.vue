<template>
  <div>
    <contact-cards />
    <contact-form />
  </div>
</template>

<script>
import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";
export default {
  components: { ContactCards, ContactForm },
};
</script>