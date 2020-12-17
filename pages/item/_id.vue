<template>
  <div class="container">
    <b-card
      style="max-width: 50rem;"
      class="overflow-hidden mx-auto mt-3"
    >
      <b-row>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/id/183/450/350/?image=25" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-text>
            <h4>Цена: {{ element.price }}</h4>
            <h5>Марка авто: {{ element['car_make'] }}</h5>
            <h5>Модель авто: {{ element['car_model'] }}</h5>
            <h5>Год выпуска: {{ element['car_year'] }}</h5>
            <p>Описание: {{ element.description }}</p>
          </b-card-text>
        </b-col>
      </b-row>
      <template class="cardFooter1" #footer>
        <b-button-group class="w-100">
          <b-button variant="success">Add to cart</b-button>
          <nuxt-link class="btn btn-info" to="/">
            Вернуться в корзину
          </nuxt-link>
        </b-button-group>
      </template>
    </b-card>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "id",
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters(['getItemById', 'getFirstItem']),
    element: function () {
      return this.id ? this.getItemById(this.id) : this.getFirstItem
    }
  }
}
</script>

<style scoped>
.card-footer {
  margin: 0px;
  padding: 0px;
}
</style>
