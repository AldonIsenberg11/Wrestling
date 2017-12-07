<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-item is-tab">
        <input class="input" type="text" placeholder="Your username">
      </div>
      <div class="nav-item is-tab">
        <input class="input" type="password" placeholder="Your password">
      </div>
      <div class="nav-item is-tab">
        <button class="button is-primary">Login</button>
      </div>
      <div class="nav-item is-tab">
        <router-link class="nav-item is-tab" to="/sign-up">
          <button class="button is-secondary">Sign-Up</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>
