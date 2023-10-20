<script>

</script>

<template>
  <div class="bg-slate-800 h-10 text-[#42b883] pt-2 flex flex-row justify-end">

    <RouterLink :to="{name: 'home'}" class="mr-5">HOME</RouterLink>
    <RouterLink :to="{name: 'about'}" class="mr-5">ABOUT</RouterLink>

  </div>
  <div class="container m-3">
    <!-- render routerview -->
    <RouterView></RouterView> 
  </div>
</template>

<style scoped>

</style>
