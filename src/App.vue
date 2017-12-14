<template>
  <div id="app">
    <nav class="navbar is-light">
      <div class="container">
        <div class="navbar-brand navbar-item">
          SGF Web Devs
        </div>
        <router-link class="navbar-item" to="/">Welcome</router-link>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="stylus">
  nav
    margin-bottom 10px
</style>5
