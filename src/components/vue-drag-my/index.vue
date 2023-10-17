<template>
  <div
    class="drag-contaner"
    ref="drag"
    tabindex="0"
    :style="dragStyle"
    @mousedown.prevent.stop="mousedownHandler"
    @mouseup.prevent.stop="mouseupHandler"
    @blur="blurHandler"
    @focus="focusHandler"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      // 是否正在拖动
      dragging: false,
      // 是否显示边框
      showBorder: false,
    };
  },
  props: {},
  computed: {
    dragStyle() {
      let styleObj = {};
      if (this.dragging) {
        styleObj.border = "1px solid green";
      }
      return styleObj;
    },
  },
  methods: {
    mousedownHandler(e) {
      this.dragging = true;
      const drag = this.$refs.drag;
      const x = e.clientX;
      const y = e.clientY;
      const originLeft = drag.offsetLeft;
      const originTop = drag.offsetTop;
      //   使元素跟随鼠标移动
      document.addEventListener(
        "mousemove",
        (event) => {
          if (this.dragging) {
            const movex = event.clientX - x + originLeft;
            const movey = event.clientY - y + originTop;
            drag.style.left = movex + "px";
            drag.style.top = movey + "px";
          }
        },
        { passive: true }
      );
    },
    mouseupHandler() {
      this.dragging = false;
    },
    blurHandler(event) {
      console.log("====================================");
      console.log("blur........");
      console.log("====================================");
    },
    focusHandler(event) {
      console.log("====================================");
      console.log("focus.......");
      console.log("====================================");
    },
  },
};
</script>

<style scoped>
.drag-contaner {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>