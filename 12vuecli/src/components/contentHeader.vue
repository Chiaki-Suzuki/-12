<template>
  <header :id="id">
    <Nav></Nav>
    <div class="bg-slider">
      <div class="h1center">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  name: 'contentHeader',
  components: {
    Nav
  },
  props: ['id', 'title']
}
</script>

<style>
</style>
