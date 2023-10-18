<template>
  <div class="charts-container" ref="container"></div>
</template>

<script>
export default {
  props: ["option"],
  data() {
    return {
      myChart: {},
    };
  },
  watch: {},
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(this.$refs.container);
    const resizeObserver = new ResizeObserver((entries) => {
      myChart.resize();
    });
    resizeObserver.observe(this.$refs.container);
    let option = this.option;
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>

<style>
.charts-container {
  width: 100%;
  height: 100%;
}
</style>