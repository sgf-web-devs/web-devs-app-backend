<template>
  <div class="content">
    <dropdown :items="prizes" @change="updatePrize($event)">Pick a Prize</dropdown>

    <button class="button" @click="emitPicked()">Pick Winner</button>
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
      },

      emitPicked() {
        if (this.prize === '') {
          alert('Select a prize first');
          return;
        }

        this.$emit('picked', this.prize);
      }
    },

    components: {
      Dropdown,
    }
  }
</script>

<style lang="stylus" scoped>

</style>
