<template>
  <div class="group h-full w-full [perspective:1000px] p-2">
    <div
      class="h-full relative rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
    >
      <div class="absolute inset-0 h-full">
        <img
          class="rounded-xl object-cover shadow-xl shadow-black/40 h-full w-full"
          :src="src"
          alt=""
        />
      </div>
      <div
        class="absolute inset-0 rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <h1 class="text-3xl font-bold">{{ text }}</h1>
          <p class="text-lg">Lorem ipsum</p>
          <p class="text-base">Lorem ipsum</p>
          <a
            :href="link"
            class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    text: String,
    link: String,
  },
};
</script>
