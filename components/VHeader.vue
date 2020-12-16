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
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "VHeader"
}
</script>

<style scoped>


</style>
