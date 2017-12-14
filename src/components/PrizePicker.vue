<template>
  <div class="content">
    <h1>Pick a Prize</h1>
    <dropdown :items="prizes" @change="updatePrize($event)">hello</dropdown>
  </div>
</template>

<script>
  import { prizes} from "../data/prizes";
  import Dropdown from './Dropdown';


  export default {
    data() {
      return {
        prizes,
        prize: ''
      }
    },

    methods: {
      updatePrize(item) {
        this.prize = item;
      }
    },

    components: {
      Dropdown,
    }
  }
</script>

<style lang="stylus" scoped>

</style>
