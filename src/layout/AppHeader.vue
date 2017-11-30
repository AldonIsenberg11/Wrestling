<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="nav-item is-tab" to="/teamview">TeamView</router-link>
      <router-link class="nav-item is-tab" to="/events">Events Director</router-link>
      <router-link class="nav-item is-tab" to="/blog">Blog</router-link>
      <router-link class="nav-item is-tab" to="/sign-up">Sign Up</router-link>
      <router-link class="nav-item is-tab" to="/new-match">New Match</router-link>
    </div>
  </nav>
</template>
