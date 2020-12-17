<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <nuxt-link class="navbar-brand" to="/">
        Nuxt Shop
      </nuxt-link>
      <b-navbar-toggle target="nav-collapse"/>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <nuxt-link class="nav-link" active-class="active" exact to="/">
            Home
          </nuxt-link>
          <nuxt-link class="nav-link" active-class="active" to="/About">
            About
          </nuxt-link>
          <div class="basketIcon ml-2" @click="openBasket">
            <b-avatar  :badge="itemsCount ? itemsCount.toString():null" badge-top variant="primary" badge-variant="warning"
                      icon="cart4"/>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "VHeader",
  methods: {
    ...mapMutations("shopBasket", ["openBasket"])
  },
  computed: {
    ...mapGetters("shopBasket", ["itemsCount"])
  }
}
</script>

<style scoped>
.basketIcon{
  cursor:pointer;
}

</style>
