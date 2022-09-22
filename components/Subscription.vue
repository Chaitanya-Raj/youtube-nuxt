<template>
  <a
    href="#"
    class="flex items-center py-2 pl-6 text-sm font-normal transition duration-75 hover:bg-[#363636] text-white group"
  >
    <img class="w-6 h-6 rounded-full" :src="channel.avatar" alt="user photo" />
    <span class="ml-6 flex-1">{{ channel.name }}</span>
    <span class="mr-1.5 rounded-full h-1 w-1 bg-sky-500"></span>
  </a>
</template>

<script>
export default {
  props: {
    channel: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
