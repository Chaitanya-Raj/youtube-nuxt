<template>
  <div class="lg:col-span-6 xl:col-span-4 2xl:col-span-3 col-span-12">
    <div class="relative">
      <!-- Image Video -->
      <img :src="video.thumbnail" class="w-full" />

      <p
        class="right-2 bottom-2 py absolute px-1 text-xs text-gray-100 bg-gray-900"
      >
        {{ video.duration }}
      </p>
    </div>

    <div class="flex flex-row gap-3 mt-3">
      <!-- Profile Picture -->
      <a href="#">
        <img :src="video.avatar" class="max-h-10 max-w-10 rounded-full" />
      </a>

      <!-- Description -->
      <div clas="flex flex-col">
        <div>
          <span class="text-base font-medium text-gray-100">{{
            video.title
          }}</span>
        </div>
        <div class="hover:text-gray-100 text-sm text-gray-400">
          {{ video.channel }}
        </div>
        <p class="text-sm text-gray-400">
          {{ views }} views • {{ video.time }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: { type: Object, default: () => {} },
  },
  computed: {
    views() {
      const formatter = Intl.NumberFormat("en-IN", { notation: "compact" });
      return formatter.format(this.video.views);
    },
  },
};
</script>

<style></style>
