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
      const data = params?.at(0);
      const { count, date } = data?.value || { count: 0, date: "" };
      const isPlurals = count > 1;
      return `${date}<br/><strong>${count}</strong> message${
        isPlurals ? "s" : ""
      }`;
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
