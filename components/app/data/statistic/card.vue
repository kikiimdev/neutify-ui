<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: string;
  icon?: string;
  description?: string;
}>();
</script>

<template>
  <UCard>
    <div class="flex items-center">
      <h1 class="flex-1 font-semibold text-sm">{{ label }}</h1>
      <div v-if="icon" class="ml-auto">
        <Icon :name="icon" class="text-[var(--ui-text-dimmed)]" />
      </div>
    </div>

    <div class="mt-2">
      <h3 class="text-3xl font-bold text-pretty">{{ value }}</h3>
      <p v-if="description" class="mt-1 text-lg text-[var(--ui-text-muted)]">
        {{ description }}
      </p>
    </div>
  </UCard>
</template>
