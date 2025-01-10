<script></script>

<template>
  <NuxtLayout name="dashboard">
    <AppPageHeader
      headline="App"
      title="Dashboard"
      description="All information about your app"
    >
      <!--  -->
    </AppPageHeader>

    <AppPageBody>
      <ClientOnly>
        <QrCode model-value="https://nuxtjs.org" />
      </ClientOnly>
      <div class="min-h-[200vh]" />
    </AppPageBody>
  </NuxtLayout>
</template>

<style lang="css">
@import "tailwindcss";
@import "@nuxt/ui";
</style>
