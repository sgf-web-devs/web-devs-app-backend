<template>
  <div class="dropdown" :class="{ 'is-active': isActive }">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="isActive = !isActive">
        <span v-if="selected === ''"><slot></slot></span>
        <span v-else>{{ selected }}</span>
        <span class="icon is-small">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item" v-for="item in items" @click="selectItem(item)">{{ item }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['items'],
  data() {
    return {
      isActive: false,
      selected: ''
    }
  },
  methods: {
    selectItem(item) {
      this.selected = item;
      this.isActive = false;
      this.$emit('change', item);
    }
  }
}
</script>

<style scoped>

</style>
