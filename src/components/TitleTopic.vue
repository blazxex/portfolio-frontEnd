<template>
  <a
    :href="link"
    class="titleTopic bg-gray-200 bg-opacity-20 hover:bg-opacity-100 transition-opacity duration-300 ease-in-out rounded-lg flex justify-center items-center cursor-pointer p-2 my-2"
  >
    <h1 class="text-white p-2">{{ title }}</h1>
  </a>
</template>

<script>
export default {
  name: "RoundTitle",
  props: {
    title: String,
    link: String,
  },
};
</script>

<style scoped>
.hover\:bg-opacity-100:hover {
  background-opacity: 100%;
}
.titleTopic {
  transition: transform 0.3s ease; /* Smooth transition for scaling effect */
}

.titleTopic:hover {
  transform: scale(
    1.01
  ); /* Scales the element to 102% of its original size on hover */
}
</style>
