<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const props = defineProps<{
  items: NavigationMenuItem[] | NavigationMenuItem[][];
}>();

const active = defineModel<string | null>("active", {
  default: null,
  required: false,
  set(v) {
    return String(v);
  },
});

const _items = [
  [
    {
      label: "Dashboard",
      icon: "i-lucide-home",
      description: "Your dashboard",
      to: "/dashboard",
      exact: true,
    },
    {
      label: "Device",
      icon: "i-lucide-smartphone",
      children: [
        {
          label: "Connected Device",
          icon: "i-lucide-tablet-smartphone",
          description: "List of connected device",
          to: "/dashboard/device",
        },
      ],
    },
    {
      label: "WhatsApp",
      icon: "i-simple-icons-whatsapp",
      children: [
        {
          label: "Bot",
          icon: "i-lucide-bot-message-square",
          description: "Your whatsapp bot",
          to: "/dashboard/bot",
        },
      ],
    },
    {
      label: "Guide",
      icon: "i-lucide-book-open",
      children: [
        {
          label: "Introduction",
          description: "Fully styled and customizable components for Nuxt.",
          icon: "i-lucide-house",
        },
        {
          label: "Installation",
          description:
            "Learn how to install and configure Nuxt UI in your application.",
          icon: "i-lucide-cloud-download",
        },
        {
          label: "Icons",
          icon: "i-lucide-smile",
          description:
            "You have nothing to do, @nuxt/icon will handle it automatically.",
        },
        {
          label: "Colors",
          icon: "i-lucide-swatch-book",
          description:
            "Choose a primary and a neutral color from your Tailwind CSS theme.",
        },
        {
          label: "Theme",
          icon: "i-lucide-cog",
          description:
            "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
        },
      ],
    },
    {
      label: "Composables",
      icon: "i-lucide-database",
      children: [
        {
          label: "defineShortcuts",
          icon: "i-lucide-file-text",
          description: "Define shortcuts for your application.",
        },
        {
          label: "useModal",
          icon: "i-lucide-file-text",
          description: "Display a modal within your application.",
        },
        {
          label: "useSlideover",
          icon: "i-lucide-file-text",
          description: "Display a slideover within your application.",
        },
        {
          label: "useToast",
          icon: "i-lucide-file-text",
          description: "Display a toast within your application.",
        },
      ],
    },
    {
      label: "Components",
      icon: "i-lucide-box",
      children: [
        {
          label: "Link",
          icon: "i-lucide-file-text",
          description: "Use NuxtLink with superpowers.",
        },
        {
          label: "Modal",
          icon: "i-lucide-file-text",
          description: "Display a modal within your application.",
        },
        {
          label: "NavigationMenu",
          icon: "i-lucide-file-text",
          description: "Display a list of links.",
        },
        {
          label: "Pagination",
          icon: "i-lucide-file-text",
          description: "Display a list of pages.",
        },
        {
          label: "Popover",
          icon: "i-lucide-file-text",
          description:
            "Display a non-modal dialog that floats around a trigger element.",
        },
        {
          label: "Progress",
          icon: "i-lucide-file-text",
          description: "Show a horizontal bar to indicate task progression.",
        },
      ],
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      badge: "3.8k",
      target: "_blank",
    },
    {
      label: "Help",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ],
];

const useNavigationList = (
  navigationList: NavigationMenuItem[] | NavigationMenuItem[][]
) => {
  const route = useRoute();
  const checkIsActive = (path: string, exact = false) => {
    if (exact) {
      return route.path === path;
    }
    return route.path.startsWith(path);
  };

  const exec = (item: any): any | any[] => {
    if (item.to) {
      return {
        ...item,
        active: checkIsActive(item.to, item.exact),
        // defaultOpen: checkIsActive(item.to, item.exact),
      };
    }

    if (item.children) {
      return {
        ...item,
        // active: item.children.some((child: any) => checkIsActive(child.to)),
        defaultOpen: item.children.some((child: any) =>
          checkIsActive(child.to)
        ),
      };
    }

    if (Array.isArray(item)) {
      return item.map(exec);
    }

    return item;
  };

  const list = ref(navigationList.map(exec));

  watch(
    () => route.path,
    () => {
      list.value = navigationList.map(exec);
    }
  );

  return list;
};

const navigationList = useNavigationList(
  props.items as NavigationMenuItem[] | NavigationMenuItem[][]
);
</script>

<template>
  <UNavigationMenu
    v-model="active"
    orientation="vertical"
    :items="navigationList"
    class="data-[orientation=vertical]:w-64"
  />
</template>
