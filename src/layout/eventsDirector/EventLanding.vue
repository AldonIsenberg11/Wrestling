<template>
  <div class="container">
    <div class="columns">
      <div class="column is-1">
        <Slider-Menu></Slider-Menu>
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
import SliderMenu from './SliderMenu.vue'
import EventsHome from './EventsHome.vue'
export default {
  components: {
    'Slider-Menu': SliderMenu,
    'Events-Home': EventsHome
  }
}
</script>
