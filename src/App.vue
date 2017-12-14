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
      <router-view :attendees="attendees"></router-view>
    </main>
  </div>
</template>

<script>
  import { attendees} from './data/attendees';

  export default {
    name: 'app',

    data() {
      return {
        attendees
      }
    },

    created() {
      //TO DO: Retrieve list of attendees here
    }
  };
</script>

<style lang="stylus">
  nav
    margin-bottom 10px
</style>5
