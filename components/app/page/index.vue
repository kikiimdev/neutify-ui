<script setup lang="ts"></script>

<template>
  <div class="flex max-h-screen">
    <slot v-if="$slots.left" name="left" />

    <main class="flex flex-1 flex-col min-h-screen overflow-auto">
      <slot />
    </main>

    <slot v-if="$slots.right" name="right" />
  </div>
</template>
