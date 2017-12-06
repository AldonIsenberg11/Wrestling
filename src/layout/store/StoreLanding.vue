<template>
  <div class="container">
    <Store-Navigation></Store-Navigation>
    <Store-Home></Store-Home>
  </div>
</template>

<script>
import StoreNavigation from './StoreNavigation.vue'
import StoreHome from './StoreHome.vue'
export default {
  components: {
    'StoreNavigation': StoreNavigation,
    'Store-Home': StoreHome
  }
}
</script>
