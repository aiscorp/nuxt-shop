<template>
  <div>
    <b-card
      :title="item.price"
      img-src="https://picsum.photos/id/183/300/150/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 15rem;"
      class="mb-3"
    >
      <b-card-text>
        <h4>{{ item['car_make'] }}</h4>
        <h5>{{ item['car_model'] }}</h5>
        <h7>Год выпуска: {{ item['car_year'] }}</h7>
      </b-card-text>

      <template class="cardFooter1" #footer>
        <b-button-group class="w-100">
          <b-button variant="success">Add to cart</b-button>
          <nuxt-link class="btn btn-info" :to="`/item/${item.id}`">
            View details
          </nuxt-link>
        </b-button-group>
      </template>

    </b-card>

  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props: ['item']
}
</script>

<style scoped>
.card-footer {
  margin: 0px;
  padding: 0px;
}

</style>
