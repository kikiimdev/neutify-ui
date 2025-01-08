<script setup lang="ts"></script>

<template>
  <div class="">
    <div
      class="dark:hidden absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div
      class="flex flex-col gap-6 h-screen justify-center items-center max-w-md mx-auto px-8 xl:px-0"
    >
      <h1 class="text-2xl font-bold">WhatsApp</h1>
      <UCard class="w-full">
        <slot />
      </UCard>
    </div>
  </div>
</template>
