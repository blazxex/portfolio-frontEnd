<template>
  <div class="bg-black p-4 rounded-lg flex justify-center space-x-4">
    <a
      href="https://www.linkedin.com/in/ratchanon-thanatsang-157228127/"
      target="_blank"
      class="flex flex-col items-center flex-1"
    >
      <div
        class="bg-gray-800 p-2 rounded-lg flex-1 hover:bg-opacity-100 hover:scale-105"
      >
        <img
          src="../assets/linkedin-logo.png"
          alt="LinkedIn Logo"
          class="mx-auto"
        />
        <span class="text-white mt-2 block text-center">LinkedIn</span>
      </div>
    </a>
    <a
      href="https://github.com/blazxex"
      target="_blank"
      class="flex flex-col items-center flex-1"
    >
      <div
        class="bg-gray-800 p-2 rounded-lg flex-1 hover:bg-opacity-100 hover:scale-105"
      >
        <img
          src="../assets/github-logo.png"
          alt="GitHub Logo"
          class="mx-auto"
        />
        <span class="text-white mt-2 block text-center">GitHub</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  // component logic
};
</script>

<style>
/* You can add custom styles here if needed */
</style>
