<template>
  <div class="widget-list">
    <div
      class="wdiget"
      draggable="true"
      v-for="widget in widgetList"
      :key="widget.id"
      @mousedown="(e) => $emit('onMousedown', e, widget)"
    >
      {{ widget.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    widgetList: {
      type: Array,
    },
  },
};
</script>

<style>
</style>