<template>
  <div class="container">
    <Team-Navigation></Team-Navigation>
    <Team-Home></Team-Home>
  </div>
</template>

<script>
import TeamNavigation from './TeamNavigation.vue'
import TeamHome from './TeamHome.vue'
export default {
  components: {
    'Team-Navigation': TeamNavigation,
    'Team-Home': TeamHome
  }
}
</script>
