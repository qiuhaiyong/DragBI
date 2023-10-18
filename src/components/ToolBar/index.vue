<template>
  <div class="tool-bar-container">
    <div class="tool-bar-row">
      <div class="tool-bar-col btn">setting</div>
      <div class="tool-bar-col btn">data</div>
    </div>
    <div class="tool-bar-row">
      <div class="tool-bar-col">
        <label for="width">width:</label
        ><input
          id="width"
          type="text"
          :value="toolBarInfo.w"
          ref="w"
          @blur="save"
        />
      </div>
      <div class="tool-bar-col">
        <label for="heigth">heigth:</label
        ><input
          id="heigth"
          type="text"
          :value="toolBarInfo.h"
          ref="h"
          @blur="save"
        />
      </div>
    </div>
    <div class="tool-bar-row">
      <div class="tool-bar-col">
        <label for="left">left:</label
        ><input
          id="left"
          type="text"
          :value="toolBarInfo.x"
          ref="x"
          @blur="save"
        />
      </div>
      <div class="tool-bar-col">
        <label for="top">top:</label
        ><input
          id="top"
          type="text"
          :value="toolBarInfo.y"
          ref="y"
          @blur="save"
        />
      </div>
    </div>
    <div class="tool-bar-row">
      <div class="tool-bar-col">
        <button @click="save">save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("toolbar", ["toolBarInfo"]),
  },
  methods: {
    save() {
      let charts = this.toolBarInfo;
      charts.w = this.$refs.w.value;
      charts.h = this.$refs.h.value;
      charts.x = this.$refs.x.value;
      charts.y = this.$refs.y.value;
      this.$store.dispatch("charts/updateCharts", charts);
      console.log("====================================");
      console.log("setp1", charts);
      console.log("====================================");
    },
  },
};
</script>

<style scoped>
.tool-bar-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: rgb(198, 201, 195);
}

.tool-bar-row {
  display: flex;
  justify-content: flex-start;
}

.tool-bar-row input {
  width: 50px;
  border: 0;
  margin: 15px;
}

.tool-bar-row input:focus {
  border: 0;
}
.btn {
  flex: 1;
  width: 100px;
  height: 40px;
}
</style>