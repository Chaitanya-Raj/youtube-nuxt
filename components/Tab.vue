<template>
  <div
    class="flex items-center xl:pl-6 text-sm font-normal text-white hover:bg-[#363636] xl:flex-row flex-col py-2 xl:mb-0 mb-1"
  >
    <span :is="icon"></span>
    <span class="xl:ml-6 text-[10px] xl:text-base xl:mt-0 mt-1">{{
      name
    }}</span>
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
    mobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
