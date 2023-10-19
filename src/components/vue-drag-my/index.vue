<template>
  <div
    class="drag-contaner"
    ref="drag"
    tabindex="0"
    :style="dragStyle"
    @mousedown.prevent.stop="mousedownHandler"
    @mouseup.prevent.stop="mouseupHandler"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否正在拖动
      dragging: false,
      // 是否显示边框
      showBorder: false,
      x: 0,
      y: 0,
      originLeft: 0,
      originTop: 0,
    };
  },
  props: ["charts"],
  computed: {
    dragStyle() {
      let styleObj = {
        left: this.charts.x + "px",
        top: this.charts.y + "px",
        zIndex: this.charts.zindex,
      };
      if (this.dragging) {
        styleObj.border = "1px solid green";
      }
      return styleObj;
    },
  },
  methods: {
    // 鼠标左键长按元素时，给元素绑定mousemove事件跟随鼠标拖动
    mousedownHandler(e) {
      this.dragging = true;
      const drag = this.$refs.drag;
      // 鼠标落下的位置
      this.x = e.clientX;
      this.y = e.clientY;
      // 组件原始的left top值
      this.originLeft = drag.offsetLeft;
      this.originTop = drag.offsetTop;
      //   使元素跟随鼠标移动s
      document.addEventListener("mousemove", this.move, { passive: true });
    },
    // 鼠标左键放开时的事件
    mouseupHandler() {
      this.dragging = false;
      // 清除绑定的mousemove事件
      document.removeEventListener("mousemove", this.move);
    },
    // 元素移动的方法
    move(event) {
      const drag = this.$refs.drag;
      if (this.dragging) {
        // 计算移动的 top left值
        const movex = event.clientX - this.x + this.originLeft;
        const movey = event.clientY - this.y + this.originTop;
        drag.style.left = movex + "px";
        drag.style.top = movey + "px";
        // 封装移动后的charts信息
        const charts = {
          id: this.charts.id,
          x: movex,
          y: movey,
          w: drag.offsetWidth - 1,
          h: drag.offsetHeight - 1,
          option: this.charts.option,
          zindex: this.charts.zindex,
        };
        this.$emit("dragging", charts);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.drag-contaner {
  position: absolute;
  width: 200px;
  height: 200px;
}
</style>