<template>
  <div class="container">
    <b-card-group deck class="justify-content-between">
      <ShopItem v-for="item in items" :key="item.id" v-bind:item="item"/>
    </b-card-group>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ShopContainer",
  computed: {
    ...mapGetters(["items"])
  }
}
</script>

<style>

</style>
