<template>
  <div>
    <NuxtChild :key="$route.params.id"/>
  </div>
</template>

<script>
export default {
  name: "item",
  middleware: 'checkItem'
}
</script>

<style scoped>

</style>
