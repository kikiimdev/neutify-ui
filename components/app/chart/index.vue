<script setup lang="ts">
import type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
} from "echarts";

export type AppChartProps = {
  dimensions: string[];
  source: Record<string, any>[];
  xAxisName?: string;
  yAxisName?: string;
  type:
    | BarSeriesOption["type"]
    | LineSeriesOption["type"]
    | PieSeriesOption["type"];
  height?: string | number;
  width?: string | number;
};
const props = withDefaults(
  defineProps<{
    dimensions: string[];
    source: Record<string, any>[];
    xAxisName?: string;
    yAxisName?: string;
    type:
      | BarSeriesOption["type"]
      | LineSeriesOption["type"]
      | PieSeriesOption["type"];
    height?: string | number;
    width?: string | number;
  }>(),
  {
    height: "400px",
    width: "auto",
  }
);

const option = computed<ECOption>(() => ({
  dataset: {
    dimensions: props.dimensions,
    source: props.source,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: function (params: any) {
      const tar = params[1];
      return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
    },
  },
  xAxis: {
    type: "category",
    name: props.xAxisName,
  },
  yAxis: {
    type: "value",
    axisLabel: {
      show: true,
    },
    name: props.yAxisName,
  },
  series: [{ type: props.type }],
}));
</script>

<template>
  <VChart
    :option="option"
    :init-options="{
      height,
      width,
    }"
  />
</template>
