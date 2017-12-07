<template>
  <div id="app">

    <nav class="navbar is-light">
      <div class="navbar-brand navbar-item">
        SGF Web Devs
      </div>
      <router-link class="navbar-item" to="/">Welcome</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
