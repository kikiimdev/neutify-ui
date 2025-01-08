<script setup lang="ts">
// const { user, logout } = useAuth();
</script>

<template>
  <AppPage>
    <template #left>
      <slot name="navigation-menu" />
      <!-- <AppPageAside class="p-6 pb-0 border-r border-[var(--ui-border)]">
        <AppNavigationMenu />
        <div class="mt-auto mb-6">
          <UButton
            color="neutral"
            @click="logout()"
            trailing-icon="i-lucide-log-out"
          >
            Logout
          </UButton>
        </div>
      </AppPageAside> -->
    </template>

    <slot />
  </AppPage>
</template>
