<template>
  <div class="bg-gray-950 h-screen">
    <div class="grid grid-rows-10 grid-cols-12 gap-4 h-full">
      <!-- 01 with nested grid for additional row -->

      <div class="row-span-10 col-span-3 h-dvh">
        <div class="flex flex-col h-full space-y-4">
          <div class="flex-1 space-y-2">
            <!-- <div class="h-1/5 bg-red-300">01 - Part 1</div>
            <div class="h-4/5 bg-red-400">01 - Part 2</div> -->
            <HornorAward />
          </div>
          <div class="flex-1 space-y-2">
            <div class="h-2/3">
              <SlideShow src="../assets/test.png" />
            </div>
            <div class="h-1/3"><SocialPart /></div>
          </div>
          <!-- New Row Inside 01 -->
        </div>
      </div>
      <!-- 02 with nested grid for additional row -->
      <div class="row-span-1 col-span-9">
        <div class="flex flex-row space-x-2">
          <TitleTopic
            title="Welcome To My Portfolio"
            class="text-white w-4/6 h"
          />
          <TitleTopic title="Blog" class="text-black w-1/6" />
          <TitleTopic title="Light" class="text-white w-1/6" />
        </div>
      </div>

      <div class="row-span-2 col-span-9 flex">
        <ImageFlip
          src="src/assets/CP-logo.png"
          text="Lorem"
          link="https://eyequila.com"
          class="flex-1 w-1/5"
        />
        <ImageFlip
          src="src/assets/CU-logo.png"
          text="Lorem"
          class="flex-1 w-1/5"
        />
        <TitleTopic
          title="Passionate Computer Engineering student at
        Chulalongkorn University. Co-founder & CTO at The BANDM Co. LTD. Driving
        innovation with eEyequila AI-generated eye exercises for better
        vision. Tech enthusiast, entrepreneur, and visionary."
          class="flex-1 w-3/5 self-center"
        />
      </div>

      <div class="row-span-4 col-span-9">
        <div class="grid grid-cols-4 h-full">
          <div class="col-span-3">
            <NameCard />
          </div>
          <div class="flex">
            <ImageFlip
              src="src/assets/CP-logo.png"
              text="Lorem"
              link="https://eyequila.com"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <div class="row-span-3 col-span-9 bg-green-400">
        <div class="grid grid-cols-9 h-full">
          <div class="col-span-1 flex">
            <div class="transform rotate-90 m-auto">
              <TitleTopic title="Experience" />
            </div>
          </div>
          <div class="col-span-4 flex">
            <ImageFlip
              src="src/assets/CP-logo.png"
              text="Lorem"
              link="https://eyequila.com"
              class="flex-grow"
            />
          </div>
          <div class="col-span-4 flex">
            <ImageFlip
              src="src/assets/CP-logo.png"
              text="Lorem"
              link="https://eyequila.com"
              class="flex-grow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import ImageFlip from "@/components/ImageFlip.vue";
import TitleTopic from "@/components/TitleTopic.vue";
import AwardImageBS from "@/components/AwardImageBS.vue";
import AwardImageSB from "@/components/AwardImageSB.vue";
import ActivityPart from "@/components/ActivityPart.vue";
import HornorAward from "@/components/HornorAward.vue";
import SocialPart from "@/components/SocialPart.vue";
import NameCard from "@/components/NameCard.vue";
import ExperiencePart from "@/components/ExperiencePart.vue";
import SlideShow from "@/components/ActivityPart.vue";

export default {
  components: {
    ImageFlip,
    TitleTopic,
    AwardImageBS,
    AwardImageSB,
    ActivityPart,
    HornorAward,
    SocialPart,
    NameCard,
    ExperiencePart,
    SlideShow,
  },
};
</script>

<style></style>
