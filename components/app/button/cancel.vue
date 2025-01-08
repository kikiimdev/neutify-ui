<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

interface AppButtonCancelProps extends /* @vue-ignore */ ButtonProps {}

const props = withDefaults(defineProps<AppButtonCancelProps>(), {
  color: "neutral",
  variant: "outline",
  label: "Cancel",
});

const propsWithDefaults: AppButtonCancelProps = {
  color: "neutral",
  variant: "outline",
  label: "Cancel",
  ...(props as any),
};
</script>

<template>
  <UButton v-bind="propsWithDefaults" @click="$emit('click')" />
</template>
