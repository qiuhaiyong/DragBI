<template>
  <div class="tool-bar-container">
    <div class="tool-bar-row">
      <div class="tool-bar-col">
        <label for="width">width:</label><input id="width" type="text" />
      </div>
      <div class="tool-bar-col">
        <label for="heigth">heigth:</label><input id="heigth" type="text" />
      </div>
    </div>
    <div class="tool-bar-row">
      <div class="tool-bar-col">
        <label for="left">left:</label><input id="left" type="text" />
      </div>
      <div class="tool-bar-col">
        <label for="top">top:</label><input id="top" type="text" />
      </div>
    </div>
    <div class="tool-bar-row">
      <div class="tool-bar-col">
        <button>save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    console.log("====================================");
    console.log(this);
    console.log("====================================");
    return {};
  },
  computed: {
    ...mapState("toolbar", ["toolBarInfo"]),
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
</style>