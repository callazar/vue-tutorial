<script>

</script>

<template>
  <div>

    <RouterLink :to="{name: 'home'}" class="nav-link">HOME</RouterLink>
    <RouterLink :to="{name: 'about'}" class="nav-link">ABOUT</RouterLink>

    <!-- render routerview -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.nav-link {
  margin-left: 10px;
}
</style>
