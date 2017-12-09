<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <Events-Navigation></Events-Navigation>
      </div>
      <div class="column">
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
