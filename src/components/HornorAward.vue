<template>
  <div class="col-span-12 md:col-span-3">
    <TitleTopic
      title="Honors & Awards"
      link="https://www.example.com"
    ></TitleTopic>
    <AwardImageBS
      src1="src/assets/test.png"
      text1="Award 1"
      link1="https://www.example.com"
      src2="src/assets/test.png"
      text2="Award2"
      link2="https://www.example.com"
    ></AwardImageBS>
    <AwardImageSB
      src1="src/assets/test.png"
      text1="Award 1"
      link1="https://www.example.com"
      src2="src/assets/test.png"
      text2="Award2"
      link2="https://www.example.com"
    ></AwardImageSB>

    <!-- <div class="col-span-12 md:col-span-4">
      <SlideShow></SlideShow>
    </div> -->
  </div>
</template>
<script>
import ImageFlip from "@/components/ImageFlip.vue";
import TitleTopic from "@/components/TitleTopic.vue";
import AwardImageBS from "@/components/AwardImageBS.vue";
import AwardImageSB from "@/components/AwardImageSB.vue";
import SlideShow from "@/components/ActivityPart.vue";

export default {
  components: {
    ImageFlip,
    TitleTopic,
    AwardImageBS,
    AwardImageSB,
    SlideShow,
  },
};
</script>
