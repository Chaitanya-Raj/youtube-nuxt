<template>
  <header class="flex px-5 py-3 text-white bg-[#202020]">
    <div class="flex w-80 py-2">
      <div class="cursor-pointer">
        <burger-menu-icon />
      </div>
      <div class="cursor-pointer">
        <youtube-icon />
      </div>
    </div>

    <div class="flex-1 items-center justify-center">
      <form class="flex relative text-gray-600">
        <input
          class="flex-1 h-10 bg-[#181818] p-2 border border-[#3a3a3a]"
          type="search"
          name="search"
          placeholder="Search"
        />

        <button
          type="submit"
          class="w-16 flex items-center justify-center bg-[#323232]"
        >
          <search-icon />
        </button>

        <button
          class="ml-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#131212]"
        >
          <voice-icon />
        </button>
      </form>
    </div>

    <div class="w-80 flex items-center space-x-6 justify-end">
      <div class="cursor-pointer">
        <create-video-icon />
      </div>
      <div class="cursor-pointer">
        <notification-icon />
      </div>
      <div class="cursor-pointer">
        <profile-image />
      </div>
    </div>
  </header>
</template>

<style>
.fill-white {
  fill: white;
}
</style>
