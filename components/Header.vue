<template>
  <header
    class="flex px-6 py-2 h-14 text-white bg-[#202020] md:justify-between"
  >
    <div class="w-80 flex py-2">
      <div class="md:block hidden cursor-pointer">
        <burger-menu-icon />
      </div>
      <div class="cursor-pointer">
        <youtube-icon />
      </div>
    </div>

    <div
      class="flex-grow-0 flex-shrink flex md:block md:w-[728px] items-center justify-center ml-auto md:ml-0"
    >
      <form class="relative flex text-gray-600">
        <input
          class="flex-1 h-10 bg-[#181818] p-2 border border-[#3a3a3a] px-2 md:block hidden"
          type="search"
          name="search"
          placeholder="Search"
        />

        <button
          type="submit"
          class="md:w-16 flex items-center justify-center md:bg-[#323232]"
        >
          <search-icon />
        </button>

        <button
          class="ml-2 w-10 h-10 items-center justify-center rounded-full bg-[#131212] md:flex hidden"
        >
          <voice-icon />
        </button>
      </form>
    </div>

    <div class="md:w-80 flex items-center justify-end space-x-6">
      <div class="md:block hidden cursor-pointer">
        <create-video-icon />
      </div>
      <div class="md:block hidden cursor-pointer">
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
