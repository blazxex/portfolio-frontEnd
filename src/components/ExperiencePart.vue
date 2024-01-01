<template>
  <div class="grid grid-cols-9 gap-4">
    <div class="col-span-1">
      <TitleTopic
        class="-rotate-90 w-40"
        title="Experience"
        link="#"
      ></TitleTopic>
    </div>
    <div class="col-span-4">
      <ImageFlip src="../assets/CU-logo.png"></ImageFlip>
    </div>
    <div class="col-span-4">
      <ImageFlip src="../assets/CU-logo.png"></ImageFlip>
    </div>
  </div>
</template>

<script>
import ImageFlip from "./ImageFlip.vue";
import TitleTopic from "@/components/TitleTopic.vue";

export default {
  components: {
    ImageFlip,
    TitleTopic,
  },
};
</script>

<style></style>
