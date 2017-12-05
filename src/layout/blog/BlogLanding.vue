<template>
  <div class="container">
    <Blog-Home></Blog-Home>
    <Blog-Navigation></Blog-Navigation>
  </div>
</template>

<script>
import BlogHome from './BlogHome.vue'
import BlogNavigation from './BlogNavigation.ve'
export default {
  components: {
    'Blog-Home': BlogHome,
    'blog-Navigation': BlogNavigation
  }
}
</script>
