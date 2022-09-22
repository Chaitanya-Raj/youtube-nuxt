<template>
  <div class="flex flex-col h-screen overflow-y-hidden">
    <Header />
    <div class="flex flex-row w-full h-full">
      <Sidebar />
      <div class="flex flex-col w-full h-full">
        <Tagbar />
        <Home />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}
</style>
