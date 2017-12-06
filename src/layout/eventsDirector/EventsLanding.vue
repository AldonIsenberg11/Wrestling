<template>
  <div class="container">
    <div class="columns">
      <div class="column is-1">
        <Events-Navigation></Events-Navigation>
      </div>
      <div class="column is-2">
      </div>
      <div class="column is-3">
        <Events-Home></Events-Home>
      </div>
    </div>
  </div>
</template>

<script>
import EventsNavigation from './EventsNavigation.vue'
import EventsHome from './EventsHome.vue'
export default {
  components: {
    'Events-Navigation': EventsNavigation,
    'Events-Home': EventsHome
  }
}
</script>
