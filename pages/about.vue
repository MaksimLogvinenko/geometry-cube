<template>
  <div>
    <tabs-cards />
    <video-design />
    <contact-form />
  </div>
</template>

<script>
import TabsCards from "~/components/TabsCards";
import ContactForm from '~/components/ContactForm';
import VideoDesign from '~/components/VideoDesign';
export default {
  components: { TabsCards, ContactForm, VideoDesign},
};
</script>