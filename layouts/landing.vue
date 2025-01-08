<script setup lang="ts"></script>

<template>
  <div>
    <nav
      class="flex items-center gap-4 h-[88px] mx-auto max-w-6xl px-6 xl:px-0"
    >
      <!-- <h1 class="text-2xl font-bold">WhatsApp</h1> -->

      <UButton
        class="ml-auto"
        variant="outline"
        color="neutral"
        icon="i-simple-icons-github"
      />
    </nav>

    <div
      class="dark:hidden absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    />

    <slot />
  </div>
</template>
