<template>
  <div
    class="flex items-center py-2 pl-6 text-sm font-normal text-white hover:bg-[#363636]"
    :class="name === 'Home' ? 'bg-[#363636] font-medium' : ''"
  >
    <span :is="icon"></span>
    <span class="ml-6">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
