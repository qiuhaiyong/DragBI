<template>
  <div id="app">
    <!-- 工具栏栏 -->
    <WidgetList
      :widgetList="widgetList"
      @onMousedown="onMousedown"
    ></WidgetList>
    <!--  画板-->
    <div
      class="panel"
      @dragover="(event) => event.preventDefault()"
      @drop="onDrop"
    >
      <!-- <VueDrageResize :isActive="true" :w="200" :h="200">
        <div class="test-box"></div>
      </VueDrageResize> -->
      <VueDragMy
        class="box"
        v-for="box in boxList"
        :key="box.id"
        :style="`transform: translate(${box.x}px, ${box.y}px);`"
        @click.native="clickHandler"
      ></VueDragMy>
      <!-- <ToolBar v-if="showToolBar"></ToolBar> -->
      <ToolBar></ToolBar>
    </div>
  </div>
</template>

<script>
import WidgetList from "@/components/wdiget-list";
import VueDrageResize from "@/components/vue-drag-resize";
import VueDragMy from "@/components/vue-drag-my";
import ToolBar from "@/components/ToolBar";
// tool配置
import { widgetList } from "@/constant/config";
// vuex
import { mapState } from "vuex";
let positionX = 0;
let positionY = 0;
import { nanoid } from "nanoid";
export default {
  name: "App",
  components: {
    WidgetList,
    VueDrageResize,
    VueDragMy,
    ToolBar,
  },
  data() {
    return {
      boxList: [],
      widgetList,
    };
  },
  computed: {
    ...mapState("toolbar", ["showToolBar"]),
  },
  methods: {
    onDrop(e) {
      this.boxList.push({
        id: nanoid(),
        x: e.offsetX - positionX,
        y: e.offsetY - positionY,
      });
    },
    onMousedown(e, widget) {
      positionX = e.offsetX;
      positionY = e.offsetY;
    },
    clickHandler() {
      // 显示toolbar
      if (!this.showToolBar) {
        this.$store.dispatch("toolbar/showtoolbar", null);
      }
      // 同步widget信息到vuex
      let toolBarInfo = {
        w: 100,
        h: 100,
        left: 200,
        top: 200,
      };
      this.$store.dispatch("toolbar/updatetoolbarinfo", toolBarInfo);
    },
  },
  mounted() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.box {
  position: absolute;
  width: 100px;
  height: 100px;
}

.test-box {
  width: 100%;
  height: 100%;
  background-color: yellow;
}
</style>
