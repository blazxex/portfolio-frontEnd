<template>
  <TitleTopic title="Activity" link="https://www.example.com"></TitleTopic>
  <img
    class="rounded-xl object-cover shadow-xl shadow-black/40 h-40 w-fit"
    alt=""
    src="../assets/test.png"
  />
</template>

<script>
import TitleTopic from "./TitleTopic.vue";
import ImageFlip from "./ImageFlip.vue";

export default {
  components: {
    ImageFlip,
    TitleTopic,
  },
};
</script>
