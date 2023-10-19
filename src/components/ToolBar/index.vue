<template>
  <el-tabs type="border-card" class="tab-card">
    <el-tab-pane label="配置" :width="100">
      <el-row :gutter="10">
        <!-- width setting-->
        <el-col :span="6">
          <label for="">
            width:
            <el-input-number
              v-model="w"
              @change="handleChange"
              label="描述文字"
              :size="'small'"
            >
            </el-input-number>
          </label>
        </el-col>
        <!-- height setting-->
        <el-col :span="6" :push="6">
          <label for="">
            heigth:
            <el-input-number
              v-model="h"
              @change="handleChange"
              label="描述文字"
              :size="'small'"
            >
            </el-input-number>
          </label>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <!-- left setting-->
        <el-col :span="6">
          <label for="">
            left:
            <el-input-number
              v-model="x"
              @change="handleChange"
              label="描述文字"
              :size="'small'"
            >
            </el-input-number>
          </label>
        </el-col>
        <!-- top setting-->
        <el-col :span="6" :push="6">
          <label for="">
            top:
            <el-input-number
              v-model="y"
              @change="handleChange"
              label="描述文字"
              :size="'small'"
            >
            </el-input-number>
          </label>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="10"> </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="数据">
      <MonacoEditor
        @onCodeChange="excelTextChanged"
        types="text"
        :codes="textarea"
      >
      </MonacoEditor>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapState } from "vuex";
import MonacoEditor from "@/components/MonacoEditor";
export default {
  components: {
    MonacoEditor,
  },
  data() {
    return {
      w: 0,
      h: 0,
      x: 0,
      y: 0,
      textarea: "",
    };
  },
  watch: {
    w: {
      handler(a, b) {
        this.handleChange();
      },
    },
    h: {
      handler(a, b) {
        this.handleChange();
      },
    },
    x: {
      handler(a, b) {
        this.handleChange();
      },
    },
    y: {
      handler(a, b) {
        this.handleChange();
      },
    },
    toolBarInfo: {
      deep: true,
      handler(newval, oldval) {
        this.x = newval.x;
        this.y = newval.y;
      },
    },
  },
  computed: {
    ...mapState("toolbar", ["toolBarInfo"]),
  },
  methods: {
    handleChange() {
      let charts = this.toolBarInfo;
      charts.w = this.w;
      charts.h = this.h;
      charts.x = this.x;
      charts.y = this.y;
      this.$store.dispatch("charts/updateCharts", charts);
    },
    excelTextChanged(text) {
      console.log("text", text);
      this.textarea = text;
    },
  },
  mounted() {
    this.w = this.toolBarInfo.w;
    this.h = this.toolBarInfo.h;
    this.x = this.toolBarInfo.x;
    this.y = this.toolBarInfo.y;
  },
};
</script>

<style scoped>
.tool-bar-container {
  position: absolute;
  right: 0;
  background-color: rgb(198, 201, 195);
}
input {
  width: 50px;
}

input:focus {
  border: 1px solid #409eff;
  outline: none;
}
.tab-card {
  position: absolute;
  right: 0;
  width: 300px;
  height: 100vh;
}
.tab {
  width: 100px;
}
</style>