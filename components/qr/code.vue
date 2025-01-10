<script setup lang="ts">
import { renderSVG } from "uqr";

const props = withDefaults(
  defineProps<{
    height?: string | number;
    width?: string | number;
  }>(),
  {
    height: "240px",
    width: "240px",
  }
);

const modelValue = defineModel<string>({
  required: false,
});

const svgQr = ref<string | null>(
  modelValue.value ? renderSVG(modelValue.value) : null
);

watch(
  modelValue,
  () => {
    if (modelValue.value) {
      svgQr.value = renderSVG(modelValue.value);
    } else {
      svgQr.value = null;
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div :style="{ width, height }">
    <Suspense>
      <template #fallback>
        <USkeleton width="100%" height="100%" />
      </template>

      <div v-html="svgQr" />
    </Suspense>
  </div>
</template>
