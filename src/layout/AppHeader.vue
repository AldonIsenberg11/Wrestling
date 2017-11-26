<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="nav-item is-tab" to="/aboutMe">About Me</router-link>
      <router-link class="nav-item is-tab" to="/education">Education</router-link>
      <router-link class="nav-item is-tab" to="/workExperience">Work Experience</router-link>
      <router-link class="nav-item is-tab" to="/wrestling">Wrestling</router-link>
      <router-link class="nav-item is-tab" to="/hobbies">Hobbies</router-link>
      <router-link class="nav-item is-tab" to="/blog">Blog</router-link>
      <router-link class="nav-item is-tab" :to="{ name: 'blog', params: { id: 'transportation' } }">Transportation</router-link>
      <router-link class="nav-item is-tab" to="/login">Login</router-link>
    </div>
  </nav>
</template>
