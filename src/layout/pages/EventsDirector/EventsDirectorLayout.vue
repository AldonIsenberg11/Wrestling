<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
        <Slider-Menu></Slider-Menu>
      </div>
      <div class="column">
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
