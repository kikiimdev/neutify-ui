<script setup lang="ts">
const props = defineProps<{
  headline?: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="flex justify-center relative p-6 py-0 z-[1] rounded-t-[calc(var(--ui-radius)*1.5)]"
  >
    <div class="relative border-b border-[var(--ui-border)] py-8 w-full">
      <div
        v-if="headline"
        class="mb-2.5 text-sm font-semibold text-[var(--ui-primary)] flex items-center gap-1.5"
      >
        {{ headline }}
      </div>
      <div
        class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
      >
        <h1
          class="text-3xl sm:text-4xl text-pretty font-bold text-[var(--ui-text-highlighted)]"
        >
          {{ title }}
        </h1>

        <div v-if="$slots.default" class="flex flex-wrap items-center gap-1.5">
          <slot />
        </div>
      </div>
      <p
        v-if="description"
        class="text-lg text-pretty text-[var(--ui-text-muted)] mt-4"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
