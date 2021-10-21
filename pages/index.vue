<template>
  <main>
    <ThePlayer color="green" id="1" />
    <ThePlayer color="yellow" id="2" :rotate="true" />
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
   main {
     height: 100vh;
     display: flex;
   }
</style>
