<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
          <Team-Navigation></Team-Navigation>
      </div>
      <div class="column">
        <Team-Home></Team-Home>
      </div>
    </div>
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
