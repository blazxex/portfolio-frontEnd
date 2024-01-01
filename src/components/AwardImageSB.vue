<template>
  <div class="grid-container">
    <ImageFlip
      :src="src2"
      :text="text2"
      :link="link2"
      class="col-span-5"
    ></ImageFlip>
    <ImageFlip
      :src="src1"
      :text="text1"
      :link="link1"
      class="col-span-7"
    ></ImageFlip>
  </div>
</template>

<script>
import ImageFlip from "./ImageFlip.vue";
export default {
  name: "AwardImageBS",
  props: {
    src1: String,
    link1: String,
    text1: String,
    src2: String,
    link2: String,
    text2: String,
  },
  components: {
    ImageFlip,
  },
};
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 200px; /* or any other value */
  gap: 4px;
}
</style>
