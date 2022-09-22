<template>
  <div class="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
    <div class="relative">
      <!-- Image Video -->
      <img :src="video.thumbnail" class="w-full" />

      <p
        class="absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py"
      >
        {{ video.duration }}
      </p>
    </div>

    <div class="flex flex-row gap-3 mt-3">
      <!-- Profile Picture -->
      <a href="#">
        <img :src="video.avatar" class="rounded-full max-h-10 max-w-10" />
      </a>

      <!-- Description -->
      <div clas="flex flex-col">
        <div>
          <span class="text-base font-medium text-gray-100">{{
            video.title
          }}</span>
        </div>
        <div class="text-sm text-gray-400 hover:text-gray-100">
          {{ video.channel }}
        </div>
        <p class="text-sm text-gray-400">
          {{ video.views }} • {{ video.time }}
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
};
</script>

<style></style>
