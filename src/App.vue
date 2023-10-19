<template>
  <div id="app">
    <!-- 工具栏栏 -->
    <WidgetList :widgetList="widgetList" @onMousedown="onMousedown">
    </WidgetList>
    <!--  画板-->
    <div
      class="panel"
      @dragover="(event) => event.preventDefault()"
      @drop.prevent.stop="onDrop"
    >
      <!-- <VueDrageResize :isActive="true" :w="200" :h="200">
        <div class="test-charts"></div>
      </VueDrageResize> -->
      <VueDragMy
        class="charts"
        v-for="charts in chartsList"
        :key="charts.id"
        :charts="charts"
        :style="`width: ${charts.w}px; height: ${charts.h}px`"
        @mousedown.native.prevent.stop="clickHandler(charts)"
        @dragging="onDragging"
      >
        <DataCharts :option="charts.option"></DataCharts>
      </VueDragMy>
      <ToolBar v-if="showToolBar"></ToolBar>
      <!-- <ToolBar></ToolBar> -->
    </div>
  </div>
</template>

<script>
import WidgetList from "@/components/wdiget-list";
import VueDrageResize from "@/components/vue-drag-resize";
import VueDragMy from "@/components/vue-drag-my";
import ToolBar from "@/components/ToolBar";
import DataCharts from "@/components/DataCharts";
// tool配置
import { widgetList } from "@/constant/config";
// vuex
import { mapState } from "vuex";
let positionX = 0;
let positionY = 0;
let option = {};
let zindex = 1;
import { nanoid } from "nanoid";
export default {
  name: "App",
  components: {
    WidgetList,
    VueDrageResize,
    VueDragMy,
    ToolBar,
    DataCharts,
  },
  data() {
    return {
      widgetList,
    };
  },
  computed: {
    ...mapState("toolbar", ["showToolBar"]),
    ...mapState("charts", ["chartsList"]),
  },
  methods: {
    onDrop(e) {
      this.$store.dispatch("charts/addCharts", {
        id: nanoid(),
        x: e.offsetX - positionX,
        y: e.offsetY - positionY,
        w: 200,
        h: 200,
        zindex: zindex++,
        option: option,
      });
    },
    onMousedown(e, widget) {
      positionX = e.offsetX;
      positionY = e.offsetY;
      option = widget.option;
    },
    clickHandler(charts) {
      // 显示toolbar
      if (!this.showToolBar) {
        this.$store.dispatch("toolbar/showtoolbar", null);
        // 同步charts信息到vuex;
        this.$store.dispatch("toolbar/updatetoolbarinfo", charts);
      }
    },
    onDragging(charts) {
      // 改变toolbar中的数据
      this.$store.dispatch("toolbar/updatetoolbarinfo", charts);
    },
  },
  mounted() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-charts;
}
#app {
  display: flex;
}

.widget-list {
  width: 200px;
  background-color: #fefefe;
}

.panel {
  position: relative;
  width: 100vw;
  height: 100vh;
  flex: 1;
  background-color: #f6f6f6f6;
}

.wdiget {
  width: 100px;
  height: 100px;
  border: 1px solid grey;
  line-height: 100px;
  text-align: center;
  margin: 50px;
}

.charts {
  position: absolute;
  width: 100px;
  height: 100px;
}

.box {
  width: 100%;
  height: 100%;
}
</style>
