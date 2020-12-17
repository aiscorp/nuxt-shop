<template>
  <b-card style="" class="my-2">
    <b-row>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/id/183/150/120/?image=25" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-text>
          <h5>{{ item.price }}</h5>
          <p>{{ item['car_make'] }} {{ item['car_model'] }}</p>
          <b-button @click="deleteItem(item)" variant="warning">Удалить</b-button>
        </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["item"],
  data() {
    return {
      color: "red"
    };
  },
  methods: {
    ...mapMutations("shopBasket", ["addItem", "deleteItem"])
  }
};
</script>

<style scoped>


</style>
