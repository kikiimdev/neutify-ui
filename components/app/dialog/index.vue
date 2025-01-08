<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const props = defineProps<{
  title?: string;
  description?: string;
}>();

const slots = defineSlots<{
  default: any;
  body: any;
  footer: any;
}>();

const open = defineModel<boolean>("open");
</script>

<template>
  <UModal
    v-if="breakpoints.isGreaterOrEqual('sm')"
    v-model:open="open"
    :title="title"
    :description="description"
  >
    <slot />

    <template v-if="$slots.body" #body>
      <slot name="body" />
    </template>

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </UModal>

  <UDrawer v-else v-model:open="open" :title="title" :description="description">
    <slot />

    <template v-if="$slots.body" #body>
      <slot name="body" />
    </template>

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </UDrawer>
</template>
