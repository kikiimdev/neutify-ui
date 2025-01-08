<script setup lang="ts">
import { default as QRCodeStyling, type Options } from "qr-code-styling";

const props = withDefaults(
  defineProps<{
    data: string;
    image?: string;
    height?: number;
    width?: number;
  }>(),
  {
    height: 300,
    width: 300,
  }
);

const computedProps = computed(() => props);

const { $qrCodeStyling } = useNuxtApp();
const qrCode = ref<HTMLElement | null>(null);

// Default options
const options: Options = {
  width: props.width,
  height: props.height,
  type: "svg",
  data: props.data,
  image: props.image,
  dotsOptions: {
    color: "#000",
    type: "rounded",
  },
  backgroundOptions: {
    color: "#fff",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
};

const qrCodeStyling: QRCodeStyling = $qrCodeStyling(options);

onMounted(() => {
  // Append QR code to DOM element
  qrCodeStyling.append(qrCode.value!);
  // Add viewbox to make it resizable
  // @ts-ignore
  qrCode.value!.firstChild!.setAttribute("viewBox", "0 0 300 300");
});

watch(
  computedProps,
  // @ts-ignore
  (newValue: string) => {
    // Update QR code data when props change
    options.data = newValue;
    qrCodeStyling.update(options);
    // Add viewbox to make it resizable
    // @ts-ignore
    qrCode.value!.firstChild!.setAttribute("viewBox", "0 0 300 300");
  }
);
</script>

<template>
  <div :key="data" ref="qrCode"></div>
</template>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>
